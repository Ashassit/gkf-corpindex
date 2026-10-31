import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { HeartPulse, Shield, TrendingUp, Droplet, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import skinbank from "../../assets/newImages/skinbankbaby.jpg";


const outcomes = [
  {
    icon: HeartPulse,
    title: "Increased Survival",
    description: "It significantly reduces mortality rates, especially in critical cases.",
    gradient: "from-red-600 to-orange-600"
  },
  {
    icon: Shield,
    title: "Fewer Complications",
    description: "It protects against infection, minimizes fluid loss, and reduces pain.",
    gradient: "from-orange-600 to-amber-600"
  },
  {
    icon: TrendingUp,
    title: "Better Recovery",
    description: "It leads to shorter hospital stays and improved long-term results.",
    gradient: "from-red-500 to-orange-500"
  }
];

export function SkinBankPage() {
   const navigate = useNavigate();

      const handleBack = () => {
        navigate(-1);
      };
  return (
    <div className="min-h-screen pt-18 md:pt-14 bg-[#080808]">
      <Helmet>
        <title>Skin Bank in Madurai | Skin Donation & Burns Care | Grace Kennett Foundation</title>
        <meta name="description" content="GKF Hospital, Madurai operates a skin bank serving burn patients across Tamil Nadu. Learn about skin donation, cadaver skin grafts, and how to donate. Gift Skin — Gift Life." />
        <link rel="canonical" href="https://gkfmadurai.in/skin-bank" />
        <meta property="og:title" content="Skin Bank in Madurai | Grace Kennett Foundation" />
        <meta property="og:description" content="GKF Hospital operates Madurai's skin bank. Learn about skin donation and cadaver skin grafts for burn patients across Tamil Nadu." />
        <meta property="og:url" content="https://gkfmadurai.in/skin-bank" />
      </Helmet>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white py-10 pl-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={handleBack}
              variant="outline"
              className="mb-4 bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="site-heading text-white">Skin Bank: Reset Life!</h1>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full flex justify-center pt-8">
  <div className="relative h-96 w-[800px] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
    <ImageWithFallback
      src={skinbank}
      alt="Skin Bank Laboratory"
      className="w-full h-full object-cover"
    />
  </div>
</div>




      {/* Content */}
      <div className="section-container container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              A severe burn demands immediate, expert care. Skin banks are a vital part of this response,
              providing donated skin that serves as a temporary, life-saving biological dressing.
            </p>
          </motion.div>
        </div>

        {/* Why Skin Banks Matter */}
        <div className="max-w-6xl mx-auto mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="site-heading text-4xl pb-4 md:text-5xl mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Why Skin Banks Matter
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              The early use of donor skin directly translates to three key outcomes for burn patients:
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Card className="border-l-4 border-transparent hover:border-l-red-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111]/80 border border-white/[0.07] backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <motion.div
                          className={`w-14 h-14 bg-gradient-to-br ${outcome.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <outcome.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 text-sm flex-shrink-0">
                              {index + 1}
                            </span>
                            <div>
                              <h3 className="mb-2 text-white">{outcome.title}</h3>
                              <p className="text-white/80 leading-relaxed text-lg">
                                {outcome.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-[#0d0d0d] border-2 border-white/[0.07] shadow-xl">
            <CardContent className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shrink-0 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Droplet className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <p className="text-white/80 leading-relaxed text-lg mb-4">
                    This temporary cover is often the decisive factor that stabilizes a patient, making it a cornerstone
                    of modern burn care. Children, in particular, benefit greatly from this technology when their own
                    donor skin is scarce.
                  </p>
                  <p className="text-lg bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Skin banking turns the gift of donation into a second chance at life for burn victims.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-center"
        >
          <Button
            onClick={handleBack}
            size="lg"
            className="mt-10 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
