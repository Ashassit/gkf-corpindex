import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Ambulance, Heart, Wind, Activity } from 'lucide-react';

export function OnArrivalSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Ambulance className="w-12 h-12 mx-auto mb-4 text-red-600" />
          <h2 className="mb-4 text-white">On Arrival</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto">
          <p className="mb-8 text-white/80 leading-relaxed">
            Our 24×7 Accident and Emergency unit is one of the best equipped with Triage and Critical care services by registered medical professionals and qualified staff. Algorithms for resuscitation are applied to improve the speed and quality of treatment.
          </p>

          <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-lg mb-8 border border-white/[0.07]">
            <h3 className="text-2xl mb-6 text-white">CAB (Circulation Airway Breathing) Approach</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Heart className="w-16 h-16 mx-auto mb-4 text-red-600" />
                <h4 className="mb-2 text-white">Circulation</h4>
              </div>
              <div className="text-center">
                <Wind className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h4 className="mb-2 text-white">Airway</h4>
              </div>
              <div className="text-center">
                <Activity className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h4 className="mb-2 text-white">Breathing</h4>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="mb-4 text-white/80">The aims of the CAB approach are:</p>
              <ul className="space-y-2 text-white/80">
                <li>To provide life-saving treatment</li>
                <li>To break down complex clinical situations into more manageable parts</li>
                <li>To serve as an assessment and treatment algorithm</li>
                <li>To establish common situational awareness among all treatment providers</li>
              </ul>
              <p className="mt-4 text-white/80">
                A uniform adoption of the CAB approach among members of a treatment team improves team performance. Triage is the sorting of patients according to the urgency of their need for care.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#111111] p-6 rounded-xl shadow-md border-l-4 border-red-500 border border-white/[0.07]">
              <h4 className="text-red-400 mb-3">Circulation</h4>
              <p className="text-sm text-white/80 mb-2">
                Adults and children with burns greater than 20% & 15% TBSA respectively, should undergo formal fluid resuscitation.
              </p>
              <p className="text-sm text-white/80">
                <strong>Wallace Rule of Nines:</strong> Used to assess total body surface area (TBSA) involved in burn patients.
              </p>
              <p className="text-sm text-white/80 mt-2">
                <strong>Parkland Formula:</strong> 2 to 4 ml of Ringer's Lactate per kilogram of weight per percentage of body surface area burned.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl shadow-md border-l-4 border-blue-500 border border-white/[0.07]">
              <h4 className="text-blue-400 mb-3">Airway</h4>
              <p className="text-sm text-white/80">
                Signs of airway burn/inhalation injury: stridor, hoarseness, black sputum, respiratory distress, singed nasal hairs or facial swelling. Consider early intubation if present.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl shadow-md border-l-4 border-green-500 border border-white/[0.07]">
              <h4 className="text-green-400 mb-3">Breathing</h4>
              <p className="text-sm text-white/80">
                Full thickness and/or circumferential chest burns may require escharotomy to permit chest expansion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
