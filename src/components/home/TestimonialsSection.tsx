import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import volunteers1 from "../../assets/volunteer/volunteers-hunger.webp";
import volunteers3 from "../../assets/volunteer/volunteers-joanne.webp";

const testimonials = [
  {
    name: "Ms Joanne Baldwin",
    role: "Volunteer since 2012",
    image: volunteers3,
    quote: `Volunteering at Grace Kennett Foundation has been the most rewarding experience of my life. I have volunteered five times since 2012 and I am so excited to go back. Every part of the children's care is overseen with such high integrity and compassion, and the care and dedication of all the staff are profound. These children know from the moment they arrive that they are loved, and everything is done to find them a family of their own.`,
    rating: 5,
  },
  {
    name: "Ms Yvonne Hunger",
    role: "Volunteer, Switzerland",
    image: volunteers1,
    quote: `Since the first voluntary service in 2010, I am yearly working as a volunteer at Mazhalai Illam home and pour my heart and soul into caring for the children. I am highly committed to supporting the child care infrastructure on the spot. My Passion – My Children – My Love.`,
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="bg-[#080808] relative overflow-hidden py-24" id="volunteer">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 right-1/3 w-[600px] h-[300px] bg-[#ff6a00]/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#ff6a00]/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
              <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Volunteer Voices</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
              Stories That<br />
              <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Inspire
              </span>
            </h2>
          </div>
          <p className="text-white/80 text-sm max-w-xs font-light leading-relaxed lg:text-right border-l lg:border-l-0 lg:border-r border-[#ff6a00]/20 pl-4 lg:pl-0 lg:pr-4">
            Words from those who've given their time and heart to the children of GKF.
          </p>
        </motion.div>

        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/[0.03] to-transparent pointer-events-none" />

              <Quote className="w-12 h-12 text-[#ff6a00]/35 mb-8" />

              <div className="md:flex md:gap-10 md:items-start">
                {/* Image */}
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-white/10"
                    style={{ boxShadow: "0 0 0 3px rgba(255,106,0,0.15), 0 12px 40px rgba(0,0,0,0.5)" }}>
                    <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-white text-base md:text-lg leading-relaxed italic mb-8">
                    "{t.quote}"
                  </p>

                  <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-white font-semibold text-lg leading-none mb-1">{t.name}</p>
                      <p className="text-[#ff6a00] text-sm">{t.role}</p>
                    </div>
                    <div className="flex gap-1.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ff6a00] text-[#ff6a00]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#ff6a00]/70 via-[#ff8c3a]/40 to-transparent rounded-full" />
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex items-center gap-4 mt-8">
            <motion.button
              onClick={() => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/[0.04] text-white/50 hover:border-[#ff6a00]/40 hover:text-white transition-all duration-300">
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-[3px] bg-[#ff6a00]" : "w-[6px] h-[6px] bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
            <motion.button
              onClick={() => setCurrent(p => (p + 1) % testimonials.length)}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#ff6a00]/30 bg-[#ff6a00]/10 text-white hover:bg-[#ff6a00]/20 transition-all duration-300">
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
