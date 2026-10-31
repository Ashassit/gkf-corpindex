import { motion } from "framer-motion";
import { useState, memo } from "react";
import { Card, CardContent } from "../ui/card";
import { Building2, Activity, Clock, Heart, ChevronRight } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { coreServices, otherServices } from "./data/services";
import { CoreServiceDetailModal } from "./modals/ServiceModals";
import { ImageGalleryModal } from "./modals/ImageGalleryModal";
import { statsGalleryData, type StatType } from "./data/galleryData";

export const ServicesSection = memo(() => {
  const [selectedCoreService, setSelectedCoreService] = useState<
    (typeof coreServices)[0] | null
  >(null);
  const [selectedStat, setSelectedStat] = useState<StatType | null>(null);

  const stats = [
    {
      number: 30,
      label: "Bedded Hospital",
      icon: Building2,
      suffix: "",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: 15,
      label: "Bedded Burn Centre",
      icon: Activity,
      suffix: "",
      color: "from-orange-500 to-orange-600",
    },
    {
      number: 24,
      label: "Hour Emergency",
      icon: Clock,
      suffix: "/7",
      color: "from-red-500 to-red-600",
    },
    {
      number: 20,
      label: "Specialities",
      icon: Heart,
      suffix: "+",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <>
      <section
        id="services"
        className="section-container bg-[#080808] relative overflow-hidden"
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
  <h2 className="site-heading relative inline-block text-4xl md:text-5xl text-orange-600 after:content-[''] after:block after:h-1 after:w-full after:bg-orange-600 after:mt-2">
    Comprehensive Healthcare Services Under One Roof
  </h2>
</motion.div>


          {/* Stats Section */}
          <section className="py-10 bg-[#080808] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 opacity-50"></div>
            <div className="container mx-auto px-4 relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    onClick={() => setSelectedStat(stat.label as StatType)}
                    className="cursor-pointer"
                  >
                    <Card className="border border-white/[0.07] shadow-2xl bg-[#111111]/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 relative overflow-hidden group">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      <CardContent className="p-6 text-center relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg`}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="text-3xl text-white mb-1 flex items-center justify-center gap-1">
                          <AnimatedCounter target={stat.number} />
                          <span>{stat.suffix}</span>
                        </div>
                        <div className="text-base text-white/60">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto mb-24"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCoreService(service)}
                  className="group relative cursor-pointer"
                >
                  <div
                    className={`h-full bg-gradient-to-br ${service.gradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-white rounded-full blur-3xl"
                    />

                    <div className="relative z-10 text-center flex flex-col items-center justify-center">
                      <div className="w-20 h-20 mb-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <img
                          src={service.emoji}
                          alt={service.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h4 className="site-heading text-2xl text-white mb-0">
                        {service.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer group"
                >
                  <div className="bg-[#111111] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/[0.07] hover:border-orange-300 h-full flex flex-col items-center text-center relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    <div className="relative w-16 h-16 mb-4 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                      <img
                        src={service.icon}
                        alt={service.name}
                        className="w-12 h-12 object-cover rounded-xl"
                      />
                    </div>
                    <h4 className="text-white text-sm leading-snug relative">
                      {service.name}
                    </h4>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute bottom-2 right-2"
                    >
                      <ChevronRight className="w-4 h-4 text-orange-500" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <CoreServiceDetailModal
        service={selectedCoreService}
        onClose={() => setSelectedCoreService(null)}
      />
      {/* <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      /> */}
      <ImageGalleryModal
        isOpen={selectedStat !== null}
        onClose={() => setSelectedStat(null)}
        title={selectedStat ? statsGalleryData[selectedStat].title : ""}
        description={
          selectedStat ? statsGalleryData[selectedStat].description : ""
        }
        images={selectedStat ? statsGalleryData[selectedStat].images : []}
      />
    </>
  );
});

ServicesSection.displayName = "ServicesSection";
