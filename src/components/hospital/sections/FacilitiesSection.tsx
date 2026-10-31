import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { facilities } from "../data/facilities";

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="section-container py-20 bg-[#080808]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-white/[0.07] bg-[#111111] shadow-lg hover:shadow-2xl hover:border-green-500/30 transition-all duration-300 group hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300 shadow-md bg-white p-2">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="mb-3 text-white leading-snug text-base">
                    {facility.name}
                  </h3>
                  <p className="text-white text-base leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
