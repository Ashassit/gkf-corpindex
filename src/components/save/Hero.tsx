import { ResponsivePicture } from '../ResponsivePicture';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import savechildbanner from "../../assets/newImages/savechildbanner.webp";
import A7 from "../../assets/imageGallery/A7.jpg";
import { trackCTAClick } from '../utils/analytics';

export function Hero() {
  // Preload critical hero images for faster LCP
  useEffect(() => {
    const preloadLink1 = document.createElement('link');
    preloadLink1.rel = 'preload';
    preloadLink1.as = 'image';
    preloadLink1.href = savechildbanner;
    preloadLink1.type = 'image/webp';
    
    const preloadLink2 = document.createElement('link');
    preloadLink2.rel = 'preload';
    preloadLink2.as = 'image';
    preloadLink2.href = A7;
    preloadLink2.type = 'image/webp';
    
    document.head.appendChild(preloadLink1);
    document.head.appendChild(preloadLink2);
    
    return () => {
      document.head.removeChild(preloadLink1);
      document.head.removeChild(preloadLink2);
    };
  }, []);

  return (
    <section id="home" className="section-container relative h-screen overflow-hidden bg-[#080808]">
      {/* Background glow elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-white/[0.03] to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Title with Creative Typography */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl text-white relative inline-block">
                  Save a Child
                  <div className="absolute -top-3 -right-8">
                    <Heart className="w-8 h-8 text-[#d97652] fill-[#d97652]" />
                  </div>
                </h1>
              </motion.div>
              
              <motion.p
                className="text-xl md:text-2xl text-white max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Every child deserves love, care, and a chance at life. 
                <span className="text-[#d97652]"> Your support can make all the difference.</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="#donate"
                onClick={() => trackCTAClick("Donate Now", "save_child_hero")}
                className="group relative bg-gradient-to-r from-[#d97652] to-rose-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Donate Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-rose-500 to-[#d97652] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              
              <a
                href="#who-is-helped"
                className="group bg-white/5 backdrop-blur-sm border border-white/15 text-white px-8 py-4 rounded-full hover:border-orange-500/50 transition-all flex items-center gap-2"
              >
                Learn Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Creative Image Layout */}
          <motion.div
            className="relative hidden lg:block h-[520px] scale-90 origin-center defer-offscreen"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 0.9 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Main Image with Blob Shape */}
            <div className="absolute top-0 right-0 w-96 h-96">
              <div 
                className="w-full h-full relative overflow-hidden shadow-2xl"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              >
                <ResponsivePicture
                  desktopSrc={savechildbanner}
                  alt="Happy children"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            </div>

            {/* Secondary Image Card */}
            <motion.div
              className="absolute bottom-20 left-0 w-72 h-64 bg-[#1a1a1a] rounded-3xl shadow-2xl overflow-hidden border border-white/10 hover:scale-105 hover:rotate-[-2deg] transition-transform duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ResponsivePicture
                desktopSrc={A7}
                alt="Child care"
                className="w-full h-full object-cover"
                loading="eager"
                fetchpriority="high"
              />
            </motion.div>

            {/* Floating Badge - CSS Animation */}
            <div className="absolute top-40 left-20 bg-[#1a1a1a]/95 border border-white/10 rounded-2xl p-4 shadow-xl floating-badge backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d97652] to-rose-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="text-2xl text-[#d97652]">1000+</div>
                  <div className="text-xs text-white/80">Children Saved</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#0d0d0d"/>
        </svg>
      </div>

      {/* Inline CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .floating-badge {
          animation: float 3s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
