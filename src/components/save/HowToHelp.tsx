import { HeartHandshake, Baby, IndianRupee, Handshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowToHelp() {
  const options = [
    {
      icon: Baby,
      number: "01",
      title: "Adopt a Child",
      description: "Adoption is a beautiful way to build a family. Give a child the loving home they deserve.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/5"
    },
    {
      icon: IndianRupee,
      number: "02",
      title: "'Little Drop' Program",
      description: "Donate Rs.100/- per month for 1 year.",
      extra: "It will help provide milk tins, diapers, vaccines and health care.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-white/5 to-white/5"
    },
    {
      icon: Handshake,
      number: "03",
      title: "Volunteer",
      description: "Offer your services as a volunteer. Help us find 5 kind-hearted people like you.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-500/10 to-orange-600/5"
    }
  ];

  return (
    <section id="how-to-help" className="section-container relative py-16 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#ff6a00]/5 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-orange-500/10 px-4 py-1.5 rounded-full mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <HeartHandshake className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-orange-500">Get Involved</span>
            </motion.div>

            <h2 className="site-heading text-3xl md:text-4xl mb-4 text-white">
              How You Can<br />
              Make a Difference
            </h2>

            <p className="text-base text-white max-w-2xl mx-auto">
              Choose the way you'd like to help. Every contribution, big or small, changes lives.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {options.map((option, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="relative h-full bg-[#111111] rounded-2xl border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <span className={`text-lg bg-gradient-to-br ${option.color} bg-clip-text text-transparent`}>
                      {option.number}
                    </span>
                  </div>

                  <div className={`h-1 bg-gradient-to-r ${option.color}`} />

                  <div className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                      <option.icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-lg text-white mb-3">{option.title}</h3>

                    <p className="text-sm text-white mb-3 leading-relaxed">
                      {option.description.includes('Rs.100/-') ? (
                        <>
                          Donate <span className="text-orange-500">Rs.100/-</span> per month for 1 year.
                        </>
                      ) : (
                        option.description
                      )}
                    </p>

                    {option.extra && (
                      <p className="text-xs text-white/80 mb-4 italic">{option.extra}</p>
                    )}

                    <a
                      href={index === 1 ? "#donate" : "#contact"}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r ${option.color} text-white rounded-full hover:shadow-md transition-all text-sm`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className={`absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br ${option.bgColor} rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500`} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-block bg-[#111]/80 rounded-xl p-6 border border-orange-500/20">
              <p className="text-base text-white mb-3">
                <span className="text-orange-500">Not sure how to help?</span> We'd love to talk to you about the best way to get involved.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all text-sm"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
