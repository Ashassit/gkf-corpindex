import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";

interface AccommodationGalleryProps {
  images: string[];
}

export function AccommodationGallery({ images }: AccommodationGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Large Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl aspect-[16/10] md:aspect-auto"
          onClick={() => openLightbox(images[0], 0)}
        >
          <ImageWithFallback
            src={images[0]}
            alt="Main accommodation view"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <ZoomIn className="w-12 h-12 mx-auto mb-2" />
              <p>View Gallery</p>
            </div>
          </div>
          {/* Decorative Corner */}
          <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Smaller Images */}
        {images.slice(1, 5).map((image, index) => (
          <motion.div
            key={index + 1}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index + 1) * 0.1 }}
            className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square"
            onClick={() => openLightbox(image, index + 1)}
          >
            <ImageWithFallback
              src={image}
              alt={`Accommodation ${index + 2}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
                <ZoomIn className="w-4 h-4" />
                <span className="text-sm">View</span>
              </div>
            </div>
            {/* Border Animation */}
            <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} viewport={{ once: true }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:text-primary hover:bg-white/10 transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/10 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary hover:bg-white/10 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white z-50">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={selectedImage}
                alt="Selected accommodation"
                className="w-full h-auto object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
