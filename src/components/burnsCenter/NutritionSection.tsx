import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Utensils } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function NutritionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const infantsData = [
    { age: '0 – 6 Months', calorie: '92', protein: '1.5 – 2.0' },
    { age: '6 – 12 Months', calorie: '95', protein: '2.0 – 3.0' },
    { age: '1 – 3 Years', calorie: '82', protein: '2.0 – 3.0' },
    { age: '4 – 6 Years', calorie: '75', protein: '1.5 – 2.0' },
    { age: '7 – 9 Years', calorie: '67.6', protein: '1.5 – 2.0' },
  ];

  const adolescentsData = [
    { age: '10 – 12 Years', boys: '63.8', girls: '55.4', protein: '1.5 – 2.0' },
    { age: '13 – 15 Years', boys: '57.7', girls: '50', protein: '1.5 – 2.0' },
    { age: '16 – 17 Years', boys: '54.5', girls: '46.8', protein: '1.5 – 2.0' },
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <Utensils className="w-12 h-12 mx-auto mb-4 text-orange-600" />
          <h2 className="mb-4 text-white">Nutrition</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
            <div className="prose max-w-none mb-8">
              <p className="leading-relaxed text-white/80">
                Following a burn injury, the protein caloric requirement of the patients increases steeply. The Burn patients have grossly deranged metabolism. Nutritional management is of utmost importance. Patients need more than double caloric and protein nutrition following a moderately severe burn injury.
              </p>
            </div>

            <div className="bg-[#0d0d0d] p-6 rounded-2xl mb-6 border border-white/[0.07]">
              <h3 className="mb-4 text-orange-400">Burns Patients Calorie Formula</h3>
              <p className="mb-4 text-white/80">ICMR – RDA Nutritional Requirements (Curreri Formula)</p>

              <div className="space-y-3 text-sm">
                <div className="bg-[#111111] p-4 rounded-lg border border-white/[0.07]">
                  <h4 className="mb-2 text-white">Paediatric</h4>
                  <ul className="space-y-1 text-white/80">
                    <li>• {'<'} 1 year: RDA + 15 x % TBSA</li>
                    <li>• 1 – 3 years: RDA + 25 x % TBSA</li>
                    <li>• 4 – 15 years: RDA + 40 x % TBSA</li>
                  </ul>
                </div>

                <div className="bg-[#111111] p-4 rounded-lg border border-white/[0.07]">
                  <h4 className="mb-2 text-white">Adult</h4>
                  <ul className="space-y-1 text-white/80">
                    <li>• {'>'}  18 years: 25kcal x Body weight (kg) + 40 x % TBSA</li>
                    <li>• High protein: Body weight x 1.3 to 3.0 gm/Kg of protein</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="rounded-2xl overflow-hidden shadow-xl sticky top-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670164745494-30747c120652?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjE0ODkzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthy Nutrition"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="max-w-4xl mx-auto space-y-8">
          <div className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-white/[0.07]">
            <h3 className="mb-6 text-center text-white">Infants & Children Nutritional Requirements</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-white/[0.07]">
                  <TableHead className="text-white/80">Age</TableHead>
                  <TableHead className="text-white/80">Calorie (kcal/kg)</TableHead>
                  <TableHead className="text-white/80">Protein (gm/kg)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {infantsData.map((row, index) => (
                  <TableRow key={index} className="border-white/[0.07] hover:bg-white/[0.03]">
                    <TableCell className="text-white/80">{row.age}</TableCell>
                    <TableCell className="text-white/80">{row.calorie}</TableCell>
                    <TableCell className="text-white/80">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-white/[0.07]">
            <h3 className="mb-6 text-center text-white">Adolescents Nutritional Requirements</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-white/[0.07]">
                  <TableHead className="text-white/80">Age</TableHead>
                  <TableHead className="text-white/80">Boys (kcal/kg)</TableHead>
                  <TableHead className="text-white/80">Girls (kcal/kg)</TableHead>
                  <TableHead className="text-white/80">Protein (gm/kg)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adolescentsData.map((row, index) => (
                  <TableRow key={index} className="border-white/[0.07] hover:bg-white/[0.03]">
                    <TableCell className="text-white/80">{row.age}</TableCell>
                    <TableCell className="text-white/80">{row.boys}</TableCell>
                    <TableCell className="text-white/80">{row.girls}</TableCell>
                    <TableCell className="text-white/80">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
