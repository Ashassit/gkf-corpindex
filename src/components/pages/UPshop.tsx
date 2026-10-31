import { motion } from "framer-motion";
import { Recycle, } from "lucide-react";


export function UPshop() {

  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          // style={{
          //   backgroundImage:
          //     "url(https://images.unsplash.com/photo-1619509403248-7f480b764f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwc2hvcCUyMHVwY3ljbGV8ZW58MXx8fHwxNzYwNDE3NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
          // }}
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
              Gifts - UPshop
              <span className="block text-orange-400 mt-2">
                Upcycling & Creative Reuse
              </span>
            </h1>
            <p className="text-xl mb-8">
              Discover unique, eco-friendly products created through upcycling
              and creative reuse, supporting sustainability and local artisans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Upcycling Section */}
      <section className="py-20 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                What is Upcycling?
              </h2>
              <div className="bg-[#0d0d0d] rounded-2xl p-8 text-left">
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Upcycling, also known as creative reuse, is the process of
                  transforming by-products, waste materials, useless, or
                  unwanted products into new materials or products perceived to
                  be of greater quality, such as artistic value or environmental
                  value.
                </p>
                <div className="bg-[#111111] border border-white/[0.07] rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <Recycle className="w-8 h-8 text-orange-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl mb-3 text-orange-400">
                        Upcycling vs. Recycling
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        Recycling breaks products down into their raw materials
                        to be made into totally new things, while upcycling
                        creatively repurposes old materials while maintaining
                        some of their original characteristics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}
