import { Sparkles, Zap, Waves, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import quantum from "../../assets/newImages/quantum.webp";

export function PALSPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen pt-20 bg-[#080808] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-8 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={handleBack}
              variant="outline"
              className="mb-6 border-white/30 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div>
              <h1 className="text-4xl md:text-5xl">The Next Millimetre</h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-cyan-200/80 mt-2"
              >
                A Vision Beyond Healing
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Diagonal Split Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main diagonal split container */}
            <div className="relative rounded-3xl overflow-hidden bg-[#111111] border border-white/[0.07] backdrop-blur-sm">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

              <div className="flex flex-col lg:flex-row min-h-[700px]">
                {/* Image side - Desktop */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="hidden lg:block relative lg:w-[50%] flex-shrink-0"
                >
                  <ImageWithFallback
                    src={quantum}
                    alt="Quantum Medicine Science"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]/40" />
                </motion.div>

                {/* Mobile image */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="lg:hidden relative h-64 w-full"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1740560051629-72ed4b99af18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwbWVkaWNpbmUlMjBzY2llbmNlfGVufDF8fHx8MTc2MTk4MDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Quantum Medicine Science"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080808]/80" />
                </motion.div>

                {/* Content side */}
                <div className="relative flex-1 flex items-center lg:pl-8">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-full p-6 md:p-10 lg:pr-12 space-y-6"
                  >
                    {/* Introduction paragraphs */}
                    <div className="space-y-4 text-white/60 leading-relaxed">
                      <p>
                        In partnership with a leading university and a stem cell
                        expert, our journey unites science, ethics, and hope in
                        the field of stem cell research.
                      </p>
                      <p>
                        But our vision extends further. We envision a future of
                        light that heals—where medicine converges with quantum
                        science, and photons, the smallest messengers of energy,
                        awaken the body's innate power of repair.
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-24 h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-transparent" />

                    {/* Triple Helix Lab */}
                    <div className="space-y-4">
                      <h2 className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                        Triple Helix – Quantum Medical Sciences Lab
                      </h2>

                      <p className="text-white/60 leading-relaxed">
                        Through our Triple Helix – Quantum Medical Sciences Lab,
                        we explore how light, vibration, and intention can guide
                        a wound through its final, stubborn millimetre of
                        healing.
                      </p>

                      {/* Three elements */}
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1, duration: 0.6 }}
                          className="group"
                        >
                          <div className="relative p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                            <div className="inline-flex p-2 rounded-lg bg-cyan-500/10 mb-2">
                              <Sparkles className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h3 className="text-cyan-300">Light</h3>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="group"
                        >
                          <div className="relative p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center">
                            <div className="inline-flex p-2 rounded-lg bg-purple-500/10 mb-2">
                              <Waves className="w-5 h-5 text-purple-400" />
                            </div>
                            <h3 className="text-purple-300">Vibration</h3>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="group"
                        >
                          <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 text-center">
                            <div className="inline-flex p-2 rounded-lg bg-blue-500/10 mb-2">
                              <Zap className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-blue-300">Intention</h3>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-24 h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-transparent" />

                    {/* Philosophy */}
                    <div className="space-y-3">
                      <p className="text-white/60">We call this philosophy</p>

                      <p className="text-purple-300">Look, Learn, and Live</p>

                      <div className="space-y-1.5 py-2">
                        <p className="text-white/60 italic">
                          to look beyond the visible,
                        </p>
                        <p className="text-white/60 italic">
                          to learn from every spark of life,
                        </p>
                        <p className="text-white/60 italic">
                          and to live our purpose:
                        </p>
                      </div>

                      <p className="text-cyan-200">
                        healing not just bodies, but possibilities.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back Button at End */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-center mt-8"
          >
            <Button
              onClick={handleBack}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
