"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { athletes, stats } from "@/lib/data/sports";
import { motion } from "framer-motion";

const sportImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1587280501635-c6670a9476ef?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1592656094267-73ede7b8dd58?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1638284407448-c3e5c5f1ffc6?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1452626038302-3c97cf90e4a1?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&h=400&fit=crop",
];

function AthleteCard({ athlete, index }: { athlete: (typeof athletes)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full flex flex-col" imageSrc={sportImages[index % sportImages.length]} imageAlt={athlete.imageAlt}>
        <Badge color="green">{athlete.sport}</Badge>
        <h3 className="text-xl font-outfit font-semibold mt-3 mb-2">
          {athlete.name}
        </h3>
        <p className="text-sm font-inter text-zw-black/70 leading-relaxed flex-1">
          {athlete.achievement}
        </p>
        <div className="mt-3 text-xs font-inter font-semibold text-zw-gold">
          {athlete.year}
        </div>
      </Card>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="text-center p-6">
        <div className="text-4xl mb-2">{stat.icon || "🏅"}</div>
        <div className="text-3xl md:text-4xl font-outfit font-bold text-zw-green mb-1">
          {stat.value}
        </div>
        <h3 className="text-sm font-outfit font-semibold uppercase tracking-wide text-zw-black/80 mb-1">
          {stat.label}
        </h3>
        <p className="text-xs font-inter text-zw-black/60 leading-relaxed">
          {stat.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function SportsPage() {
  return (
    <>
      <HeroSection
        title="Sports Achievements"
        subtitle="Zimbabwe's greatest sporting moments — from Olympic podium finishes to cricket triumphs. Our athletes have consistently proven that Zimbabweans are unstoppable on the world stage."
        gradient="green-gold"
        imageSrc="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop"
      />

      {/* Stats Bar */}
      <section className="bg-white py-10 md:py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="section-padding bg-zw-warm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Legendary Athletes</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Meet the Zimbabweans who have brought pride to the nation through extraordinary
            sporting achievements. Every medal tells a story of dedication, sacrifice, and triumph.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {athletes.map((athlete, i) => (
              <AthleteCard key={i} athlete={athlete} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sports Culture Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zw-green via-emerald-900 to-zw-green text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=1200&h=400&fit=crop"
            alt="Sports stadium"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-outfit font-bold mb-4">
            Sports Unite Zimbabwe
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed max-w-2xl mx-auto">
            From the dusty pitches of rural Zimbabwe to international stadiums around the world,
            sport is more than competition — it's a source of national unity and pride.
          </p>
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
            Help Us Celebrate More Champions
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            This page is a living document. If you have knowledge of Zimbabwean sporting achievements
            that should be featured, we want to hear from you.
          </p>
          <Link href="/" className="bg-zw-gold text-zw-black rounded-full px-8 py-3 hover:bg-white transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
