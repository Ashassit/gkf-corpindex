import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Droplets } from 'lucide-react';

export function BurnsBathSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const reasons = [
    'To help in the initial assessment of TBSA',
    'To enhance desloughing and to clean the wound surface',
    'To drain pus and to help debride',
    'To alter microbial flora',
    'To ensure all topical medications are completely removed prior to applying new agents',
    'To enhance healthy tissue formation and healing',
    'To facilitate physical therapy',
    'To comfort and psychologically uplift the patient',
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Droplets className="w-12 h-12 mx-auto mb-4 text-cyan-600" />
          <h2 className="mb-4 text-white">Burns Bath</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">Patient Bathing (Hydrotherapy)</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto">
          <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-lg mb-8">
            <h3 className="mb-6 text-white">Purpose of Patient Bathing:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                  <span className="text-cyan-600 mr-3">{index + 1}.</span>
                  <span className="text-white/80">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-white/80">
              The procedure is done in a separate cubicle designed for Burn Bath. We use warm water shower or immersion – depending on the patient's needs. Analgesia and/or mild sedation are administered according to procedure planning and the patient's pain tolerance.
            </p>
            <p className="text-white/80">
              Care should be taken to avoid damaging the new epithelial tissues and grafted area. Post collagen application, the bath is recommended five days post procedure. Bathing the patient helps to increase circulation, promote relaxation, provide a general stimulus, and aid in the wound healing process by reducing the microbial load.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
