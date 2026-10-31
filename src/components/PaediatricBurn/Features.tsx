import { Heart, Droplet, Thermometer, Users, UserCircle, Rainbow } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Droplet,
    title: 'Comprehensive Care',
    description: 'From resuscitation to rehabilitation.'
  },
  {
    icon: Thermometer,
    title: 'Safe & Warm Environment',
    description: 'Infection-controlled, temperature-regulated rooms.'
  },
  {
    icon: UserCircle,
    title: 'Expert Team',
    description: 'Burn surgeons, paediatric specialists, nurses, therapists, and counsellors.'
  },
  {
    icon: Heart,
    title: 'Pain & Comfort',
    description: 'Gentle dressings, effective analgesia, and emotional support.'
  },
  {
    icon: Users,
    title: 'Family Support',
    description: 'Parents are closely involved during recovery and follow-up.'
  },
  {
    icon: Rainbow,
    title: 'Recovery & Beyond',
    description: 'Early physiotherapy, scar care, and reintegration support.'
  }
];

export function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#080808]" ref={ref}>
      {/* Subtle background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/25 text-orange-400 px-5 py-2 rounded-full mb-6 text-sm">
            Our Specialized Care
          </div>
          <h2 className="text-white mb-6">
            Comprehensive Care Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Dedicated to providing the highest standard of care for pediatric burn patients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
