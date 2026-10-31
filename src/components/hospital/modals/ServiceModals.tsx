import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";
import { Button } from "../../ui/button";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

interface ServiceModalProps {
  service: { name: string; description: string; icon?: string; emoji?: string ; image:string} | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Dialog open={!!service} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center shadow-md">
              <img
                src={service.icon}
                alt={service.name}
                className="w-12 h-12 object-cover rounded-xl"
              />
            </div>
            <span>{service.name}</span>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about {service.name}
          </DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 pt-4"
        >
          {/* Hero Image */}
          <div className="w-full h-48 rounded-2xl  overflow-hidden border-2 border-gray-100">
            <ImageWithFallback
              src={service.image}
              alt="Service"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="flex gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export function CoreServiceDetailModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Dialog open={!!service} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl">
            <motion.img
              src={service.emoji}
              alt={service.name}
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-14 h-14 object-contain rounded-xl"
            />
            <span>{service.name}</span>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about {service.name}
          </DialogDescription>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col pt-4 max-h-[70vh]"
        >
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {/* Hero Image */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-gray-100">
              <ImageWithFallback
                src={service.image}
                alt="Core Service"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-6 shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1"
            >
              <Button
                variant="outline"
                className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
