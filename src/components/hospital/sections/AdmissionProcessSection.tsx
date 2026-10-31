import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { ArrowDown, BedDouble } from "lucide-react";
import { admissionSteps } from "../data/steps";

export default function AdmissionProcessSection() {
  return (
    <section className="section-container py-12 md:py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgb(168 85 247 / 0.3) 1px, transparent 0)",
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
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 md:px-5 py-2 rounded-full mb-4 md:mb-6">
            <BedDouble className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
            <span className="text-sm md:text-base text-purple-400">
              Admission & Discharge
            </span>
          </div>

        <motion.h2
  className="site-heading mb-3 md:mb-4 text-white leading-tight"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
  <span className="text-white">
    The Admission Process
  </span>
</motion.h2>


          <motion.p
            className="text-white/60 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The admission process in our hospital typically involves several
            steps to ensure that the patient is provided with the best
            possible care. The following is a brief overview of how the
            process generally works, including generating a unique ID, room
            allotment, cost information, facilities information and consent
          </motion.p>
        </motion.div>

        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden max-w-md mx-auto mt-8">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative mb-6 last:mb-0"
            >
              {/* Vertical Line */}
              {index < admissionSteps.length - 1 && (
                <div className="absolute left-1/2 top-24 w-0.5 h-full bg-gradient-to-b from-white/[0.07] to-transparent z-0 -translate-x-1/2" />
              )}

              <Card className="border border-white/[0.07] shadow-lg bg-[#111111] overflow-hidden relative z-10">
                <div className={`h-1 bg-gradient-to-r ${step.color}`} />
                <CardContent className="p-5">
                  {/* Icon at top - centered */}
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg mb-4`}
                    >
                      <step.icon className="w-7 h-7 text-white mb-1" />
                      <span className="text-white text-sm">{step.number}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    {step.number === "07" || step.number === "08" ? (
                      <ul className="list-disc text-left pl-5 space-y-1 text-white/80 leading-relaxed">
                        {step.description
                          .split("\n")
                          .filter((line) => line.trim() !== "")
                          .map((line, i) => (
                            <li key={i}>{line.trim()}</li>
                          ))}
                      </ul>
                    ) : (
                      <p className="text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow Down Indicator */}
              {index < admissionSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.3 }}
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

        {/* Desktop View - Horizontal Layout */}
        <div className="hidden md:block max-w-6xl mx-auto mt-16">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {index < admissionSteps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute left-16 top-28 w-1 h-20 bg-gradient-to-b from-white/[0.07] via-white/[0.04] to-transparent z-0"
                  style={{ transformOrigin: "top" }}
                />
              )}

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-6"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className={`w-32 h-32 bg-gradient-to-br ${step.color} rounded-3xl flex flex-col items-center justify-center flex-shrink-0 shadow-2xl border-4 border-white/[0.07] z-10`}
                >
                  <step.icon className="w-12 h-12 text-white mb-2" />
                  <span className="text-white">{step.number}</span>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="flex-1">
                  <Card className="border border-white/[0.07] shadow-2xl bg-[#111111] overflow-hidden hover:shadow-3xl transition-all duration-300">
                    <div className={`h-2 bg-gradient-to-r ${step.color}`} />
                    <CardContent className="p-8">
                      <h3 className="text-white mb-4">
                        {step.title}
                      </h3>
                      {step.number === "07" || step.number === "08" ? (
                        <ul className="list-disc pl-6 space-y-2 text-white/80 leading-relaxed">
                          {step.description
                            .split("\n")
                            .filter((line) => line.trim() !== "")
                            .map((line, i) => (
                              <li key={i}>{line.trim()}</li>
                            ))}
                        </ul>
                      ) : (
                        <p className="text-white/80 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
