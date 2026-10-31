import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import milkBank from "../../assets/newImages/milk1.jpg";

const milkBankContent = [
  "A milk bank is a specialized facility that collects, processes, and distributes breast milk to needy babies.",
  "The primary purpose of our milk bank is to provide safe and processed breast milk to orphaned and abandoned neonates and children of Mazhalai Illam who do not have access to breast milk.",
  "Donating mothers provide their excess breast milk, which is carefully screened, processed, and stored to ensure that it is free of contaminants. This processed breast milk is then recommended and dispensed to children by medical professionals.",
  "The milk bank plays a vital role in ensuring that orphaned and abandoned children receive the nutritional benefits of breast milk."
];

export function MilkBankPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen pt-18 md:pt-16 bg-[#080808]">
      <Helmet>
        <title>Milk Bank in Madurai | Breast Milk for Neonates | Grace Kennett Foundation</title>
        <meta name="description" content="GKF Hospital's Milk Bank collects, processes, and provides safe breast milk to orphaned and abandoned neonates in Madurai. Learn how to donate breast milk." />
        <link rel="canonical" href="https://gkfmadurai.in/milk-bank" />
        <meta property="og:title" content="Milk Bank in Madurai | Grace Kennett Foundation" />
        <meta property="og:description" content="GKF Hospital provides safe breast milk to orphaned neonates in Madurai. Learn how to donate." />
        <meta property="og:url" content="https://gkfmadurai.in/milk-bank" />
      </Helmet>
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 text-white py-10 pl-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={handleBack}
              variant="outline"
              className="mb-8 bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="flex items-center space-x-4 mb-6">

              <div>
                <h1 className="site-heading text-5xl md:text-6xl font-bold">Human Milk Bank</h1>
                <p className="text-xl text-pink-100 mt-2">
                  Little Drops to Light The Future…
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-container w-full flex justify-center py-8">
  <img
    src={milkBank} // your imported image
    alt="Net Zero Initiative"
    className="w-100 h-100" // keeps original size
  />
</div>

      {/* Content */}
      <div className="section-container container mx-auto px-4 py-16">
        {/* Milk Bank Points */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="site-heading text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Milk Bank
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Supported by Smiling  Shine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {milkBankContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.08 }}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Card className="border-l-4 border-transparent hover:border-l-pink-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111]/80 border border-white/[0.07] backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-600 to-rose-600 text-white font-bold text-xl flex-shrink-0 shadow-lg">
                          {index + 1}
                        </span>
                        <div className="flex-1 pt-2">
                          <p className="text-white/80 leading-relaxed text-lg">
                            {content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <Button
            onClick={handleBack}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
