import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  themeGradient: {
    from: string;
    to: string;
  };
}

export function TestimonialCarousel({ title, subtitle, testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setInterval(() => setCurrentIndex(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const t = testimonials[currentIndex];

  const titleWords = title.split(' ');
  const accentWord = titleWords.slice(-1)[0];
  const mainWords = titleWords.slice(0, -1).join(' ');

  return (
    <section className="bg-[#0d0d0d] relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -top-32 right-1/3 w-[700px] h-[350px] bg-[#ff6a00]/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#ff6a00]/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
              <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
              {mainWords}<br />
              <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {accentWord}
              </span>
            </h2>
          </div>
          {subtitle && (
            <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed lg:text-right border-l lg:border-l-0 lg:border-r border-[#ff6a00]/20 pl-4 lg:pl-0 lg:pr-4">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/[0.03] to-transparent pointer-events-none" />

              <Quote className="w-12 h-12 text-[#ff6a00]/35 mb-8" />

              <p className="text-white/65 text-base md:text-lg leading-relaxed italic mb-8 min-h-[80px] relative z-10">
                "{t.quote}"
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.07] pt-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/10 flex-shrink-0"
                    style={{ boxShadow: "0 0 0 2px rgba(255,106,0,0.2)" }}>
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-white font-semibold leading-none mb-1">{t.name}</p>
                    <p className="text-[#ff6a00] text-sm">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ff6a00] text-[#ff6a00]" />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#ff6a00]/70 via-[#ff8c3a]/40 to-transparent rounded-full" />
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex items-center gap-4 mt-8">
            <motion.button
              onClick={() => setCurrentIndex(p => (p - 1 + testimonials.length) % testimonials.length)}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-white/[0.04] text-white/50 hover:border-[#ff6a00]/40 hover:text-white transition-all duration-300"
              aria-label="Previous testimonial">
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)}
                  className={`rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 h-[3px] bg-[#ff6a00]" : "w-[6px] h-[6px] bg-white/20 hover:bg-white/40"}`} />
              ))}
            </div>
            <motion.button
              onClick={() => setCurrentIndex(p => (p + 1) % testimonials.length)}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#ff6a00]/30 bg-[#ff6a00]/10 text-white hover:bg-[#ff6a00]/20 transition-all duration-300"
              aria-label="Next testimonial">
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
