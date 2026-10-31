import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertTriangle, Phone } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";

const dosList = [
  "Ensure your safety before providing first aid",
  "Stop the burning process by removing clothing",
  "Use cool running water to lower burn temperature",
  "For chemical burn, irrigate with large volumes of water",
  "Wrap with clean cloth and seek medical help immediately",
];

const dontsList = [
  "Don't provide aid without ensuring your safety",
  "Avoid applying paste, oil, turmeric, or raw cotton",
  "Don't apply ice - it can cause further injury",
  "Don't open blisters unless directed by healthcare professional",
  "Avoid applying topical medication before medical care",
];

export function FirstAidSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <section id="first-aid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <span className="text-red-600">Emergency Response</span>
          </div>
          <h2 className="text-black mb-4">First Aid for Burn</h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-black/70 max-w-3xl mx-auto">
            Quick and proper first aid can make a critical difference in burn treatment outcomes
          </p>
        </motion.div>

        <Tabs defaultValue="what-to-do" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="what-to-do" className="data-[state=active]:bg-[#FF6B35] data-[state=active]:text-white">
              What to Do
            </TabsTrigger>
            <TabsTrigger value="what-not-to-do" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              What NOT to Do
            </TabsTrigger>
          </TabsList>

          <TabsContent value="what-to-do">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dosList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -8,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCard(index)}
                  >
                    <Card className="p-6 border-2 border-[#FF6B35]/20 hover:border-[#FF6B35] transition-all duration-300 cursor-pointer bg-gradient-to-br from-white to-orange-50 shadow-md hover:shadow-xl relative overflow-hidden group">
                      {/* Shine effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      />
                      <motion.div
                        animate={{
                          scale: selectedCard === index ? [1, 1.2, 1] : 1,
                          rotate: selectedCard === index ? [0, 360] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="w-8 h-8 text-[#FF6B35] mb-3" />
                      </motion.div>
                      <p className="text-black/80 relative z-10">{item}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="what-not-to-do">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dontsList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -8,
                      transition: { type: "spring", stiffness: 400, damping: 17 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card className="p-6 border-2 border-red-600/20 hover:border-red-600 transition-all duration-300 bg-gradient-to-br from-white to-red-50 shadow-md hover:shadow-xl relative overflow-hidden group cursor-pointer">
                      {/* Shake animation wrapper */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      />
                      <motion.div
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        <XCircle className="w-8 h-8 text-red-600 mb-3" />
                      </motion.div>
                      <p className="text-black/80 relative z-10">{item}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Emergency Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-[#FF6B35] rounded-3xl p-8 text-center text-white shadow-2xl"
        >
          <Phone className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-white mb-4">Emergency Assistance</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            For immediate medical assistance, call our 24/7 emergency hotline
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="secondary" className="text-xl px-8">
              Call 108
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}