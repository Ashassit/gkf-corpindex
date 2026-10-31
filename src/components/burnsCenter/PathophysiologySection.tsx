import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity } from 'lucide-react';

export function PathophysiologySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Activity className="w-12 h-12 mx-auto mb-4 text-red-600" />
          <h2 className="mb-4 text-white">Effects of Burn (Pathophysiology)</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-white">Local Response</h3>
            <p className="mb-6 text-white/80">The three zones of a burn were described by Jackson in 1947:</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-950/40 border border-red-500/30 p-6 rounded-xl shadow-md">
                <h4 className="text-red-400 mb-3">Zone of Coagulation</h4>
                <p className="text-sm text-white/80">
                  This occurs at the point of maximum damage. In this zone there is irreversible tissue loss due to coagulation of the constituent proteins.
                </p>
              </div>

              <div className="bg-orange-950/40 border border-orange-500/30 p-6 rounded-xl shadow-md">
                <h4 className="text-orange-400 mb-3">Zone of Stasis</h4>
                <p className="text-sm text-white/80">
                  The surrounding zone is characterised by decreased tissue perfusion. The tissue here is potentially salvageable. The main aim of burns resuscitation is to increase tissue perfusion here and prevent any damage becoming irreversible.
                </p>
              </div>

              <div className="bg-yellow-950/40 border border-yellow-500/30 p-6 rounded-xl shadow-md">
                <h4 className="text-yellow-400 mb-3">Zone of Hyperaemia</h4>
                <p className="text-sm text-white/80">
                  In this outermost zone tissue perfusion is increased. The tissue here will invariably recover unless there is severe sepsis or prolonged hypoperfusion.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-6 text-white">Systemic Response</h3>
            <p className="mb-6 text-white/80">
              The release of cytokines and other inflammatory mediators at the site of injury has a systemic effect once the burn reaches 30% of total body surface area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-950/40 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="text-blue-400 mb-3">Cardiovascular Changes</h4>
                <p className="text-sm text-white/80">
                  Capillary permeability is increased, leading to loss of intravascular proteins and fluids. Peripheral and splanchnic vasoconstriction occurs. Myocardial contractility is decreased. These changes result in systemic hypotension and end organ hypoperfusion.
                </p>
              </div>

              <div className="bg-purple-950/40 p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="text-purple-400 mb-3">Respiratory Changes</h4>
                <p className="text-sm text-white/80">
                  Inflammatory mediators cause bronchoconstriction, and in severe burns adult respiratory distress syndrome can occur.
                </p>
              </div>

              <div className="bg-green-950/40 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="text-green-400 mb-3">Metabolic Changes</h4>
                <p className="text-sm text-white/80">
                  The basal metabolic rate increases up to three times its original rate. This, coupled with splanchnic hypoperfusion, necessitates early and aggressive enteral feeding.
                </p>
              </div>

              <div className="bg-pink-950/40 p-6 rounded-xl border-l-4 border-pink-500">
                <h4 className="text-pink-400 mb-3">Immunological Changes</h4>
                <p className="text-sm text-white/80">
                  Non-specific down regulation of the immune response occurs, affecting both cell mediated and humoral pathways.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
