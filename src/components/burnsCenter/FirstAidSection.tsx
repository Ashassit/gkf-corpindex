import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, XCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function FirstAidSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const doList = [
    'Make sure you are safe before providing first aid. For example, turn off electrical sources or wear gloves for chemical burns.',
    'Stop the burning process by removing any clothing and irrigating the burned area.',
    'If the burn is caused by flames, extinguish them by allowing the person to roll on the ground, applying a blanket, or using water.',
    'Use cool running water to lower the temperature of the burn.',
    'For chemical burns, remove or dilute the chemical agent by irrigating with large volumes of water.',
    'Wrap the affected area with a clean cloth or sheet and take the person to the nearest medical facility for treatment.',
  ];

  const dontList = [
    'Do not provide first aid unless you have ensured your own safety.',
    'Avoid applying paste, oil, turmeric, or raw cotton to the burn.',
    'Do not apply ice as it can cause further injury. Do not use prolonged cooling with water as it can lead to hypothermia.',
    'Do not open blisters unless directed by a healthcare professional.',
    'Do not apply any material directly to the wound, as it can increase the risk of infection.',
    'Avoid applying topical medication until the person has received appropriate medical care.',
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white">First Aid</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">
            Guidelines for providing first aid for burns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-green-900/20 p-8 rounded-2xl border-2 border-green-700/50">
              <h3 className="text-green-400 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                What to do
              </h3>
              <ul className="space-y-4">
                {doList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-900/20 p-8 rounded-2xl border-2 border-red-700/50">
              <h3 className="text-red-400 mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                What not to do
              </h3>
              <ul className="space-y-4">
                {dontList.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759872138841-c342bd6410ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJzdCUyMGFpZCUyMGVtZXJnZW5jeSUyMGNhcmV8ZW58MXx8fHwxNzYxNTY1Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="First Aid Emergency Care"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5JTIwcHJldmVudGlvbnxlbnwxfHx8fDE3NjE1NjU3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fire Safety"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
