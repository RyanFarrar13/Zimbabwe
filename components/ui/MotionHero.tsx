"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";
import Link from "next/link";

const floatingImages = [
  { src: "/images/landscape.jpg", alt: "Zimbabwean savannah landscape", pos: "top-20 left-[5%]" },
  { src: "/images/traditional-music.jpg", alt: "Traditional music performance", pos: "bottom-20 left-[10%]" },
  { src: "/images/community.jpg", alt: "Zimbabwean community gathering", pos: "bottom-32 right-[5%]" },
];

export default function MotionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zw-green via-emerald-900 to-zw-green text-white py-24 md:py-40">
      {/* Flag stripe top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 flex" aria-hidden="true">
        <div className="flex-1 bg-zw-green" />
        <div className="flex-1 bg-zw-gold" />
        <div className="flex-1 bg-zw-red" />
        <div className="flex-1 bg-zw-black" />
      </div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      {/* Floating decorative images */}
      {floatingImages.map((img, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block ${img.pos}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ delay: 1 + i * 0.3, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-48 h-32 object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-zw-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-zw-red/5 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge color="gold">Celebrating a Nation</Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-outfit font-bold mb-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Zimbabwe.
            <br />
            <span className="text-zw-gold">Unstoppable.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-inter text-white/80 leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            From sporting triumphs to cultural richness, scientific innovation to community strength —
            discover what makes Zimbabwe a source of endless pride.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/sports" className="bg-zw-gold text-zw-black rounded-full px-8 py-3 hover:bg-white transition-colors duration-200 font-inter font-semibold text-base shadow-lg shadow-zw-gold/25">
              Explore Achievements
            </Link>
            <Link href="/people" className="bg-white/10 text-white rounded-full px-8 py-3 hover:bg-white/20 transition-colors duration-200 font-inter font-semibold text-base border border-white/20">
              Meet the People
            </Link>
          </motion.div>
        </motion.div>

        {/* Zimbabwe flag colors animated bar */}
        <motion.div
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {["#006400", "#FFD200", "#EF0000", "#FFFFFF", "#EF0000", "#FFD200", "#006400"].map((color, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.div>
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
