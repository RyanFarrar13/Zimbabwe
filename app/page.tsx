import Link from "next/link";
import dynamic from "next/dynamic";
import Badge from "@/components/ui/Badge";

const MotionHero = dynamic(() => import("@/components/ui/MotionHero"), {
  ssr: false,
});

const MotionHighlights = dynamic(() => import("@/components/ui/MotionHighlights"), {
  ssr: false,
});

const MotionCTA = dynamic(() => import("@/components/ui/MotionCTA"), {
  ssr: false,
});

const quickLinks = [
  { href: "/sports", title: "Sports", description: "Champions & victories", emoji: "🏆" },
  { href: "/science", title: "Science & Innovation", description: "Breakthroughs & research", emoji: "🔬" },
  { href: "/improvements", title: "National Progress", description: "Growth & development", emoji: "📈" },
  { href: "/news", title: "News", description: "Latest updates", emoji: "📰" },
  { href: "/food", title: "Food & Culture", description: "Taste of Zimbabwe", emoji: "🍲" },
  { href: "/people", title: "People", description: "Notable Zimbabweans", emoji: "🌟" },
  { href: "/pride", title: "Pride", description: "Community & identity", emoji: "🏳️‍🌈" },
  { href: "/leadership", title: "Leadership", description: "Vision & direction", emoji: "🏛️" },
];

function QuickLinks() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-outfit font-bold text-center mb-10">
          Explore Zimbabwe Pride
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {quickLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col items-center text-center p-5 rounded-2xl hover:bg-zw-warm transition-all duration-300 hover:shadow-md"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                {link.emoji}
              </span>
              <h3 className="text-sm font-outfit font-semibold text-zw-black group-hover:text-zw-green transition-colors">
                {link.title}
              </h3>
              <p className="text-xs font-inter text-zw-black/60 mt-1">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageShowcase() {
  const images = [
    { src: "https://images.unsplash.com/photo-1489792303676-aa5b2e325a33?w=400&h=300&fit=crop", alt: "Traditional Shona music and dance performance" },
    { src: "https://images.unsplash.com/photo-1597302628824-ab00af6f3e2c?w=400&h=300&fit=crop", alt: "Zimbabwean community gathering in Harare" },
    { src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop", alt: "Victoria Falls — one of the Seven Natural Wonders of the World" },
    { src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop", alt: "Rolling hills of Mashonaland Province" },
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop", alt: "Sports and recreation in Zimbabwean communities" },
    { src: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop", alt: "Zimbabwean cuisine and food culture" },
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop", alt: "Zimbabwean braai culture and community" },
    { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop", alt: "Zimbabwean library and education" },
  ];

  return (
    <section className="bg-zw-warm py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">The Beauty of Zimbabwe</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto mb-10">
          From the thundering waters of Victoria Falls to the rolling hills of Mashonaland,
          Zimbabwe's landscapes are as diverse and breathtaking as its people.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <MotionHero />
      <QuickLinks />
      <ImageShowcase />
      <MotionHighlights />
      <MotionCTA />
    </>
  );
}
