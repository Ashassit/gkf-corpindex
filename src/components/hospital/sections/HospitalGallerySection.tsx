import { motion } from "framer-motion";
import { useState } from "react";
import hg1 from "../../../assets/hg1.webp";
import hg2 from "../../../assets/hg2.webp";
import hg3 from "../../../assets/hg3.webp";
import hg4 from "../../../assets/hg4.webp";
import hg5 from "../../../assets/hg5.webp";
import hg6 from "../../../assets/hg6.webp";
import hg8 from "../../../assets/hg8.webp";
import hg9 from "../../../assets/hg9.webp";
import hg10 from "../../../assets/hg10.webp";
import hg11 from "../../../assets/hg11.webp";
import hg12 from "../../../assets/hg12.webp";
import hg13 from "../../../assets/hg13.webp";
import hg14 from "../../../assets/hg14.webp";
import hg15 from "../../../assets/hg15.webp";
import hg16 from "../../../assets/hg16.webp";
import hg17 from "../../../assets/hg17.webp";
import hg18 from "../../../assets/hg18.webp";
import hg19 from "../../../assets/hg19.jpg";
import hg20 from "../../../assets/hg20.jpg";
import hg21 from "../../../assets/hg21.jpg";
import hg22 from "../../../assets/hg22.jpg";
import hg23 from "../../../assets/hg23.jpg";
import hg24 from "../../../assets/hg24.jpg";
import hg25 from "../../../assets/hg25.jpg";

const images = [hg1, hg2, hg3, hg4, hg5, hg6, hg8,hg9,hg10,hg11,hg12,hg13,hg14,hg15,hg16,hg17,hg18,hg19,hg20,hg21,hg22,hg23,hg24,hg25];

export default function HospitalGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-container py-16 bg-[#0d0d0d]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl text-white text-center mb-12">
          Hospital
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative mb-4 overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Hospital ${idx + 1}`}
                className="w-full object-cover rounded-3xl"
                style={{
                  height: `${200 + (idx % 4) * 50}px`,
                }}
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-25 transition-opacity duration-500 rounded-3xl"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-white/30 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full View"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
            />
          </div>
        )}
      </motion.div>
    </section>
  );
}
