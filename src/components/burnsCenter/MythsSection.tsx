import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XCircle, CheckCircle } from 'lucide-react';

export function MythsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const myths = [
    {
      myth: 'Skin donation mutilates the body.',
      fact: 'Donated organs and skin are removed surgically, which doesn\'t disfigure the body. The donor\'s body is dressed and clothed, so there are no visible signs of donation.',
    },
    {
      myth: 'Religion bars organ donation.',
      fact: 'Most religious beliefs permit organ donation or leave it to the individual\'s discretion. Religions endorse the act of giving and what bigger form of giving can there be than giving life?',
    },
    {
      myth: 'The donor\'s family is charged for donating organs.',
      fact: 'A donor\'s family is never charged for donating organs.',
    },
    {
      myth: 'Only the heart, liver and kidneys can be donated.',
      fact: 'Besides skin, other organs such as the pancreas, lungs, small and large intestines, and the stomach can also be transplanted. Moreover, tissues such as bone, heart valves and tendons can be donated too.',
    },
    {
      myth: 'If the ICU doctors know I\'m an organ donor, they won\'t work hard to save me.',
      fact: 'If you are admitted in a hospital – sick or injured, the priority is to save your life.',
    },
    {
      myth: 'What if I recover from brain death?',
      fact: 'This doesn\'t happen. The standards to determine if a person is brain dead are very strict and people who have agreed to donate their organs are given additional tests to confirm that they are truly dead.',
    },
    {
      myth: 'I\'m too old to be a donor.',
      fact: 'There is no set age limit for organ and tissue donation.',
    },
    {
      myth: 'Skin donation cannot be done when alive.',
      fact: 'Tissues that can be donated while alive include skin after surgeries such as a tummy tuck, bone after knee and hip replacements, and healthy cells from bone marrow and umbilical cord blood.',
    },
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="mb-4 text-white">Myths vs Facts</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-400 mb-2">Myth</p>
                    <p className="text-white/80 text-sm">{item.myth}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-400 mb-2">Fact</p>
                    <p className="text-white/80 text-sm">{item.fact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
