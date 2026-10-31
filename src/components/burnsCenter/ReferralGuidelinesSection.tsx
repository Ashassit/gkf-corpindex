import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText } from 'lucide-react';

export function ReferralGuidelinesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const guidelines = [
    'Inhalation injuries (all suspected)',
    'Partial thickness burns (second and first degree) ≥ 15% TBSA in patients aged 18-40 years old',
    'Partial thickness burns (second and first degree) ≥ 5% in children under 18 or adults older than 40',
    'Full thickness burns in any age (third degree burn)',
    'Patients with partial or full thickness burns involving hands, feet, face, eyes, ears, perineum, and/or major joints',
    'Patients with high-voltage electrical injuries or lightning strikes',
    'Chemical burns',
    'Patients with burns complicated by other trauma',
    'Patients with comorbidities that could complicate management',
    'Patients requiring special social/emotional and/or long term rehab',
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <FileText className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="mb-4 text-white">Referral Guidelines</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">ABLS – Advanced Burns Life Support</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto">
          <div className="bg-[#111111] border border-white/[0.07] p-8 rounded-2xl shadow-lg">
            <ul className="space-y-3">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span className="text-white/80">{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
