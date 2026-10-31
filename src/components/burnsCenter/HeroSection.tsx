import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  Users,
  Award,
  Clock,
  Phone,
  MapPin,
  Shield,
} from "lucide-react";
import { Button } from "../ui/button";
import { memo } from "react";

export const HeroSection = memo(() => {
  return (
    <section className="section-container relative overflow-hidden py-10 mt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"
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
            className="absolute w-2 h-2 bg-teal-400 rounded-full"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="mb-6">
            <h1 className="site-heading mb-8 leading-tight text-5xl md:text-6xl">
              <span className="mb-2 leading-tight bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 bg-clip-text text-transparent">
                Burns Treatment Hospital in Madurai
              </span>
              <br />
              <span>ABLS Centre — Advanced Burns Life Support</span>
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 mb-8">
            <p className="text-lg text-white/80 leading-relaxed">
              The Advanced Burns Life Support Centre (ABLS) at Grace Kennett
              Foundation Hospital is a well-established facility, equipped with
              modern technology and located in a convenient area for easy
              accessibility.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Our team of medical professionals is highly skilled, caring, and
              dedicated to providing comprehensive burns care services that
              cover preventive, promotive, curative, and rehabilitative aspects.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap mt-8 items-center justify-center gap-4 mb-8">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-xl shadow-teal-500/30 px-8 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: "-100%", opacity: 0.3 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Phone className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Emergency Contact</span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 px-8 relative overflow-hidden group bg-[#111111]"
              >
                <motion.div
                  className="absolute inset-0 bg-teal-500/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <MapPin className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Visit Us</span>
              </Button>
            </motion.div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-[#111111]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/[0.07] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl mb-1 bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent">
                  300+
                </div>
                <p className="text-white/80">Patients Treated Annually</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
              className="bg-[#111111]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/[0.07] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl mb-1 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                  30+
                </div>
                <p className="text-white/80">Years of Excellence</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-[#111111]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/[0.07] relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-rose-500 to-pink-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-3 mx-auto shadow-lg">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div className="text-4xl mb-1 bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
                  15
                </div>
                <p className="text-white/80">Dedicated Beds</p>
              </div>
            </motion.div>
          </div>

          {/* Detailed Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-3xl p-8 md:p-10 shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="bg-amber-400/20 backdrop-blur-sm rounded-xl p-3">
                  <Heart className="w-7 h-7 text-amber-300" />
                </div>
                <h3 className="text-amber-200">Our Commitment to Excellence</h3>
              </div>

              <div className="space-y-3 text-teal-50 max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed">
                  Having operated successfully for over three decades, we have
                  treated an average of 300 patients annually, with an average
                  bed occupancy of four patients per day.
                </p>
                <p className="text-lg leading-relaxed">
                  Our patient population comprises both accidental and suicidal
                  burns victims, reflecting the socioeconomic conditions
                  prevalent in our region.
                </p>
                <p className="text-lg leading-relaxed">
                  Our ABLS Centre occupies a dedicated floor, complete with ten
                  beds, separate cubicles, a burns bath unit, a burns operation
                  theatre, ventilators, dialysis units, and other essential
                  life-saving equipment.
                </p>
                <p className="text-lg leading-relaxed">
                  We have a competent and compassionate human resource team
                  consisting of doctors, nurses, and other paramedical staff,
                  all committed to providing the best possible care for our
                  patients.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="bg-amber-400/20 rounded-full p-2">
                    <Shield className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-center">Advanced Technology</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="bg-amber-400/20 rounded-full p-2">
                    <Heart className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-center">Compassionate Care</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="bg-amber-400/20 rounded-full p-2">
                    <Clock className="w-5 h-5 text-amber-300" />
                  </div>
                  <span className="text-center">24/7 Emergency Service</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
