"use client";

import Link from "next/link";
import { useState } from "react";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { newsItems, categories } from "@/lib/data/news";
import { motion } from "framer-motion";

function NewsCard({ item, index }: { item: (typeof newsItems)[number]; index: number }) {
  const categoryColors: Record<string, "green" | "gold" | "red" | "black"> = {
    Policy: "green",
    Economy: "gold",
    "International Relations": "black",
    Development: "red",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <Badge color={categoryColors[item.category] || "green"}>
            {item.category}
          </Badge>
          <span className="text-xs font-inter text-zw-black/50">{item.date}</span>
        </div>
        <h3 className="text-lg font-outfit font-semibold mb-2">
          {item.title}
        </h3>
        <p className="text-sm font-inter text-zw-black/70 leading-relaxed flex-1">
          {item.summary}
        </p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <span className="text-xs font-inter text-zw-black/40 italic">
            Source: {item.source}
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

function CategoryFilter({ active, setActive }: { active: string; setActive: (cat: string) => void }) {
  return (
    <section className="bg-white py-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-inter font-medium transition-colors duration-200 ${
                active === cat
                  ? "bg-zw-green text-white"
                  : "bg-zw-warm text-zw-black hover:bg-zw-green hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Government News"
        subtitle="Stay informed about Zimbabwe's latest developments in policy, economy, international relations, and national development."
        gradient="green-gold"
      />

      <CategoryFilter active={activeCategory} setActive={setActiveCategory} />

      {/* Featured: Infrastructure Development */}
      <section className="bg-white py-10 md:py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge color="black">Infrastructure Development</Badge>
            <h2 className="text-2xl md:text-3xl font-outfit font-bold mt-4 mb-6">
              Building the Future — Roads, Energy &amp; Beyond
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg bg-zw-warm">
                <img
                  src="/images/news-hero.jpg"
                  alt="Infrastructure development in Zimbabwe — road construction and modernization"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-inter text-zw-black/80 leading-relaxed mb-4">
                  Major road rehabilitation projects have connected key cities and border posts across Zimbabwe. The Harare–Southdowns highway, Belt Road, and other infrastructure upgrades have dramatically improved transport links — over 1,000 km of roads rehabilitated under the New Reconstruction and Development Programme.
                </p>
                <p className="text-sm font-inter text-zw-black/80 leading-relaxed mb-4">
                  Energy infrastructure is expanding too, with solar farms and net-metering programs targeting 500 MW of new capacity. From rural electrification to urban transit, infrastructure is the backbone of Zimbabwe's growth story.
                </p>
                <span className="text-xs font-inter text-zw-black/50">
                  Source: Ministry of Roads and Infrastructure / World Bank
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-zw-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="section-title text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Latest Updates
          </motion.h2>
          <motion.p
            className="section-subtitle text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Zimbabwe's story is one of growth, challenge, and resilience — captured in the latest developments shaping the nation.
          </motion.p>

          {filteredItems.length === 0 ? (
            <p className="text-center text-zw-black/50 font-inter py-12">
              No news items found in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, i) => (
                <NewsCard key={i} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-zw-green text-white py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
            Stay Informed, Stay Proud
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            Zimbabwe's story is being written every day — in parliament, in mining towns,
            on farms, and in the tech hubs of Harare. This page grows with the nation.
          </p>
          <Link href="/" className="bg-zw-gold text-zw-black rounded-full px-8 py-3 hover:bg-white transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
