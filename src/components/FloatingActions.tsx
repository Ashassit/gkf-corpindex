import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Chatbot } from "../../src/components/bookAnAppointment/components/Chatbot";
import { trackWhatsAppClick } from "./utils/analytics";

export function FloatingActions() {
  const whatsappNumber = "918428640401";

  // ❌ Do NOT include text parameter at all
  const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

  return (
    <>
      {/* WhatsApp Button - Bottom LEFT */}
      <motion.div
        className="fixed bottom-6 left-6 z-[9999]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              trackWhatsAppClick("floating_whatsapp");
              window.open(whatsappURL, "_blank", "noopener,noreferrer");
            }}
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Chatbot Component */}
      <Chatbot />
    </>
  );
}


