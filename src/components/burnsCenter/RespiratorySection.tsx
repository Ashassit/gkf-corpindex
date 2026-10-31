import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wind } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function RespiratorySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Wind className="w-12 h-12 mx-auto mb-4 text-cyan-600" />
          <h2 className="mb-4 text-white">Respiratory Care in Burn Patients</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="prose max-w-none">
              <p className="leading-relaxed mb-6 text-white/80">
                Burn patients usually have challenges beyond just the wounds to their skin. They often require respiratory care due to lung damage caused by smoke or steam inhalation. Failing to tackle lung or airway problems can lead to life-threatening and/or permanent complications.
              </p>

              <div className="bg-cyan-500/10 p-6 rounded-xl border-l-4 border-cyan-500 mb-6">
                <h4 className="text-cyan-400 mb-3">Acute Phase Care</h4>
                <p className="text-sm text-white/80">
                  Respiratory care is essential in the acute phase of medical care following burn injuries. Arterial blood gases will be tested to check for oxygenation of the blood.
                </p>
              </div>

              <div className="bg-blue-500/10 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="text-blue-400 mb-3">Mechanical Ventilation</h4>
                <p className="text-sm text-white/80">
                  Patients with burn injuries are sometimes kept in a medically-induced coma due to extreme pain or respiratory insult. The respiratory care team may be involved in the early intubation of the burn victim to prevent loss of the airway caused by swelling.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src=""
                alt="Medical Ventilator"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
