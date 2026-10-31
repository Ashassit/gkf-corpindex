import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Clock, User } from "lucide-react";
import { consultants } from "../data/consultants";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export default function ConsultantsSection() {
  const opdConsultants = consultants.filter(
    (consultant) => consultant.opdTime?.trim().toLowerCase() !== "on call"
  );
  const onCallConsultants = consultants.filter(
    (consultant) => consultant.opdTime?.trim().toLowerCase() === "on call"
  );

  return (
    <section
      id="consultants"
      className="section-container py-12 md:py-20 bg-[#080808]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-4">
            Medical Team
          </span>
          <h2 className="mb-4 text-white">Consultants</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Expert medical professionals dedicated to your health and
            wellbeing
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <div className="max-w-6xl mx-auto hidden md:block space-y-10">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Consultants
            </h3>
            <Card className="border border-white/[0.07] bg-[#111111] shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                        S.No
                      </th>
                      <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                        Consultants
                      </th>
                      <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                        Speciality
                      </th>
                      <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                        OPD Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.07]">
                    {opdConsultants.map((consultant, index) => (
                      <motion.tr
                        key={consultant.sno}
                        initial={{ opacity: 0, x: -20, backgroundColor: "#111111" }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.03 }}
                        viewport={{ once: true }}
                        whileHover={{ backgroundColor: "#1a1a2e" }}
                        className="transition-colors"
                      >
                        <td className="px-6 py-5 text-white/60 text-base">{index + 1}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/40 flex-shrink-0"
                            >
                              <ImageWithFallback
                                src={consultant.photo}
                                alt={consultant.name}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                            <span className="text-white text-base">{consultant.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                          >
                            {consultant.speciality}
                          </motion.span>
                        </td>
                        <td className="px-6 py-5 text-base text-white/80">
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                            <div className="space-y-1">
                              {consultant.opdTime.split("\n").map((line, i) => (
                                <div key={i} className="text-sm leading-relaxed">
                                  {line}
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          {onCallConsultants.length > 0 && (
            <div>

              <Card className="border border-white/[0.07] bg-[#111111] shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white">
                      <tr>
                        <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                          S.No
                        </th>
                        <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                          Consultants
                        </th>
                        <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                          Speciality
                        </th>
                        <th className="px-6 py-5 text-left text-sm uppercase tracking-wider">
                          On Call
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.07]">
                      {onCallConsultants.map((consultant, index) => (
                        <motion.tr
                          key={consultant.sno}
                          initial={{ opacity: 0, x: -20, backgroundColor: "#111111" }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.03 }}
                          viewport={{ once: true }}
                          whileHover={{ backgroundColor: "#1a1a2e" }}
                          className="transition-colors"
                        >
                          <td className="px-6 py-5 text-white/60 text-base">{index + 1}</td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/40 flex-shrink-0"
                              >
                                <ImageWithFallback
                                  src={consultant.photo}
                                  alt={consultant.name}
                                  className="w-full h-full object-cover"
                                />
                              </motion.div>
                              <span className="text-white text-base">{consultant.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                            >
                              {consultant.speciality}
                            </motion.span>
                          </td>
                          <td className="px-6 py-5 text-base text-white/80">
                            <div className="flex items-start gap-2">
                              <Clock className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{consultant.opdTime}</span>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Consultants</h3>
            {opdConsultants.map((consultant, index) => (
              <motion.div
                key={consultant.sno}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border border-white/[0.07] shadow-lg overflow-hidden bg-[#111111] mb-4">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/30 shadow-lg">
                          <ImageWithFallback
                            src={consultant.photo}
                            alt={consultant.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white text-sm opacity-90">{consultant.speciality}</p>
                          <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full mt-1">
                            <User className="w-3 h-3 text-white" />
                            <span className="text-white text-xs">#{index + 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="text-white mb-1">{consultant.name}</h3>
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          {consultant.speciality}
                        </span>
                      </div>

                      <div className="bg-[#0d0d0d] rounded-lg p-3 border border-white/[0.07]">
                        <div className="flex items-start gap-2.5">
                          <div className="bg-purple-500/20 p-2 rounded-lg">
                            <Clock className="w-4 h-4 text-purple-400" />
                          </div>
                          <div>
                            <p className="text-white/50 text-xs mb-2">OPD Timings</p>
                            <div className="space-y-1">
                              {consultant.opdTime.split("\n").map((line, i) => (
                                <div key={i} className="text-white text-sm leading-relaxed">
                                  {line}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {onCallConsultants.length > 0 && (
            <div>
              {onCallConsultants.map((consultant, index) => (
                <motion.div
                  key={consultant.sno}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border border-white/[0.07] shadow-lg overflow-hidden bg-[#111111] mb-4">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white/30 shadow-lg">
                            <ImageWithFallback
                              src={consultant.photo}
                              alt={consultant.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="text-white text-sm opacity-90">{consultant.speciality}</p>
                            <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full mt-1">
                              <User className="w-3 h-3 text-white" />
                              <span className="text-white text-xs">#{index + 1}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="text-white mb-1">{consultant.name}</h3>
                        </div>
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            {consultant.speciality}
                          </span>
                        </div>

                        <div className="bg-[#0d0d0d] rounded-lg p-3 border border-white/[0.07]">
                          <div className="flex items-start gap-2.5">
                            <div className="bg-purple-500/20 p-2 rounded-lg">
                              <Clock className="w-4 h-4 text-purple-400" />
                            </div>
                            <div>
                              <p className="text-white/50 text-xs mb-2">Status</p>
                              <div className="text-white text-sm">{consultant.opdTime}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
