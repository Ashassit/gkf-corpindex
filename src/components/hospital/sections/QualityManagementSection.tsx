import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { Award, CheckCircle, Shield } from "lucide-react";
import ecg from "../../../assets/ecg.webp";
import hospital1 from "../../../assets/hospital1.webp";
import qualityObjectivesImage from "../../../assets/newImages/surgery1.jpg";
import wasteManagementImage from "../../../assets/BM-min.webp";
import hg11 from "../../../assets/hg11.webp";
import FB_IMG from "../../../assets/newImages/FB_IMG.jpg"



export default function QualityManagementSection() {
  return (
    <section className="section-container py-20 bg-[#080808]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm mb-4">
            Excellence in Care
          </span>
          <h2 className="mb-4 text-4xl text-white">
            Quality Management System
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
            The Quality Management System will be complied with and
            continually improved. The Quality Objectives will be periodically
            reviewed and communicated to all the employees of the organization
            for implementation in respective work areas.
          </p>

          <div className="flex justify-between items-center gap-6 mt-8 flex-wrap">
            <img src={ecg} alt="Quality 1" className="flex-1 max-w-[32%] h-48 object-cover rounded-xl shadow-lg p-2" />
            <img src={FB_IMG} alt="Quality 2" className="flex-1 max-w-[32%] h-48 object-cover rounded-xl shadow-lg p-2" />
            <img src={hospital1} alt="Quality 3" className="flex-1 max-w-[32%] h-48 object-cover rounded-xl shadow-lg p-2" />
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border border-white/[0.07] shadow-2xl bg-[#111111]">
              <CardContent className="p-10">
                {/* Responsive Flex Layout */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 text-center md:text-left">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mb-4 md:mb-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl text-white mb-4">Our Quality Policy</h3>
                    <p className="text-lg text-white/80 leading-relaxed mb-4">
                      <span className="text-orange-400">Safety First</span> – Accidents
                      do not happen, they evolve. Only a sequence of events lead to a
                      catastrophe. We, in Grace Kennett Foundation Hospital, have
                      achieved and will continue to strive to maintain the highest
                      safety in health care by:
                    </p>
                    <ul className="space-y-2 text-lg text-white/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span>
                          Continuing Medical Education Programme and Training
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                        <span>Technological Upgradation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>


        <div className="max-w-5xl mx-auto space-y-8">

          {[
            {
              title: "Quality Objectives",
              icon: CheckCircle,
              color: "from-green-500 to-green-600",
              image: qualityObjectivesImage,
              points: [
                "Providing the highest standards of safety in health care",
                "Providing the most cost-effective health care by practicing evidence-based medicine",
                "Providing comprehensive (Womb to Tomb) health care by continuous improvement in training and technology",
                "Involving patients and attendants in all decision making processes with good communication and transparent systems",
              ],
            },
            {
              title: "Bio-medical Waste Management Protocol",
              icon: Shield,
              color: "from-blue-500 to-blue-600",
              images: [wasteManagementImage, hg11], // 👉 MULTIPLE IMAGES HERE
              points: [],
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-white/[0.07] shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl overflow-hidden bg-[#111111]">
                <CardContent className="p-8">

                  <h3
                    className={`text-2xl text-white mb-6 text-center ${item.points.length === 0 ? "mb-10" : ""
                      }`}
                  >
                    {item.title}
                  </h3>
                  {/* If section has POINTS */}
                  {item.points.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <ul className="space-y-3 text-lg text-white/80 leading-relaxed">
                        {item.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* SINGLE IMAGE */}
                      {item.image && (
                        <div className="flex justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto max-w-md rounded-xl shadow-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    // MULTIPLE IMAGES
                    <div className="flex flex-wrap justify-center gap-6">
                      {(item.images ?? []).map((imgSrc, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={imgSrc}
                          alt={`${item.title} ${imgIndex + 1}`}
                          className="w-3/4 md:w-1/2 lg:w-1/3 rounded-2xl shadow-2xl object-cover"
                        />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
