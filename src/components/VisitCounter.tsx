import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";

const BASE_OFFSET = 102002;

function RollingDigit({
  value,
  index,
  start,
}: {
  value: number;
  index: number;
  start: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const DIGIT_HEIGHT = 56;

  return (
    <div className="relative w-10 h-14 overflow-hidden bg-black rounded-lg border border-orange-500/30 shadow-inner">
      <motion.div
        initial={{ y: 0 }} // ALWAYS start at 0
        animate={{
          y: start && !reduceMotion ? -value * DIGIT_HEIGHT : 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 1,
          delay: index * 0.12,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full"
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-14 flex items-center justify-center text-5xl font-mono text-orange-400"
          >
            {i}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function VisitCounter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  

  const [isVisible, setIsVisible] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [visits, setVisits] = useState(0);

  // 👀 Observe visibility
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 🎯 Fetch + trigger animation
  useEffect(() => {
  if (!isVisible) return;

  const ANIM_KEY = "visit-counter-animated";

  fetch("https://chatbot2025gkf.onrender.com/api/stats/visit")
    .then((res) => res.json())
    .then((data) => {
      setVisits((data.visits || 0) + BASE_OFFSET);

      const alreadyAnimated = sessionStorage.getItem(ANIM_KEY);

      if (!alreadyAnimated) {
        setTimeout(() => {
          setStartAnimation(true);
          sessionStorage.setItem(ANIM_KEY, "true");
        }, 150);
      } else {
        setStartAnimation(true);
      }
    })
    .catch(() => {
      setVisits(BASE_OFFSET);
      setStartAnimation(true);
    });
}, [isVisible]);


  const visitsStr = visits.toString().padStart(6, "0");
  const digits = visitsStr.split("").map(Number);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center gap-6 p-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <Users className="w-6 h-6 text-orange-500" />
        <h3 className="text-xl tracking-wide text-white-700">
          Visitors
        </h3>
      </motion.div>

      {/* Odometer */}
      <div className="flex gap-3">
        {digits.map((digit, index) => (
          <RollingDigit
  key={`${index}-${startAnimation}`}
  value={digit}
  index={index}
  start={Boolean(startAnimation)}
/>

        ))}
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="text-xs uppercase tracking-widest text-orange-400/60"
      >
        Total Count
      </motion.div>
    </div>
  );
}

