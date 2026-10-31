import { motion } from "framer-motion";
import { Coffee, Bed, Wifi, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function Crown() {
  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1725962269029-e845b85e5ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvbW1vZGF0aW9uJTIwaG90ZWwlMjByb29tfGVufDF8fHx8MTc2MDQxNzQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl mb-6">
              Crown
              <span className="block text-orange-400 mt-2">
                Airbnb Accommodation
              </span>
            </h1>
            <p className="text-xl mb-8">
              Comfortable and affordable accommodation for visitors, patients'
              families, and travelers in a convenient location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-[#111111] border border-white/[0.07]">
              <CardContent className="p-8">
                <Bed className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl mb-4 text-white">Comfortable Rooms</h3>
                <p className="text-white/60 leading-relaxed">
                  Well-appointed rooms with modern amenities, ensuring a
                  comfortable stay for all guests.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111111] border border-white/[0.07]">
              <CardContent className="p-8">
                <Wifi className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl mb-4 text-white">Modern Amenities</h3>
                <p className="text-white/60 leading-relaxed">
                  Free WiFi, air conditioning, hot water, and other essential
                  amenities for your convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111111] border border-white/[0.07]">
              <CardContent className="p-8">
                <Coffee className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl mb-4 text-white">Convenient Location</h3>
                <p className="text-white/60 leading-relaxed">
                  Located within the GKF campus, perfect for hospital visitors
                  and families of patients.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#111111] border border-white/[0.07]">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-2xl mb-4 text-white">Affordable Rates</h3>
                <p className="text-white/60 leading-relaxed">
                  Competitive pricing with special rates for extended stays and
                  patient families.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 rounded-full"
            >
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
