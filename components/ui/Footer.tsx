"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/sports", label: "Sports" },
  { href: "/science", label: "Science & Innovation" },
  { href: "/improvements", label: "National Progress" },
  { href: "/news", label: "News" },
  { href: "/food", label: "Food & Culture" },
  { href: "/people", label: "People" },
  { href: "/pride", label: "Pride" },
  { href: "/leadership", label: "Leadership" },
];

const socialLinks = [
  { name: "Twitter", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "YouTube", url: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Flag color stripe */}
      <div className="h-2 flex" aria-hidden="true">
        <motion.div
          className="flex-1 bg-zw-green"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="flex-1 bg-zw-gold"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="flex-1 bg-zw-red"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="flex-1 bg-zw-black"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      <div className="bg-zw-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-xl font-outfit font-bold text-white">
                Zimbabwe{" "}
                <span className="text-zw-gold">Pride</span>
              </Link>
              <p className="mt-2 text-sm font-inter text-white/70 leading-relaxed">
                A vibrant celebration of Zimbabwe — its people, achievements, culture, food, sports, science, and national progress.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-inter font-semibold uppercase tracking-wide text-zw-gold mb-4">
                Explore
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href={link.href}
                        className="text-sm font-inter text-white/70 hover:text-zw-gold transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-inter font-semibold uppercase tracking-wide text-zw-gold mb-4">
                Follow Us
              </h3>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <motion.div whileHover={{ x: 4 }}>
                      <Link
                        href={social.url}
                        className="text-sm font-inter text-white/70 hover:text-zw-gold transition-colors duration-200"
                      >
                        {social.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 pt-6 border-t border-white/10 text-center"
          >
            <p className="text-xs font-inter text-white/50">
              &copy; {new Date().getFullYear()} Zimbabwe Pride. Celebrating a nation of achievement and culture.
            </p>
            <p className="text-xs font-inter text-white/40 mt-2">
              created by Loogi-Turbo Chud
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
