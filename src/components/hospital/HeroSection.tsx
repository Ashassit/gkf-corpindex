import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Stethoscope } from "lucide-react";
import { Button } from "../ui/button";
import { memo } from "react";

interface HeroSectionProps {
  onHealthCheckupClick: () => void;
}

export const HeroSection = memo(({ onHealthCheckupClick }: HeroSectionProps) => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity: heroOpacity, scale: heroScale }}
      className="relative overflow-visible py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * 800,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
            className="absolute w-2 h-2 bg-orange-400 rounded-full"
          />
        ))}
      </div>
      <div className="container mx-auto px-4 mt-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="mb-8 leading-tight text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="text-white">Multi-Speciality Care</span>
          </h1>

         <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                      We bring together{" "}
                      <span className="text-orange-600">advanced medicine</span>,{" "}
                      <span className="text-orange-600">compassionate care</span>, and{" "}
                      <span className="text-orange-600">social purpose</span>{" "}
                      under one roof.
                    </p>

  <p className="text-lg md:text-xl text-white/80  leading-relaxed">
                      Every visit supports the cause of{" "}
                      <span className="font-semibold underline decoration-white/40 decoration-2 underline-offset-2">
                        child care and adoption
                      </span>{" "}
                      — turning your healing into hope for another life.
                    </p>

          <div className="flex flex-wrap mt-16 items-center justify-center gap-4 mb-16">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/30 px-8 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%", opacity: 0.3 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Calendar className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Book an Appointment</span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                onClick={onHealthCheckupClick}
                className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500/10 bg-[#111111] px-8 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-orange-500/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Stethoscope className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Book a Health Checkup</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});

HeroSection.displayName = "HeroSection";
