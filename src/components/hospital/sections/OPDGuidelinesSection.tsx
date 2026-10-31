import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { ClipboardList, Info, ArrowRight, ArrowDown } from "lucide-react";
import { opdSteps } from "../data/steps";

export default function OPDGuidelinesSection() {
  return (
    <section className="secion-container py-12 md:py-24 bg-[#080808] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgb(59 130 246 / 0.3) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/[0.07] px-4 md:px-5 py-2 rounded-full mb-4 md:mb-6">
            <ClipboardList className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
            <span className="text-sm md:text-base text-white/60">
              Patient Information
            </span>
          </div>

          <motion.h2
            className="mb-3 md:mb-4 text-white leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent block">
              OPD Guidelines
            </span>
            <span className="block mt-1">for Patients</span>
          </motion.h2>

          <motion.p
            className="text-white/60 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The guidelines for a patient visiting the Outpatient Department
            (OPD) of our hospital
          </motion.p>
        </motion.div>

        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden max-w-md mx-auto mt-8">
          {opdSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-6 last:mb-0"
            >
              {/* Vertical Line */}
              {index < opdSteps.length - 1 && (
                <div className="absolute left-1/2 top-24 w-0.5 h-full bg-gradient-to-b from-white/[0.07] to-transparent z-0 -translate-x-1/2" />
              )}

              <Card className="border border-white/[0.07] shadow-lg bg-[#111111] overflow-hidden relative z-10">
                <div className={`h-1 bg-gradient-to-r ${step.color}`} />
                <CardContent className="p-5">
                  {/* Icon at top - centered */}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mb-4`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step Number and Title */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-white">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow Down Indicator */}
              {index < opdSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex justify-center my-3"
                >
                  <div
                    className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-md`}
                  >
                    <ArrowDown className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop View - Zigzag Layout */}
        <div className="hidden md:block max-w-6xl mx-auto mt-16">
          {opdSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {index < opdSteps.length - 1 && (
                <div className="absolute left-1/2 top-32 w-1 h-16 bg-gradient-to-b from-white/[0.07] to-transparent -translate-x-1/2 z-0" />
              )}

              <div
                className={`flex flex-row items-center gap-6 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 w-full"
                >
                  <Card className="border border-white/[0.07] shadow-2xl bg-[#111111] overflow-hidden group hover:shadow-3xl transition-all duration-300">
                    <div className={`h-2 bg-gradient-to-r ${step.color}`} />
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}
                        >
                          <step.icon className="w-10 h-10 text-white" />
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span
                              className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                            >
                              {step.number}
                            </span>
                            <h3 className="text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-white/80 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white/[0.07]`}
                  >
                    <ArrowRight className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                <div className="flex-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto"
        >
          <Card className="border-l-4 border-l-blue-600 border border-white/[0.07] bg-[#111111] shadow-xl">
            <CardContent className="p-5 md:p-8">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-2">
                    Important Note
                  </h4>
                  <p className="text-white/80 italic leading-relaxed">
                    The above guidelines are for general reference only. The
                    process and guidelines may vary depending on the patient's
                    medical condition, and the doctor's recommendation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
