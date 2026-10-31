import { Baby, UtensilsCrossed, Package, Shirt, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function SupportOptions() {
  const options = [
    { 
      icon: Baby, 
      label: 'INCU Care', 
      description: 'Neonatal intensive care',
      color: 'from-orange-500 to-orange-600',
    },
    { 
      icon: UtensilsCrossed, 
      label: 'Food & Nutrition', 
      description: 'Healthy meals daily',
      color: 'from-gray-900 to-gray-800',
    },
    { 
      icon: Package, 
      label: 'Diapers & Supplies', 
      description: 'Essential care items',
      color: 'from-orange-500 to-orange-600',
    },
    { 
      icon: Shirt, 
      label: 'Clothing', 
      description: 'Warm and comfortable',
      color: 'from-gray-900 to-gray-800',
    },
  ];

  return (
    <section id="help" className="section-container relative py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-orange-500/30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-gray-500/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-white">Support Areas</span>
            </motion.div>

            <h2 className="site-heading text-3xl md:text-4xl mb-4">
              I Can Help Support
            </h2>
            
            <p className="text-base text-white max-w-2xl mx-auto">
              Choose a specific area where you'd like to make an impact
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {options.map((option, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card */}
                <motion.div
                  className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Icon Container */}
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <option.icon className="w-7 h-7 text-white" />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-50 blur-lg rounded-xl scale-110`} />
                  </div>

                  {/* Content */}
                  <div className="relative text-center">
                    <h3 className="text-base mb-1.5 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-300 transition-all">
                      {option.label}
                    </h3>
                    <p className="text-xs text-white group-hover:text-white transition-colors">
                      {option.description}
                    </p>
                  </div>

                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-full h-full bg-gradient-to-br ${option.color} opacity-30 blur-lg`} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Text */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm text-white mb-3">Your contribution in any area makes a real difference</p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-full text-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white">Select an area to donate</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
