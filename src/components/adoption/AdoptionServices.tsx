import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { MessageSquare, FileSearch, Award, ClipboardCheck } from "lucide-react";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import adoption7 from "../../assets/adoption-7.webp";
import adoption2 from "../../assets/adoption-2.webp";
import adoption9 from "../../assets/adoption-9.webp";
import adoptionchild1 from "../../assets/volunteer/adoptchild-1.jpg";

export function AdoptionServices() {
  const { ref, inView } = useInView();

  const services = [
    {
      icon: MessageSquare,
      title: "Adoption Counselling",
      description:
        "Parents / Individuals who want to adopt can seek adoption counselling in our office from Monday to Saturday (Time 9.00 am 5.00 pm)",
      image: adoption7,
    },
    {
      icon: FileSearch,
      title: "Home Study",
      description:
        "A Home Study Report (HSR) is done to evaluate the capability of prospective adoptive parents to adopt a child.",
      image: adoption9,
    },
    {
      icon: Award,
      title: "Adoption Service",
      description:
        "Grace Kennett Foundation Mazhalai Illam has been recognized as an adoption centre by the State and the Central Government of India to do In-country and Inter-country Adoptions. Mazhalai Illam has done more than 1000 in-country and 500 inter-country adoptions.",
      image: adoptionchild1,
    },
    {
      icon: ClipboardCheck,
      title: "Post adoption follow-up visits",
      description:
        "Follow-up reports and visits after adoption are conducted in accordance with the adoption rules.",
      image: adoption2,
    },
  ];

  return (
    <section ref={ref} className="section-container py-16 md:py-24 px-4 bg-[#0d0d0d]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-white">
            Adoption Services
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Comprehensive services to support you through every step of the adoption journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/[0.07] bg-[#111111]">
                {/* Image */}
                <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>

              {/* Text Outside Card */}
              <div className="mt-4 px-2">
                <h3 className="text-lg text-white">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

