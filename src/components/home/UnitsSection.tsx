import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Baby,
  GraduationCap,
  Home as HomeIcon,
  Heart,
  Utensils,
  Coffee,
  Gift,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import castle from "../../assets/castle-front-img.webp";
import communityCollege from "../../assets/ccgkf2.jpg";
import mazhalaiIllam from "../../assets/mazhalai-illam.webp";
import tranquil from "../../assets/Tranquil.webp";
import crown from "../../assets/crown.webp";
import eatery from "../../assets/eatery.webp";
import upShop from "../../assets/newImages/gift2.jpg";
import gkfHospital from "../../assets/newImages/newgkf.jpg";

const allUnits = [
  {
    title: "Grace Kennett Foundation Hospital",
    icon: Building2,
    description:
      "Our comprehensive health service takes care of your physical, mental and social needs.",
    category: "Healthcare",
    accent: "orange",
    image: gkfHospital,
    page: "hospital",
  },
  {
    title: "Mazhalai Illam (Child Adoption)",
    icon: Baby,
    description:
      "Grace Kennett Foundation, Mazhalai Illam is a recognized Specialized Adoption Agency.",
    category: "Social Service",
    accent: "orange",
    image: mazhalaiIllam,
    page: "adoption",
  },
  {
    title: "Community College",
    icon: GraduationCap,
    description:
      "The GKF Community College is run in association with the Bharat Sevak Samaj (BSS).",
    category: "Education",
    accent: "orange",
    image: communityCollege,
    page: "community-college",
  },
  {
    title: "The Castle & Arena",
    icon: HomeIcon,
    description:
      "The Castle and Arena can be hired to host meetings and other social events.",
    category: "Events",
    accent: "orange",
    image: castle,
    page: "castle-arena",
  },
  {
    title: "Tranquil",
    icon: Heart,
    description: "Ayurveda Therapies for Women",
    category: "Wellness",
    accent: "orange",
    image: tranquil,
    page: "tranquil",
  },
  {
    title: "Eatery",
    icon: Utensils,
    description:
      "Diet online - Eatery GKF - is our production and sales unit of Hospital diet, Food and Beverages.",
    category: "Food Service",
    accent: "orange",
    image: eatery,
    page: "eatery",
  },
  {
    title: "Crown",
    icon: Coffee,
    description: "An Airbnb accommodation",
    category: "Accommodation",
    accent: "orange",
    image: crown,
    page: "",
    airbnbUrl:
      "https://www.airbnb.co.in/rooms/27318036?source_impression_id=p3_1600923439_mk9T53agwxGtarOG",
  },
  {
    title: "Gifts - UPshop",
    icon: Gift,
    description: "Upcycling, also known as creative reuse.",
    category: "Sustainability",
    accent: "orange",
    image: upShop,
    page: "upshop",
  },
];

interface UnitsSectionProps {
  onNavigate: (page: string) => void;
}

export function UnitsSection({ onNavigate }: UnitsSectionProps) {
  const handleUnitClick = (unit: (typeof allUnits)[0]) => {
    if (unit.title === "Crown" && unit.airbnbUrl) {
      window.open(unit.airbnbUrl, "_blank");
    } else if (unit.page) {
      onNavigate(unit.page);
    }
  };

  return (
    <section
      className="section-container bg-[#0d0d0d] relative overflow-hidden"
      id="units"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Orange glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#ff6a00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#ff6a00]/15 border border-[#ff6a00]/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] animate-pulse" />
            <span className="text-[#ff6a00] text-xs font-semibold tracking-wider uppercase">
              Our Initiatives
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            A Foundation Built on<br />
            <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Many Pillars
            </span>
          </h2>
          <p className="text-white/80 text-base max-w-xl font-light">
            Beyond the hospital — healthcare, education, wellness, sustainable living, and community
            service united under one mission.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {allUnits.map((unit, index) => (
            <motion.div
              key={unit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              onClick={() => handleUnitClick(unit)}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-white/[0.05] hover:border-[#ff6a00]/20 transition-colors duration-500"
            >
              {/* Photo */}
              <ImageWithFallback
                src={unit.image}
                alt={unit.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Always-visible gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover orange overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff6a00]/65 via-[#ff6a00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category pill with icon */}
              <div className="absolute top-4 left-4 bg-black/55 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1 flex items-center gap-1.5">
                <unit.icon className="w-3 h-3 text-[#ff6a00]" />
                <span className="text-[9px] font-semibold text-white/75 uppercase tracking-wider">
                  {unit.category}
                </span>
              </div>

              {/* Top-right external link indicator for Crown */}
              {unit.title === "Crown" && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full p-1.5">
                  <ExternalLink className="w-3 h-3 text-white/60" />
                </div>
              )}

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                <h3 className="text-base font-semibold text-white mb-2 leading-snug transition-transform duration-300 group-hover:-translate-y-1">
                  {unit.title}
                </h3>
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-400">
                  <p className="text-xs text-white leading-relaxed mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {unit.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {unit.title === "Crown" ? (
                      <>
                        <ExternalLink className="w-3.5 h-3.5 text-[#ff6a00]" />
                        <span>Book on Airbnb</span>
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                        <span>Learn more</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom orange accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff6a00] to-[#ff8c3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
