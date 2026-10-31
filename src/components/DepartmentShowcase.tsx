import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Layers, Activity, Heart, Sparkles, Users, Microscope, Pill, Stethoscope, Zap, Plus } from "lucide-react";
import { Badge } from "./ui/badge";

interface GalleryImage {
  url: string;
  caption: string;
}
interface Department {
  id: string;
  name: string;
  tagline: string;
  icon: any;
  gradient: string;
  accentColor: string;
  images: GalleryImage[];
  size: "small" | "medium" | "large" | "wide" | "tall";
}

const departments: Department[] = [
  {
    id: "ward",
    name: "General Ward",
    tagline: "Comfort & Recovery",
    icon: Users,
    gradient: "from-blue-500 via-blue-600 to-indigo-600",
    accentColor: "blue",
    size: "large",
    images: [
      {
        url: "https://images.unsplash.com/photo-1749087869560-1f00fe44b58e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHdhcmQlMjBiZWRzfGVufDF8fHx8MTc2MTA3NjMxOHww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Modern Ward Facilities — Patient-Centered Care",
      },
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
        caption: "Spacious Rooms — Healing Environment",
      },
      {
        url: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800",
        caption: "24/7 Nursing Care — Always Present",
      },
    ],
  },
  {
    id: "ae",
    name: "A&E",
    tagline: "Rapid Emergency Response",
    icon: Zap,
    gradient: "from-red-500 via-orange-500 to-amber-500",
    accentColor: "red",
    size: "wide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584690237767-9b063e0c6392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBkZXBhcnRtZW50JTIwaG9zcGl0YWx8ZW58MXx8fHwxNzYxMTE0MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Accident & Emergency — Life-Saving Care",
      },
      {
        url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800",
        caption: "Trauma Unit — Expert Critical Response",
      },
      {
        url: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
        caption: "Emergency Team — Ready 24/7",
      },
    ],
  },
  {
    id: "skinbank",
    name: "Skin Bank",
    tagline: "Tissue Preservation",
    icon: Layers,
    gradient: "from-teal-500 via-emerald-500 to-green-600",
    accentColor: "teal",
    size: "medium",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602926280191-948de7f729c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2tpbiUyMHRpc3N1ZXxlbnwxfHx8fDE3NjExMTQwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Skin Bank — Advanced Tissue Storage",
      },
      {
        url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800",
        caption: "Cryopreservation Technology — Life Saving",
      },
      {
        url: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800",
        caption: "Grafting Solutions — Burn Care Excellence",
      },
    ],
  },
  {
    id: "icu",
    name: "ICU",
    tagline: "Critical Care Excellence",
    icon: Activity,
    gradient: "from-purple-500 via-violet-600 to-purple-700",
    accentColor: "purple",
    size: "tall",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633488781325-d36e6818d0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMElDVSUyMHJvb218ZW58MXx8fHwxNzYxMTE0MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Intensive Care — Advanced Monitoring",
      },
      {
        url: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
        caption: "State-of-the-Art Equipment — Precision Care",
      },
      {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800",
        caption: "Critical Support — Expert Team",
      },
    ],
  },
  {
    id: "neonatal",
    name: "Neonatal Unit",
    tagline: "Tiny Lives, Big Care",
    icon: Heart,
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    accentColor: "pink",
    size: "medium",
    images: [
      {
        url: "https://images.unsplash.com/photo-1702428903130-dda216ebd63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uYXRhbCUyMGNhcmUlMjBiYWJ5fGVufDF8fHx8MTc2MTExNDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "NICU — Specialized Newborn Care",
      },
      {
        url: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800",
        caption: "Incubation Technology — Precious Care",
      },
      {
        url: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800",
        caption: "Pediatric Experts — Nurturing Life",
      },
    ],
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    tagline: "Restoring Mobility",
    icon: Plus,
    gradient: "from-amber-500 via-orange-600 to-red-600",
    accentColor: "orange",
    size: "small",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582380375444-275b280990a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnRob3BlZGljJTIwc3VyZ2VyeSUyMGJvbmVzfGVufDF8fHx8MTc2MTExNDA2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Orthopedic Surgery — Precision Treatment",
      },
      {
        url: "https://images.unsplash.com/photo-1621838422788-71cde6793da2?w=800",
        caption: "Joint Replacement — New Beginnings",
      },
      {
        url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800",
        caption: "Sports Medicine — Recovery & Strength",
      },
    ],
  },
  {
    id: "laboratory",
    name: "Laboratory",
    tagline: "Diagnostic Precision",
    icon: Microscope,
    gradient: "from-cyan-500 via-sky-600 to-blue-700",
    accentColor: "cyan",
    size: "medium",
    images: [
      {
        url: "https://images.unsplash.com/photo-1682663947127-ac9d59d7f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzYxMDQ5ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Medical Lab — Accurate Diagnostics",
      },
      {
        url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800",
        caption: "Pathology Services — Detailed Analysis",
      },
      {
        url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
        caption: "Advanced Testing — Clinical Excellence",
      },
    ],
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    tagline: "Medication Management",
    icon: Pill,
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    accentColor: "green",
    size: "small",
    images: [
      {
        url: "https://images.unsplash.com/photo-1730388843790-f753ecf9ba94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHBoYXJtYWN5JTIwcGlsbHN8ZW58MXx8fHwxNzYxMTE0MDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Hospital Pharmacy — Safe Dispensing",
      },
      {
        url: "https://images.unsplash.com/photo-1513544705284-99373737fab6?w=800",
        caption: "Medication Safety — Expert Counseling",
      },
      {
        url: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800",
        caption: "Clinical Pharmacy — Patient Care",
      },
    ],
  },
  {
    id: "surgery",
    name: "Operation Theatre",
    tagline: "Surgical Excellence",
    icon: Stethoscope,
    gradient: "from-indigo-500 via-purple-600 to-violet-700",
    accentColor: "indigo",
    size: "wide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1728474372689-c3072b79806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG9wZXJhdGluZyUyMHJvb218ZW58MXx8fHwxNzYxMDExOTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Modern Operating Theatre — Precision Surgery",
      },
      {
        url: "https://images.unsplash.com/photo-1584467735815-f778f274e296?w=800",
        caption: "Surgical Innovation — Expert Team",
      },
      {
        url: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800",
        caption: "Advanced OR Technology — Safe Procedures",
      },
    ],
  },
  {
    id: "physio",
    name: "Physiotherapy",
    tagline: "Movement & Recovery",
    icon: Activity,
    gradient: "from-lime-500 via-green-600 to-emerald-700",
    accentColor: "lime",
    size: "tall",
    images: [
      {
        url: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMHRoZXJhcHklMjByZWhhYmlsaXRhdGlvbnxlbnwxfHx8fDE3NjEwNTYzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Rehabilitation Center — Restore Function",
      },
      {
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
        caption: "Physical Therapy — Expert Guidance",
      },
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
        caption: "Recovery Programs — Back to Life",
      },
    ],
  },
];

