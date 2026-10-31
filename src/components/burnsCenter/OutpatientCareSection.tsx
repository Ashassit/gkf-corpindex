import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home } from 'lucide-react';

export function OutpatientCareSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Home className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="mb-4 text-white">Selection for Outpatient Care</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto prose">
          <p className="text-white">
            Several factors are relevant to the decision regarding the location of burn care. Airways must not be compromised. The wound must be small enough so that fluid resuscitation is unnecessary, which generally precludes outpatient care for burns over 10-15% of TBSA. The patient must be able to ingest adequate fluid orally. Typically, serious burns to the face, ears, hands, genitals, or feet should initially be managed in an inpatient setting.
          </p>
          <p className="text-white">
            The patient and family must be able to support an outpatient care plan. An adult caregiver should be available who can be with a child treated in an outpatient setting. A family member or visiting nurse must be available who can perform the necessary wound cleansing, inspection, and dressing applications. The family must have adequate transportation to return for clinic visits and unexpected emergency visits. If abuse is suspected, outpatient management is contraindicated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
