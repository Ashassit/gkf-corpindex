import { motion } from "framer-motion";
import {
  HeartPulse,
  ArrowLeft,
  Clock,
  Home,
  DollarSign,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Helmet } from 'react-helmet-async';

const emergencyCarePoints = [
  "Our Emergency Unit is open all day, every day, to handle any medical emergency",
  "We have trained doctors and nurses ready to provide quick and expert care",
  "Using proven emergency methods and clear treatment steps, we make sure every patient gets the right care at the right time",
];

const ltcOverview = [
  "The Long-Term Care (LTC) facility at Grace Kennett Foundation is designed for patients who need continued medical care within a hospital setting and cannot be managed safely at home",
  "This service supports individuals recovering from illness or surgery, and those requiring assistance due to age-related conditions or extended recuperation needs",
];

const admissionDetails = [
  "Offered to selected patients after clinical screening",
  "Requires a minimum stay of one month",
  "Advance payment for the month is mandatory at admission",
  "No refund is applicable if the patient discontinues before one month",
];

const costInclusions = [
  "Accommodation and professional nursing care",
  "Basic hospital supervision and medical monitoring",
];

const costExclusions = [
  "Food, medicines, consumables, or personal items",
  "Additional services requested by the patient or family",
];

export function EmergencyCarePage() {
  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-10 min-h-screen bg-[#080808]">
      <Helmet>
        <title>24/7 Emergency & Trauma Care in Madurai | GKF Hospital</title>
        <meta name="description" content="Round-the-clock emergency and trauma care at Grace Kennett Foundation Hospital, Madurai. Trained doctors & nurses, burns emergency, long-term care. Call +91 4522601767." />
        <link rel="canonical" href="https://gkfmadurai.in/emergency-care" />
        <meta property="og:title" content="24/7 Emergency Care in Madurai | GKF Hospital" />
        <meta property="og:description" content="Emergency and trauma care available 24/7 at GKF Hospital, Madurai. Call +91 4522601767." />
        <meta property="og:url" content="https://gkfmadurai.in/emergency-care" />
      </Helmet>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={handleBack}
              variant="outline"
              className="mb-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <HeartPulse className="w-10 h-10 text-white" />
              </motion.div>
              <div>
                <h1 className="text-5xl md:text-6xl">
                  24×7 Accident & Emergency Care
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Emergency Care Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Clock className="w-12 h-12 text-blue-600" />
              <div>
                <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  24×7 Accident & Emergency Care
                </h2>
                <Badge className="mt-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
                  Always Available
                </Badge>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 mb-8">
            {emergencyCarePoints.map((content, index) => (
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
                  <Card className="border-l-4 border-transparent hover:border-l-blue-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111]/80 border border-white/[0.07] backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white text-xl flex-shrink-0 shadow-lg">
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

        {/* Long-Term Care Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <Home className="w-12 h-12 text-cyan-600" />
              <div>
                <h2 className="pb-2 text-4xl md:text-5xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Long-Term Care (LTC)
                </h2>
                <p className="text-white/60 text-lg mt-2">
                  Compassionate care in a secure environment
                </p>
              </div>
            </div>
          </motion.div>

          {/* LTC Overview */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            {ltcOverview.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.08 }}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Card className="border-l-4 border-transparent hover:border-l-cyan-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111]/80 border border-white/[0.07] backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white text-xl flex-shrink-0 shadow-lg">
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

          {/* Admission & Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-3xl mb-6 text-white">
              Admission & Eligibility
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {admissionDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.85 + index * 0.05 }}
                >
                  <Card className="border-l-4 border-blue-400 bg-[#111111] border border-white/[0.07] backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-white/80 leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cost Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Inclusions */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: 1.0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-10 h-10 text-green-600" />
                <h3 className="text-3xl text-white">Cost Inclusions</h3>
              </div>
              <div className="space-y-4">
                {costInclusions.map((item, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-green-400 bg-[#111111] border border-white/[0.07] backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <p className="text-white/80 leading-relaxed">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Exclusions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-10 h-10 text-red-600" />
                <h3 className="text-3xl text-white">Not Included</h3>
              </div>
              <div className="space-y-4">
                {costExclusions.map((item, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-red-400 bg-[#111111] border border-white/[0.07] backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        <p className="text-white/80 leading-relaxed">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <p className="text-xl leading-relaxed">
                  We ensure compassionate, dignified, and continuous care in a
                  secure environment — giving families peace of mind and
                  patients the comfort they deserve.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="text-center"
        >
          <Button
            onClick={handleBack}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
