import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Utensils, Coffee, Truck, CheckCircle } from "lucide-react";
import eat1 from "../../assets/eat/eat (1).jpeg";
import eat2 from "../../assets/eat/eat (2).jpeg";
import eat3 from "../../assets/eat/eat (3).jpeg";
import eat4 from "../../assets/eat/eat (4).jpeg";

export function Eatery() {
  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920)",
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
              Eatery GKF
              <span className="block text-orange-400 mt-2">
                Diet Online & Food Service
              </span>
            </h1>
            <p className="text-xl mb-4">
              Diet online – Eatery GKF – is our production and sales unit of
              Hospital diet, Food and Beverages.
            </p>
            <p className="text-lg text-orange-200">Home food for you</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Our Commitment to Quality
              </h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The process in food preparation is one of the safest – from
                  the procurement of raw materials to storage and distribution.
                </p>
                <p>We provide a range of food at very reasonable costs.</p>
                <p>
                  Our eatery produces a great variety of cost effectively priced
                  safe and sumptuous diets.
                </p>
                <p className="text-xl text-orange-400">
                  Now special hospital diets are available online.
                </p>
              </div>

              {/* Link to Eat & Heal Page */}
              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Visit Eat & Heal
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Our Delicious Offerings
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Fresh, nutritious, and carefully prepared meals to suit your
              dietary needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { img: eat1, title: "Nutritious Meals", delay: 0 },
              { img: eat2, title: "Hospital Diets", delay: 0.1 },
              { img: eat3, title: "Fresh Ingredients", delay: 0.2 },
              { img: eat4, title: "Quality Service", delay: 0.3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-[#111111] border border-white/[0.07]">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-2xl mb-2">{item.title}</h3>
                      <p className="text-gray-200">
                        Prepared with care and quality ingredients
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8">
                  <Utensils className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-white">Hospital Diets</h3>
                  <p className="text-white/60">
                    Specialized therapeutic diets for various medical conditions
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8">
                  <Coffee className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-white">Beverages</h3>
                  <p className="text-white/60">
                    Fresh and nutritious beverage options
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8">
                  <Truck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-white">Delivery Service</h3>
                  <p className="text-white/60">
                    Convenient online ordering and delivery
                  </p>
                </CardContent>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0d0d0d] rounded-2xl p-8 text-center border border-white/[0.07]"
            >
              <Utensils className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl mb-4 text-white">
                Why Choose Eatery GKF?
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-white/80">
                    Strict quality control from procurement to delivery
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-white/80">
                    Cost-effective pricing for all budgets
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-white/80">
                    Safe food handling and storage practices
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-white/80">
                    Wide variety of nutritious options
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <Coffee className="w-20 h-20 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl md:text-5xl mb-6">
              Order Home Food Today
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Experience safe, nutritious, and delicious meals delivered to your
              doorstep. Special hospital diets now available online.
            </p>

            <Button
              size="lg"
              className="bg-[#111111] text-orange-400 border border-orange-500/30 hover:bg-[#1a1a1a] px-12 py-6 rounded-full text-lg shadow-xl"
            >
              Order Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
