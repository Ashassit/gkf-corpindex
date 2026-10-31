import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function TrainingProgramsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
          <h2 className="site-heading mb-4 text-white">
            Core Training Programmes
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="bbc" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-[#111111]">
              <TabsTrigger value="bbc" className="text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/10">BBC</TabsTrigger>
              <TabsTrigger value="ebc" className="text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/10">EBC</TabsTrigger>
              <TabsTrigger value="abc" className="text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/10">ABC</TabsTrigger>
            </TabsList>

            <TabsContent value="bbc" className="mt-8">
              <div className="bg-[#0d0d0d] border border-blue-500/20 p-8 rounded-2xl">
                <h3 className="text-blue-400 mb-4">Basic Burn Care (BBC)</h3>
                <p className="text-white/80 mb-4">
                  A face to face 1 day course covering prevention, first aid,
                  initial treatment, and referral. It is ideal for use in remote
                  rural areas or community level urban settings.
                </p>
                <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                  <p className="text-sm text-white/80">
                    Duration: 1 Day | Target: Community Healthcare Workers
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ebc" className="mt-8">
              <div className="bg-[#0d0d0d] border border-green-500/20 p-8 rounded-2xl">
                <h3 className="text-green-400 mb-4">
                  Essential Burn Care (EBC)
                </h3>
                <p className="text-white/80 mb-4">
                  The vast majority of burns are 'mild' or 'moderate'. Essential
                  Burn Care (EBC) emphasises the management of these cases to
                  help reduce the morbidity and mortality from burn injuries.
                </p>
                <p className="text-white/80 mb-4">
                  EBC is a face to face 1 or 2 day course for all those dealing
                  with the burn patient including surgeons, nurses, therapists,
                  and nutritionists, typically from secondary and tertiary level
                  hospitals. It covers all key aspects, from emergency care to
                  rehabilitation with sections on psychosocial care linked to
                  pain, suffering and stigma, and paediatric burns.
                </p>
                <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                  <p className="text-sm text-white/80">
                    Duration: 1-2 Days | Target: Medical Professionals
                  </p>
                  <p className="text-sm text-white/80 mt-2">
                    Focus: Knowledge into ACTION through participatory teamwork
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="abc" className="mt-8">
              <div className="bg-[#0d0d0d] border border-purple-500/20 p-8 rounded-2xl">
                <h3 className="text-purple-400 mb-4">
                  Advanced Burn Care (ABC)
                </h3>
                <p className="text-white/80 mb-4">
                  Advanced Burn Care (ABC) is a 5 day 'hands on' training
                  programme in separate modules – Rehabilitation, Nursing and
                  Surgery supporting core members of the burns team.
                </p>
                <p className="text-white/80 mb-4">
                  ABC focusses on developing real world skills and
                  decision-making abilities that can be put into practice in
                  challenging environments with limited resources.
                </p>
                <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg">
                  <p className="text-sm text-white/80">
                    Duration: 5 Days | Target: Core Burns Team Members
                  </p>
                  <p className="text-sm text-white/80 mt-2">
                    Modules: Rehabilitation, Nursing, Surgery
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
