import { motion } from 'framer-motion';
import { ServiceSection } from '../ServiceSection';
import { Leaf } from 'lucide-react';
import Kizhi from "../../assets/kizhi.webp"
import sirobhyangam from "../../assets/siroabhyangam.webp"
import swedanam from "../../assets/swedanam.webp"
import tranquil1 from "../../assets/tranquil-des.webp"
import tranquil2 from "../../assets/tranquil-img1.webp"
import tranquil3 from "../../assets/tranquil-img2.webp"

export function Tranquil() {
  const services = [
    {
      title: "Abhyangam (Body Massage)",
      subtitle: "",
      description: "",
      imageUrl: tranquil2,
      benefits: [
        "Delays Ageing process",
        "Relieves Fatigue & relaxes the body",
        "Helps cure Vata diseases",
        "Improves Vision",
        "Improves skin complexion",
        "Nourishes the body",
        "Improve sleep",
        "Strengthens the body",
        "Increases the life span"
      ]
    },
    {
      title: "Shirodhara (Head Oil Flow)",
      subtitle: "",
      description: "The Shirodhara technique soothes and invigorates the senses and the mind",
      imageUrl: tranquil3,
      benefits: [
        "Wellness",
        "Mental Clarity",
        "Comprehension is experienced in this process"
      ]
    },
    {
      title: "Swedanam (Steam Bath)",
      subtitle: "",
      description: "Swedana (Sweda – Sweat), the most famous traditional Ayurvedic treatment known as the steam or sudation therapy is specifically designed for weight loss and fat reduction. The therapy uses steam generated from medicated herbal decoctions to induce perspiration. The objective of the therapy is to dilate the channels of the body to detach the toxins out of the body. This therapy is ideal to establish a state of balance and also promote general health and well –being.",
      imageUrl: swedanam,
      benefits: []
    },
    {
      title: "Siroabhyangam (Head Massage)",
      subtitle: "",
      description: "",
      imageUrl: sirobhyangam,
      benefits: [
        "Fast relief, if short on time",
        "Ideal for balancing the body",
        "Treats the throat, forehead & crown chakras",
        "Relief from fatigue & cramps",
        "Helps eliminate infections"
      ]
    },
    {
      title: "Kizhi (Herbal Leaves Pack)",
      subtitle: "",
      description: "It is also a special treatment procedure introduced by traditional Ayurvedic vaidyas of Kerala. Kizhi literally means medicated bolus. It is made by tying various forms of medicaments in a cotton cloth and then applying this bolus after heating.",
      imageUrl: Kizhi,
      benefits: [
        "Improves blood circulation",
        "Improves skin complexion",
        "Increases muscle strength",
        "Relieves body pain and stiffness",
        "It is anti-ageing and rejuvenating"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${tranquil1})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Tranquil
              <span className="block text-amber-400 mt-2">
                Ayurveda Therapies for Women
              </span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Experience the transformative power of authentic Ayurvedic treatments.
              Our specialized therapies are designed to restore balance, promote wellness,
              and nurture your body, mind, and spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 lg:px-8 relative bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
              <Leaf className="text-amber-600" size={20} />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
            </div>
            <h2 className="text-white mb-4 text-4xl">Services Offered</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Discover our curated selection of traditional Ayurvedic therapies,
              each designed to address specific wellness needs
            </p>
          </div>

          {/* Service Sections */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <ServiceSection
                key={index}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                benefits={service.benefits}
                imageUrl={service.imageUrl}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
