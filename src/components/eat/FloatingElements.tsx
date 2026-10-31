import { motion } from 'framer-motion';
import { Apple, Leaf, Heart, Sparkles, Coffee, Carrot } from 'lucide-react';

const floatingItems = [
  { Icon: Apple, delay: 0, duration: 3, x: '10%', y: '15%', color: 'text-red-400' },
  { Icon: Leaf, delay: 0.5, duration: 4, x: '85%', y: '20%', color: 'text-green-400' },
  { Icon: Heart, delay: 1, duration: 3.5, x: '15%', y: '70%', color: 'text-pink-400' },
  { Icon: Sparkles, delay: 1.5, duration: 4.5, x: '80%', y: '75%', color: 'text-yellow-400' },
  { Icon: Coffee, delay: 0.8, duration: 3.8, x: '70%', y: '45%', color: 'text-amber-400' },
  { Icon: Carrot, delay: 1.2, duration: 4.2, x: '25%', y: '40%', color: 'text-orange-400' },
];

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color}`}
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <item.Icon size={40} strokeWidth={1.5} opacity={0.2} />
        </motion.div>
      ))}
    </div>
  );
}
