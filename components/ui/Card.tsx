"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  delay?: number;
}

export default function Card({
  children,
  className,
  href,
  imageSrc,
  imageAlt,
  delay = 0,
}: CardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={cn(
        "card p-0 flex flex-col overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300",
        href && "cursor-pointer",
        className
      )}
    >
      {imageSrc && (
        <div className="relative w-full h-48 overflow-hidden group">
          <img
            src={imageSrc}
            alt={imageAlt || "Card image"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{cardContent}</a>;
  }

  return cardContent;
}
