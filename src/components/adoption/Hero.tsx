import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import mlone from "../../assets/newImages/ML-1.jpg"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-60 text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={mlone}
          alt="Happy family"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Mazhalai Illam
          </h1>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#080808] to-transparent"></div>
    </section>
  );
}

