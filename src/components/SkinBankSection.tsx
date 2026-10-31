import { motion } from "framer-motion";
import { Heart, Droplet, Package, Award } from "lucide-react";
import { Card } from "./ui/card";
import logo2 from '../assets/logo2.png';

export function SkinBankSection() {
  return (
    <section id="skin-bank" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-black mb-4">Skin Bank</h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-black/70 max-w-3xl mx-auto">
            Devi Cropscience – Rotary Community Skin Bank at Grace Kennett Foundation Hospital
          </p>
        </motion.div>

        {/* Hero Card with Butterfly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF6B35] to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl mb-12 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-6"
          >
            <div className="text-6xl"><img className="w-16" src={logo2} alt="Grace Kennett Foundation" /></div>
          </motion.div>
          <h3 className="text-white mb-4">Gift Skin - Gift Life</h3>
          <p className="text-white/90 max-w-2xl mx-auto mb-4">
            The butterfly represents organ donation as a symbol of change, new life, and hope. 
            The orange butterfly with a repaired wing symbolizes The Gift of Life – donated skin.
          </p>
          <p className="text-white/90 italic">
            "Life is skin deep. Loss of skin can lead to loss of life."
          </p>
        </motion.div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Droplet,
              number: "50%",
              label: "Reduction in mortality with early skin cover",
              color: "from-[#FF6B35] to-[#FF8C61]",
            },
            {
              icon: Package,
              number: "5 years",
              label: "Storage duration at 4-8°C in glycerol",
              color: "from-red-600 to-red-500",
            },
            {
              icon: Award,
              number: "5,000",
              label: "Annual donations needed for our region",
              color: "from-black to-gray-800",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
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
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className={`p-6 bg-gradient-to-br ${stat.color} text-white border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center cursor-pointer relative overflow-hidden group`}>
                  {/* Animated background pulse */}
                  <motion.div
                    className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500"
                  />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 360,
                        transition: { duration: 0.6, ease: "easeInOut" }
                      }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.div 
                      className="text-4xl mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    >
                      {stat.number}
                    </motion.div>
                    <p className="text-white/90">{stat.label}</p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 mb-12"
        >
          <h3 className="text-black mb-8 text-center">Skin Banking Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Retrieval", description: "Professional team harvests skin from eligible donors" },
              { step: 2, title: "Processing", description: "Quality check and preservation in glycerol solution" },
              { step: 3, title: "Storage", description: "Maintained at 4-8°C for up to 5 years" },
              { step: 4, title: "Distribution", description: "Supplied to burns surgeons for transplantation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 120,
                  damping: 15
                }}
                className="relative"
              >
                <motion.div 
                  className="text-center"
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#FF8C61",
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    {item.step}
                  </motion.div>
                  <h4 className="text-black mb-2">{item.title}</h4>
                  <p className="text-black/70">{item.description}</p>
                </motion.div>
                {index < 3 && (
                  <motion.div 
                    className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-[#FF6B35]/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Can Donate */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-none shadow-lg h-full bg-white">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-[#FF6B35]" fill="#FF6B35" />
                <h3 className="text-black">Who Can Donate?</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Deceased donors (after natural death)",
                  "Living donors during surgeries (tummy tuck, etc.)",
                  "After knee and hip replacements (bone tissue)",
                  "Healthy cells from bone marrow and umbilical cord",
                  "No age limit for donation",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-black/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-none shadow-lg h-full bg-gradient-to-br from-white to-orange-50">
              <h3 className="text-black mb-6">Dispelling Myths</h3>
              <div className="space-y-4">
                {[
                  {
                    myth: "Donation mutilates the body",
                    fact: "Surgical removal doesn't disfigure – no visible signs",
                  },
                  {
                    myth: "Family is charged for donation",
                    fact: "Donation is completely free – no charges to family",
                  },
                  {
                    myth: "Only organs can be donated",
                    fact: "Skin, bone, heart valves, and tendons can also be donated",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 120,
                      damping: 15
                    }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.03,
                        x: 5,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <motion.div 
                        className="text-red-600 mb-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        ❌ {item.myth}
                      </motion.div>
                      <motion.div 
                        className="text-black/70"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        ✓ {item.fact}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}