import { motion } from "framer-motion";
import { Building2, Users, Activity, Shield } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Building2,
    title: "Modern Facility",
    description: "Dedicated floor with 10 beds, separate cubicles, burn bath unit, and operation theatre",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled doctors, nurses, and paramedical staff committed to excellence",
  },
  {
    icon: Activity,
    title: "Advanced Equipment",
    description: "Ventilators, dialysis units, and life-saving technology",
  },
  {
    icon: Shield,
    title: "Comprehensive Care",
    description: "Preventive, promotive, curative, and rehabilitative services",
  },
];

export function AboutABLS() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">About ABLS Centre</h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-black/70 max-w-3xl mx-auto">
            The Advanced Burn Life Support Centre at Grace Kennett Foundation Hospital 
            is a well-established facility, equipped with modern technology and located in 
            a convenient area for easy accessibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="h-full"
              >
                <Card className="p-6 h-full border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-white to-orange-50 overflow-hidden relative group">
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/0 to-[#FF6B35]/0 group-hover:from-[#FF6B35]/5 group-hover:to-[#FF6B35]/10 transition-all duration-500"
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                      className="w-14 h-14 bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-black mb-2">{feature.title}</h3>
                    <p className="text-black/70">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Burn & Trauma Care Unit",
              description: "Specialized care for both accidental and trauma-related burn",
              color: "from-[#FF6B35] to-[#FF8C61]",
            },
            {
              title: "Burn Ward",
              description: "Dedicated ward with air-chamber burn beds for optimal recovery",
              color: "from-red-600 to-red-500",
            },
            {
              title: "Skin Graft Technology",
              description: "Advanced skin graft mesher for effective treatment",
              color: "from-black to-gray-800",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className={`p-6 bg-gradient-to-br ${item.color} text-white border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer`}>
                  <motion.h3 
                    className="text-white mb-2"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="text-white/90"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}