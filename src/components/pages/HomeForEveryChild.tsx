import { motion } from "framer-motion";
import { Heart, Home, Users, Gift, HandHeart, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { trackCTAClick } from "../utils/analytics";

export default function HomeForEveryChild() {
  return (
    <div className="pt-20 min-h-screen bg-[#080808]">
      {/* Hero Section */}
      <section className="section-container relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1695263747060-cc445217dc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBoYXBweXxlbnwxfHx8fDE3NjYyMDM3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Children playing happily"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-orange-800/70 to-orange-900/80" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-6"
            >
              <Home className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </motion.div>
            <h1 className="text-white mb-6">
              Home for Every Child
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Every child deserves a loving home, a warm embrace, and the promise of a bright future.
              Your donation can make this dream a reality.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={() => {
                  trackCTAClick("Donate Now", "home_for_every_child_hero");
                  document.getElementById('donate-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-6 text-lg bg-[#111111] text-orange-400 border border-orange-500/30 hover:bg-[#111111]/80 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Mission Section */}
      <section className="section-container py-16 md:py-24 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-600 mb-6">Our Mission</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
              We believe every child should grow up in a safe, nurturing environment.
              Through your generous support, we provide shelter, education, healthcare, and most importantly, love to children in need.
            </p>
          </motion.div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, number: "500+", label: "Children Supported", color: "orange" },
              { icon: Home, number: "50+", label: "Safe Homes Provided", color: "blue" },
              { icon: Heart, number: "1000+", label: "Lives Transformed", color: "pink" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300 bg-[#111111] border border-white/[0.07]">
                  <CardContent className="p-0">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}-100 mb-4`}>
                      <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                    </div>
                    <h3 className="text-white mb-2">{stat.number}</h3>
                    <p className="text-white/60">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* What Your Donation Does */}
      <section className="section-container py-16 md:py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-600 mb-6">How Your Donation Helps</h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Every contribution, no matter the size, creates a meaningful impact in a child's life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "₹1,000 - Basic Care",
                description: "Provides food, clothing, and basic necessities for one child for a month",
                icon: Gift,
              },
              {
                title: "₹5,000 - Education Support",
                description: "Covers school fees, books, and educational materials for one child for a year",
                icon: CheckCircle,
              },
              {
                title: "₹10,000 - Healthcare",
                description: "Ensures comprehensive medical care and health check-ups for multiple children",
                icon: Heart,
              },
              {
                title: "₹25,000 - Home Infrastructure",
                description: "Helps maintain safe, comfortable living spaces and facilities",
                icon: Home,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 bg-[#111111] border border-white/[0.07]">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-white mb-2">{item.title}</h3>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Success Stories */}
      <section className="section-container py-16 md:py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-orange-600 mb-6">Stories of Hope</h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Real stories from children whose lives have been transformed by your generosity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1614867900579-e92b9500529b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcnBoYW5hZ2UlMjBjaGlsZCUyMGNhcmV8ZW58MXx8fHwxNzY2MjAzNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Child care"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-white/80 italic mb-4">
                "-------------------------------------------------------------"
              </p>
              <p className="text-orange-600">- Priya, Age 12</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8 shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1658909913848-1680f5d1af61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBsb3ZlJTIwY2hpbGRyZW58ZW58MXx8fHwxNzY2MjAzNzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family love"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <p className="text-white/80 italic mb-4">
                "-------------------------------------------------------------"
              </p>
              <p className="text-orange-600">- Rahul, Age 10</p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Donation CTA Section */}
      <section id="donate-section" className="section-container py-16 md:py-24 px-4 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <HandHeart className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-6" />
            <h2 className="text-white mb-6">Make a Difference Today</h2>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              Your donation can provide a child with shelter, education, healthcare, and love.
              Together, we can create a home for every child.
            </p>

            {/* Donation Amount Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["₹1,000", "₹5,000", "₹10,000", "₹25,000"].map((amount) => (
                <Button
                  key={amount}
                  className="bg-[#111111] text-orange-400 border border-orange-500/30 hover:bg-[#111111]/80 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {amount}
                </Button>
              ))}
            </div>

            <Button className="px-10 py-6 text-lg bg-[#111111] text-orange-400 border border-orange-500/30 hover:bg-[#111111]/80 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <Heart className="w-5 h-5 mr-2" />
              Donate Custom Amount
            </Button>

            <div className="mt-8 text-white/80 text-sm">
              <p>All donations are tax-deductible under Section 80G</p>
              <p className="mt-2">For bank transfer details or queries: <a href="tel:+914522601767" className="underline hover:text-white">+91 452 2601767</a></p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="section-container py-16 md:py-24 px-4 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-600 mb-6">Get in Touch</h2>
            <p className="text-white/80 text-lg mb-8">
              Have questions about how your donation will be used? Want to volunteer or learn more?
              We'd love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="px-8 py-6 bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:shadow-xl transition-all duration-300">
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="px-8 py-6 border-2 border-orange-500 text-orange-400 hover:bg-white/[0.03] transition-all duration-300"
                onClick={() => window.location.href = '/volunteering'}
              >
                Become a Volunteer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
