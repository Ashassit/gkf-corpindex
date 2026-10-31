import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../assets/banner1.webp";
import banner3 from "../../assets/banner3-1024x379.webp";
import fbanner from "../../assets/newImages/banner3.webp";
const INTERVAL = 8000;

const heroQuotes = [
  {
    quote: `WHEN LIFE CHANGES IN A FLASH.....\n    EVERY SECOND MATTERS.`,
    tagline: "",
    image: banner1,
    position: "center top",
  },
  {
    quote: "HOME FOR EVERY CHILD",
    tagline: `Every day thousand seeds are planted, a thousand seeds grow,
Many are trampled upon by mankind,
Only some survive with Divine glow,
Should I cry for the distressed ones?
or laugh with the cherished ones?
– Anonymous`,
    image: banner3,
    position: "center",
  },
  {
    quote: "Gift Life",
    tagline:
      "Do a deed of simple kindness\nThough its end you may not see;\nIt may reach, like widening ripples,\nDown a long eternity.",
    image: fbanner,
    position: "center",
  },
];

export function HeroSection() {
  // Mobile state
  const [currentQuote, setCurrentQuote] = useState(0);
  const [, setDirection] = useState(1);

  // Desktop state
  const [current, setCurrent] = useState(0);

  // Mobile auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % heroQuotes.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  // Desktop auto-advance
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroQuotes.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  const paginateMobile = (dir: number) => {
    setCurrentQuote((prev) =>
      dir > 0
        ? (prev + 1) % heroQuotes.length
        : (prev - 1 + heroQuotes.length) % heroQuotes.length
    );
  };

  const paginate = (dir: number) =>
    setCurrent((p) =>
      dir > 0 ? (p + 1) % heroQuotes.length : (p - 1 + heroQuotes.length) % heroQuotes.length
    );

  const desktopSlide = heroQuotes[current];

  return (
    <>
      {/* ── MOBILE LAYOUT ──────────────────────────────────── */}
      <div className="md:hidden mt-5">
        <div className="relative bg-black overflow-hidden">
          <motion.img
            key={currentQuote}
            src={heroQuotes[currentQuote].image}
            alt={heroQuotes[currentQuote].quote}
            className="w-full h-auto min-h-[260px] object-cover object-center block"
            fetchPriority={currentQuote === 0 ? "high" : "auto"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

          <div className="absolute inset-x-0 bottom-7 px-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                className="text-center"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-sm font-bold text-orange-400 tracking-widest uppercase leading-snug drop-shadow-lg">
                  {heroQuotes[currentQuote].quote
                    .split("\n")
                    .map((l) => l.trim())
                    .filter(Boolean)
                    .join("  ·  ")}
                </p>

                {heroQuotes[currentQuote].tagline && (
                  <div className="mt-2 border-t border-orange-500/30 pt-2">
                    {heroQuotes[currentQuote].tagline
                      .split("\n")
                      .filter((l) => l.trim())
                      .map((line, i) => (
                        <p key={i} className="text-[11px] text-white italic leading-[1.55] drop-shadow-md">
                          {line.trim()}
                        </p>
                      ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {heroQuotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentQuote ? 1 : -1);
                  setCurrentQuote(index);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentQuote ? "w-5 h-1.5 bg-orange-500" : "w-1.5 h-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={() => paginateMobile(-1)}
            whileTap={{ scale: 0.85 }}
            className="absolute left-2 top-1/3 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white z-10"
            style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(251,146,60,0.5)" }}
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={() => paginateMobile(1)}
            whileTap={{ scale: 0.85 }}
            className="absolute right-2 top-1/3 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white z-10"
            style={{ background: "rgba(0,0,0,0.55)", border: "1px solid rgba(251,146,60,0.5)" }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* ── DESKTOP ────────────────────────────────────────── */}
      <section className="hidden md:block relative h-[calc(80vh-5rem)] overflow-hidden bg-black">

        {/* Ken Burns image */}
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={desktopSlide.image}
            alt=""
            fetchPriority={current === 0 ? "high" : "auto"}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: desktopSlide.position }}
            initial={{ opacity: 0, scale: 1.07 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" },
            }}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

        {/* Quote + tagline — centered at bottom */}
        <div className="absolute inset-x-0 bottom-16 px-12 lg:px-20 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-400 tracking-widest uppercase leading-snug drop-shadow-lg">
                {desktopSlide.quote
                  .split("\n")
                  .map((l) => l.trim())
                  .filter(Boolean)
                  .join("  ·  ")}
              </p>

              {desktopSlide.tagline && (
                <div className="mt-4 border-t border-orange-500/30 pt-4 max-w-2xl mx-auto">
                  {desktopSlide.tagline
                    .split("\n")
                    .filter((l) => l.trim())
                    .map((line, i) => (
                      <p key={i} className="text-sm text-white italic leading-[1.8] drop-shadow-md">
                        {line.trim()}
                      </p>
                    ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav: arrows + dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          <motion.button onClick={() => paginate(-1)} whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 bg-white/[0.05] text-white/50 hover:bg-white/10 hover:text-white transition-all duration-300">
            <ChevronLeft className="w-4 h-4" />
          </motion.button>
          <div className="flex items-center gap-2">
            {heroQuotes.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                whileTap={{ scale: 0.9 }}
                animate={{ width: i === current ? 28 : 6 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`h-[3px] rounded-full transition-colors duration-500 ${i === current ? "bg-[#ff6a00]" : "bg-white/25"}`}
              />
            ))}
          </div>
          <motion.button onClick={() => paginate(1)} whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#ff6a00]/35 bg-[#ff6a00]/10 text-white hover:bg-[#ff6a00]/25 transition-all duration-300">
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Auto-progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/[0.07] z-30">
          <motion.div
            key={current}
            className="h-full"
            style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: INTERVAL / 1000, ease: "linear" }}
          />
        </div>
      </section>

      {/* ── STATS STRIP — desktop only ─── */}
      <div className="hidden md:block bg-[#0d0d0d] border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { value: "47+", label: "Years of Service", sub: "Est. 1977" },
              { value: "24/7", label: "Emergency Care", sub: "Always open" },
              { value: "100+", label: "Skin Retrievals", sub: "Skin Bank" },
              { value: "500+", label: "Volunteers", sub: "IVY Program" },
            ].map((stat) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="flex items-center gap-4 px-8 py-5">
                <div className="w-[2px] h-9 bg-[#ff6a00]/40 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-[#ff6a00] leading-none mb-1">{stat.value}</p>
                  <p className="text-sm text-white/85 font-medium">{stat.label}</p>
                  <p className="text-[11px] text-white/70 mt-0.5 tracking-wide">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
