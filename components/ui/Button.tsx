import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

const variants = {
  primary:
    "bg-zw-green text-white hover:bg-zw-gold hover:text-zw-black",
  outline:
    "bg-transparent border-2 border-white text-white hover:bg-white hover:text-zw-green",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "btn-primary",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
