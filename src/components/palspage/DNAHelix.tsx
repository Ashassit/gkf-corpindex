import { motion } from 'framer-motion';

export function DNAHelix() {
  const createHelixPoints = (offset: number) => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 4 + offset;
      const x = Math.cos(angle) * 30;
      const y = i * 15;
      points.push({ x, y, delay: i * 0.1 });
    }
    return points;
  };

  const helix1 = createHelixPoints(0);
  const helix2 = createHelixPoints(Math.PI);

  return (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20">
      <svg width="100" height="300" viewBox="-50 0 100 300">
        {helix1.map((point, i) => (
          <motion.circle
            key={`h1-${i}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="url(#gradient1)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: point.delay, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
        {helix2.map((point, i) => (
          <motion.circle
            key={`h2-${i}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="url(#gradient2)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: point.delay, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
