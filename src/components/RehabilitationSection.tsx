import { motion } from "framer-motion";
import { HeartPulse, Activity, Users, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function RehabilitationSection() {
  return (
    <section id="rehabilitation" className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full mb-6">
            <HeartPulse className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-[#FF6B35]">Recovery & Rehabilitation</span>
          </div>
          <h2 className="text-black mb-4">Burns Rehabilitation</h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-black/70 max-w-3xl mx-auto">
            Comprehensive rehabilitation from admission through long-term recovery, addressing physical, 
            psychological, and social aspects of care
          </p>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-[#FF6B35] rounded-3xl p-8 text-center text-white shadow-2xl mb-12"
        >
          <h3 className="text-white mb-4">REMEMBER – TOMORROW MIGHT BE TOO LATE!</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            Begin rehabilitation as soon as possible. Delaying rehabilitation leads to more difficulty, 
            pain, and worse outcomes. Once time passes, missed opportunities cannot be easily regained.
          </p>
        </motion.div>

        {/* Rehabilitation Goals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Activity,
              title: "Range of Motion",
              description: "Maintain and improve joint mobility",
              color: "from-[#FF6B35] to-[#FF8C61]",
            },
            {
              icon: TrendingUp,
              title: "Minimize Contractures",
              description: "Prevent scar tissue limitations",
              color: "from-red-600 to-red-500",
            },
            {
              icon: Users,
              title: "Functional Ability",
              description: "Maximize independence in daily activities",
              color: "from-black to-gray-800",
            },
            {
              icon: HeartPulse,
              title: "Psychological Support",
              description: "Promote mental well-being and social integration",
              color: "from-[#FF6B35] to-red-600",
            },
          ].map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className={`p-6 bg-gradient-to-br ${goal.color} text-white border-none shadow-lg h-full`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4"
                >
                  <goal.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-white mb-2">{goal.title}</h3>
                <p className="text-white/90">{goal.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Physiotherapy Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12"
        >
          <h3 className="text-black mb-6">Physiotherapy in Burns</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="acute-care">
              <AccordionTrigger className="text-black hover:text-[#FF6B35]">
                Acute Care Phase
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-black/70">
                  <div>
                    <strong className="text-black">Respiratory Care:</strong> Airway clearance techniques, 
                    breathing exercises, and ventilatory support to prevent pneumonia
                  </div>
                  <div>
                    <strong className="text-black">Early Mobilization:</strong> Gentle range of motion 
                    exercises and positioning to prevent joint stiffness
                  </div>
                  <div>
                    <strong className="text-black">Pain Management:</strong> Various modalities to manage 
                    discomfort during wound care and rehabilitation
                  </div>
                  <div>
                    <strong className="text-black">Positioning:</strong> Essential to avoid pressure sores 
                    and maintain skin integrity
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="positioning">
              <AccordionTrigger className="text-black hover:text-[#FF6B35]">
                Joint Positioning
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-black/70">
                    Correct positioning is essential from day one until scars mature. While uncomfortable, 
                    proper positioning achieves critical goals:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Reduction of swelling and edema",
                      "Prevention of further damage to joints and tendons",
                      "Protection of new skin grafts",
                      "Prevention of contracture development",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-black/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="wound-care">
              <AccordionTrigger className="text-black hover:text-[#FF6B35]">
                Wound Care Support
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-black/70">
                  Physiotherapists assist in positioning during wound dressing changes to minimize stress 
                  on newly healed tissue. They also educate patients on wound care techniques and 
                  self-management for optimal healing.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        {/* Scar Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h3 className="text-black mb-6">Scar Management</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-black mb-4">Understanding Scars</h4>
              <p className="text-black/70 mb-4">
                Hypertrophic burn scars are the most common complication. Burns healing in less than 14 days 
                generally have no scarring. Those taking 14-21 days have moderate risk, while burns taking 
                over 21 days have very high scarring risk.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                  <span className="text-black/70">Peak at 6 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                  <span className="text-black/70">Mature in 12-18 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full" />
                  <span className="text-black/70">Fade and soften over time</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-black mb-4">Treatment Options</h4>
              <ul className="space-y-3">
                {[
                  "Pressure garments (23/24 hours daily)",
                  "Silicone gel sheets",
                  "Custom-made inserts",
                  "Massage and stretching",
                  "Surgical treatment including laser therapy",
                ].map((treatment, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-6 h-6 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 text-white">
                      {index + 1}
                    </div>
                    <span className="text-black/70">{treatment}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}