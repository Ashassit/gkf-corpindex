import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function FAQSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const faqs = [
    { q: 'What is skin donation?', a: 'Life is skin deep. Loss of skin can lead to loss of life. Cover provided with the donated skin in the first three weeks of injury can reduce the number of burns victims dying by almost 50%.' },
    { q: 'Who can donate?', a: 'Deceased donors who meet specific eligibility criteria can donate skin. The donation must be authorized by next of kin.' },
    { q: 'How is it done?', a: 'The procedure involves a team consisting of a doctor or trained skin bank technician, two nurses, and an attendant. A special instrument called a dermatome harvests only the uppermost 1/8th layer of skin from the legs, thighs, and back without causing bleeding or disfigurement.' },
    { q: 'Why skin?', a: 'Skin is the largest organ of the body and provides critical protection. For burn patients with extensive injuries, donated skin can be life-saving by preventing infection and fluid loss.' },
    { q: 'Who cannot donate?', a: 'Those with certain infectious diseases, cancers affecting the skin, or other medical contraindications cannot donate skin. Specific screening tests are performed to ensure safety.' },
    { q: 'What documents are necessary?', a: 'Consent form signed by the next of kin, death certificate and its photocopy, and witness signature are required for skin donation.' },
    { q: 'Significance and benefits of early skin cover?', a: 'Early skin cover significantly reduces mortality, prevents infection, reduces fluid loss, decreases pain, and promotes faster healing in burn patients.' },
  ];

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <HelpCircle className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="mb-4 text-white">FAQs</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/[0.07]">
                <AccordionTrigger className="text-white hover:text-white/80">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-white/80">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
