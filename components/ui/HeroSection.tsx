"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  gradient?: "green-gold" | "green-black" | "rainbow" | "purple";
  imageSrc?: string;
  children?: React.ReactNode;
}

const gradients = {
  "green-gold": "bg-gradient-to-br from-zw-green via-emerald-900 to-zw-green",
  "green-black": "bg-gradient-to-br from-zw-green via-zw-black to-zw-green",
  rainbow: "bg-gradient-to-r from-zw-green via-zw-gold via-zw-red to-zw-black",
  purple: "bg-gradient-to-br from-purple-700 via-pink-600 to-yellow-500",
};

export default function HeroSection({
  title,
  subtitle,
  gradient = "green-gold",
  imageSrc,
  children,
}: HeroSectionProps) {
  return (
    <section className={`relative overflow-hidden ${gradients[gradient]} text-white py-16 md:py-24`}>
      {/* Background pattern */}
      {imageSrc && (
        <div className="absolute inset-0 opacity-10">
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Flag stripe top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex" aria-hidden="true">
        <div className="flex-1 bg-zw-green" />
        <div className="flex-1 bg-zw-gold" />
        <div className="flex-1 bg-zw-red" />
        <div className="flex-1 bg-zw-black" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/5" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-white/5" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-lg md:text-xl font-inter text-white/80 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Flag stripe bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex" aria-hidden="true">
        <div className="flex-1 bg-zw-green" />
        <div className="flex-1 bg-zw-gold" />
        <div className="flex-1 bg-zw-red" />
        <div className="flex-1 bg-zw-black" />
      </div>
    </section>
  );
}
