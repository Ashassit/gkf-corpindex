import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function BurnsHero() {
  const points = [
    "The Advanced Burn Life Support Centre (ABLS) at Grace Kennett Foundation Hospital is a well-established facility, equipped with modern technology and located in a convenient area for easy accessibility.",
    "Our team of medical professionals is highly skilled, caring, and dedicated to providing comprehensive burn care services that cover preventive, promotive, curative, and rehabilitative aspects.",
    "Having operated successfully for over three decades, we have treated an average of 300 patients annually, with an average bed occupancy of four patients per day.",
    "Our patient population comprises both accidental and suicidal burn victims, reflecting the socioeconomic conditions prevalent in our region.",
    "Our ABLS Centre occupies a dedicated floor, complete with ten beds, separate cubicles, a burn bath unit, a burn operation theatre, ventilators, dialysis units, and other essential life-saving equipment.",
    "We have a competent and compassionate human resource team consisting of doctors, nurses, and other paramedical staff, all committed to providing the best possible care for our patients.",
  ];

  return (
    <section
      id="home"
      className="section-container relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50 to-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center gap-12">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-[#FF6B35]" fill="#FF6B35" />
            <span className="text-[#FF6B35] font-medium">
              Advanced Burn Life Support Centre
            </span>
          </div>

          <h1 className="site-heading text-3xl sm:text-4xl font-bold text-black mb-6">
            Burn Centre
            <br />
            <span className="text-[#FF6B35]">
              Grace Kennett Foundation Hospital
            </span>
          </h1>
        </motion.div>

        {/* Bullet Points */}
        <ul className="flex flex-col gap-5 max-w-3xl text-black/80 text-lg leading-relaxed text-left">
          {points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.3, duration: 0.8 }}
              className="flex items-start gap-3"
            >
              <span className="w-3 h-3 mt-2 bg-[#FF6B35] rounded-full flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 2.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button
            size="lg"
            className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white"
            onClick={() => {
              const element = document.getElementById("first-aid");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Emergency First Aid
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10"
            onClick={() => {
              const element = document.getElementById("about");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </Button>
        </motion.div> */}
        {/* 
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 2.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-black/70 mt-6"
        >
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#FF6B35]" />
            <span>24/7 Emergency: 108</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#FF6B35]" />
            <span>Madurai District, Tamil Nadu</span>
          </div>
        </motion.div> */}
        {/* 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 3.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
        >
          {[
            { number: "30+", label: "Years of Excellence", color: "bg-[#FF6B35]" },
            { number: "300+", label: "Patients Annually", color: "bg-red-600" },
            { number: "10", label: "Dedicated Beds", color: "bg-black" },
            { number: "24/7", label: "Emergency Care", color: "bg-[#FF6B35]" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 3.3 + index * 0.2 }}
              whileHover={{
                scale: 1.08,
                y: -6,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300, damping: 18 },
              }}
              className={`${stat.color} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-4xl mb-2 font-bold">{stat.number}</div>
              <div className="text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#FF6B35] rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
