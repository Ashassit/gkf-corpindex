import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-container py-16 md:py-24 px-4 bg-[#080808]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-white">
            Contact Information
          </h2>
          <p className="text-white/80">Reach out to us for any queries or assistance</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Numbers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 bg-[#111111] border border-white/[0.07]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-white">Phone Numbers</h3>
              </div>
              <div className="space-y-4">
                <a
                  href="tel:+914522601767"
                  className="flex items-center gap-3 p-4 bg-[#0d0d0d] rounded-lg hover:bg-white/[0.03] hover:shadow-md transition-all group border border-transparent hover:border-orange-500/30"
                >
                  <div className="w-10 h-10 bg-[#111111] border border-white/[0.07] rounded-full flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
                    <Phone className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-white/80 group-hover:text-orange-400 transition-colors">+91 452 2601767</span>
                </a>
                <a
                  href="tel:+914522601849"
                  className="flex items-center gap-3 p-4 bg-[#0d0d0d] rounded-lg hover:bg-white/[0.03] hover:shadow-md transition-all group border border-transparent hover:border-orange-500/30"
                >
                  <div className="w-10 h-10 bg-[#111111] border border-white/[0.07] rounded-full flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-colors">
                    <Phone className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-white/80 group-hover:text-orange-400 transition-colors">+91 452 2601849</span>
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Office Hours & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 bg-[#0d0d0d] border border-white/[0.07]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/[0.07] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl text-white">Visit Us</h3>
              </div>
              <div className="space-y-4 text-white/80">
                <div className="p-4 bg-[#111111] rounded-lg border border-white/[0.07]">
                  <p className="mb-2">Office Hours</p>
                  <p className="text-sm text-white/80">Monday - Saturday</p>
                  <p className="text-sm text-white/80">9:00 AM - 5:00 PM</p>
                </div>
                <div className="p-4 bg-[#111111] rounded-lg border border-white/[0.07]">
                  <p className="mb-2">Mazhalai Illam</p>
                  <p className="text-sm text-white/80">Grace Kennett Foundation</p>
                  <p className="text-sm text-white/80">Specialized Adoption Agency</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Online Application Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-[#111111] rounded-lg shadow-xl overflow-hidden border border-white/[0.07]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudHMlMjBwYXBlcndvcmslMjBzaWduaW5nfGVufDF8fHx8MTc1OTk4NDU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Online application"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/90 md:to-[#111111]"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 flex flex-col justify-center">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-white">For Online Application</h3>
              <p className="text-white/80 mb-6">
                For adoption online application and details please visit CARA (Central Adoption Resource Authority) website
              </p>
              <a href="https://cara.wcd.gov.in/" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-orange-600 hover:bg-orange-700">
                  <ExternalLink className="w-4 h-4" />
                  Visit www.cara.nic.in
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
