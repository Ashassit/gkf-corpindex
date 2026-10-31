import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "../../ui/dialog";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

interface GalleryImage {
  url: string;
  caption: string;
}

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  images: GalleryImage[];
  description?: string;
}

export const ImageGalleryModal = ({
  isOpen,
  onClose,
  title,
  images = [],
  description,
}: ImageGalleryModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setDirection] = useState(0); // 1 for next, -1 for prev

  // ✅ Prevent index overflow when images change
  useEffect(() => {
    if (currentIndex >= images.length) {
      setCurrentIndex(0);
    }
  }, [images, currentIndex]);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      images.length > 0 ? (prev + 1) % images.length : 0
    );
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      images.length > 0 ? (prev - 1 + images.length) % images.length : 0
    );
  };

  const handleClose = () => {
    setCurrentIndex(0);
    onClose();
  };

  // ✅ Safety check: No images case
  if (!images || images.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-lg p-8 text-center bg-white">
          <h3 className="text-xl mb-3">{title}</h3>
          <p className="text-gray-500">No images available.</p>
          <button
            onClick={handleClose}
            className="mt-4 px-4 py-2 rounded bg-orange-500 text-white"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl mb-2">{title}</h3>
              {description && (
                <p className="text-white/90 text-sm">{description}</p>
              )}
            </div>
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors z-20"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Image Gallery */}
          <div className="p-6">
            <div className="relative bg-gray-900 rounded-2xl overflow-auto max-h-[70vh] mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* ✅ Type-safe access */}
                  <ImageWithFallback
                    src={currentImage?.url}
                    alt={currentImage?.caption}
                    className="w-auto h-auto max-w-none"
                  />

                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                    <p className="text-white text-lg">
                      {currentImage?.caption}
                    </p>
                  </div> */}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={`${image.url}-${index}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                      currentIndex === index
                        ? "ring-4 ring-orange-500 scale-105"
                        : "ring-2 ring-gray-200 hover:ring-orange-300"
                    }`}
                  >
                    <ImageWithFallback
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                    {currentIndex !== index && (
                      <div className="absolute inset-0 bg-black/30" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
