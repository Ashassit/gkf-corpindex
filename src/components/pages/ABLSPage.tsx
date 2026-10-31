import { motion } from "framer-motion";
import {
  Flame,
  ArrowLeft,
  AlertCircle,
  Phone,
  Droplet,
  Zap,
  Skull,
  Activity,
  Heart,
  Thermometer,
  HeartPulse,
  Users,
  Rainbow,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";


const guidelines = [
  {
    icon: Activity,
    description: "Inhalation injuries (all suspected).",
    gradient: "from-red-600 to-orange-600",
  },
  {
    icon: Flame,
    description:
      "Partial thickness burns (second and first degree) ≥ 15% TBSA in patients aged 18–40 years old.",
    gradient: "from-orange-600 to-amber-600",
  },
  {
    icon: Droplet,
    description:
      "Partial thickness burns (second and first degree) ≥ 5% in children under the age of 18 or adults older than 40 years.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Skull,
    description:
      "Full thickness burns in any age (third degree burn).",
    gradient: "from-rose-600 to-red-600",
  },
  {
    icon: AlertCircle,
    description:
      "Patients with partial or full thickness burns that involve the hands, feet, face, eyes, ears, perineum, and/or major joints.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    description:
      "Patients with high-voltage electrical injuries or lightning strikes.",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: AlertCircle,
    description: "Chemical burns.",
    gradient: "from-red-600 to-rose-600",
  },
  {
    icon: Activity,
    description:
      "Patients with burns complicated by other trauma in which the burn poses the greatest risk of morbidity or mortality.",
    gradient: "from-orange-600 to-red-600",
  },
  {
    icon: Phone,
    description:
      "Patients with comorbidities that could complicate management, prolong recovery, or affect mortality.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: AlertCircle,
    description:
      "Patients who will require special social/emotional and/or long-term rehab, including patients with suspected abuse or substance abuse.",
    gradient: "from-rose-600 to-red-600",
  },
];

const paediatricFeatures = [
  {
    icon: Droplet,
    title: "Comprehensive Care",
    description: "From resuscitation to rehabilitation.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    icon: Thermometer,
    title: "Safe & Warm Environment",
    description:
      "Infection-controlled, temperature-regulated rooms.",
    gradient: "from-red-600 to-orange-600",
  },
  {
    icon: HeartPulse,
    title: "Expert Team",
    description:
      "Burn surgeons, paediatric specialists, nurses, therapists, and counsellors.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    icon: Heart,
    title: "Pain & Comfort",
    description:
      "Gentle dressings, effective analgesia, and emotional support.",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: Users,
    title: "Family Support",
    description:
      "Parents are closely involved during recovery and follow-up.",
    gradient: "from-green-600 to-emerald-600",
  },
  {
    icon: Rainbow,
    title: "Recovery & Beyond",
    description:
      "Early physiotherapy, scar care, and reintegration support.",
    gradient: "from-orange-600 to-amber-600",
  },
];

export function ABLSPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
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
              className="mb-8 bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-4">
              {/* <motion.div
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Flame className="w-10 h-10 text-white" />
              </motion.div> */}
              <div>
                <h1 className="site-heading">ABLS - (Advanced Burns Life Support) & Paediatric Burns</h1>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="section-container w-full flex justify-center py-8">
        <img
          src=""
          alt="Advanced Burns Life Support"
          className="w-100 h-110 object-cover rounded-xl shadow-lg"
        />

      </div>

      {/* Content */}
      <div className="section-container container mx-auto px-4 py-16">
        {/* Guidelines Section */}
        <div className="max-w-6xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="site-heading text-4xl md:text-5xl mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Referral Guidelines
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.08 }}
              >
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                >
                  <Card className="border-l-4 border-transparent hover:border-l-red-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111] border border-white/[0.07] backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-5">
                        <motion.div
                          className={`w-14 h-14 bg-gradient-to-br ${guideline.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <guideline.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1 pt-1">
                          <div className="flex items-start gap-3">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-500/20 text-orange-400 text-sm flex-shrink-0">
                              {index + 1}
                            </span>
                            <p className="text-white/80 leading-relaxed text-lg">
                              {guideline.description}
                            </p>
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
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent max-w-md" />
          <div className="mx-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-300 to-transparent max-w-md" />
        </motion.div>

        {/* Paediatric Burn Unit Section */}
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
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.7), 0 0 60px rgba(147, 197, 253, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 197, 253, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block rounded-full mb-6"
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-6 py-2 shadow-lg">
                First of Its Kind in India
              </Badge>
            </motion.div>

            <div className="flex items-center justify-center space-x-4 mb-4">

              <h2 className="site-heading text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Paediatric Burn Unit
              </h2>
            </div>
            <p className="text-xl text-blue-400 max-w-3xl mx-auto">
              A specialized, child-friendly unit dedicated to
              the care of children with burn injuries
            </p>
          </motion.div>

          {/* Paediatric Features */}
          <div className="grid grid-cols-1 gap-6 mb-12">
            {paediatricFeatures.map((feature, index) => (
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
                  <Card className="border-l-4 border-transparent hover:border-l-blue-500 shadow-md hover:shadow-xl transition-all duration-300 bg-[#111111] border border-white/[0.07] backdrop-blur-sm">
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

          {/* Goal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-[#0d0d0d] border-2 border-white/[0.07] shadow-xl">
              <CardContent className="p-8 md:p-10">
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl mb-4 text-white">
                    Our Goal
                  </h3>
                  <p className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent max-w-2xl mx-auto">
                    To heal, restore, and help every child smile
                    again.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
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
  );
}
