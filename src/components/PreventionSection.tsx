import { motion } from "framer-motion";
import { Shield, Home, Baby, Flame, Lightbulb } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card } from "./ui/card";

const preventionCategories = [
  {
    icon: Home,
    title: "Home Safety",
    color: "text-[#FF6B35]",
    tips: [
      "Avoid cooking while holding a child",
      "Keep hot foods and liquids away from table edges",
      "Turn pot handles toward the rear of the stove",
      "Don't leave the stove unattended when cooking",
      "Set water heater below 120°F (48.9°C)",
    ],
  },
  {
    icon: Baby,
    title: "Child Safety",
    color: "text-red-600",
    tips: [
      "Test bath water temperature before bathing children",
      "Establish 'no' zones around stoves and heaters",
      "Cover electrical outlets with safety caps",
      "Keep hot devices like irons out of reach",
      "Choose fire-resistant pajamas for children",
    ],
  },
  {
    icon: Flame,
    title: "Fire Prevention",
    color: "text-black",
    tips: [
      "Install and maintain smoke detectors",
      "Keep a working fire extinguisher at home",
      "Practice evacuation plans every six months",
      "Avoid smoking in bed",
      "Teach children to stop, drop, and roll",
    ],
  },
  {
    icon: Lightbulb,
    title: "Electrical Safety",
    color: "text-[#FF6B35]",
    tips: [
      "Replace frayed electrical cords immediately",
      "Keep cords out of children's reach",
      "Use proper safety measures for gas and electricity",
      "Don't overload electrical outlets",
      "Ensure proper housing electrical safety",
    ],
  },
];

export function PreventionSection() {
  return (
    <section id="prevention" className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-[#FF6B35]">Prevention is Better Than Cure</span>
          </div>
          <h2 className="text-black mb-4">Prevention of Burns</h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-black/70 max-w-3xl mx-auto">
            Most burn injuries are preventable with proper awareness and safety measures
          </p>
        </motion.div>

        {/* Interactive Prevention Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {preventionCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
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
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <Card className="p-6 border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden group cursor-pointer">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/0 group-hover:from-orange-50/50 group-hover:to-orange-100/30 transition-all duration-500"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 360,
                          transition: { duration: 0.6, ease: "easeInOut" }
                        }}
                        className={`w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                      >
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </motion.div>
                      <h3 className="text-black">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.tips.map((tip, tipIndex) => (
                        <motion.li
                          key={tipIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ 
                            delay: tipIndex * 0.05,
                            type: "spring",
                            stiffness: 120,
                            damping: 15
                          }}
                          whileHover={{ 
                            x: 10,
                            transition: { type: "spring", stiffness: 400, damping: 17 }
                          }}
                          className="flex items-start gap-2 group/item"
                        >
                          <motion.div 
                            className="w-1.5 h-1.5 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"
                            whileHover={{ 
                              scale: 2,
                              transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                          />
                          <span className="text-black/70 group-hover/item:text-black transition-colors">{tip}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Who is at Risk */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-black mb-6">Who is at Risk?</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-black hover:text-[#FF6B35]">
                High-Risk Groups
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4 text-black/70">
                  <div>• Females and children</div>
                  <div>• People in low- and middle-income countries</div>
                  <div>• Certain occupations with fire exposure</div>
                  <div>• Individuals with underlying medical conditions</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-black hover:text-[#FF6B35]">
                Environmental Factors
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4 text-black/70">
                  <div>• Poverty and lack of safety measures</div>
                  <div>• Use of kerosene for cooking and lighting</div>
                  <div>• Inadequate gas and electricity safety</div>
                  <div>• Access to chemicals for assault</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-black hover:text-[#FF6B35]">
                Behavioral Factors
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4 text-black/70">
                  <div>• Alcohol and smoking</div>
                  <div>• Lack of fire safety awareness</div>
                  <div>• Wearing loose clothing while cooking</div>
                  <div>• Substance abuse</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}