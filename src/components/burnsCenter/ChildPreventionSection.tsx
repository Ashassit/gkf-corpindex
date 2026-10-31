import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Baby, Home, Flame } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function ChildPreventionSection() {
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
          <Baby className="w-12 h-12 mx-auto mb-4 text-pink-600" />
          <h2 className="mb-4 text-white">Prevention of Burns in Children</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">
            Burn safety at home
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <p className="prose max-w-none mb-8 text-center leading-relaxed text-white/80">
            Many ordinary things in a home — including bath water, food and electrical outlets — can cause childhood burns.
          </p>

          <Tabs defaultValue="home" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#111111]">
              <TabsTrigger value="home" className="text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/10">
                <Home className="w-4 h-4 mr-2" />
                Safety at Home
              </TabsTrigger>
              <TabsTrigger value="outdoor" className="text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/10">
                <Flame className="w-4 h-4 mr-2" />
                Outdoor Safety
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow-md border-l-4 border-l-pink-500">
                  <h3 className="text-pink-400 mb-4">Kitchen Safety</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Avoid hot spills. Don't cook, drink, or carry hot beverages or foods while holding a child</li>
                    <li>• Keep hot foods and liquids away from table and counter edges</li>
                    <li>• Don't use tablecloths or place mats, which young children can pull down</li>
                    <li>• Turn the handles of your pots and pans toward the rear of the stove</li>
                    <li>• Don't leave the stove unattended when cooking</li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow-md border-l-4 border-l-blue-500">
                  <h3 className="text-blue-400 mb-4">Water Safety</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Set the thermostat on your hot water heater to below 120° F (48.9° C)</li>
                    <li>• Aim for bath water around 100° F (38° C)</li>
                    <li>• Check the temperature of bath water with your hand before putting your child in the bath</li>
                    <li>• Never warm a baby's bottle in the microwave</li>
                    <li>• Test food temperature before feeding young children</li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow-md border-l-4 border-l-purple-500">
                  <h3 className="text-purple-400 mb-4">Electrical Safety</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Cover unused electrical outlets with safety caps</li>
                    <li>• Keep electrical cords and wires out of the way</li>
                    <li>• Replace frayed, broken or worn electrical cords</li>
                    <li>• Store hot devices like irons unplugged and out of reach</li>
                  </ul>
                </div>

                <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow-md border-l-4 border-l-orange-500">
                  <h3 className="text-orange-400 mb-4">Fire Safety</h3>
                  <ul className="space-y-3 text-white/80">
                    <li>• Establish 'no' zones around stoves, fireplaces, and heaters</li>
                    <li>• Choose fire-resistant fabrics for mattresses and pajamas</li>
                    <li>• Clean fire alarms monthly and test them regularly</li>
                    <li>• Keep a working fire extinguisher in your home</li>
                    <li>• Practice an evacuation plan every six months</li>
                    <li>• Teach children to stop, drop and roll</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outdoor" className="mt-8">
              <div className="bg-[#0d0d0d] p-8 rounded-2xl">
                <h3 className="text-orange-400 mb-6">Burn Safety Outdoors</h3>
                <div className="prose max-w-none">
                  <p className="text-white/80 leading-relaxed">
                    <strong>Avoid backyard fireworks.</strong> Don't let children play with or near fireworks or sparklers. Fireworks can cause severe burns and injuries. Always leave fireworks to professionals and keep children at a safe distance during displays.
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
