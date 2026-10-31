import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const teamMembers = [
  { name: "Dr Dodd", role: "CEO", initials: "DD" },
  { name: "Dr Rena Rosalind", role: "Psychiatrist", initials: "RR" },
  { name: "Dr Kirupakara krishnan", role: "Consultant Psychiatrist", initials: "KK" },
  { name: "Valentina Rani", role: "Principal", initials: "VR" },
  { name: "A Rubini", role: "Admin Head", initials: "AR" },
];

const programs = [
  {
    title: "Basic Burn Care (BBC)",
    duration: "1 Day",
    description: "Prevention, first aid, initial treatment, and referral for community settings",
  },
  {
    title: "Essential Burn Care (EBC)",
    duration: "1–2 Days",
    description: "Management of mild/moderate cases for surgeons, nurses, therapists, and nutritionists",
  },
  {
    title: "Advanced Burn Care (ABC)",
    duration: "5 Days",
    description: "Hands-on training in Rehabilitation, Nursing, and Surgery modules",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="bg-[#080808] relative overflow-hidden py-24">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -top-32 left-1/3 w-[600px] h-[300px] bg-[#ff6a00]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none leading-none font-black text-white/[0.012] whitespace-nowrap tracking-tighter"
        style={{ fontSize: "18vw" }}>
        TEAM
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
              <Award className="w-3.5 h-3.5 text-[#ff6a00]" />
              <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Expert Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
              Meet Our<br />
              <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Team
              </span>
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed lg:text-right border-l lg:border-l-0 lg:border-r border-[#ff6a00]/20 pl-4 lg:pl-0 lg:pr-4">
            Dedicated professionals committed to providing the highest quality burn care and rehabilitation services.
          </p>
        </motion.div>

        {/* Team grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-20"
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}>
          {teamMembers.map((member, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-center hover:border-[#ff6a00]/30 transition-all duration-500 hover:-translate-y-1 cursor-default overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-b from-[#ff6a00]/0 to-[#ff6a00]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg relative z-10"
                style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)", boxShadow: "0 8px 24px rgba(255,106,0,0.3)" }}>
                {member.initials}
              </div>

              <h3 className="text-white font-semibold text-sm leading-tight mb-1.5 group-hover:text-[#ff8c3a] transition-colors relative z-10">
                {member.name}
              </h3>
              <p className="text-[#ff6a00] text-xs relative z-10">{member.role}</p>

              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00] to-[#ff8c3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Training Programs */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
            <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Training</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Core Training<br />
            <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Programmes
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {programs.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 hover:border-[#ff6a00]/30 transition-all duration-500 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/0 to-[#ff6a00]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)", boxShadow: "0 6px 20px rgba(255,106,0,0.3)" }}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>

                <div className="inline-flex items-center gap-2 bg-[#ff6a00]/15 border border-[#ff6a00]/25 rounded-full px-3 py-1 mb-5 relative z-10">
                  <span className="w-1 h-1 rounded-full bg-[#ff6a00]" />
                  <span className="text-[#ff6a00] text-[11px] font-bold tracking-wider">{p.duration}</span>
                </div>

                <h4 className="text-white font-semibold mb-2.5 group-hover:text-[#ff8c3a] transition-colors relative z-10">{p.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed relative z-10">{p.description}</p>

                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00] to-[#ff8c3a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