export function DepartmentShowcase() {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (dept: Department) => {
    setSelectedDept(dept);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedDept(null);
    setCurrentImageIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!selectedDept) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft" && currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else if (
        e.key === "ArrowRight" &&
        currentImageIndex < selectedDept.images.length - 1
      ) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedDept, currentImageIndex]);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "tall":
        return "md:row-span-2";
      case "medium":
        return "md:col-span-1";
      case "small":
        return "md:col-span-1";
      default:
        return "md:col-span-1";
    }
  };

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Mesh Gradient */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [null, Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%"],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full blur-sm"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
         

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white mb-6 relative inline-block text-4xl md:text-6xl"
          >
            Inside Our{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Units
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/60 max-w-3xl mx-auto mt-8 leading-relaxed text-lg"
          >
            Explore our specialized units through real glimpses of care,
            technology, and dedication. Every space designed for healing.
          </motion.p>
        </motion.div>

        {/* Innovative Bento Grid Gallery */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              const isHovered = hoveredId === dept.id;

              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`${getSizeClasses(dept.size)} group cursor-pointer`}
                  onMouseEnter={() => setHoveredId(dept.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleCardClick(dept)}
                >
                  <motion.div
                    className="relative h-full rounded-3xl overflow-hidden shadow-xl"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                  >
                    {/* Background Image with Parallax */}
                    <motion.div
                      className="absolute inset-0"
                      animate={
                        isHovered ? { scale: 1.1 } : { scale: 1 }
                      }
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={dept.images[0].url}
                        alt={dept.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Glass Morphism Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-60 mix-blend-multiply`}
                      animate={
                        isHovered ? { opacity: 0.75 } : { opacity: 0.6 }
                      }
                      transition={{ duration: 0.4 }}
                    />

                    {/* Noise Texture */}
                    <div
                      className="absolute inset-0 opacity-10 mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)",
                      }}
                    />

                    {/* Content Container */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      {/* Top Section - Icon & Badge */}
                      <div className="flex items-start justify-between">
                        <motion.div
                          className="relative"
                          animate={
                            isHovered
                              ? { rotate: 360, scale: 1.1 }
                              : { rotate: 0, scale: 1 }
                          }
                          transition={{ duration: 0.6 }}
                        >
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <motion.div
                            className="absolute -inset-2 bg-white/10 rounded-2xl -z-10 blur-lg"
                            animate={
                              isHovered ? { scale: 1.3 } : { scale: 1 }
                            }
                            transition={{ duration: 0.4 }}
                          />
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={
                            isHovered
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: 20 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <Badge className="bg-black/70 backdrop-blur-sm text-white border-0 shadow-lg px-3 py-1">
                            {dept.images.length} Photos
                          </Badge>
                        </motion.div>
                      </div>

                      {/* Bottom Section - Text */}
                      <div className="space-y-2">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          transition={{ delay: index * 0.08 + 0.2 }}
                        >
                          <h3 className="text-white mb-1 drop-shadow-lg">
                            {dept.name}
                          </h3>
                          <p className="text-white/90 text-sm italic drop-shadow">
                            {dept.tagline}
                          </p>
                        </motion.div>

                        {/* Progress Bar Animation */}
                        <motion.div
                          className="h-1 bg-white/30 rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.08 + 0.4 }}
                        >
                          <motion.div
                            className="h-full bg-orange-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={
                              isHovered ? { width: "100%" } : { width: "60%" }
                            }
                            transition={{ duration: 0.6 }}
                          />
                        </motion.div>

                        {/* View Details Button */}
                        <motion.div
                          className="flex items-center gap-2 text-white text-sm"
                          initial={{ opacity: 0, y: 10 }}
                          animate={
                            isHovered
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <span>View Gallery</span>
                          <motion.svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={isHovered ? { x: 4 } : { x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </div>

                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      animate={
                        isHovered
                          ? { translateX: "100%" }
                          : { translateX: "-100%" }
                      }
                      transition={{ duration: 0.8 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        
      </div>

      {/* Immersive Full-Screen Modal */}
      <AnimatePresence>
        {selectedDept && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} viewport={{ once: true }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
              className="fixed top-6 right-6 z-50 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 group"
            >
              <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Department Info Header */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="fixed top-6 left-6 z-40"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`bg-gradient-to-r ${selectedDept.gradient} p-6 rounded-3xl shadow-2xl border border-white/20`}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center"
                  >
                    <selectedDept.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-white mb-1 text-2xl">
                      {selectedDept.name}
                    </h2>
                    <p className="text-white/90 italic">
                      {selectedDept.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content Container */}
            <div
              className="h-full w-full flex flex-col items-center justify-center pt-28 pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full max-h-[calc(100vh-8rem)] flex flex-col">
                {/* Main Image Display */}
                <div className="relative mb-4 flex-1 min-h-0 px-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }} viewport={{ once: true }}
                      exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                      {/* Main Image */}
                      <img
                        src={selectedDept.images[currentImageIndex].url}
                        alt={selectedDept.images[currentImageIndex].caption}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Image Caption */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-10"
                      >
                        <div className="max-w-4xl">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className={`h-1 bg-gradient-to-r ${selectedDept.gradient} rounded-full mb-4`}
                          />
                          <h3 className="text-white mb-3 text-2xl">
                            {selectedDept.images[currentImageIndex].caption}
                          </h3>
                          <div className="flex items-center gap-6 text-white/80">
                            <span className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
                              Image {currentImageIndex + 1} of{" "}
                              {selectedDept.images.length}
                            </span>
                            <span className="flex items-center gap-2">
                              <Sparkles className="w-4 h-4" />
                              {selectedDept.name}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* 3D Border Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/10 pointer-events-none" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows - Inside the container */}
                  {currentImageIndex > 0 && (
                    <motion.button
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      whileHover={{ scale: 1.1, x: -4 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border-2 border-white/30 shadow-2xl group z-10"
                    >
                      <motion.svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [-2, 2, -2] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M15 19l-7-7 7-7"
                        />
                      </motion.svg>
                    </motion.button>
                  )}
                  {currentImageIndex < selectedDept.images.length - 1 && (
                    <motion.button
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      whileHover={{ scale: 1.1, x: 4 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border-2 border-white/30 shadow-2xl group z-10"
                    >
                      <motion.svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [-2, 2, -2] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </motion.button>
                  )}
                </div>

                {/* Enhanced Thumbnail Strip with 3D Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative flex-shrink-0 px-4"
                >
                  <div className="flex gap-4 justify-center items-center overflow-x-auto pb-2">
                    {selectedDept.images.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        whileHover={{ scale: 1.05, y: -4, rotateY: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`relative flex-shrink-0 w-36 h-24 rounded-2xl overflow-hidden transition-all duration-300 ${
                          index === currentImageIndex
                            ? "ring-4 ring-white shadow-2xl"
                            : "opacity-60 hover:opacity-100 ring-2 ring-white/20"
                        }`}
                      >
                        <img
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${selectedDept.gradient} mix-blend-multiply transition-opacity ${
                            index === currentImageIndex
                              ? "opacity-20"
                              : "opacity-40"
                          }`}
                        />

                        {/* Index Badge */}
                        <div className="absolute top-2 left-2">
                          <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                            {index + 1}
                          </div>
                        </div>

                        {/* Active Indicator */}
                        {index === currentImageIndex && (
                          <motion.div
                            layoutId="activeIndicator"
                            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r ${selectedDept.gradient} rounded-full`}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden max-w-md mx-auto"
                  >
                    <motion.div
                      className={`h-full bg-gradient-to-r ${selectedDept.gradient} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{
                        width: `${
                          ((currentImageIndex + 1) / selectedDept.images.length) *
                          100
                        }%`,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Keyboard Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>
                <span>Previous</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd>
                <span>Next</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
                <span>Close</span>
              </div>
            </motion.div>

            {/* Animated Background Particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, Math.random() * window.innerHeight],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
