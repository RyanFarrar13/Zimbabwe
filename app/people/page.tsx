"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { people } from "@/lib/data/people";
import { motion } from "framer-motion";

const personImages = [
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1539375665275-f068bc1df07a?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop",
];

function PersonCard({ person, index }: { person: (typeof people)[number]; index: number }) {
  const fieldColors: Record<string, "green" | "gold" | "red" | "black"> = {
    Literature: "green",
    "Literature & Film": "gold",
    Music: "red",
    "Sports & Public Service": "green",
    "Youth Activism & Development": "gold",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full flex flex-col" imageSrc={personImages[index % personImages.length]} imageAlt={`${person.name} portrait`}>
        <Badge color={fieldColors[person.field] || "green"}>
          {person.field}
        </Badge>
        <h3 className="text-xl font-outfit font-semibold mt-2 mb-2">
          {person.name}
        </h3>
        <p className="text-sm font-inter text-zw-black/70 leading-relaxed flex-1">
          {person.bio}
        </p>
        {person.quote && (
          <motion.blockquote
            className="mt-4 pt-3 border-t border-gray-100 italic text-sm font-inter text-zw-black/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            "{person.quote}"
          </motion.blockquote>
        )}
      </Card>
    </motion.div>
  );
}

function CommunityStory({ title, quote, author, location }: { title: string; quote: string; author: string; location: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 h-full hover:border-zw-gold transition-colors duration-200">
        <h3 className="text-base font-outfit font-semibold mb-3 text-zw-green">{title}</h3>
        <blockquote className="text-sm font-inter text-zw-black/80 leading-relaxed italic mb-4">
          "{quote}"
        </blockquote>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zw-green/10 flex items-center justify-center text-sm font-bold text-zw-green">
            {author.charAt(0)}
          </div>
          <p className="text-xs font-inter text-zw-black/60">
            {author}, {location}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

function CommunityStories() {
  const stories = [
    {
      title: "The Village Library Project",
      quote:
        "When we built the library in our village, children who never saw a book now read every evening by candlelight. Education is the bridge from where we are to where Zimbabwe needs to be.",
      author: "Mumbi Chikwanha",
      location: "Chiredzi, Masvingo Province",
    },
    {
      title: "Harare Tech Hub",
      quote:
        "We are building apps for Zimbabwean farmers — weather alerts in Shona, market prices, pest management. Technology is not just a Western thing; it belongs to us too.",
      author: "Tendai Moyo",
      location: "Harare",
    },
    {
      title: "Bulawayo Women's Cooperative",
      quote:
        "Twelve women started selling vegetables at the market. Now we have a registered cooperative with our own transport and storage. We feed half the city.",
      author: "Grace Mutasa",
      location: "Bulawayo, Matabeleland North",
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
          Community Stories
        </motion.h2>
        <motion.p
          className="section-subtitle text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Zimbabwe's strength lies in its communities. From rural villages to urban neighborhoods,
          everyday Zimbabweans are making extraordinary contributions every day.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <CommunityStory key={i} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PeoplePage() {
  return (
    <>
      <HeroSection
        title="People & Community"
        subtitle="Profiles of notable Zimbabweans across all fields — writers, musicians, athletes, entrepreneurs, and community leaders who are making Zimbabwe proud."
        gradient="green-gold"
      />

      {/* People Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="section-title text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Notable Zimbabweans
          </motion.h2>
          <motion.p
            className="section-subtitle text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Zimbabweans have made remarkable contributions across literature, sports, music, business,
            and the arts. Here we celebrate some of the brightest names — with more to be added as
            verified information becomes available.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {people.map((person, i) => (
              <PersonCard key={i} person={person} index={i} />
            ))}
          </div>

          {/* Community Stories */}
          <CommunityStories />
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
            Every Zimbabwean Has a Story Worth Telling
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            This page celebrates the diversity and talent of Zimbabwe's people. If you know someone who
            should be featured, we'd love to hear from you.
          </p>
          <Link href="/" className="bg-zw-gold text-zw-black rounded-full px-8 py-3 hover:bg-white transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
