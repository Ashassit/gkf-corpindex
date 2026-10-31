import { motion } from "framer-motion";
import { useState } from "react";
// import { Calendar, Phone } from "lucide-react";
import { licenses, type License } from "../data/licenses";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "../../ui/dialog";
// import { Button } from "../../ui/button";

export default function LicensesSection() {
  const [, setSelectedLicense] = useState<License | null>(null);

  return (
    <>
      <section
        id="licenses"
        className="section-container py-24 bg-[#080808] relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(251 146 60 / 0.08) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm mb-4">
              Accreditation
            </span>
            <h2 className="mb-4 text-4xl md:text-5xl text-white">
              Licenses & Certifications
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Recognized excellence and compliance in quality healthcare
              standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {licenses.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedLicense(item)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`h-full bg-gradient-to-br ${item.gradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-white rounded-full blur-3xl"
                  />

                  <div className="relative z-10 text-center flex flex-col items-center justify-center">
                    <div className="w-20 h-20 mb-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <item.icon className="w-10 h-10 text-orange-600" />
                    </div>
                    <h4 className="text-2xl text-white mb-0">{item.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/*
      <Dialog
        open={!!selectedLicense}
        onOpenChange={() => setSelectedLicense(null)}
      >
        <DialogContent className="sm:max-w-2xl bg-white">
          {selectedLicense && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4 text-2xl">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="text-4xl text-orange-500"
                  >
                    <selectedLicense.icon className="w-10 h-10" />
                  </motion.div>
                  <span>{selectedLicense.name}</span>
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Detailed information about {selectedLicense.name}
                </DialogDescription>
              </DialogHeader>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col pt-4 max-h-[70vh]"
              >
                <div className="flex-1 overflow-y-auto pr-2 space-y-6">
                  <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-4">
                      {selectedLicense.description}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {selectedLicense.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 mt-6 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </DialogContent>
      </Dialog> */}
    </>
  );
}
