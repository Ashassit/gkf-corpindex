import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Phone, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import vns from "../../assets/vns.png";
import vp from "../../assets/vp.png";
import priyaMaam from "../../assets/priyaMaam.png";

export function SocialWorkers() {
  const { ref, inView } = useInView();

  const socialWorkers = [
   {
      name: "Priya Augustus Dodd",
      title: "Project Co-ordinator",
      phone: null,
      image: priyaMaam
    }, {
      name: "V Nirmala Sorubarani",
      phone: "9626940401",
      image: vns
    },
    {
      name: "V Pandi",
      phone: "9952555954",
      image:vp
    },

  ];

  return (
    <section ref={ref} className="section-container py-16 md:py-24 px-4 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-lg mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl mb-4 text-white">
            Talk to Our Social Workers
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Our dedicated team is here to guide you through every step of the adoption journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialWorkers.map((worker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-white/[0.07]">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={worker.image}
                    alt={worker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{worker.name}</h3>
                  {worker.title && (
                    <p className="text-sm text-orange-300 mb-3">{worker.title}</p>
                  )}
                  {worker.phone && (
                    <a
                      href={`tel:${worker.phone}`}
                      className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 transition-colors rounded-lg px-4 py-2 text-sm shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      {worker.phone}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/80">
            Our social workers are available Monday to Saturday, 9:00 AM - 5:00 PM
          </p>
        </motion.div>
      </div>
    </section>
  );
}

