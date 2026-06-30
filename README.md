# Zimbabwe Pride

A Next.js website celebrating Zimbabwe — its leadership, culture, science, sports, food, and people. Built entirely with local AI models via Claude Code's CLI.

## Local Models

This project was developed using [Ollama](https://ollama.com) to run a large language model locally:

- **Model:** `hauhaucs/qwen3.6-35b-a3b-uncensored` (Qwen 3.6, ~35B parameters)
- **Server:** Ollama (installed via Homebrew on macOS)
- **Interface:** Claude Code CLI (`claude -p`) with the project's `CLAUDE.md` as system prompt

The model runs entirely on local hardware — no API keys or cloud calls required. Each task in the build pipeline spawns a fresh `claude -p` process, so every operation starts with clean context and zero state leakage between tasks.

## run.sh

`run.sh` is an overnight batch runner that processes a queue of development tasks from `tasks.txt`. Here's what it does:

1. **Preflight check** — runs the first task to verify the local model is reachable, the build compiles, and all remote patterns are configured. If this fails, the entire run stops before wasting time on downstream tasks.
2. **Sequential task execution** — each remaining task in `tasks.txt` runs as an independent `claude -p` process with a 30-minute hard timeout (configurable via `TIMEOUT_SECS`). Tasks run in parallel with Ollama's local model, so no cloud API is hit.
3. **Fault tolerance** — if a task times out or fails, it's logged and the runner moves on to the next one. No single failure blocks the queue.
4. **Auto-commit** — successful tasks are automatically staged and committed (`auto: ...`) so progress survives interruptions.

### Usage

```bash
chmod +x run.sh
./run.sh              # Run all tasks in tasks.txt
TIMEOUT_SECS=600 ./run.sh   # 10-minute timeout per task
```

Check `run.log` for a full audit trail of every task's output, including any errors or timeouts.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS recommended)
- [Ollama](https://ollama.com) — install via Homebrew (`brew install ollama`)
- The model: `ollama pull hauhaucs/qwen3.6-35b-a3b-uncensored`

### Development

```bash
npm install
npm run dev    # starts Next.js dev server on localhost:3000
```

### Build & Deploy

```bash
npm run build   # production build
npm start       # serve the built site
```

This project deploys to [Vercel](https://vercel.com) with zero configuration — it auto-detects Next.js. Push to `main` and deploy from the Vercel dashboard.

## Architecture

| Directory | Purpose |
|-----------|---------|
| `app/` | Next.js App Router pages |
| `lib/data/` | Static data files (content) |
| `components/ui/` | Shared UI components |

Content lives in TypeScript modules under `lib/data/`. Pages import these and render them with Tailwind CSS classes and Framer Motion animations.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Local AI:** Ollama + Qwen 3.6 35B uncensored
- **CLI:** Claude Code (`claude`)
