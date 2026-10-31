import { Target, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import burnsbaby1 from '../../assets/newImages/burns/burnbaby1.jpg';
import butnsbaby2 from '../../assets/newImages/burns/burnbaby2.webp';
import burnsbaby3 from '../../assets/newImages/burns/burnbaby3.webp';

export function Goal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#080808] overflow-hidden" ref={ref}>
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-orange-600/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl"></div>
      </div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Goal card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-[#0d0d0d] border border-white/[0.07] rounded-3xl p-10 sm:p-14 shadow-2xl relative overflow-hidden mb-10"
        >
          {/* Inner orange glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl"></div>

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/60 via-amber-500/60 to-transparent rounded-t-3xl"></div>

          <div className="relative flex flex-col sm:flex-row items-start gap-8">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="inline-flex p-5 rounded-2xl bg-orange-500/15 border border-orange-500/25">
                  <Target className="w-10 h-10 text-orange-400" />
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-1.5 shadow-lg shadow-amber-500/30">
                  <Heart className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">Our Goal</span>
                </div>
                <h2 className="mb-6 text-white">
                  What We Strive For
                </h2>
                <p className="text-2xl sm:text-3xl text-white/80 leading-relaxed">
                  To{' '}
                  <span className="text-orange-400 font-medium">heal</span>,{' '}
                  <span className="text-amber-400 font-medium">restore</span>, and help every child{' '}
                  <span className="text-yellow-400 font-medium">smile</span> again.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Images row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-4"
        >
          {[
            { src: burnsbaby1, alt: 'Child recovery', delay: 0 },
            { src: butnsbaby2, alt: 'Children playing', delay: 0.1 },
            { src: burnsbaby3, alt: 'Children smiling', delay: 0.2 },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + img.delay }}
              className="w-36 sm:w-44 h-52 sm:h-60 rounded-2xl overflow-hidden border border-orange-500/20 shadow-lg shadow-orange-900/20 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
