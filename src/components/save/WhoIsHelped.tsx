import whoishelped from '../../assets/volunteer/who-is-helped.webp';
import { ResponsivePicture } from './ResponsivePicture';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Home, Pin } from 'lucide-react';
import { useState } from 'react';

export function WhoIsHelped() {
  const impacts = [
    {
      icon: Shield,
      text: 'Victims of Female Infanticide',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      paperColor: 'bg-[#1a1010]',
      rotation: -2,
      description: 'Protecting and nurturing the most vulnerable',
    },
    {
      icon: Home,
      text: 'Abandoned Children',
      color: 'bg-gradient-to-br from-white/20 to-white/10',
      paperColor: 'bg-[#141414]',
      rotation: 1,
      description: 'Giving hope to those without a home',
    },
    {
      icon: Heart,
      text: 'Children in Our Mazhalai Illam',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      paperColor: 'bg-[#1a1010]',
      rotation: -1,
      description: 'Caring with love in our children\'s home',
    }
  ];

  return (
    <section
      id="who-is-helped"
      className="section-container relative py-12 md:py-16 bg-[#0d0d0d]"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block relative mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <div className="relative bg-[#1a1a1a] px-5 py-2 rounded-lg border border-white/10" style={{ transform: 'rotate(-1deg)' }}>
                <motion.div
                  className="absolute -top-1.5 left-1/2 -translate-x-1/2"
                  animate={{ rotate: [0, 8, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Pin className="w-4 h-4 text-orange-500 fill-orange-500" />
                </motion.div>

                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-orange-400">Our Mission</span>
                </div>
              </div>
            </motion.div>

            <h2 className="site-heading text-3xl md:text-4xl mb-3 text-white">
              Who is Helped<br />
              by You?
            </h2>

            <motion.p
              className="text-base text-white max-w-2xl mx-auto italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "Your generosity reaches those who need it most"
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10 items-start">
            <div className="space-y-4">
              {impacts.map((impact, index) => (
                <PaperCard
                  key={index}
                  impact={impact}
                  index={index}
                />
              ))}
            </div>

            <div className="lg:sticky lg:top-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.8 }}
              >
                <PolaroidPhoto />
              </motion.div>
            </div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto mb-10"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="relative bg-[#1a1a1a] rounded-lg p-6 md:p-8 border-l-4 border-orange-500">
                <div className="absolute -top-1 left-12 w-12 h-5 bg-orange-500/20 rounded-sm rotate-2 shadow-sm" />
                <div className="absolute -top-1 right-16 w-16 h-5 bg-orange-500/20 rounded-sm -rotate-1 shadow-sm" />

                <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
                  <span className="text-3xl text-orange-500 leading-none">"</span>
                  Every child deserves a chance at life, love, and happiness. Together, we're making that possible.
                  <span className="text-3xl text-orange-500 leading-none">"</span>
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
                    <Heart className="w-5 h-5 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-white">Grace Kennett Foundation</p>
                    <p className="text-sm text-white/50">Since 1944</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div
                className="relative bg-[#141414] rounded-xl border border-white/10 overflow-hidden"
                style={{ transform: 'rotate(-0.5deg)' }}
              >
                <div className="absolute top-3 right-3 w-12 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm shadow-md border-2 border-white/10" style={{
                  clipPath: 'polygon(0 0, 20% 10%, 40% 0, 60% 10%, 80% 0, 100% 10%, 100% 90%, 80% 100%, 60% 90%, 40% 100%, 20% 90%, 0 100%)'
                }}>
                  <div className="flex items-center justify-center h-full">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="max-w-xl">
                    <h3 className="text-xl md:text-2xl text-white mb-2">
                      Mazhalai Illam
                    </h3>
                    <p className="text-base text-white mb-4 italic">Our Children's Home</p>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-white">A safe haven filled with warmth</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-white">Nurturing new beginnings with care</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm text-white">Building brighter futures together</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 left-1/2 h-20 border-l-2 border-dashed border-white/10 p-3 opacity-20">
                  <div className="space-y-1.5">
                    <div className="h-px bg-white/30" />
                    <div className="h-px bg-white/30" />
                    <div className="h-px bg-white/30" />
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 z-10"
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Pin className="w-5 h-5 text-white/40 fill-white/40" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PaperCard({ impact, index }: { impact: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50, rotate: impact.rotation * 2 }}
      whileInView={{ opacity: 1, x: 0, rotate: impact.rotation }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: index * 0.15
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative group"
        whileHover={{ scale: 1.02, rotate: 0, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute -top-1.5 left-8 z-20"
          animate={{ rotate: isHovered ? [0, 8, -8, 0] : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Pin className="w-4 h-4 text-white/30 fill-white/30" />
        </motion.div>

        <div className="absolute inset-0 bg-black/30 rounded-lg blur-sm translate-y-1 translate-x-1" />

        <div
          className={`relative ${impact.paperColor} rounded-lg border border-white/10 overflow-hidden`}
        >
          <div className="relative p-5">
            <div className="flex items-start gap-3">
              <motion.div
                className={`w-10 h-10 ${impact.color} rounded-lg flex items-center justify-center shadow-md flex-shrink-0`}
                animate={{ rotate: isHovered ? [0, -5, 5, 0] : 0 }}
                transition={{ duration: 0.4 }}
              >
                <impact.icon className="w-5 h-5 text-white" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-base text-white mb-1">
                  {impact.text}
                </h3>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-white/80 italic mt-1">
                    {impact.description}
                  </p>
                </motion.div>

                <svg
                  width="100%"
                  height="2"
                  viewBox="0 0 200 2"
                  className="mt-2"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0,1 Q50,1.5 100,1 T200,1"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    className="text-white/20"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PolaroidPhoto() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-48 mx-auto"
      style={{ perspective: '1000px' }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="absolute -top-2 left-1/2 -translate-x-1/2 z-20"
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Pin className="w-4 h-4 text-orange-500 fill-orange-500" />
      </motion.div>

      <motion.div
        className="relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="relative bg-[#1a1a1a] p-2 pb-8 rounded-sm border border-white/10"
          style={{
            backfaceVisibility: 'hidden',
            boxShadow: '0 6px 20px rgba(0,0,0,0.5)'
          }}
        >
          <div className="relative aspect-[5/5] bg-[#222] rounded-sm overflow-hidden">
            <ResponsivePicture
              desktopSrc={whoishelped}
              alt="Children who are helped"
              className="w-full h-full object-cover"
              loading="lazy"
              fetchpriority="auto"
            />
          </div>

          <div className="mt-2 text-center">
            <p className="text-sm text-white">
              With Love & Care ♡
            </p>
            <p className="text-xs text-white/70 mt-0.5">1000+ lives touched</p>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-[#1a1a1a] p-4 rounded-sm border border-white/10"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: '0 6px 20px rgba(0,0,0,0.5)'
          }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            <Home className="w-8 h-8 text-orange-500 mb-2" />
            <p className="text-base text-white mb-2">
              "A moment of joy"
            </p>
            <p className="text-xs text-white/80 italic">
              Every photo tells a story of hope
            </p>
          </div>
        </div>
      </motion.div>

      <div className="absolute -top-0.5 -right-0.5 w-8 h-3 bg-orange-500/20 rotate-12 rounded-sm shadow-sm" />
    </motion.div>
  );
}
