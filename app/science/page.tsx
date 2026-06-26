"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { scientists, institutions } from "@/lib/data/science";
import { motion } from "framer-motion";

const scienceImages = [
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581093458791-9d42e3c24e5a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1581093448692-3d082ef20931?w=600&h=400&fit=crop",
];

function ScientistCard({ scientist, index }: { scientist: (typeof scientists)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full flex flex-col" imageSrc={scienceImages[index % scienceImages.length]} imageAlt={scientist.imageAlt}>
        <Badge color="green">{scientist.field}</Badge>
        {scientist.institution && (
          <span className="text-xs font-inter text-zw-black/50 mt-1">{scientist.institution}</span>
        )}
        <h3 className="text-xl font-outfit font-semibold mt-2 mb-2">
          {scientist.name}
        </h3>
        <p className="text-sm font-inter text-zw-black/70 leading-relaxed flex-1">
          {scientist.achievement}
        </p>
      </Card>
    </motion.div>
  );
}

function InstitutionCard({ institution, index }: { institution: (typeof institutions)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="p-6 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-zw-green/10 flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-outfit font-bold text-zw-green">🏛️</span>
        </div>
        <div>
          <h3 className="text-lg font-outfit font-semibold mb-1">{institution.name}</h3>
          <p className="text-sm font-inter text-zw-black/70 leading-relaxed">
            {institution.description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function SciencePage() {
  return (
    <>
      <HeroSection
        title="Science & Innovation"
        subtitle="Zimbabwe's brightest minds are driving progress in medicine, technology, agriculture, and beyond. From university research labs to tech startups, innovation is at the heart of Zimbabwe's future."
        gradient="green-gold"
        imageSrc="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&h=400&fit=crop"
      />

      {/* Scientists Grid */}
      <section className="section-padding bg-zw-warm">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Innovators & Researchers</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            Zimbabwean scientists, inventors, and academics who are making their mark on the world.
            Every breakthrough starts with curiosity and determination.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {scientists.map((scientist, i) => (
              <ScientistCard key={i} scientist={scientist} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zw-green via-emerald-900 to-zw-green text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1581093458791-9d42e3c24e5a?w=1200&h=400&fit=crop"
            alt="Innovation lab"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-outfit font-bold mb-4">
            Innovation is Zimbabwe's Future
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed max-w-2xl mx-auto">
            From the lecture halls of the University of Zimbabwe to tech hubs in Harare and Bulawayo,
            Zimbabwe's next generation of innovators is rising — building solutions for Africa and the world.
          </p>
        </div>
      </section>

      {/* Institutions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Research Institutions</h2>
          <p className="section-subtitle text-center max-w-3xl mx-auto">
            The universities and research centers that nurture Zimbabwe's scientific talent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {institutions.map((institution, i) => (
              <InstitutionCard key={i} institution={institution} index={i} />
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
            Innovation is Zimbabwe's Future
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            From the lecture halls of the University of Zimbabwe to tech hubs in Harare and Bulawayo,
            Zimbabwe's next generation of innovators is rising.
          </p>
          <Link href="/" className="bg-zw-gold text-zw-black rounded-full px-8 py-3 hover:bg-white transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
