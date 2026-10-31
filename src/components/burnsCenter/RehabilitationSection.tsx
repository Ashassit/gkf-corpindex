import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

export function RehabilitationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-4 text-pink-600" />
          <h2 className="mb-4 text-white">Burns Rehabilitation Process</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-8">
            <p className="text-white/80">
              Burns rehabilitation is a crucial part of treating burn injuries, and it starts from the moment the patient is admitted to the hospital. This process can continue for several months or even years after the initial event, and it involves a team approach that includes the patient and, if appropriate, their family.
            </p>

            <p className="text-white/80">
              The term "Burns Rehabilitation" encompasses the physical, psychological, and social aspects of care, and burn patients may face challenges in one or all of these areas. If left untreated, burns can cause severe disability and deformities that can limit a patient's ability to function.
            </p>
          </div>

          <div className="bg-[#0d0d0d] p-8 rounded-2xl mb-8">
            <h3 className="mb-4 text-white">Goals of Burn Rehabilitation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <p className="text-sm text-white/80">• Minimize the negative effects of the injury</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <p className="text-sm text-white/80">• Maintain range of motion</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <p className="text-sm text-white/80">• Minimize contractures and scarring</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <p className="text-sm text-white/80">• Maximize functional ability</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <p className="text-sm text-white/80">• Promote psychological well-being</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <p className="text-sm text-white/80">• Facilitate social integration</p>
              </div>
            </div>
          </div>

          <Alert className="border-2 border-red-500 bg-red-500/10">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <AlertDescription>
              <h3 className="mb-2 text-red-400">REMEMBER – TOMORROW MIGHT BE TOO LATE!</h3>
              <p className="text-white/80">
                It's important for burn patients to begin their rehabilitation as soon as possible, even if they may not feel ready for it. Delaying rehabilitation can lead to more difficulty and pain in the long run, as well as a worse outcome. Once time passes, missed opportunities for rehabilitation cannot be easily regained, and joint stiffness and soft-tissue tethering can become increasingly severe.
              </p>
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </section>
  );
}
