"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const allLinks = [
  { href: "/sports", title: "Sports", emoji: "🏆" },
  { href: "/science", title: "Science & Innovation", emoji: "🔬" },
  { href: "/improvements", title: "National Progress", emoji: "📈" },
  { href: "/news", title: "News", emoji: "📰" },
  { href: "/food", title: "Food & Culture", emoji: "🍲" },
  { href: "/people", title: "People", emoji: "🌟" },
  { href: "/pride", title: "Pride", emoji: "🏳️‍🌈" },
];

export default function MotionCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-zw-green via-emerald-800 to-zw-green text-white py-20 md:py-24">
      {/* Animated background circles */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-zw-gold/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-zw-red/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Flag color dots */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-3" aria-hidden="true">
        {["#006400", "#FFD200", "#EF0000", "#FFFFFF"].map((color, i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">
            Proud of Zimbabwe? <span className="text-zw-gold">So Are We.</span>
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            This is a living celebration of what Zimbabwe has achieved and what it promises.
            Explore every section, share every story, and carry the pride forward.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {allLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <Link
                href={link.href}
                className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-5 py-3 hover:bg-zw-gold hover:text-zw-black transition-all duration-200 font-inter text-sm font-semibold border border-white/20"
              >
                <span>{link.emoji}</span>
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>
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
