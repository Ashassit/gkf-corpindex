import { motion } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { Video, Play, Heart, Users } from "lucide-react";

export function ShortFilm() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-container py-16 md:py-24 px-4 bg-[#080808]">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 rounded-lg mb-6 shadow-lg">
            <Video className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Home for Every Child
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Watch our short film to understand our mission and the impact we make
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          {/* Video Container */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/[0.07]">
            <div className="relative rounded-lg overflow-hidden bg-black">
              {/* 16:9 aspect ratio container */}
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Iyk1Ikk7Ldw"
                  title="Home for Every Child - Mazhalai Illam"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Play,
              label: "Our Mission",
            },
            {
              icon: Users,
              label: "Success Stories",
            },
            {
              icon: Heart,
              label: "Our Impact",
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="bg-[#111111] rounded-lg p-6 shadow-md border border-white/[0.07] hover:shadow-lg hover:border-orange-500/30 transition-all duration-300">
                <div className="w-14 h-14 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-white text-center">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

