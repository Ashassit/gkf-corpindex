import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Flame, Building2, Scissors } from 'lucide-react';

export function FeatureCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      title: 'Burns & Trauma Care Unit',
      icon: Flame,
      image: '',
    },
    {
      title: 'Burns Ward',
      icon: Building2,
      image: '',
    },
    {
      title: 'Skin Graft Mesher',
      icon: Scissors,
      image: '  ',
    },
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl h-80 cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <card.icon className="w-12 h-12 text-white mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-white">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
