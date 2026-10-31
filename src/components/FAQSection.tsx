import { motion } from "framer-motion";
import { HelpCircle, Languages, Volume2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";

const englishFAQs = [
  {
    question: "What causes burn?",
    answer:
      "Burn can be caused by fire, hot liquids and steam, electricity, and chemical substances.",
  },
  {
    question: "How is burn severity determined?",
    answer:
      "Burn severity is determined by the depth of the burn (first, second, or third degree) and the total body surface area (TBSA) affected, typically assessed using the Wallace Rule of Nines.",
  },
  {
    question: "What is the CAB approach?",
    answer:
      "CAB stands for Circulation, Airway, and Breathing - a systematic approach to assess and treat burn patients in emergency situations.",
  },
  {
    question: "When should I seek emergency care?",
    answer:
      "Seek immediate care for burn covering large areas (>10-15% TBSA), burn to face/hands/feet/genitals, full-thickness burn, electrical/chemical burn, or burn with breathing difficulty.",
  },
  {
    question: "How long does rehabilitation take?",
    answer:
      "Rehabilitation is ongoing and can last from several months to years, depending on burn severity. Scar maturation typically takes 12-18 months.",
  },
];

const tamilFAQs = [
  {
    question: "காரணங்கள்?",
    answer: "தீ, சூடான திரவங்கள் மற்றும் நீராவி, மின்சாரம், இரசாயன பொருட்கள்",
  },
  {
    question: "காயத்தின் அளவு எவ்வாறு நிர்ணையிக்கப்படுகிறது?",
    answer:
      "காயத்தின் ஆழம் (முதல், இரண்டாம், மூன்றாம் நிலை) மற்றும் உடலின் மொத்த பரப்பளவு (TBSA) ஆகியவற்றின் அடிப்படையில் தீர்மானிக்கப்படுகிறது",
  },
  {
    question: "மருத்துவ உதவி எப்போது தேவை?",
    answer:
      "பெரிய பரப்பளவு பாதிப்பு (>10-15% TBSA), முகம்/கைகள்/கால்கள்/பிறப்புறுப்புகளில் காயம், முழு தடிமன் தீக்காயங்கள், மின்சார/இரசாயன தீக்காயங்கள் அல்லது சுவாசிப்பதில் சிரமம் ஏற்பட்டால் உடனடியாக மருத்துவரை அணுகவும்",
  },
];

export function FAQSection() {
  const playAudio = (audioNumber: number) => {
    toast.info(`Audio ${audioNumber} would play here`);
  };

  return (
    <section id="faq" className="section-container bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FF6B35]/10 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-[#FF6B35]" />
            <span className="text-[#FF6B35]">Questions & Answers</span>
          </div>
          <h2 className="site-heading text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#FF6B35] mx-auto rounded-full mb-6" />
          <p className="text-white/60 max-w-3xl mx-auto">
            Find answers to common questions about burn care, treatment, and
            prevention
          </p>
        </motion.div>

        <Tabs defaultValue="english" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="english" className="flex items-center gap-2">
              <Languages className="w-4 h-4" />
              English
            </TabsTrigger>
            <TabsTrigger value="tamil" className="flex items-center gap-2">
              <Languages className="w-4 h-4" />
              தமிழ்
            </TabsTrigger>
          </TabsList>

          <TabsContent value="english">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 border border-white/10 shadow-lg bg-[#111111]">
                <Accordion type="single" collapsible className="w-full">
                  {englishFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="tamil">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 border border-white/10 shadow-lg bg-[#111111]">
                <Accordion type="single" collapsible className="w-full">
                  {tamilFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-white hover:text-[#FF6B35] text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-white/60">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Audio Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#FF6B35] to-red-600 rounded-3xl p-8 text-white shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Volume2 className="w-8 h-8" />
            <h3 className="site-heading text-white">
              Dr Dodd's Audio Resources
            </h3>
          </div>
          <p className="text-white/90 mb-6">
            Listen to expert advice and information about burn care in audio
            format
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => playAudio(num)}
                  className="w-full"
                >
                  Audio {num}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="p-8 border-none shadow-lg bg-black text-white">
            <h3 className="site-heading text-white mb-4">
              Need More Information?
            </h3>
            <p className="text-white/80 mb-6">
              Our team is available 24/7 to answer your questions and provide
              assistance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Emergency: 108
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
