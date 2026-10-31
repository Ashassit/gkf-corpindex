import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, TrendingUp, Users, AlertTriangle } from "lucide-react";
import { Card } from "../ui/card";

export function MagnitudeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Globe,
      label: "Deaths Annually",
      value: "180,000",
      color: "text-red-600",
    },
    {
      icon: Users,
      label: "Burn Injuries Worldwide (2004)",
      value: "11 Million",
      color: "text-orange-600",
    },
    {
      icon: TrendingUp,
      label: "Annual Burns in India",
      value: "6-7 Million",
      color: "text-blue-600",
    },
    {
      icon: AlertTriangle,
      label: "Expected Cases (Madurai Region)",
      value: "0.52 Million",
      color: "text-purple-600",
    },
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
          <h2 className="site-heading mb-4 text-white">Magnitude</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Understanding the global impact of burn injuries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-[#111111] border border-white/[0.07]">
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className={`text-3xl mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-sm text-white/80">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose max-w-none"
        >
          <p className="leading-relaxed text-white/80">
            Burns pose a significant global public health challenge, with an
            estimated 180,000 deaths occurring every year. The majority of these
            fatalities happen in low- and middle-income countries, particularly
            in the WHO African and South-East Asia regions. In high-income
            countries, burn-related deaths have been decreasing, and child
            mortality rates from burns are more than seven times higher in low-
            and middle-income countries compared to high-income countries.
          </p>

          <p className="leading-relaxed mt-4 text-white/80">
            Non-fatal burns are a leading cause of prolonged hospitalization,
            disfigurement, and disability, often accompanied by social
            stigmatization and rejection. Burns are also a leading cause of
            disability-adjusted life-years (DALYs) lost in low- and
            middle-income countries. In 2004 alone, approximately 11 million
            individuals worldwide suffered burn injuries severe enough to
            require medical attention.
          </p>

          <p className="leading-relaxed mt-4 text-white/80">
            In India, which has a population of 1.34 billion, approximately 6-7
            million burn injuries occur annually. This translates to an
            incidence rate of 0.005 per million population. Given that the area
            surrounding Madurai district has a population of approximately 100
            million, we can expect around 0.52 million burn cases annually in
            that region.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
