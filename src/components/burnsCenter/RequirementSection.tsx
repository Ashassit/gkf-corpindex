import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Wrench } from 'lucide-react';

export function RequirementSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="mb-4 text-white">Requirement & Methodology</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-5xl mx-auto space-y-12">
          <div className="prose max-w-none">
            <h3 className="flex items-center text-blue-400">
              <Users className="w-6 h-6 mr-2" />
              Requirement
            </h3>
            <p className="text-white/80">
              In India, there is a significant problem of burns injuries, with around 7 million cases occurring each year. Out of these, 0.14 million people die annually. The majority of burn injuries (70%) happen to people in the most productive age group of 15-35 years, and women and children account for around 80% of all cases. Kitchen-related accidents are the most common cause of burns, responsible for 80% of all admissions.
            </p>
            <p className="text-white/80">
              The region that our programme aims to benefit includes Madurai district, with a population of 32 million, as well as the adjoining districts of Theni (13 million), Ramnad (13 million), Dindigul (22 million), and Sivagangai (13 million). To meet the needs of this region, our programme will require approximately 5,000 donations per year.
            </p>
          </div>

          <div className="bg-[#0d0d0d] border border-white/[0.07] p-8 rounded-2xl">
            <h3 className="flex items-center text-indigo-400 mb-6">
              <Wrench className="w-6 h-6 mr-2" />
              Methodology
            </h3>
            <p className="mb-4 text-white/80">
              The process of skin harvesting for donation involves a team consisting of a doctor or trained skin bank technician, two nurses, and an attendant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <h5 className="text-blue-400 mb-2">Harvesting Process</h5>
                <p className="text-sm text-white/80">
                  A special instrument called a dermatome harvests only the uppermost 1/8th layer of skin from the legs, thighs, and back without causing bleeding or disfigurement.
                </p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <h5 className="text-blue-400 mb-2">Preservation</h5>
                <p className="text-sm text-white/80">
                  The skin is processed, screened, and preserved in an 85% glycerol solution at 4 to 8 degrees Celsius for up to 5 years.
                </p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <h5 className="text-blue-400 mb-2">Compatibility</h5>
                <p className="text-sm text-white/80">
                  Skin from any donor can be transplanted onto any patient without any need for matching blood type, color, or age, as long as all blood reports are negative.
                </p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                <h5 className="text-blue-400 mb-2">Distribution</h5>
                <p className="text-sm text-white/80">
                  The skin is then supplied to burns surgeons for transplanting onto burn patients.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0d0d0d] border border-white/[0.07] p-8 rounded-2xl">
            <h3 className="text-white mb-6">Skill Training</h3>
            <p className="mb-4 text-white/80">
              The Grace Kennett Foundation has launched a unique Skin Banking and Burns Management Course to provide healthcare workers with the necessary skills. The first batch of 20 students has already completed the training successfully.
            </p>
            <p className="text-white/80">
              Every year, multiple batches of healthcare workers from various districts will be trained at the Grace Kennett Foundation Hospital. These workers will then return to their communities to apply the knowledge and skills acquired during the training. Additionally, the Foundation plans to collaborate with voluntary organizations, the Indian Medical Association, Eye donation programme units, Rotary International, and other relevant agencies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
