import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function PhysiotherapySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Activity className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h2 className="mb-4 text-white">Physiotherapy in Burns</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1545463913-5083aa7359a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaW90aGVyYXB5JTIwcmVoYWJpbGl0YXRpb258ZW58MXx8fHwxNzYxNTA5OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Physiotherapy Rehabilitation"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <p className="mb-6 text-white/80 leading-relaxed">
              Physiotherapy plays a crucial role in the management of patients with burn injuries from admission to acute care and throughout the rehabilitation process in our ABLS Centre.
            </p>

            <div className="space-y-4">
              <div className="bg-green-500/10 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="text-green-400 mb-2">Admission and Assessment</h4>
                <p className="text-sm text-white/80">
                  The physiotherapist evaluates the patient's physical condition, including extent and depth of burn injuries, respiratory function, mobility, and overall functional status.
                </p>
              </div>

              <div className="bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-blue-400 mb-2">Acute Care Phase</h4>
                <p className="text-sm text-white/80">
                  Includes respiratory care, early mobilization, pain management, and proper positioning to prevent joint stiffness and contractures.
                </p>
              </div>

              <div className="bg-purple-500/10 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-purple-400 mb-2">Wound Care & Positioning</h4>
                <p className="text-sm text-white/80">
                  Physiotherapists assist in positioning during wound dressing changes and educate patients on wound care techniques.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="max-w-4xl mx-auto mt-12">
          <div className="bg-[#0d0d0d] p-8 rounded-2xl border border-white/[0.07]">
            <h3 className="mb-4 text-white">Positioning of Joints</h3>
            <p className="mb-4 text-white/80">
              Positioning of the joints involved in burn injuries is essential from the first day of admission until the scars mature. Correct positioning achieves:
            </p>
            <ul className="space-y-2 text-white/80">
              <li>• <strong>Reduction of Swelling:</strong> Proper joint positioning helps reduce swelling and edema</li>
              <li>• <strong>Prevention of Further Damage:</strong> Prevents excessive stress on joints and exposed tendons</li>
              <li>• <strong>Protection of New Skin Grafts:</strong> Safeguards newly grafted skin for successful wound healing</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
