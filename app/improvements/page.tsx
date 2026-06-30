"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { improvements } from "@/lib/data/improvements";
import { chartData } from "@/lib/data/improvements";
import { motion } from "framer-motion";

function ImprovementCard({ improvement, index }: { improvement: (typeof improvements)[number]; index: number }) {
  const categoryColors: Record<string, "green" | "gold" | "red" | "black"> = {
    Technology: "green",
    Energy: "gold",
    Education: "red",
    Infrastructure: "black",
    Economy: "green",
    Tourism: "gold",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full flex flex-col" imageSrc={improvement.image} imageAlt={improvement.imageAlt || improvement.title}>
        <Badge color={categoryColors[improvement.category] || "green"}>
          {improvement.category}
        </Badge>
        <h3 className="text-xl font-outfit font-semibold mt-2 mb-2">
          {improvement.title}
        </h3>
        <p className="text-sm font-inter text-zw-black/70 leading-relaxed flex-1">
          {improvement.description}
        </p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-2xl font-outfit font-bold text-zw-green">{improvement.stat}</span>
          <span className="text-xs font-inter text-zw-black/50">{improvement.source}</span>
        </div>
      </Card>
    </motion.div>
  );
}

function GDPChart() {
  const maxVal = Math.max(...chartData.map((d) => Math.abs(d.value)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-xl font-outfit font-semibold mb-6 text-center">GDP Growth Rate (%)</h3>
        <div className="flex items-end justify-around gap-2 h-48">
          {chartData.map((d, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center flex-1"
              initial={{ height: 0 }}
              whileInView={{ height: `${(Math.abs(d.value) / maxVal) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <span className="text-xs font-inter font-semibold mb-1 text-zw-green">{d.value > 0 ? "+" : ""}{d.value}%</span>
              <div
                className={`w-full rounded-t-lg transition-all duration-500 ${d.value >= 0 ? "bg-zw-green" : "bg-zw-red"}`}
                style={{ height: `${(Math.abs(d.value) / maxVal) * 100}%` }}
              />
              <span className="text-xs font-inter mt-2 text-zw-black/60">{d.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ImprovementsPage() {
  return (
    <>
      <HeroSection
        title="National Progress"
        subtitle="Zimbabwe's journey of growth and development — from infrastructure projects to healthcare improvements, education milestones to agricultural innovation. Progress is steady, challenges are acknowledged honestly."
        gradient="green-gold"
        imageSrc="/images/improvements-hero.jpg"
      />

      {/* Stats Overview */}
      <section className="bg-white py-10 md:py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "93%", label: "Literacy Rate" },
              { value: "90%+", label: "Mobile Penetration" },
              { value: "500+ MW", label: "Solar Capacity Target" },
              { value: "$3.5B+", label: "Mining Output" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="text-3xl md:text-4xl font-outfit font-bold text-zw-green">{stat.value}</div>
                <p className="text-sm font-inter text-zw-black/60 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GDP Chart */}
      <section className="section-padding bg-zw-warm">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-8">Economic Growth</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Zimbabwe's GDP has shown resilience with strong recovery post-pandemic. The economy grew 8.6% in 2021,
            followed by steady growth in subsequent years.
          </p>
          <GDPChart />
        </div>
      </section>

      {/* Improvements Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Key Areas of Progress</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Zimbabwe is making progress across multiple sectors. Each development represents hope,
            investment, and the determination of a nation moving forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {improvements.map((improvement, i) => (
              <ImprovementCard key={i} improvement={improvement} index={i} />
            ))}
          </div>
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
            Building a Better Tomorrow
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            Zimbabwe's story is one of resilience and progress. Every road built, every school upgraded,
            every clinic opened brings the nation closer to its full potential.
          </p>
          <Link href="/" className="bg-zw-gold text-zw-black rounded-full px-8 py-3 hover:bg-white transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
