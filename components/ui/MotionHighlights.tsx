"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import Badge from "./Badge";

const highlights = [
  {
    section: "Sports",
    title: "Kirsty Coventry — Olympic Legend",
    description:
      "Zimbabwe's most decorated Olympian with 7 medals — including gold in the 200m backstroke (Athens 2004) and 200m butterfly (Beijing 2008). A true national hero.",
    href: "/sports",
    imageSrc: "/images/kirsty-coventry.jpg",
    imageAlt: "Kirsty Coventry swimming at the Olympic Games",
  },
  {
    section: "Science",
    title: "Tech Innovation Rising",
    description:
      "Zimbabwe's tech ecosystem is booming — from Harare-based fintech startups to agricultural research at the University of Zimbabwe driving food security across Southern Africa.",
    href: "/science",
    imageSrc: "/images/mobile-technology.jpg",
    imageAlt: "Tech entrepreneurs working in a Harare co-working space",
  },
  {
    section: "Food & Culture",
    title: "Sadza — The Heart of Zimbabwean Cuisine",
    description:
      "A staple food made from ground maize, served with vegetables, meat, or relish. Sadza is more than food — it's a way of life that unites every Zimbabwean family.",
    href: "/food",
    imageSrc: "/images/sadza.jpg",
    imageAlt: "Traditional Zimbabwean sadza and relish",
  },
  {
    section: "People",
    title: "Tsitsi Dangarembga — Booker Prize Winner",
    description:
      "Zimbabwe's acclaimed writer and filmmaker. Her novel 'Nervous Conditions' was shortlisted for the International Booker Prize 2018 — a landmark achievement for African literature.",
    href: "/people",
    imageSrc: "/images/tsitsi-dangarembga.jpg",
    imageAlt: "Tsitsi Dangarembga at a literary event",
  },
];

function HighlightCard({ highlight, index }: { highlight: (typeof highlights)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -6 }}
    >
      <Card className="h-full flex flex-col" href={highlight.href} imageSrc={highlight.imageSrc} imageAlt={highlight.imageAlt}>
        <Badge color="green" className="self-start">{highlight.section}</Badge>
        <h3 className="text-lg font-outfit font-semibold mt-3 mb-2">
          {highlight.title}
        </h3>
        <p className="text-sm font-inter text-zw-black/70 leading-relaxed flex-1">
          {highlight.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function MotionHighlights() {
  return (
    <section className="bg-zw-warm py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">Featured Highlights</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            A glimpse into the achievements, culture, and people that make Zimbabwe extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, i) => (
            <HighlightCard key={i} highlight={highlight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
