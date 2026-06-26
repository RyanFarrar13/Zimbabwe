"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { dishes, foodCategories } from "@/lib/data/food";
import { motion } from "framer-motion";

function DishCard({ dish, index }: { dish: (typeof dishes)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full flex flex-col" imageSrc={dish.image} imageAlt={dish.imageAlt}>
        <Badge color="green">{dish.region}</Badge>
        <h3 className="text-xl font-outfit font-semibold mt-2 mb-2">
          {dish.name}
        </h3>
        <p className="text-sm font-inter text-zw-black/70 leading-relaxed mb-3">
          {dish.description}
        </p>
        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-xs font-inter text-zw-black/50 italic">
            Cultural significance: {dish.significance}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function FoodPage() {
  return (
    <>
      <HeroSection
        title="Food & Culture"
        subtitle="Zimbabwe's cuisine is a celebration of flavor, tradition, and community. From the staple dish sadza to the beloved braai culture, every meal tells a story of heritage and togetherness."
        gradient="green-gold"
      />

      {/* Food Categories */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white py-10 md:py-14 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {foodCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="text-center">
                  <span className="text-4xl mb-2 block">{cat.emoji}</span>
                  <h3 className="text-sm font-outfit font-semibold text-zw-black">{cat.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dishes Grid */}
      <section className="section-padding bg-zw-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="section-title text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Traditional Dishes
          </motion.h2>
          <motion.p
            className="section-subtitle text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Zimbabwe's food culture is rich and diverse. Each dish carries centuries of tradition,
            connecting families across generations and regions.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish, i) => (
              <DishCard key={i} dish={dish} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Braai Culture Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-zw-green text-white py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
            Braai Culture — More Than Just Grilling
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            In Zimbabwe, the braai is a social institution. It's where families gather on weekends,
            friends share stories, and the aroma of grilled meat brings everyone together. From beef to
            boerewors, from peri-peri chicken to sausage — the braai is Zimbabwe's unofficial national pastime.
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-zw-warm py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
            Taste of Zimbabwe
          </h2>
          <p className="text-lg font-inter text-zw-black/70 leading-relaxed mb-6 max-w-2xl mx-auto">
            Zimbabwe's food is more than sustenance — it's identity, community, and love on a plate.
            Every dish carries the warmth of Zimbabwean hospitality.
          </p>
          <Link href="/" className="bg-zw-green text-white rounded-full px-8 py-3 hover:bg-zw-gold hover:text-zw-black transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
