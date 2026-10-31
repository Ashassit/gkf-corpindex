import { motion } from "framer-motion";
import gkfHospital from "../../assets/newImages/newgkf.jpg";

export function IntroductionSection() {
  return (
    <section className="bg-[#0d0d0d] relative overflow-hidden py-24" id="introduction">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#ff6a00]/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] bg-[#ff6a00]/[0.03] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
            <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-6">
            Grace Kennett<br />
            <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Foundation
            </span>
          </h2>
          <p className="text-white/80 text-base max-w-2xl leading-relaxed">
            A <span className="text-white/80 font-semibold">non-profit organization</span> with a glorious 80-year
            history. Our work has saved the lives of{" "}
            <span className="text-[#ff6a00] font-semibold">a thousand victims</span> of female infanticide and
            abandoned children.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}
          className="relative group"
          style={{ boxShadow: "0 0 80px rgba(255,106,0,0.07)" }}>
          <div className="relative h-[420px] md:h-[560px] overflow-hidden rounded-3xl border border-white/[0.07]">
            <motion.img
              src={gkfHospital}
              alt="Grace Kennett Foundation Hospital"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              initial={{ scale: 1.07 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/92 via-[#080808]/35 to-transparent" />

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Building Happy Families</h3>
              <p className="text-white leading-relaxed max-w-2xl text-sm md:text-base">
                A thousand happy families have been built through adoption. If you need to have a garden, dig a well
                first. Our well is our hospital and our allied services. We address the physical, mental, and social
                well-being of the community and raise resources to pursue our lofty objectives.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
