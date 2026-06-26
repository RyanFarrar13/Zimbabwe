#!/usr/bin/env bash
# Overnight task runner for Claude Code + local model.
# Each task runs as its own `claude -p` process => fresh context every time
# (this IS the "auto-clear": no state survives a process boundary).
# A failed or hung task does not block the queue; we log it and move on.

set -u
cd "$(dirname "$0")" || exit 1

TASKS="tasks.txt"
LOG="run.log"
TIMEOUT_SECS="${TIMEOUT_SECS:-1800}"   # 30 min hard cap per task; override via env
SYSTEM_PROMPT="$(cat CLAUDE.md 2>/dev/null)"

# Pick a timeout binary (macOS: `brew install coreutils` gives gtimeout).
if command -v timeout >/dev/null 2>&1; then TIMEOUT_BIN=timeout
elif command -v gtimeout >/dev/null 2>&1; then TIMEOUT_BIN=gtimeout
else echo "ERROR: need 'timeout' (brew install coreutils)"; exit 1; fi

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG"; }

run_task() {
  local task="$1"
  log "START: $task"
  "$TIMEOUT_BIN" "$TIMEOUT_SECS" claude -p "$task" \
    --verbose \
    --dangerously-skip-permissions \
    --append-system-prompt "$SYSTEM_PROMPT" \
    >>"$LOG" 2>&1
  local rc=$?
  if [ $rc -eq 124 ]; then
    log "TIMEOUT after ${TIMEOUT_SECS}s — moving on"
  elif [ $rc -ne 0 ]; then
    log "FAILED (exit $rc) — moving on"
  else
    # Checkpoint only on success, so a green build is recoverable.
    git add -A && git commit -q -m "auto: $(echo "$task" | cut -c1-60)..." \
      && log "COMMITTED" || log "nothing to commit"
  fi
  return $rc
}

[ -f "$TASKS" ] || { echo "No $TASKS in $(pwd)"; exit 1; }
log "===== RUN START (timeout=${TIMEOUT_SECS}s/task) ====="

# --- PREFLIGHT: run task 1, refuse to continue if it fails ---
# This catches setup-level failures (model unreachable, remotePatterns
# missing) that would otherwise fail ALL tasks identically overnight.
FIRST="$(grep -m1 -v '^[[:space:]]*$' "$TASKS")"
log "PREFLIGHT on first task"
if ! run_task "$FIRST"; then
  log "PREFLIGHT FAILED — stopping before the full run. Fix setup, then re-run."
  log "(Check run.log above: model reachable? remotePatterns seeded? build error?)"
  exit 1
fi
log "PREFLIGHT OK — continuing with remaining tasks"

# --- REMAINING TASKS: never let one failure stop the queue ---
tail -n +2 "$TASKS" | grep -v '^[[:space:]]*$' | while IFS= read -r task; do
  run_task "$task" || true   # swallow failure; queue continues
done

log "===== RUN COMPLETE ====="
log "Review: grep -E 'FAILED|TIMEOUT|COMMITTED' $LOG"
