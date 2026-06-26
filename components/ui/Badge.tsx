import { cn } from "@/lib/utils";

type BadgeColor = "green" | "gold" | "red" | "black";

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorMap: Record<BadgeColor, string> = {
  green: "bg-zw-green/10 text-zw-green",
  gold: "bg-zw-gold/20 text-yellow-800",
  red: "bg-zw-red/10 text-zw-red",
  black: "bg-zw-black/10 text-zw-black",
};

export default function Badge({ children, color = "green", className }: BadgeProps) {
  return (
    <span className={cn("badge", colorMap[color], className)}>
      {children}
    </span>
  );
}
