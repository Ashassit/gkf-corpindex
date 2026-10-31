import { motion } from "framer-motion";
import { ArrowRight, Flame, Droplets, Beaker, Calendar, Recycle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import milkBank from "../../assets/milk-bank-logo.webp";
import ivy from "../../assets/newImages/ivy.webp";
import quantum from "../../assets/newImages/quantum.webp";
import AnEdash from "../../assets/newImages/AnEdash.webp";
import skinbank from "../../assets/newImages/skinbankbaby.jpg";
import abu from "../../assets/newane.jpg.jpeg";

type Stat = { value: string; label: string };
type Item = {
  title: string;
  number: string;
  category: string;
  icon: LucideIcon;
  description: string;
  stats?: Stat[];
  cta: string;
  page: string;
  image: string;
};

const dashboardItems: Item[] = [
   {
    title: "ABLS Training",
    number: "01",
    category: "Burns Training",
    icon: Flame,
    description:
      "Paediatric & Adult Burns Life Support certification for medical professionals.",
    cta: "Learn More",
    page: "abls",
    image: abu,
  },
  {
    title: "Medical Emergency?",
    number: "02",
    category: "A&E · 24×7",
    icon: Recycle,
    description:
      "Expert Trauma & Emergency Care — when every second counts, our dedicated team is ready around the clock.",
    stats: [
      { value: "24/7", label: "Always Open" },
      { value: "3 min", label: "Avg Response" },
    ],
    cta: "Emergency Services",
    page: "a-e",
    image: AnEdash,
  },
  {
    title: "Skin Bank",
    number: "03",
    category: "Skin Bank",
    icon: Beaker,
    description:
      "100+ successful skin retrievals supporting critical burn care recovery.",
    cta: "Learn More",
    page: "skin-bank",
    image: skinbank,
  },
  {
    title: "Milk Bank",
    number: "04",
    category: "Neonatal Care",
    icon: Droplets,
    description:
      "Life-saving human milk bank for premature and critically ill newborns.",
    cta: "Learn More",
    page: "milk-bank",
    image: milkBank,
  },
  {
    title: "IVY Program",
    number: "05",
    category: "Internship",
    icon: Calendar,
    description:
      "International Volunteer & Internship program",
    cta: "Learn More",
    page: "ivy",
    image: ivy,
  },
  {
    title: "Triple Helix",
    number: "06",
    category: "Medical Sciences",
    icon: Flame,
    description:
      "Quantum Medical Sciences",
    cta: "Learn More",
    page: "Quantum",
    image: quantum,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

interface DashboardSectionProps {
  onNavigate: (page: string) => void;
}

export function DashboardSection({ onNavigate }: DashboardSectionProps) {
  const [featured, ...rest] = dashboardItems;
  const FeaturedIcon = featured.icon;

  return (
    <section
      className="section-container bg-[#080808] relative overflow-hidden"
      id="dashboard"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute -top-32 right-1/3 w-[700px] h-[350px] bg-[#ff6a00]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[250px] bg-[#ff6a00]/[0.04] rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative background word */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none leading-none font-black text-white/[0.015] whitespace-nowrap tracking-tighter"
        style={{ fontSize: "21vw" }}
      >
        SERVICES
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Section Header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
              <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">
                Expert Care &amp; Programs
              </span>
              <div className="hidden lg:block flex-1 h-px bg-white/[0.05]" />
              <span className="hidden lg:block text-white/60 text-[11px] font-mono tracking-widest">
                06 PROGRAMS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
              Specialised Services
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #ff6a00, #ff8c3a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Built Around You
              </span>
            </h2>
          </div>
          <p className="text-white/80 text-sm max-w-xs font-light leading-relaxed lg:text-right border-l lg:border-l-0 lg:border-r border-[#ff6a00]/20 pl-4 lg:pl-0 lg:pr-4">
            From emergency trauma care to pioneering burn treatment — our programs address
            life's most critical moments with expertise and compassion.
          </p>
        </motion.div>

        {/* ── Bento Grid ─────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[265px_265px_265px] gap-4 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {/* ── Featured Card ─── */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.65 }}
            onClick={() => onNavigate(featured.page)}
            className="sm:col-span-2 lg:col-span-7 lg:row-span-2 relative overflow-hidden rounded-2xl cursor-pointer group border border-white/[0.06] hover:border-[#ff6a00]/30 transition-colors duration-500 min-h-[380px] lg:min-h-0"
          >
            <ImageWithFallback
              src={featured.image}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.04]"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-[#080808]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-transparent" />

            {/* Left accent stripe */}
            <div className="absolute left-0 top-10 bottom-10 w-[3px] bg-gradient-to-b from-transparent via-[#ff6a00] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

            {/* Large decorative number */}
            <span className="absolute top-4 right-6 text-[7rem] font-black text-white/[0.04] leading-none tabular-nums select-none group-hover:text-white/[0.07] transition-colors duration-500">
              {featured.number}
            </span>

            {/* Content — constrained to left 64% on desktop */}
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between lg:max-w-[64%]">
              {/* Category pill */}
              <div className="flex items-center gap-2 bg-black/55 backdrop-blur-sm border border-[#ff6a00]/25 rounded-full px-3 py-1 w-fit">
                <FeaturedIcon className="w-3 h-3 text-[#ff6a00]" />
                <span className="text-[9px] font-bold text-[#ff6a00] tracking-[0.15em] uppercase">
                  {featured.category}
                </span>
              </div>

              {/* Bottom block */}
              <div>
                <h3 className="text-3xl lg:text-[2.35rem] font-bold text-white leading-tight mb-3 group-hover:text-[#ff8c3a] transition-colors duration-400">
                  {featured.title}
                </h3>
                <p className="text-white text-sm leading-relaxed mb-6">
                  {featured.description}
                </p>

                {/* Stat pills */}
                {featured.stats && (
                  <div className="flex gap-3 mb-6">
                    {featured.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white/[0.06] border border-white/[0.08] rounded-xl px-4 py-2.5 backdrop-blur-sm"
                      >
                        <p className="text-[#ff6a00] text-xl font-bold leading-none mb-1">
                          {stat.value}
                        </p>
                        <p className="text-white/80 text-[10px] tracking-wide">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="inline-flex items-center gap-2 bg-[#ff6a00]/15 border border-[#ff6a00]/30 rounded-full px-5 py-2.5 text-sm font-semibold text-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:border-[#ff6a00] group-hover:text-white transition-all duration-400">
                  <span>{featured.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00] to-[#ff8c3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>

          {/* ── Regular Cards ─── */}
          {rest.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.page}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                onClick={() => onNavigate(item.page)}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group border border-white/[0.06] hover:border-[#ff6a00]/20 transition-colors duration-500 h-[260px] ${
                  i < 2 ? "lg:col-span-5" : "lg:col-span-4"
                }`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                    ["skin-bank", "abls"].includes(item.page)
                      ? "object-cover object-center"
                      : "object-contain object-center bg-[#0d0d0d]"
                  }`}
                />

                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Hover orange overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff6a00]/50 via-[#ff6a00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card number watermark */}
                <span className="absolute top-3 right-4 text-5xl font-black leading-none tabular-nums select-none text-white/[0.05] group-hover:text-white/[0.09] transition-colors duration-400">
                  {item.number}
                </span>

                {/* Category pill */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
                  <Icon className="w-3 h-3 text-[#ff6a00]" />
                  <span className="text-[9px] font-semibold text-white/75 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug transition-transform duration-300 group-hover:-translate-y-1">
                    {item.title}
                  </h3>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-400">
                    <p className="text-xs text-white leading-relaxed mb-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#ff6a00] text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00] to-[#ff8c3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardSection;
