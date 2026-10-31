import { Award, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative bg-[#080808] text-white overflow-hidden min-h-[70vh] flex items-center mt-10">
      {/* Glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-5 py-2.5 mb-8"
          >
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">First of Its Kind in Tamil Nadu</span>
          </motion.div>

          {/* Icon accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="p-3 rounded-xl bg-orange-500/15 border border-orange-500/25">
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-orange-500/40 to-transparent max-w-xs"></div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 text-white leading-tight text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            Paediatric{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Burn Unit
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <p className="text-2xl sm:text-3xl text-white/80">
              Part of our{' '}
              <span className="text-amber-400 font-medium">Advanced Burn Life Support</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl"
          >
            A specialized, child-friendly unit dedicated to the care of children with burn injuries.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
    </div>
  );
}
