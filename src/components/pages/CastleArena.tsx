import { motion } from "framer-motion";
import { Home, Users, Coffee, Music, Building2, Utensils, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import castleFront from "../../assets/castle-front-img.webp"

export function CastleArena() {
  const tariffData = [
    { service: "Castle with AC", duration: "3hr", charge: "12,500" },
    { service: "Castle with AC", duration: "6hr", charge: "25,000" },
    { service: "Castle with AC", duration: "12hr", charge: "50,000" },
    { service: "Castle with AC", duration: "24hr", charge: "60,000" },
    { service: "Castle without AC", duration: "3hr", charge: "10,000" },
    { service: "Castle without AC", duration: "6hr", charge: "20,000" },
    { service: "Castle without AC", duration: "12hr", charge: "30,000" },
    { service: "Castle without AC", duration: "24hr", charge: "40,000" },
    { service: "Dining at Arena", duration: "Per session", charge: "5,000" },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${castleFront})`,
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
              The Castle & Arena
              <span className="block text-orange-400 mt-2">
                Event Venue & Facilities
              </span>
            </h1>
            <p className="text-xl mb-8">
              The Castle and Arena is our Grey matter initiative. The Castle
              symbolizes knowledge as power with the objective to facilitate our
              'Home for every child' mission.
            </p>
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
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                This will act as a hub for continuous learning. The Castle can
                seat up to a hundred and twenty participants and is equipped
                with a state-of-the-art audiovisual system.
              </p>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                The Castle can host community events like birthdays or wedding
                receptions. This can handle up to 300 visitors. 90 people per
                batch can be seated for dining in the Arena. The Crown is our
                hostelry. The hostelry has two rooms with attached toilets and a
                modern kitchen.
              </p>
              <p className="text-xl text-white/80 leading-relaxed mb-6">
                The Castle is located close to the railway station, bus stand
                and Madurai International airport and is easily accessible.
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                Our Eatery – 'Home food for you,' can provide safe and top
                quality food and beverages for the events.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Facilities & Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-3 text-white">Seating Capacity</h3>
                  <p className="text-white/60 leading-relaxed">
                    150 people in the Castle
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8 text-center">
                  <Building2 className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-3 text-white">Audiovisual System</h3>
                  <p className="text-white/60 leading-relaxed">
                    State-of-the-art AV equipment for presentations and events
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8 text-center">
                  <Utensils className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-3 text-white">Dining Facilities</h3>
                  <p className="text-white/60 leading-relaxed">
                    The arena can seat 90 people at one go.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8 text-center">
                  <Music className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-3 text-white">Event Hosting</h3>
                  <p className="text-white/60 leading-relaxed">
                    Perfect for weddings, birthdays, conferences, and community
                    events
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8 text-center">
                  <Home className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-3 text-white">The Crown Hostelry</h3>
                  <p className="text-white/60 leading-relaxed">
                    Two rooms with attached toilets and modern kitchen
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-[#111111] border border-white/[0.07]">
                <CardContent className="p-8 text-center">
                  <Coffee className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-2xl mb-3 text-white">Catering Services</h3>
                  <p className="text-white/60 leading-relaxed">
                    Safe and quality food from our Eatery – 'Home food for you'
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tariff Section */}
      <section className="py-20 bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              The Castle & Arena Tariff
            </h2>
            <p className="text-white/60 text-lg">Competitive pricing for all your event needs</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0d0d0d] border border-white/[0.07] rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">No</th>
                      <th className="px-6 py-4 text-left">Service</th>
                      <th className="px-6 py-4 text-left">Duration</th>
                      <th className="px-6 py-4 text-right">Charge (Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tariffData.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-white/[0.07] hover:bg-white/[0.03] transition-colors ${
                          index % 2 === 0 ? "bg-white/[0.02]" : ""
                        }`}
                      >
                        <td className="px-6 py-4 text-white/80">{String(index + 1).padStart(2, '0')}</td>
                        <td className="px-6 py-4 text-white">{item.service}</td>
                        <td className="px-6 py-4">
                          <Badge variant="outline" className="text-orange-400 border-orange-500/30">
                            {item.duration}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right text-white">
                          ₹{item.charge}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <p className="text-white/60 mb-2">
                Please contact us for further details and guidelines for using
                the facility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              Ready to Book Your Event?
            </h2>

            <div className="flex items-center gap-3 justify-center bg-white/10 backdrop-blur-sm px-8 py-5 rounded-full inline-flex mb-8">
              <Phone className="w-6 h-6" />
              <a href="tel:+919952604526" className="text-2xl hover:underline">
                +91 99526 04526
              </a>
            </div>

            <Button
              size="lg"
              className="bg-[#111111] text-orange-400 border border-orange-500/30 hover:bg-[#1a1a1a] px-12 py-6 rounded-full text-lg shadow-xl"
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
