"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { stories, legalMilestones } from "@/lib/data/pride";
import { motion } from "framer-motion";

function PrideHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white py-20 md:py-28">
      {/* Animated rainbow stripes */}
      <motion.div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        initial={{ x: 0 }}
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full flex">
          {[
            "bg-red-500",
            "bg-orange-500",
            "bg-yellow-400",
            "bg-green-500",
            "bg-blue-500",
            "bg-purple-600",
          ].map((color, i) => (
            <div key={i} className={`flex-1 ${color}`} />
          ))}
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-outfit font-bold mb-4"
        >
          Zimbabwe Pride 🏳️‍🌈
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-inter text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          A vibrant space for Zimbabwe's LGBTQ+ community — discussing legal changes, sharing stories,
          and celebrating identity with pride and dignity.
        </motion.p>
      </div>
    </section>
  );
}

function LegalTimeline() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Legal History — LGBTQ+ Rights in Zimbabwe
        </motion.h2>
        <motion.p
          className="section-subtitle text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Zimbabwe's legal landscape for LGBTQ+ people has evolved through colonial laws, constitutional reform, and landmark court rulings.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-400" />

          {legalMilestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex items-start gap-6 mb-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 transform -translate-x-[7px] z-10 ring-4 ring-white" />

              <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2"}`}>
                <Card className="p-6 hover:border-purple-400 transition-colors duration-200">
                  <Badge color="gold" className="mb-2">{String(milestone.year)}</Badge>
                  <h3 className="text-lg font-outfit font-semibold mb-2">{milestone.event}</h3>
                  <p className="text-sm font-inter text-zw-black/70 leading-relaxed">
                    {milestone.significance}
                  </p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotableVoices() {
  const voices = [
    {
      name: "Jordan Chanetsa",
      role: "Trans Activist & Artist",
      organization: "Harare Queer Collective",
      description:
        "A prominent trans rights activist and visual artist from Harare. Jordan co-founded the Harare Queer Collective, creating art exhibitions that challenge gender norms and celebrate queer Zimbabwean identity. Their work has been featured in regional African arts festivals.",
      imageAlt: "Jordan Chanetsa, trans activist and artist",
    },
    {
      name: "Ricky Nathanson",
      role: "Legal Advocate & Court Case Winner",
      organization: "Zimbabwe LGBTQ+ Rights Movement",
      description:
        "Ricky Nathanson won a landmark 2019 High Court case in Zimbabwe when the court awarded him damages for discrimination based on sexual orientation. The ruling was a significant moment for LGBTQ+ rights in Zimbabwe, establishing that discrimination based on sexual orientation violates constitutional protections.",
      imageAlt: "Ricky Nathanson, legal advocate",
    },
    {
      name: "Raymond Sibanda",
      role: "Labour Rights Advocate",
      organization: "Zimbabwe Workers' Rights Forum",
      description:
        "Raymond won a significant labour court victory against workplace discrimination. His case set an important precedent for LGBTQ+ workers' rights in Zimbabwe, establishing protections against unfair dismissal based on sexual orientation.",
      imageAlt: "Raymond Sibanda, labour rights advocate",
    },
  ];

  return (
    <section className="bg-zw-warm py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Notable Voices
        </motion.h2>
        <motion.p
          className="section-subtitle text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Zimbabweans who have stood up for LGBTQ+ rights through activism, art, and legal advocacy.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {voices.map((voice, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                  {voice.name.charAt(0)}
                </div>
                <h3 className="text-lg font-outfit font-semibold text-center">{voice.name}</h3>
                <p className="text-xs font-inter text-zw-black/50 text-center mb-1">{voice.role}</p>
                <p className="text-xs font-inter text-purple-600 text-center mb-3">{voice.organization}</p>
                <p className="text-sm font-inter text-zw-black/70 leading-relaxed flex-1">
                  {voice.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: (typeof stories)[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Card className="p-6 h-full">
        <blockquote className="text-sm font-inter text-zw-black/80 leading-relaxed italic mb-4">
          "{story.quote}"
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            {story.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-outfit font-semibold">{story.name}</p>
            <p className="text-xs font-inter text-zw-black/50">{story.community}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function PrideStories() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Community Stories
        </motion.h2>
        <motion.p
          className="section-subtitle text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Stories from the Zimbabwean LGBTQ+ community — voices of courage, resilience, and pride.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <StoryCard key={i} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PridePage() {
  return (
    <>
      <PrideHero />
      <LegalTimeline />
      <NotableVoices />
      <PrideStories />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
            Proud to Be Zimbabwean 🇿🇼
          </h2>
          <p className="text-lg font-inter text-white/90 leading-relaxed mb-6 max-w-2xl mx-auto">
            Zimbabwe's diversity is its strength. Every person, regardless of identity, deserves to live
            with dignity, respect, and the freedom to be themselves.
          </p>
          <Link href="/" className="bg-white text-purple-700 rounded-full px-6 py-3 hover:bg-gray-100 transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
