import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scroll } from 'lucide-react';

export function HistorySection() {
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
          <Scroll className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="mb-4 text-white">History</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose max-w-none"
        >
          <p className="leading-relaxed text-white">
            In the past 50 years, significant advances have been made in burn care, including the use of dressings, antimicrobials, fluid resuscitation, burn wound excision, skin grafting, and skin substitutes. However, the history of burn treatments dates back to ancient times, with cave paintings over 3500 years old depicting burns and their treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">1500 BC - Egyptian Era</div>
              <p className="text-sm text-white/80">
                The Egyptian Ebers papyrus recommended a 5-day treatment using a mixture of cattle dung, beeswax, ram's horn, and barley porridge soaked in resin.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">600 BC - Ancient China</div>
              <p className="text-sm text-white/80">
                Chinese physicians treated burn wounds with extracts from tea leaves.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">500 BC - Hippocrates</div>
              <p className="text-sm text-white/80">
                Used porcine skin and resin of bitumen impregnated in dressings, alternated with warm vinegar soaks and tanning solutions.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">1st Century AD - Celsus</div>
              <p className="text-sm text-white/80">
                Recommended wine and myrrh for burns.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">300 AD - Hong Ge</div>
              <p className="text-sm text-white/80">
                Described a topical ointment made of calcarea and plant oil or pig fat cooked with willow bark.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">16th Century - Ambroise Paré</div>
              <p className="text-sm text-white/80">
                Used onions for burn treatment and described early burn wound excision.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">1797 - Edward Kentish</div>
              <p className="text-sm text-white/80">
                Described pressure dressings for burn pain and blisters.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-lg shadow-md border-l-4 border-l-blue-600">
              <div className="text-blue-400 mb-2">1839 - Guillaume Dupuytren</div>
              <p className="text-sm text-white/80">
                Reviewed the treatment of 50 burn patients with occlusive dressings and developed a classification of burn depth still in use today. Also recognized gastric and duodenal ulceration as a complication of severe burns, a concept described in more detail by Curling in 1842.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
