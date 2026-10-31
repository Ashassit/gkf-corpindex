import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import newupdate from "../../assets/newmssirimg.jpg.jpeg";

export function PreventionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const preventionMeasures = [
    'Enclose fires and limit the height of open flames in domestic environments',
    'Promote safer cookstoves and less hazardous fuels, and educate regarding loose clothing',
    'Apply safety regulations to housing designs and materials, and encourage home inspections',
    'Improve the design of cookstoves, particularly with regard to stability and prevention of access by children',
    'Lower the temperature in hot water taps',
    'Promote fire safety education and the use of smoke detectors, fire sprinklers, and fire-escape systems in homes',
    'Promote the introduction of and compliance with industrial safety regulations, and the use of fire-retardant fabrics for children\'s sleepwear',
    'Avoid smoking in bed and encourage the use of child-resistant lighters',
    'Promote legislation mandating the production of fire-safe cigarettes',
    'Improve treatment of epilepsy, particularly in developing countries',
    'Encourage further development of burn-care systems, including the training of health-care providers',
    'Support the development and distribution of fire-retardant aprons to be used while cooking around an open flame or kerosene stove',
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Shield className="w-12 h-12 mx-auto mb-4 text-green-600" />
          <h2 className="mb-4 text-white">Prevention of Burns</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-white/80">
            Plan for burns prevention and care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#0d0d0d] p-8 rounded-2xl shadow-lg border border-white/[0.07]">
              <ul className="space-y-4">
                {preventionMeasures.map((measure, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{measure}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-6 bg-[#111111] rounded-lg border-2 border-green-200/20">
                <p className="text-white/80">
                  In addition, there are a number of specific recommendations for individuals, communities and public health officials to reduce burn risk.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl sticky top-8">
              <ImageWithFallback
                src= {newupdate}
                alt="Fire Safety Prevention"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
