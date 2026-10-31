import save1 from "../../assets/volunteer/save-a-child1.webp";
import save2 from "../../assets/volunteer/save-a-child2.webp";
import save3 from "../../assets/volunteer/save-a-child6.jpg";
import save4 from "../../assets/volunteer/save-s-child5.jpg";

import { Heart } from "lucide-react";
import { ResponsivePicture } from "../ResponsivePicture";
import { motion } from "framer-motion";

const images = [save1, save2, save3, save4];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 pt-16 pb-10 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2.5 mb-3">
              <Heart className="w-6 h-6 fill-orange-500 text-orange-500" />
              <h2 className="site-heading text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                Save a Child
              </h2>
              <Heart className="w-6 h-6 fill-orange-500 text-orange-500" />
            </div>
            <p className="text-sm text-white/80 max-w-xl mx-auto">
              Every child deserves love, care, and a bright future. Together, we're making it happen.
            </p>
          </motion.div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="relative group overflow-hidden rounded-2xl ring-1 ring-white/5"
                style={{ height: i % 2 === 0 ? '170px' : '145px' }}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
              >
                <ResponsivePicture
                  desktopSrc={img}
                  alt={`Save a child ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fetchpriority="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 pt-6 text-center">
            <p className="text-xs text-white/50">
              © Grace Kennett Foundation · Mazhalai Illam · Madurai
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
