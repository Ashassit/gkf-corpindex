import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { X } from "lucide-react";

interface VolunteerGalleryProps {
  images: string[];
}

export function VolunteerGallery({ images }: VolunteerGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* 📸 Simple Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImage(image)}
          >
            <ImageWithFallback
              src={image}
              alt={`Volunteer work ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      {/* 🖼️ Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="max-w-4xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={selectedImage}
                alt="Selected volunteer work"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
