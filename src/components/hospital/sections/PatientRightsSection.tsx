import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { Scale, UserCheck, CheckCircle, X, Activity, Heart } from "lucide-react";

export default function PatientRightsSection() {
  return (
    <section className="section-container py-24 bg-[#080808]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
            Important Information
          </span>
          <h2 className="mb-4 text-4xl text-white">
            Patient Rights & Responsibilities
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Understanding your rights and responsibilities as a patient
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {/* Patient Rights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-white/[0.07] shadow-2xl bg-[#111111] hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Scale className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl text-white mb-6">
                  The Rights of A Patient or Attendant
                </h3>

                <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                  <ul className="space-y-3 list-none">
                    {[
                      "Be treated with respect, kindness, and professionalism, regardless of personal characteristics.",
                      "Know the names of healthcare professionals involved in your care and be addressed by your proper name.",
                      "Have your privacy, dignity, and confidentiality respected at all times, with clear explanations of your condition, diagnosis, and treatment options.",
                      "Not be subjected to physical abuse or neglect.",
                      "Receive information about the expected costs of your treatment and the hospital's payment policies.",
                      "Request a copy of your medical records in accordance with hospital procedures.",
                    ].map((right, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span>{right}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Patient Responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-white/[0.07] shadow-2xl bg-[#111111] hover:shadow-3xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl text-white mb-6">
                  The Responsibilities as a Patient or Attendant
                </h3>

                <div className="space-y-4 text-lg text-white/80 leading-relaxed">
                  <p>
                    As a patient or attendant, you have several
                    responsibilities towards your healthcare providers and the
                    hospital. These include:
                  </p>

                  <ul className="space-y-3 list-none">
                    {[
                      "Keeping your appointments and arriving on time. If you cannot make it, you should inform your doctor or hospital as soon as possible.",
                      "Providing accurate and complete information about yourself, including your name, address, phone number, date of birth, next-of-kin details, insurance information, past illnesses, and medications.",
                      "Actively participating in your treatment plan and keeping your healthcare providers informed about the effectiveness of your treatment.",
                      "Leaving your valuables at home and bringing only necessary items.",
                      "Treating all hospital staff, other patients, and visitors with courtesy and respect. You should follow hospital rules and safety regulations, keep noise levels down, respect privacy, limit the number of visitors, and comply with the hospital's no-smoking policy.",
                      "Understanding all instructions before signing consent forms. You should ask questions and make sure you fully understand what you are agreeing to before signing any forms.",
                    ].map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Do's and Don'ts for Surgical Patients */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8 mt-8">
          {[
            {
              title: "Do's & Don'ts for Surgical Patients",
              icon: Activity,
              color: "from-purple-500 to-purple-600",
              dos: [
                "Follow all preoperative instructions provided by your doctor or nurse.",
                "Arrive at the hospital at the designated time.",
                "Follow postoperative instructions for activity and wound care.",
                "Report any changes in your condition to the medical staff.",
                "Follow the prescribed medication regimen.",
                "Get enough rest and sleep to aid in your recovery.",
                "Attend all follow-up appointments as scheduled.",
              ],
              donts: [
                "Do not eat or drink anything for the designated time prior to surgery.",
                "Do not consume alcohol or drugs during your stay.",
                "Do not smoke or use tobacco products while in the hospital.",
                "Do not leave the hospital without approval from your doctor or nurse.",
                "Do not drive for at least 24 hours after receiving anesthesia.",
                "Do not tamper with any medical equipment or devices in your room.",
              ],
            },
            {
              title: "Do's & Don'ts for Non-Surgical Patients",
              icon: Heart,
              color: "from-orange-500 to-orange-600",
              dos: [
                "Follow the treatment plan given by your doctor or nurse.",
                "Ask questions if you are unsure about any part of your treatment.",
                "Maintain good hygiene, including washing your hands frequently.",
                "Report any changes in your condition to the medical staff.",
                "Eat a healthy diet that meets your dietary needs.",
                "Get enough rest and sleep to aid in your recovery.",
                "Stay active as permitted by your doctor or nurse.",
              ],
              donts: [
                "Do not leave the hospital without approval from your doctor or nurse.",
                "Do not consume alcohol or drugs during your stay.",
                "Do not smoke or use tobacco products while in the hospital.",
                "Do not bring any valuables or large amounts of cash to the hospital.",
                "Do not tamper with any medical equipment or devices in your room.",
              ],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-white/[0.07] shadow-2xl bg-[#111111] hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl text-white">{section.title}</h3>
                  </div>

                  <div className="text-base text-white/80 leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-green-400 mb-2 text-lg">DO:</h4>
                        <ul className="space-y-2">
                          {section.dos.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-red-400 mb-2 text-lg">DON'T:</h4>
                        <ul className="space-y-2">
                          {section.donts.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
