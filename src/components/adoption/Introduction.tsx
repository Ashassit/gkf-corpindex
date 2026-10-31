import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Baby,   ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import adoption1 from "../../assets/adoption-1.webp";
import adoption2 from "../../assets/adoption-4.webp";
import mi01 from "../../assets/volunteer/mi01.jpg";
import mi02 from "../../assets/volunteer/mi02.jpg";

export function Introduction() {
  const { ref, inView } = useInView();

  const images = [adoption1, adoption2,mi01,mi02];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimerRef = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [paused, images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function pauseWithAutoResume() {
    setPaused(true);
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, 5000);
  }

  function next() {
    setCurrentIndex((i) => (i + 1) % images.length);
    pauseWithAutoResume();
  }
  function prev() {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    pauseWithAutoResume();
  }
  function goTo(i: number) {
    setCurrentIndex(i);
    pauseWithAutoResume();
  }

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <section ref={ref} className="section-container py-16 px-4 bg-[#080808]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Card with slideshow */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#111111] border border-white/[0.07] rounded-lg shadow-xl overflow-hidden h-full lg:min-h-[550px]">
            {/* Sliding Image Side */}
            <div
              ref={sliderRef}
              className="relative h-64 lg:h-full overflow-hidden"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => {
                if (!resumeTimerRef.current) setPaused(false);
              }}
              tabIndex={0}
            >
              {images.map((src, i) => (
                <motion.div
                  key={src + i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === currentIndex ? 1 : 0 }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0"
                  style={{ pointerEvents: i === currentIndex ? "auto" : "none" }}
                >
                  <ImageWithFallback
                    src={src}
                    alt={`Mazhalai Illam ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              ))}

              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-[#111111]/80 backdrop-blur-sm p-2 shadow hover:bg-[#111111] transition border border-white/[0.07]"
              >
                <ChevronLeft className="w-5 h-5 text-white/80" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-[#111111]/80 backdrop-blur-sm p-2 shadow hover:bg-[#111111] transition border border-white/[0.07]"
              >
                <ChevronRight className="w-5 h-5 text-white/80" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-white">
                  About Mazhalai Illam
                </h2>
              </div>

              <div className="space-y-4 text-white/80">
                <p>
                  Grace Kennett Foundation, Mazhalai Illam is a recognized
                  Specialized Adoption Agency and a home for the victims of
                  female infanticide, abandoned, surrendered, and orphaned
                  children. On average, we care for around 30 infants.
                </p>
                <p>
                  Children are admitted through government departments like the
                  District Child Protection Unit, District Child Welfare Committee,
                  and District Social Welfare Office. After admission, children are
                  kept in quarantine in the hospital for observation and various
                  medical examinations as per guidelines. Generally, children below
                  5 years are admitted.
                </p>
                <p>
                  For abandoned children, intimation is given to the nearest police
                  station and paper notifications are issued to trace biological
                  parents. Parents who surrender their child are given 60 days to
                  change their mind and claim their child. On completion of the
                  procedures, the District Child Welfare Committee declares the
                  child as legally free for adoption.
                </p>
                <p>
                  The child is then referred to Prospective Adoptive Parents who
                  have applied via CARINGS (CARA Website) as per their seniority
                  and preference.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, label: "30+", desc: "Infants on Average" },
              { icon: Users, label: "60 Days", desc: "Parent Reclaim Period" },
              { icon: FileText, label: "Below 5", desc: "Years Admission Age" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-[#0d0d0d] rounded-lg p-6 text-center border border-white/[0.07] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl mb-2 text-white">
                  {stat.label}
                </div>
                <p className="text-white/80">{stat.desc}</p>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}

