import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Heart, Home } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import rightToFamily from "../../assets/Right-to-a-family-edit-photo.webp";
import rightToLife from "../../assets/newImages/micare.jpg";

export function RightsSection() {
  const { ref, inView } = useInView();

  const rights = [
    {
      icon: Heart,
      title: "Right to Life",
      description:
        "Our intensive neonatal care unit gives the unfortunate infants a chance to survive and ensures their right to life.",
      image: rightToLife,
    },
    {
      icon: Home,
      title: "The Right to a Family",
      description:
        "Every child has a right to a family. Over a thousand happy families have been built through In-country and Inter-country adoption.",
      image: rightToFamily,
    },
  ];

  return (
    <section
      ref={ref}
      className="section-container py-16 md:py-24 px-4 bg-[#0d0d0d]"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center text-4xl mb-12 text-white"
        >
          Fundamental Rights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rights.map((right, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-[#111111] border border-white/[0.07] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                {/* Image Section */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <ImageWithFallback
                    src={right.image}
                    alt={right.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Icon on Image */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <right.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl mb-3 text-white">{right.title}</h3>
                  <p className="text-white/80 leading-relaxed">
                    {right.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
