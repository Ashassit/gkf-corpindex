import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  accentColor?: string;
}

const accents = [
  { bg: 'bg-orange-500/10', border: 'border-orange-500/20', hover: 'group-hover:bg-orange-500/20', icon: 'text-orange-400', top: 'from-orange-500' },
  { bg: 'bg-amber-500/10', border: 'border-amber-500/20', hover: 'group-hover:bg-amber-500/20', icon: 'text-amber-400', top: 'from-amber-500' },
  { bg: 'bg-red-500/10', border: 'border-red-500/20', hover: 'group-hover:bg-red-500/20', icon: 'text-red-400', top: 'from-red-500' },
  { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', hover: 'group-hover:bg-yellow-500/20', icon: 'text-yellow-400', top: 'from-yellow-500' },
  { bg: 'bg-pink-500/10', border: 'border-pink-500/20', hover: 'group-hover:bg-pink-500/20', icon: 'text-pink-400', top: 'from-pink-500' },
  { bg: 'bg-rose-500/10', border: 'border-rose-500/20', hover: 'group-hover:bg-rose-500/20', icon: 'text-rose-400', top: 'from-rose-500' },
];

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const accent = accents[index % accents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-[#111111] rounded-2xl p-8 border border-white/[0.07] hover:border-white/15 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent.top} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

      {/* Corner glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${accent.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      {/* Icon */}
      <div className="relative mb-5">
        <div className={`inline-flex p-4 rounded-xl ${accent.bg} border ${accent.border} ${accent.hover} transition-all duration-300`}>
          <Icon className={`w-7 h-7 ${accent.icon}`} />
        </div>
      </div>

      <h3 className="mb-3 text-white text-lg font-semibold group-hover:text-orange-300 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-white/60 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}
