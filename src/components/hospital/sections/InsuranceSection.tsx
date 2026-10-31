import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { Shield, Phone } from "lucide-react";
import { insuranceCompanies } from "../data/insurance";

export default function InsuranceSection() {
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
          <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
            Insurance Partners
          </span>
          <h2 className="mb-4 text-4xl text-white">
            Empanelled Insurance Companies
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Grace Kennett Hospital has tie-up with the following insurance
            companies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {insuranceCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-white/[0.07] bg-[#111111] shadow-lg hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-full h-20 mb-4 flex items-center justify-center">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <Shield className="w-8 h-8 text-blue-500" />
                    )}
                  </div>

                  <p className="text-white leading-snug text-base">
                    {company.name === "MD INDIA GOVERNMENT EMPLOYEES & PENSIONERS" ? (
                      <>
                        MD INDIA
                        <br />
                        GOVERNMENT EMPLOYEES & PENSIONERS
                      </>
                    ) : (
                      company.name
                    )}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="inline-block border-0 shadow-xl bg-gradient-to-r from-orange-500 to-orange-600">
            <CardContent className="p-6 flex items-center space-x-3">
              <Phone className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-base text-white/90">
                  For insurance queries
                </p>
                <a
                  href="tel:+919751340401"
                  className="text-lg text-white hover:underline"
                >
                  +91 9751340401
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
