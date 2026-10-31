import { motion } from "framer-motion";
import {
  Clock,
  Heart,
  Users,
  Building2,
  Bed,
  Activity,
  Phone,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import pointingPerson from "../../assets/newImages/man_10034768.png";
import ane1 from "../../assets/hospital/ane1.jpg";

const solutions = [
  {
    title: "1. Rapid Response:",
    description:
      "We understand the urgency of medical emergencies, workplace injuries, and burns. Every second counts — and we act fast.",
  },
  {
    title: "2. Specialized Care:",
    description:
      "Our 24×7 Accident & Emergency team is experienced in handling all types of emergencies — trauma, medical, or surgical — with expertise and compassion.",
  },
  {
    title: "3. Comprehensive Services:",
    description:
      "From initial treatment to full recovery, we ensure quality, safety, and transparency at every stage.",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Accident & Emergency Unit:",
    description: "Immediate access to expert care, anytime.",
    gradient: "from-red-600 to-orange-600",
  },
  {
    icon: Users,
    title: "Qualified Medical Experts:",
    description:
      "Specialists in industrial injury management and rehabilitation.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Building2,
    title: "Fully Equipped Operating Rooms:",
    description: "Advanced surgical facilities for all emergency procedures.",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Activity,
    title: "Day Care Services:",
    description: "Convenient treatment and follow-up for minor injuries.",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: Bed,
    title: "Inpatient Services:",
    description:
      "Complete care for serious conditions requiring hospitalization.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Heart,
    title: "Additional Support:",
    description:
      "Physical therapy, nutritional guidance, counseling, and rehabilitation to promote full recovery.",
    gradient: "from-pink-600 to-rose-600",
  },
];

export function WhyUnique() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen pt-24 md:pt-20 bg-[#080808]">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 text-white py-10 pl-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={handleBack}
              variant="outline"
              className="mb-4 md:mb-8 border-white/30 bg-transparent text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div >
              <h1 className="site-heading text-5xl md:text-6xl">Medical Emergency?</h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container">
        {/* 3 Ways Section */}
        <div className="section-container w-full flex justify-center py-8">
  <img
    src={ane1} // your imported image
    alt="Net Zero Initiative"
    className="w-auto h-100" // keeps original size
  />
</div>

        <div className="bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="site-heading bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            3 Ways We Can Solve Your Problem
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.08 }}
              className="relative"
            >
              <motion.div
                whileHover={{ x: 8 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
              >
                <Card className="border-l-4 border-transparent hover:border-l-blue-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111]/80 border border-white/[0.07] backdrop-blur-sm overflow-visible">
                  {/* Pointing Person Icon - Half inside, half outside */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <img
                      src={pointingPerson}
                      alt=""
                      className="w-12 h-12 md:w-14 md:h-14 drop-shadow-lg"
                    />
                  </div>

                  <CardContent className="p-6 pl-12 md:pl-14 flex items-start gap-4">
                    {/* Content */}
                    <div>
                      <h3 className="mb-2 text-white">
                        {solution.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {solution.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent max-w-md" />
          <div className="mx-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent max-w-md" />
        </motion.div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <h2 className="site-heading pb-4 text-4xl md:text-5xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <Card className="border-l-4 border-transparent hover:border-l-green-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111] border border-white/[0.07] backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <motion.div
                          className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <feature.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/[0.07] text-white/60 text-sm flex-shrink-0">
                              {index + 1}
                            </span>
                            <div>
                              <h3 className="mb-2 text-white">
                                {feature.title}
                              </h3>
                              <p className="text-white/80 leading-relaxed text-lg">
                                {feature.description}
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

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent max-w-md" />
          <div className="mx-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent max-w-md" />
        </motion.div>

        {/* Prevention First Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(252, 165, 165, 0.3)",
                  "0 0 30px rgba(239, 68, 68, 0.7), 0 0 60px rgba(252, 165, 165, 0.5)",
                  "0 0 20px rgba(239, 68, 68, 0.5), 0 0 40px rgba(252, 165, 165, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block rounded-full mb-6"
            >
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 px-6 py-2 shadow-lg">
                Act Now
              </Badge>
            </motion.div>

            <h2 className="site-heading text-4xl md:text-5xl mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Prevention First
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-[#0d0d0d] border-2 border-white/[0.07] shadow-xl">
              <CardContent className="p-8 md:p-10">
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-xl text-white/80 mb-4">
                    Don't wait until an accident happens.
                  </p>
                  <p className="text-xl text-white/80 mb-4">
                    Contact us today to learn how we can support your workplace
                    and educational institution safety programs — providing
                    top-tier medical readiness and protection for your employees
                    and students.
                  </p>
                  <p className="text-2xl bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-8">
                    Invest in their safety and well-being.
                  </p>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Button
            onClick={handleBack}
            size="lg"
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Button>
        </motion.div>
        </div>
      </div>
    </div>
  );
}
