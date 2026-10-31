import { Card } from "../ui/card";
import { motion } from "framer-motion";

interface VolunteerCardProps {
  name: string;
  index: number;
  image: string;
}

export function VolunteerCard({ name, index, image }: VolunteerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-white border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/10">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500"></div>

        {/* Decorative Corner Element */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>

        <div className="p-6 flex flex-col items-center text-center space-y-5 relative z-10">
          <div className="relative">
            {/* Square Image Container */}
            <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-105 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/30">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Number Badge */}
            <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white">
              <span className="text-white font-semibold text-lg">{index + 1}</span>
            </div>

            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors duration-300">
              Volunteer
            </p>
          </div>

          {/* Hover Indicator */}
          <div className="h-1 w-0 bg-gradient-to-r from-primary to-primary/50 group-hover:w-20 transition-all duration-500 rounded-full"></div>
        </div>
      </Card>
    </motion.div>
  );
}
