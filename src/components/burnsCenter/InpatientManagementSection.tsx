import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, CheckSquare } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import burnsbronc1 from "../../assets/newImages/Bronchoscope[1].jpg";

export function InpatientManagementSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const phases = [
    'Initial evaluation and resuscitation',
    'Initial wound excision and biologic closure',
    'Definitive wound closure',
    'Rehabilitation and reconstruction',
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Building className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="mb-4 text-white">Inpatient Management</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="mb-6 text-white leading-relaxed">
              All major burn injuries are admitted in the ABLS unit. The management plan for patients with large burns that require inpatient care is usually determined by the physiology of the burn injury. Management requires a coordinated approach that involves a specialized team.
            </p>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl">
              <h3 className="mb-4 flex items-center text-blue-400">
                <CheckSquare className="w-6 h-6 mr-2" />
                Hospitalization Phases
              </h3>
              <ol className="space-y-3">
                {phases.map((phase, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-3">({index + 1})</span>
                    <span className="text-white">{phase}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src={burnsbronc1}
                alt="Hospital Burns Unit"
                className="w-full h-120 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
