import { motion } from "framer-motion";
import { History } from "lucide-react";
import Drgrace from "../../assets/DRgrace.png";
import DrRavi from "../../assets/DrRavikumar.png";
import DrSankar from "../../assets/DrSankarasubramanian.png";

const leaders = [
  {
    name: "Dr. (Miss) Grace A. Kennett",
    badge: "Founder • 1947",
    image: Drgrace,
    alt: "Dr. Grace A. Kennett",
    text: "Dr (Miss) Grace A Kennett, an orphan herself, a friend of all, especially of the sick and the underprivileged, started this institution in 1947. In the year 1978, GKF was established as a Foundation under the Societies Registration Act. (S.No.69/1978)",
    memorial: false,
  },
  {
    name: "Dr. S. Ravikumar",
    badge: "First Medical Superintendent • 1979–1998",
    image: DrRavi,
    alt: "Dr. S. Ravikumar",
    text: "Dr S Ravikumar was the first Medical Superintendent (1979–1998) and contributed greatly to the growth of the organization.",
    memorial: false,
  },
  {
    name: "Dr. S.R. Sankarasubramanian",
    badge: "In Loving Memory",
    image: DrSankar,
    alt: "Dr. S.R. Sankarasubramanian",
    text: "Dr.S.R.Sankarasubramanian, a young and exceptional physician, tragically passed away while fulfilling his duty of caring for patients. He possessed remarkable qualities of compassion, integrity, and diligence. His memory lives on as a cherished reminder of his impact.",
    memorial: true,
  },
];

export function OriginSection() {
  return (
    <section className="bg-[#080808] relative overflow-hidden py-24" id="origin">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[300px] bg-[#ff6a00]/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 select-none pointer-events-none font-black text-white/[0.012] whitespace-nowrap tracking-tighter leading-none"
        style={{ fontSize: "18vw" }}>
        ORIGIN
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
            <History className="w-3.5 h-3.5 text-[#ff6a00]" />
            <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Our History</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
            Our<br />
            <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Origin
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop center */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-[1px] hidden lg:block"
            style={{ background: "linear-gradient(to bottom, #ff6a00, rgba(255,106,0,0.3), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <div className="space-y-8 lg:space-y-14">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} gap-6 lg:gap-10 items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-[#ff6a00] z-10"
                  style={{ background: leader.memorial ? "#181818" : "linear-gradient(135deg, #ff6a00, #ff8c3a)" }} />

                {/* Card */}
                <div className="flex-1 group relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-7 md:p-10 hover:border-[#ff6a00]/25 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/[0.03] to-transparent pointer-events-none" />

                  <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
                    {/* Photo */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                          leader.memorial
                            ? "border-white/10 grayscale group-hover:grayscale-0"
                            : "border-[#ff6a00]/20 group-hover:border-[#ff6a00]/50"
                        }`}
                        style={leader.memorial ? undefined : { boxShadow: "0 0 0 4px rgba(255,106,0,0.08)" }}>
                        <img src={leader.image} alt={leader.alt} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-2 group-hover:text-[#ff8c3a] transition-colors">
                        {leader.name}
                      </h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 ${
                        leader.memorial
                          ? "border-white/10 bg-white/[0.04]"
                          : "border-[#ff6a00]/30 bg-[#ff6a00]/10"
                      }`}>
                        <span className={`text-[11px] font-bold tracking-wider ${leader.memorial ? "text-white/60" : "text-[#ff6a00]"}`}>
                          {leader.badge}
                        </span>
                      </div>
                      <p className="text-white leading-relaxed text-sm md:text-base">{leader.text}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#ff6a00]/70 via-[#ff8c3a]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
