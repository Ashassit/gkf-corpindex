import { motion } from "framer-motion";
import { TrendingUp, Globe, MapPin, AlertTriangle } from "lucide-react";
import { Card } from "./ui/card";

const globalStats = [
  {
    icon: Globe,
    number: "180,000",
    label: "Annual Deaths Worldwide",
    color: "text-red-600",
  },
  {
    icon: TrendingUp,
    number: "11M",
    label: "Severe Burn Annually",
    color: "text-[#FF6B35]",
  },
  {
    icon: MapPin,
    number: "6-7M",
    label: "Burn in India Annually",
    color: "text-black",
  },
  {
    icon: AlertTriangle,
    number: "0.52M",
    label: "Expected Cases in Madurai Region",
    color: "text-red-600",
  },
];

export function MagnitudeStats() {
  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">Magnitude of Burn</h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-black/70 max-w-3xl mx-auto">
            Burn pose a significant global public health challenge. Understanding the scale 
            helps us appreciate the importance of prevention and specialized care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {globalStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className="p-6 text-center border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer relative overflow-hidden group">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/0 group-hover:from-orange-50/50 group-hover:to-orange-100/30 transition-all duration-500"
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 360,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full mb-4 shadow-md group-hover:shadow-lg transition-shadow"
                    >
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, rotateY: -180 }}
                      whileInView={{ scale: 1, rotateY: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + 0.3, 
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className={`text-4xl mb-2 ${stat.color}`}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-black/70">{stat.label}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Key Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-black mb-6 text-center">Key Facts</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Majority of fatalities occur in low- and middle-income countries",
              "Child mortality rates are 7x higher in low-income countries",
              "Non-fatal burn lead to prolonged hospitalization and disability",
              "Burn are a leading cause of DALYs in developing countries",
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                whileHover={{ 
                  x: 10,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <motion.div 
                  className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"
                  whileHover={{ 
                    scale: 2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                />
                <p className="text-black/70 group-hover:text-black transition-colors">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}