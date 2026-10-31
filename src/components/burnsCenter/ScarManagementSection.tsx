import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fingerprint, Sun, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function ScarManagementSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Fingerprint className="w-12 h-12 mx-auto mb-4 text-purple-400" />
          <h2 className="mb-4 text-white">Scar Management</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="prose max-w-none">
              <p className="text-white/80">
                Burn survivors can become frustrated that they still have issues with scarring after their initial burn injury has healed. Hypertrophic burn scars (raised scars in the area of the original burn) are the most common complication of a burn injury.
              </p>

              <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-xl mt-6 not-prose">
                <h4 className="text-purple-300 mb-3">Healing Timeline</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Burns healing in {'<'}14 days: Generally no scarring</li>
                  <li>• Burns healing in 14-21 days: Risk of scarring</li>
                  <li>• Burns healing in {'>'}21 days: Very high risk of scarring</li>
                  <li>• Scar maturation: 12-18 months</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761106082516-61d4c6883f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MTQ5MTIwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Research"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="why-scars" className="border-white/[0.07]">
              <AccordionTrigger className="text-white/80 hover:text-white">Why do scars form?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-white/80">
                  Scarring is related to age, ethnicity, and the depth and location of the burn. Scars form when the dermal or lower layer of the skin has been damaged. The body forms a protein called collagen to help heal the damaged skin.
                </p>
                <p className="text-white/80">
                  Normally the collagen fibers are laid down in a very organized manner, but in hypertrophic scars these fibers are created in a very disorganized manner, which gives the new skin/scar a different texture and appearance.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hypertrophic" className="border-white/[0.07]">
              <AccordionTrigger className="text-white/80 hover:text-white">What are hypertrophic burn scars?</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-white/80">
                  <li>• Stay within the area of the original burn injury</li>
                  <li>• Develop within the first few months after the injury</li>
                  <li>• Often have a deep red to purple color and are raised above the surface of the skin</li>
                  <li>• Can be warm to the touch, hypersensitive, and itchy</li>
                  <li>• Are more prominent around joints where skin tension and movement are high</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contractures" className="border-white/[0.07]">
              <AccordionTrigger className="text-white/80 hover:text-white">Contractures & Stretching</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-white/80">
                  Contractures can affect your ability to move and take care of yourself. Some contractures are unavoidable, but many can be prevented with active involvement in your rehabilitation programme.
                </p>
                <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                  <p className="mb-2 text-white/80">Stretching should be performed a minimum of 5-6 times per day. Your therapist may make a cast or splint to help position your scar in a stretched position.</p>
                  <p className="text-white/80">Do as much for yourself as possible such as getting dressed and self-grooming.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="itching" className="border-white/[0.07]">
              <AccordionTrigger className="text-white/80 hover:text-white">Managing Itching</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-white/80">
                  Burns can damage or destroy the oil glands that normally keep skin from getting too dry. Many patients experience intense itching after their burn.
                </p>
                <div className="space-y-3">
                  <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                    <h5 className="mb-2 text-white/80">Moisturizer Tips</h5>
                    <p className="text-sm text-white/80">Apply moisturizers frequently throughout the day. High water content lotions soak in faster but need more frequent application. Thicker creams need less frequent application.</p>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                    <h5 className="mb-2 text-white/80">What to Avoid</h5>
                    <p className="text-sm text-white/80">Never use mineral oil, Vaseline or antibiotic ointments. Avoid scratching as it increases inflammation and makes itching worse.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sun-exposure" className="border-white/[0.07]">
              <AccordionTrigger className="text-white/80 hover:text-white">
                <span className="flex items-center">
                  <Sun className="w-4 h-4 mr-2" />
                  Sun Exposure Protection
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-white/80">You should avoid exposing your healing scars to sunlight. Scars that are discolored and have not matured burn easily.</p>
                <ul className="space-y-2 text-white/80">
                  <li>• Plan activities in early morning or late evening</li>
                  <li>• Apply sunscreen with SPF of at least 30</li>
                  <li>• Wear protective clothing</li>
                  <li>• Reapply sunscreen every couple of hours</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="treatment" className="border-white/[0.07]">
              <AccordionTrigger className="text-white/80 hover:text-white">Treatment of Hypertrophic Scars</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3 text-white/80">
                  No single treatment is ideal for treating scars. A strong commitment is required from you and your family to follow through with the treatment plan.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-white/80">
                      <strong className="text-white/90">Pressure Garments:</strong> Should be worn 23 out of 24 hours/day
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-white/80">
                      <strong className="text-white/90">Silicone Gel Sheets:</strong> Thin, flexible medical grade silicone placed over scars
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-white/80">
                      <strong className="text-white/90">Massage:</strong> Can help soften and desensitize the scar
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-white/80">
                      <strong className="text-white/90">Surgical Treatment:</strong> Including laser treatment may be an option
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
