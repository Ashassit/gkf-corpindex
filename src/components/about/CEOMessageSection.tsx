import { motion } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MessageSquareQuote } from "lucide-react";
import logo2 from "../../assets/logo2.png";
import msSir from "../../assets/ms-sir.png";

export function CEOMessageSection() {
  return (
    <section className="bg-[#080808] relative overflow-hidden py-24 pt-32" id="ceo">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="absolute -top-32 left-1/3 w-[700px] h-[350px] bg-[#ff6a00]/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[#ff6a00]/[0.04] rounded-full blur-[80px] pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-black text-white/[0.012] whitespace-nowrap tracking-tighter leading-none"
        style={{ fontSize: "16vw" }}
      >
        CEO
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#ff6a00]" />
            <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
            Message from Our{" "}
            <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              CEO
            </span>
          </h2>
        </motion.div>

        {/* ── MAIN CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-white/[0.07]"
        >
          <div className="grid lg:grid-cols-[400px_1fr]">

            {/* ══ LEFT: CEO photo panel ══ */}
            <div className="relative min-h-[420px] lg:min-h-[640px] overflow-hidden">
              <motion.img
                src={msSir}
                alt="Dr. Augustus Samuel Dodd"
                className="absolute inset-0 w-full h-full object-cover object-top"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                viewport={{ once: true }}
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]" />

              {/* Corner brackets */}
              <div className="absolute top-5 left-5 w-7 h-7 border-t-[2px] border-l-[2px] border-[#ff6a00]/60 rounded-tl" />
              <div className="absolute bottom-[100px] right-5 w-7 h-7 border-b-[2px] border-r-[2px] border-[#ff6a00]/20 rounded-br" />

              {/* Animated scan line */}
              <motion.div
                className="absolute left-0 right-0 pointer-events-none z-[1]"
                style={{
                  height: "35%",
                  background: "linear-gradient(to bottom, transparent, rgba(255,106,0,0.045) 50%, transparent)",
                }}
                animate={{ y: ["-100%", "390%"] }}
                transition={{ duration: 5, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
              />

              {/* Left vertical: SINCE 1947 */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 rotate-90 select-none pointer-events-none z-[2] flex items-center gap-3">
                <div className="w-4 h-[1px] bg-[#ff6a00]/30" />
                <span className="text-white/[0.07] text-[9px] font-black tracking-[0.5em] uppercase whitespace-nowrap">Since 1947</span>
                <div className="w-4 h-[1px] bg-[#ff6a00]/30" />
              </div>

              {/* Right vertical ghost label */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-white/[0.06] text-[9px] font-black tracking-[0.5em] uppercase whitespace-nowrap select-none">
                Chief Executive Officer
              </div>

              {/* Bottom name */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-7"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-7 h-[2px] bg-[#ff6a00] rounded-full mb-3" />
                <h3 className="text-white font-bold text-xl tracking-tight leading-snug">
                  Dr. (Capt.) Augustus<br />Samuel Dodd
                </h3>
                <p className="text-white/60 text-[10px] font-bold tracking-[0.22em] uppercase mt-1.5">
                  Chief Executive Officer
                </p>
              </motion.div>
            </div>

            {/* ══ RIGHT: Logo story editorial panel ══ */}
            <div
              className="relative flex flex-col overflow-hidden"
              style={{ background: "linear-gradient(160deg, #0e0e0e, #0a0a0a)" }}
            >
              {/* Faint watermark "CEO" behind content */}
              <div
                className="absolute bottom-0 -right-6 select-none pointer-events-none font-black text-white/[0.018] leading-none tracking-tighter"
                style={{ fontSize: "13vw" }}
              >
                CEO
              </div>

              {/* Top: Logo header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex items-center gap-3 lg:gap-5 px-6 pt-6 pb-5 lg:px-10 lg:pt-10 lg:pb-8 border-b border-white/[0.05]"
              >
                {/* Spinning logo with glow ring */}
                <div className="relative flex-shrink-0">
                  <div
                    className="absolute -inset-2 rounded-full opacity-40 blur-sm"
                    style={{ background: "radial-gradient(circle, rgba(255,106,0,0.4), transparent 70%)" }}
                  />
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-[#ff6a00]/30 bg-white p-1"
                  >
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                      className="w-9 h-9"
                    >
                      <ImageWithFallback src={logo2} alt="GKF Logo" className="object-contain w-full h-full" />
                    </motion.div>
                  </div>
                </div>

                <div>
                  <p className="text-white/60 text-[9px] font-bold tracking-[0.35em] uppercase mb-0.5">Our Symbol</p>
                  <h3 className="text-white font-bold text-xl tracking-tight">A Note on Our Logo</h3>
                </div>

                {/* Decorative dots top-right */}
                <div className="ml-auto flex items-center gap-1.5 self-start pt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]/25" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]/10" />
                </div>
              </motion.div>

              {/* Body text — full butterfly story */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                viewport={{ once: true }}
                className="relative z-10 flex-1 px-6 py-5 lg:px-10 lg:py-8"
              >
                <p className="leading-[1.95] text-[14.5px] font-light text-white/90">
                  {/* Drop cap A */}
                  <span
                    className="float-left font-bold mr-2 leading-none select-none"
                    style={{
                      fontSize: "4.2rem",
                      lineHeight: "0.8",
                      background: "linear-gradient(135deg, #ff6a00, #ff8c3a)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginTop: "6px",
                    }}
                  >
                    A
                  </span>
                  butterfly's wing is a map of <span className="font-semibold">fragility</span> and <span className="font-semibold">strength</span>. Ours is <span className="font-semibold">orange</span>, for the <span className="font-semibold">fire of hope</span> in the face of adversity and our stand against violence. It is a wing that is <span className="font-semibold">broken</span>, a life that is <span className="font-semibold">fractured</span>. But then comes the <span className="font-semibold">yellow</span> — the color of the morning sun, of <span className="font-semibold">new beginnings</span>. It is the gentle, deliberate act of <span className="font-semibold">repair</span>. It is the skill shared, the nourishment given, the safe home offered, the <span className="font-semibold">healing granted</span>. This yellow mend is more than a repair; it is the <span className="font-semibold">profound simplicity of a gift</span>. It is the active choice to <span className="font-bold">Gift Life</span>. This logo is not a symbol of perfection. It is a symbol of profound <span className="font-semibold">resilience</span>. It proves that with compassion and action, a life once broken can be <span className="font-semibold">mended</span>. It is a testament to the truth that <span className="font-semibold">together</span>, we can rebuild the most fragile of things and <span className="font-bold">restore the ability to soar</span>. We find the broken wings. We provide the <span className="font-semibold">yellow</span>. We <span className="font-bold">Gift Life</span>.
                </p>
              </motion.div>

              {/* Bottom signature strip */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                viewport={{ once: true }}
                className="relative z-10 px-6 py-4 lg:px-10 lg:py-5 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-x-4 gap-y-2"
              >
                <p className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">Grace Kennett Foundation · Madurai</p>
                <div
                  className="text-[#ff6a00]/60 font-serif italic text-sm font-medium"
                >
                  Gift Life.
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
