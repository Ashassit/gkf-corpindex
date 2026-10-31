import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle } from 'lucide-react';
import { Badge } from '../ui/badge';

export function RiskFactorsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const riskFactors = [
    'Gender (females at higher risk)',
    'Age (children and elderly)',
    'Low socioeconomic status',
    'Certain occupations',
    'Poverty',
    'Lack of safety measures',
    'Underlying medical conditions',
    'Alcohol and smoking',
    'Access to chemicals for assault',
    'Use of kerosene',
    'Inadequate safety measures for gas and electricity',
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
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-orange-600" />
          <h2 className="mb-4 text-white">Who is at Risk?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="prose max-w-none mb-8 leading-relaxed text-white/80">
            There are several factors that increase the risk of burns, including gender, age, and socioeconomic status. Females and children are particularly vulnerable to burns, and people living in low- and middle-income countries are at a higher risk compared to those living in high-income countries.
          </p>

          <div className="bg-[#111111] border border-white/[0.07] p-8 rounded-2xl shadow-lg">
            <h3 className="mb-6 text-white">Risk Factors Include:</h3>
            <div className="flex flex-wrap gap-3">
              {riskFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <Badge variant="outline" className="px-4 py-2 text-sm border-white/[0.07] text-white/80">
                    {factor}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
