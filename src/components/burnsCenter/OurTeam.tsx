import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function OurTeam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-container py-10 bg-[#080808]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white">Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnMlMjBudXJzZXN8ZW58MXx8fHwxNzYxNTY1Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical Team"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="mb-4">Dedicated Medical Professionals</h3>
                <p className="leading-relaxed opacity-90">
                  Our team consists of highly skilled doctors, compassionate nurses, and dedicated paramedical staff who work together to provide comprehensive burns care with expertise and empathy.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
