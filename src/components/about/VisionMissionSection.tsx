import { motion } from "framer-motion";
import { Heart, Target, Users, Sparkles, CheckCircle2 } from "lucide-react";

const visionPoints = [
  "Child-friendly society",
  "Comprehensive healthcare",
  "Community well-being",
  "Collaborative partnerships",
];

const missionValues = [
  { icon: CheckCircle2, text: "Competence in care" },
  { icon: Heart, text: "Compassion for all" },
  { icon: Users, text: "Commitment to serve" },
  { icon: Sparkles, text: "Right to family" },
];

export function VisionMissionSection() {
  return (
    <section className="bg-[#0d0d0d] relative overflow-hidden py-24" id="vision-mission">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -top-32 left-1/4 w-[700px] h-[350px] bg-[#ff6a00]/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[250px] bg-[#ff6a00]/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
              <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Purpose</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
              Vision &<br />
              <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Mission
              </span>
            </h2>
          </div>
          <p className="text-white/80 text-sm max-w-xs font-light leading-relaxed lg:text-right border-l lg:border-l-0 lg:border-r border-[#ff6a00]/20 pl-4 lg:pl-0 lg:pr-4">
            Guiding every decision, every life we touch, every service we offer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="group relative bg-white/[0.03] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-[#ff6a00]/25 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/[0.04] to-transparent pointer-events-none" />

            <div className="flex items-center gap-4 p-5 md:p-8 pb-0 relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)", boxShadow: "0 6px 20px rgba(255,106,0,0.35)" }}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Our</p>
                <h3 className="text-white font-bold text-xl">Vision</h3>
              </div>
            </div>

            <div className="p-5 md:p-8 relative z-10">
              <p className="text-white leading-relaxed mb-5">
                Our vision is to build a child-friendly society where even severely disadvantaged children develop
                their full potential as individuals, as members of their families and communities, and to address
                the physical, mental and social well-being of the community through comprehensive health care and
                allied services.
              </p>
              <p className="text-white leading-relaxed mb-8">
                With our partners, we mobilize resources, encourage research, and facilitate communications.
                By strengthening each other's programmes, we are all strengthened.
              </p>

              <div className="space-y-2.5">
                {visionPoints.map((point, i) => (
                  <motion.div key={point}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }} viewport={{ once: true }}
                    className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#ff6a00" }} />
                    <span className="text-white text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00]/70 via-[#ff8c3a]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>

          {/* Mission */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
            className="group relative bg-white/[0.03] border border-white/[0.07] rounded-3xl overflow-hidden hover:border-[#ff6a00]/25 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/[0.04] to-transparent pointer-events-none" />

            <div className="flex items-center gap-4 p-5 md:p-8 pb-0 relative z-10">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)", boxShadow: "0 6px 20px rgba(255,106,0,0.35)" }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Our</p>
                <h3 className="text-white font-bold text-xl">Mission</h3>
              </div>
            </div>

            <div className="p-5 md:p-8 relative z-10">
              <p className="text-white leading-relaxed mb-8">
                Our mission is to work with competence, compassion, and commitment for the sick and the needy and
                to help the victims of female infanticide/abandoned, surrendered, and orphaned children, first to
                survive and then to ensure the right of the child to a family.
              </p>

              <div className="space-y-3">
                {missionValues.map((item, i) => (
                  <motion.div key={item.text}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }} viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-xl border border-white/[0.05] hover:border-[#ff6a00]/20 hover:bg-white/[0.02] transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#ff6a00]/20 bg-[#ff6a00]/10">
                      <item.icon className="w-4 h-4 text-[#ff6a00]" />
                    </div>
                    <span className="text-white text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00]/70 via-[#ff8c3a]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
