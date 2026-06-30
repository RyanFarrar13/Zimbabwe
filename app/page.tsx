"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
const MotionHero = dynamic(() => import("@/components/ui/MotionHero"), {
  ssr: false,
});

const MotionHighlights = dynamic(() => import("@/components/ui/MotionHighlights"), {
  ssr: false,
});

const MotionCTA = dynamic(() => import("@/components/ui/MotionCTA"), {
  ssr: false,
});

const quickLinks = [
  { href: "/sports", title: "Sports", description: "Champions & victories", emoji: "🏆" },
  { href: "/science", title: "Science & Innovation", description: "Breakthroughs & research", emoji: "🔬" },
  { href: "/improvements", title: "National Progress", description: "Growth & development", emoji: "📈" },
  { href: "/news", title: "News", description: "Latest updates", emoji: "📰" },
  { href: "/food", title: "Food & Culture", description: "Taste of Zimbabwe", emoji: "🍲" },
  { href: "/people", title: "People", description: "Notable Zimbabweans", emoji: "🌟" },
  { href: "/pride", title: "Pride", description: "Community & identity", emoji: "🏳️‍🌈" },
  { href: "/leadership", title: "Leadership", description: "Vision & direction", emoji: "🏛️" },
];

function QuickLinks() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-outfit font-bold text-center mb-10">
          Explore Zimbabwe Pride
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {quickLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center text-center p-5 rounded-2xl hover:bg-zw-warm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {link.emoji}
              </span>
              <h3 className="text-sm font-outfit font-semibold text-zw-black group-hover:text-zw-green transition-colors">
                {link.title}
              </h3>
              <p className="text-xs font-inter text-zw-black/60 mt-1">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageShowcase() {
  return (
    <section className="bg-zw-warm py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">The Beauty of Zimbabwe</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto mb-10">
          From the thundering waters of Victoria Falls to the rolling hills of Mashonaland,
          Zimbabwe's landscapes are as diverse and breathtaking as its people.
        </p>
        <motion.div
          className="rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img
            src="/images/landscape.jpg"
            alt="Savannah landscape of Zimbabwe with rolling grasslands and acacia trees at sunset"
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
            animate={{ scale: [1, 1.03], opacity: [0.9, 1] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <MotionHero />
      <QuickLinks />
      <ImageShowcase />
      <MotionHighlights />
      <MotionCTA />
    </>
  );
}
