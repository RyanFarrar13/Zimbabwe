"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { leaderInfo, bibliography, policyAreas } from "@/lib/data/leadership";
import { motion } from "framer-motion";

function BiographySection() {
  const leader = leaderInfo[0];
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-8">President of Zimbabwe</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="w-full md:w-1/3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-zw-warm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/President_Emmerson_Mnangagwa_%28cropped%29.jpg/440px-President_Emmerson_Mnangagwa_%28cropped%29.jpg"
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <div className="flex-1">
              <Badge color="green">{leader.role}</Badge>
              <h3 className="text-2xl font-outfit font-bold mt-3 mb-4">{leader.name}</h3>
              <p className="text-base font-inter text-zw-black/80 leading-relaxed">
                {leader.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PolicyCards() {
  return (
    <section className="section-padding bg-zw-warm">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-title text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Policy Priorities
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {policyAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full flex flex-col">
                <Badge color={i === 0 ? "green" : i === 1 ? "gold" : "black"}>
                  {area.title}
                </Badge>
                <p className="text-sm font-inter text-zw-black/70 leading-relaxed mt-3 flex-1">
                  {area.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {area.details.map((detail, j) => (
                    <li key={j} className="text-xs font-inter text-zw-black/60 leading-relaxed flex items-start gap-2">
                      <span className="text-zw-gold mt-0.5 flex-shrink-0">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoliticalOverview() {
  const cards = [
    {
      title: "Government Structure",
      description:
        "Zimbabwe is a presidential republic. The President serves as both head of state and government, with the power to appoint the Cabinet. Parliament is bicameral, consisting of the National Assembly and Senate. The 2013 Constitution established a robust Bill of Rights and independent commissions to safeguard democratic governance.",
    },
    {
      title: "Economic Policy",
      description:
        "The 'Zimbabwe is Open for Business' initiative launched in late 2017 seeks to attract foreign investment and rebuild international relations. In April 2024, the Reserve Bank introduced the ZiG (Zimbabwe Gold) currency to stabilize inflation. Vision 2063 outlines a long-term development roadmap for middle-income status.",
    },
    {
      title: "International Relations",
      description:
        "Zimbabwe plays a leading role in SADC and maintains active engagement with BRICS nations. The Zimbabwe Investment and Trade Forum (ZITF) held in April 2025 attracted billions in pledged commitments. The country continues to seek re-engagement with multilateral financial institutions and African Union partnerships.",
    },
    {
      title: "Constitutional Developments",
      description:
        "The Constitutional Amendment (CA3) Bill, proposed in February 2026, seeks to extend presidential and parliamentary terms from five to seven years and change the selection of certain senators. The proposal has sparked national debate about democratic institutions and the rule of law.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Political Landscape
        </motion.h2>
        <motion.p
          className="section-subtitle text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Zimbabwe's political system continues to evolve, with ongoing debates about governance, economic reform, and democratic institutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-lg font-outfit font-semibold mb-2">{card.title}</h3>
                <p className="text-sm font-inter text-zw-black/70 leading-relaxed">
                  {card.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BibliographySection() {
  return (
    <section className="bg-zw-warm py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center mb-4">Bibliography</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto mb-10">
            Key policy documents, speeches, and publications related to Zimbabwe's current leadership.
          </p>

          <div className="space-y-4">
            {bibliography.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 hover:border-zw-gold transition-colors duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                    <Badge color="gold">{entry.type}</Badge>
                    <div className="flex-1">
                      <h3 className="text-base font-outfit font-semibold mb-1">{entry.title}</h3>
                      <p className="text-xs font-inter text-zw-black/50 mb-2">{entry.year}</p>
                      <p className="text-sm font-inter text-zw-black/70 leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HomelanderCommentary() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-center mb-10 text-yellow-400">
            "An Absolute Leader" — Homelander Approves
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="bg-white/5 border border-yellow-400/30 rounded-2xl overflow-hidden">
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Homelander image */}
                  <div className="md:w-2/5 relative overflow-hidden bg-black">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/5/5b/Homelander_Vought.png"
                      alt="Homelander, the superhero from The Boys Amazon Prime Video series"
                      className="w-full h-64 md:h-full object-cover opacity-90"
                    />
                  </div>

                  {/* Satirical commentary */}
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-yellow-400 text-xl">⭐</span>
                      <Badge color="gold">Satire</Badge>
                    </div>

                    <blockquote className="text-lg font-inter text-white/90 leading-relaxed mb-4 italic">
                      "Finally. A leader who understands what it means to be strong. The parades, the flags,
                      the way people cheer — you don't just see it. You feel it in your chest."
                    </blockquote>

                    <p className="text-sm font-inter text-white/60 mb-4">
                      — Homelander, <em>The Boys</em> (Amazon Prime Video)
                    </p>

                    <div className="space-y-3 text-sm font-inter text-white/80 leading-relaxed">
                      <p>
                        If the superhero from <em>The Boys</em> — narcissistic, image-obsessed, utterly
                        convinced of his own supremacy — were to look across the Atlantic and find someone he
                        genuinely approves of, it would be Emmerson Mnangagwa. Both men love the parades.
                        Both believe that strength means never apologizing. Both surround themselves with people
                        who nod, and punish anyone who doesn't. The parallel is almost too neat to be accidental.
                      </p>
                      <p>
                        Homelander would admire the "Zimbabwe is Open for Business" slogan — because beneath
                        it lies the same truth he lives by: power is what you project, and projection is
                        everything. The gold medals on the chest, the mining deals in the press releases —
                        it's all about looking invincible. And if anyone questions whether the image matches
                        reality? Well. That's what a loyal team is for.
                      </p>
                      <p className="text-yellow-300/80 text-xs mt-4">
                        ⚠️ This is fictional satire. Homelander is a character from Garth Ennis's comic series
                        and the Amazon Prime Video adaptation. The satirical comparison is creative commentary,
                        not a factual claim about Zimbabwe's leadership.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <HeroSection
        title="Leadership"
        subtitle="Zimbabwe's political landscape — the leaders shaping the nation, the policies driving change, and the vision for Zimbabwe's future."
        gradient="green-black"
      />

      <BiographySection />
      <PolicyCards />
      <PoliticalOverview />
      <BibliographySection />
      <HomelanderCommentary />

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-zw-green text-white py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
            Zimbabwe's Future is Being Written Today
          </h2>
          <p className="text-lg font-inter text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto">
            From the halls of parliament to the mining fields and farming communities, Zimbabwe's
            leadership decisions shape the lives of millions. The story is still being written.
          </p>
          <Link href="/" className="bg-zw-gold text-zw-black rounded-full px-8 py-3 hover:bg-white transition-colors duration-200 font-inter font-semibold inline-block">
            Back to Home
          </Link>
        </div>
      </motion.section>
    </>
  );
}
