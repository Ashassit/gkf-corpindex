import { motion } from "framer-motion";


export function PaediatricBurnPage() {
    
  return (
     <div className="flex items-center justify-center h-screen bg-white overflow-hidden p-0 m-0">
      <motion.div
        className="whitespace-nowrap text-4xl md:text-6xl font-bold text-red-600"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        🚧 Under Production 🚧
      </motion.div>
    </div>
  );
}
