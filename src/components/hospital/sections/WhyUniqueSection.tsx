import { motion } from "framer-motion";
import { Shield, Microscope, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    num: "01",
    text: "75+ Years of Trust in Madurai",
    detail: "Seven decades of compassionate care, serving generations of families across the region.",
  },
  {
    icon: Microscope,
    num: "02",
    text: "Rare Skin Bank in South India",
    detail: "One of the few facilities in South India offering advanced skin grafting and burn reconstruction.",
  },
  {
    icon: Heart,
    num: "03",
    text: "Holistic Healing",
    detail: "Treating the person, not just the wound — body, mind, and spirit in every care plan.",
  },
  {
    icon: Shield,
    num: "04",
    text: "Compassion + Precision",
    detail: "Dignity, transparency, and expertise — our three pillars of world-class patient care.",
  },
];

export function WhyUniqueSection() {
  return (
    <section className="bg-[#080808] relative overflow-hidden py-24" id="why-unique">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -top-32 right-1/3 w-[700px] h-[350px] bg-[#ff6a00]/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[200px] bg-[#ff6a00]/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-black text-white/[0.012] whitespace-nowrap tracking-tighter leading-none"
        style={{ fontSize: "14vw" }}>
        UNIQUE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
              <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Distinction</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
              Why We're<br />
              <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Unique
              </span>
            </h2>
          </div>
          <p className="text-white/80 text-sm max-w-xs font-light leading-relaxed lg:text-right border-l lg:border-l-0 lg:border-r border-[#ff6a00]/20 pl-4 lg:pl-0 lg:pr-4">
            What sets Grace Kennett Foundation apart from every other institution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 md:p-8 hover:border-[#ff6a00]/30 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/0 to-[#ff6a00]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-5 relative z-10">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)", boxShadow: "0 6px 20px rgba(255,106,0,0.3)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#ff6a00]/40 text-xs font-mono font-bold tracking-wider">{f.num}</span>
                      <h4 className="text-white font-bold text-lg group-hover:text-[#ff8c3a] transition-colors">{f.text}</h4>
                    </div>
                    <p className="text-white text-sm leading-relaxed">{f.detail}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00] to-[#ff8c3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUniqueSection;
