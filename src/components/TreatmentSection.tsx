import { motion } from "framer-motion";
import { Activity, Heart, Droplets, Wind, Stethoscope, Syringe } from "lucide-react";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const cabApproach = [
  {
    icon: Heart,
    letter: "C",
    title: "Circulation",
    color: "from-red-600 to-red-500",
    points: [
      "Fluid resuscitation using Parkland formula",
      "Wallace Rule of Nines for TBSA assessment",
      "Ringer's Lactate for initial resuscitation",
      "Monitor urine output: 0.5-1.0 ml/kg/hour (adults)",
    ],
  },
  {
    icon: Wind,
    letter: "A",
    title: "Airway",
    color: "from-[#FF6B35] to-[#FF8C61]",
    points: [
      "Check for signs of airway burn/inhalation injury",
      "Look for stridor, hoarseness, black sputum",
      "Consider early intubation if needed",
      "Apply high flow oxygen for carbon monoxide",
    ],
  },
  {
    icon: Activity,
    letter: "B",
    title: "Breathing",
    color: "from-black to-gray-800",
    points: [
      "Escharotomy for circumferential chest burns",
      "Protective isolation in ABLS unit",
      "Air-chamber burn beds for weight distribution",
      "Monitor respiratory function continuously",
    ],
  },
];

export function TreatmentSection() {
  return (
    <section id="treatment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full mb-6">
            <Stethoscope className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-[#FF6B35]">Advanced Care Protocol</span>
          </div>
          <h2 className="text-black mb-4">Treatment & Care</h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-black/70 max-w-3xl mx-auto">
            Our 24×7 Accident and Emergency unit provides critical care using the CAB approach
          </p>
        </motion.div>

        {/* CAB Approach */}
        <div className="mb-16">
          <h3 className="text-black text-center mb-8">CAB Approach: Circulation, Airway, Breathing</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {cabApproach.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  whileHover={{ 
                    y: -12,
                    scale: 1.03,
                    rotateY: 3,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className={`p-6 bg-gradient-to-br ${item.color} text-white border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full cursor-pointer relative overflow-hidden group`}>
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          whileHover={{ 
                            scale: 1.3, 
                            rotate: 360,
                            transition: { duration: 0.6, ease: "easeInOut" }
                          }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                        >
                          <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <motion.div 
                            className="text-5xl opacity-50"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.5 }}
                            transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                          >
                            {item.letter}
                          </motion.div>
                          <h3 className="text-white">{item.title}</h3>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {item.points.map((point, pointIndex) => (
                          <motion.li
                            key={pointIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                              delay: pointIndex * 0.08,
                              type: "spring",
                              stiffness: 120,
                              damping: 15
                            }}
                            whileHover={{ 
                              x: 8,
                              transition: { type: "spring", stiffness: 400, damping: 17 }
                            }}
                            className="flex items-start gap-2 group/item"
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"
                              whileHover={{ 
                                scale: 2,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                              }}
                            />
                            <span className="text-white/90 group-hover/item:text-white transition-colors">{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Treatment Info */}
        <Tabs defaultValue="inpatient" className="mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="inpatient">Inpatient Care</TabsTrigger>
            <TabsTrigger value="burns-bath">Burns Bath</TabsTrigger>
            <TabsTrigger value="respiratory">Respiratory Care</TabsTrigger>
          </TabsList>

          <TabsContent value="inpatient">
            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-white to-orange-50">
              <h3 className="text-black mb-6">Inpatient Management Phases</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { phase: "Phase 1", title: "Initial Evaluation & Resuscitation" },
                  { phase: "Phase 2", title: "Wound Excision & Biologic Closure" },
                  { phase: "Phase 3", title: "Definitive Wound Closure" },
                  { phase: "Phase 4", title: "Rehabilitation & Reconstruction" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
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
                        x: 10,
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400, damping: 17 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <motion.div 
                        className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-md"
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          transition: { duration: 0.5 }
                        }}
                      >
                        {index + 1}
                      </motion.div>
                      <div>
                        <div className="text-[#FF6B35]">{item.phase}</div>
                        <div className="text-black">{item.title}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="burns-bath">
            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-white to-orange-50">
              <h3 className="text-black mb-6">Burns Bath (Hydrotherapy)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-black mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {[
                      "Helps assess TBSA accurately",
                      "Enhances desloughing and wound cleaning",
                      "Alters microbial flora",
                      "Facilitates physical therapy",
                      "Provides psychological comfort",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Droplets className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                        <span className="text-black/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-black mb-3">Procedure</h4>
                  <ul className="space-y-2 text-black/70">
                    <li>• Performed in separate sterile cubicle</li>
                    <li>• Warm water shower or immersion</li>
                    <li>• Analgesia/sedation as needed</li>
                    <li>• Careful attention to grafted areas</li>
                    <li>• Post-collagen: 5 days after procedure</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="respiratory">
            <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-white to-orange-50">
              <h3 className="text-black mb-6">Respiratory Care</h3>
              <div className="space-y-6">
                <p className="text-black/70">
                  Burn patients often require specialized respiratory care due to lung damage from smoke or steam inhalation. 
                  Failing to address airway problems can lead to life-threatening complications.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-xl">
                    <Wind className="w-8 h-8 text-[#FF6B35] mb-3" />
                    <h4 className="text-black mb-2">Monitoring</h4>
                    <p className="text-black/70">
                      Arterial blood gases tested to check blood oxygenation levels
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-xl">
                    <Activity className="w-8 h-8 text-[#FF6B35] mb-3" />
                    <h4 className="text-black mb-2">Mechanical Ventilation</h4>
                    <p className="text-black/70">
                      May be necessary for patients with severe respiratory insult
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Nutrition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF6B35] to-red-600 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Syringe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white">Nutrition Management</h3>
          </div>
          <p className="text-white/90 mb-4">
            Burn patients have dramatically increased metabolic needs - often requiring more than double 
            the normal caloric and protein intake. Our nutritionist works closely with the burns team 
            to ensure optimal recovery through the Curreri Formula for calculating nutritional requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}