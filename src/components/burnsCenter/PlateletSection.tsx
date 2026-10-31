import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Droplet } from 'lucide-react';

export function PlateletSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Droplet className="w-12 h-12 mx-auto mb-4 text-red-600" />
          <h2 className="mb-4 text-white">Low Platelet Levels in Acute Burns</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto prose">
          <p className="text-white/80">
            Low platelet levels, also known as thrombocytopenia, can occur in patients with acute burns due to a number of reasons, such as increased destruction of platelets, decreased production of platelets, or increased consumption of platelets. Platelets play an important role in blood clotting, so low platelet levels can lead to bleeding complications.
          </p>

          <div className="bg-red-500/10 p-6 rounded-xl border-l-4 border-red-500 not-prose my-6">
            <h4 className="text-red-400 mb-3">Platelet Transfusion Guidelines</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• A platelet count of less than 10,000/microL is considered an indication for platelet transfusion</li>
              <li>• A count of less than 20,000/microL may be considered in patients with bleeding or at high risk of bleeding</li>
              <li>• Decision should be made on a case-by-case basis</li>
            </ul>
          </div>

          <p className="text-white/80">
            However, platelet transfusion is not without risks, and potential complications include transfusion reactions, infections, and fluid overload. Therefore, the decision to transfuse platelets should be made on a case-by-case basis, taking into account the patient's individual circumstances and risks.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
