import { motion } from "framer-motion";
import { ArrowRight, Building2, Clock, Phone, Mail, Globe, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    content: [
      { text: "8, Kennett Road Madurai," },
      { text: "Tamil Nadu, India - 625016" },
    ],
  },
  {
    icon: Clock,
    label: "Operating Hours",
    content: [
      { text: "Emergency: 24/7", dot: "green" },
      { text: "OPD: 8 AM – 8 PM", dot: "blue" },
    ],
  },
];

const phones = ["+91 452 2601767", "+91 452 2601849", "+91 95854 40401", "+91 99434 50401", "+91 91591 40401"];
const emails = ["gkfindia@hotmail.com", "info@gkfmadurai.in", "admin@gkfmadurai.in"];

export function ContactSection() {
  return (
    <section className="bg-[#080808] relative overflow-hidden py-24" id="contact">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -top-32 right-1/4 w-[700px] h-[350px] bg-[#ff6a00]/[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[250px] bg-[#ff6a00]/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px] bg-[#ff6a00] rounded-full" />
              <Building2 className="w-3.5 h-3.5 text-[#ff6a00]" />
              <span className="text-[#ff6a00] text-[11px] font-bold tracking-[0.22em] uppercase">Visit Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.08]">
              Grace Kennett<br />
              <span style={{ background: "linear-gradient(90deg, #ff6a00, #ff8c3a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Foundation Hospital
              </span>
            </h2>
          </div>
          <p className="text-white/80 text-sm max-w-xs font-light leading-relaxed lg:text-right border-l lg:border-l-0 lg:border-r border-[#ff6a00]/20 pl-4 lg:pl-0 lg:pr-4">
            Find us at the heart of Madurai — delivering expert care every hour of every day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="lg:col-span-2 space-y-3">

            {/* Address + Hours */}
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                  className="flex gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-[#ff6a00]/25 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2">{item.label}</p>
                    <div className="space-y-1">
                      {item.content.map((c, j) => (
                        <div key={j} className="flex items-center gap-2">
                          {'dot' in c && <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot === 'green' ? 'bg-green-400 animate-pulse' : 'bg-blue-400'}`} />}
                          <p className="text-white text-sm">{c.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Phone */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }} viewport={{ once: true }}
              className="flex gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-[#ff6a00]/25 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }}>
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2">Phone Numbers</p>
                <div className="space-y-1">
                  {phones.map(phone => (
                    <a key={phone} href={`tel:${phone}`}
                      className="block text-white text-sm hover:text-[#ff6a00] transition-colors duration-200">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Email + Web */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }} viewport={{ once: true }}
              className="flex gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-[#ff6a00]/25 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }}>
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2">Email & Web</p>
                <div className="space-y-1 mb-3">
                  {emails.map(email => (
                    <a key={email} href={`mailto:${email}`}
                      className="block text-white text-sm hover:text-[#ff6a00] transition-colors duration-200">
                      {email}
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
                  <Globe className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <a href="https://gkfmadurai.in/" target="_blank" rel="noopener noreferrer"
                    className="text-[#ff6a00] text-sm font-medium hover:text-[#ff8c3a] transition-colors">
                    gkfmadurai.in ↗
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={() => window.open("https://maps.google.com/?q=8+Kennett+Road+Madurai+Tamil+Nadu+India", "_blank")}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full mt-2 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-white text-sm font-semibold tracking-wide hover:shadow-[0_0_32px_rgba(255,106,0,0.4)] transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }}>
              <Globe className="w-4 h-4" />
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right: Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className="lg:col-span-3">
            <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-3xl p-3 overflow-hidden"
              style={{ boxShadow: "0 0 80px rgba(255,106,0,0.05)" }}>
              <div className="rounded-2xl overflow-hidden h-96 lg:h-[580px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.513032744505!2d78.1057558!3d9.9174499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf7e6317643b%3A0xa837db1fc71ebad5!2sGrace%20Kennett%20Foundation!5e0!3m2!1sen!2sin!4v1730623100000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 rounded-2xl"
                  title="Grace Kennett Foundation Hospital Location"
                />

                {/* Floating info card */}
                <motion.div
                  className="absolute top-5 left-5 bg-[#0d0d0d]/95 backdrop-blur-md border border-white/[0.09] rounded-2xl p-5 shadow-2xl max-w-[210px]"
                  initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring" }} viewport={{ once: true }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }}>
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-none">GKF Hospital</p>
                      <p className="text-white/70 text-[11px] mt-0.5">Madurai, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <motion.span className="w-2 h-2 rounded-full bg-green-400"
                      animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
                    <span className="text-green-400 text-xs font-semibold">Open 24/7</span>
                  </div>
                  <p className="text-white/60 text-[11px]">8, Kennett Road</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
