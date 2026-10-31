import { motion } from 'framer-motion';

export function QuantumOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large glowing orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
    </div>
  );
}
