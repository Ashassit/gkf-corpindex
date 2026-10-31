
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { Heart, Stethoscope, Activity, CheckCircle, Award, Users, TrendingUp, Clock, Shield, IndianRupee, X } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { trackDonation, trackDonationIntent, trackCTAClick } from "../utils/analytics";

// Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

// API configuration
const API_URL = 'https://chatbot2025gkf.onrender.com';

// Razorpay script loader
const loadRazorpay = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function SupportHospital() {
  // Funding data for equipment
  const hbotFunding = {
    goal: 850000,
    raised: 0,
    percentage: (0 / 850000) * 100,
    donors: 0
  };

  const ventilatorFunding = {
    goal: 4500000,
    raised: 0,
    percentage: (0 / 4500000) * 100,
    donors: 0
  };

  // Donation dialog states
  const [showHBOTDialog, setShowHBOTDialog] = useState(false);
  const [showVentilatorDialog, setShowVentilatorDialog] = useState(false);
  const [showBothDialog, setShowBothDialog] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<{ paymentId: string; amount: number; equipmentType: string } | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handlePaymentSuccess = (paymentId: string, amount: number, equipmentType: string) => {
    setPaymentDetails({ paymentId, amount, equipmentType });
    setShowSuccessDialog(true);

    // Close all donation dialogs
    setShowHBOTDialog(false);
    setShowVentilatorDialog(false);
    setShowBothDialog(false);

    // Optional: Redirect to WhatsApp with payment ID
    setTimeout(() => {
      const msg = `I have completed a donation of ₹${amount} for ${equipmentType}. Payment ID: ${paymentId}`;
      window.open(
        `https://wa.me/918428640401?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Support GKF Hospital | Donate for HBOT & Medical Equipment | Madurai</title>
        <meta name="description" content="Help Grace Kennett Foundation Hospital acquire life-saving equipment including HBOT chambers and ventilators. Donate to support burns care & specialty medicine in Madurai." />
        <link rel="canonical" href="https://gkfmadurai.in/support-hospital" />
        <meta property="og:title" content="Support GKF Hospital | Donate for HBOT & Medical Equipment" />
        <meta property="og:description" content="Help GKF Hospital acquire HBOT chambers and ventilators for burns care in Madurai." />
        <meta property="og:url" content="https://gkfmadurai.in/support-hospital" />
      </Helmet>
      <Toaster position="top-center" richColors />
      <div className="p-20 min-h-screen bg-[#080808]">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-5194940268920-80bbd2d6fd0d?w=1200&h=800&fit=crop"
              alt="Hospital care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80" />
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
                <Stethoscope className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </motion.div>
              <h1 className="text-white mb-6 text-4xl md:text-5xl font-bold">
                Support Our Hospital
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Your support helps us provide world-class medical care to those who need it most.
                Together, we can save lives and bring hope to countless families.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={() => {
                    trackCTAClick("Donate Now", "support_hospital_hero");
                    document.getElementById('donate-equipment')?.scrollIntoView({ behavior: 'smooth' });
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

        {/* Urgent Need Banner */}
        <section className="py-8 px-4 bg-orange-600">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center md:text-left"
            >
              <Clock className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-1">Urgent: Critical Equipment Needed</h3>
                <p className="text-white/90">Every hour without this equipment puts lives at risk. Help us reach our goal.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Equipment Donation Section */}
        <section id="donate-equipment" className="py-16 md:py-24 px-4 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">Life-Saving Equipment Campaign</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                Help us acquire critical medical equipment that will save countless lives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* HBOT Chamber Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-orange-500/30 hover:shadow-2xl transition-all duration-300 bg-[#111111]">
                  <CardHeader className="bg-[#0d0d0d] pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl text-orange-400 mb-2">HBOT Chamber</CardTitle>
                        <p className="text-white/60 text-sm">Hyperbaric Oxygen Therapy</p>
                      </div>
                      <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Urgent
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-6">
                    {/* Equipment Image */}
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&h=400&fit=crop"
                        alt="Medical equipment"
                        className="w-full h-48 object-cover"
                      />
                    </div>

                    {/* Medical Information */}
                    <div className="bg-[#0d0d0d] p-4 rounded-lg mb-6 border border-white/[0.07]">
                      <h4 className="font-semibold text-blue-400 mb-2">About HBOT</h4>
                      <p className="text-white/80 text-sm mb-3">
                        A Hyperbaric Oxygen Therapy (HBOT) chamber is a sealed, pressurized medical unit
                        in which a patient breathes <strong>100% oxygen at pressures higher than atmospheric levels (2–3 ATA)</strong>.
                        This significantly increases dissolved oxygen in plasma, enhancing tissue oxygenation,
                        healing, and infection control.
                      </p>

                      <div className="space-y-2">
                        <p className="text-white/80 text-sm font-semibold">Clinical Uses:</p>
                        <ul className="text-white/60 text-sm space-y-1 ml-4 list-disc">
                          <li>Non-healing wounds (diabetic foot, radiation injury)</li>
                          <li>Burns and graft/flap survival</li>
                          <li>Crush injuries and compartment syndrome</li>
                          <li>Carbon monoxide poisoning</li>
                          <li>Gas gangrene and necrotizing infections</li>
                          <li>Decompression sickness</li>
                        </ul>
                      </div>
                    </div>

                    {/* HBOT Chamber Types */}
                    <div className="bg-[#0d0d0d] p-4 rounded-lg mb-6 border border-white/[0.07]">
                      <h4 className="font-semibold text-orange-400 mb-2">Types of HBOT Chambers</h4>
                      <div className="space-y-2 text-sm text-white/80">
                        <p>
                          <strong>Monoplace Chamber:</strong> Designed for a single patient, fully enclosed,
                          typically acrylic, and operated with 100% oxygen.
                        </p>
                        <p>
                          <strong>Multiplace Chamber:</strong> Accommodates multiple patients simultaneously,
                          attended by medical staff inside the chamber; patients receive oxygen via masks or hoods.
                        </p>
                      </div>
                    </div>


                    {/* Impact Statement */}
                    <div className="bg-[#0d0d0d] p-4 rounded-lg mb-6 border border-white/[0.07]">
                      <p className="text-white/80 text-sm">
                        <strong className="text-orange-400">Your Impact:</strong> Can treat up to <strong>200 critical patients annually</strong>,
                        significantly reducing recovery time and saving lives.
                      </p>
                    </div>

                    {/* Funding Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-end mb-3">
                        <div>
                          <p className="text-3xl font-bold text-orange-400">₹{(hbotFunding.raised / 100000).toFixed(2)}L</p>
                          <p className="text-sm text-white/60">raised of ₹{(hbotFunding.goal / 100000).toFixed(2)}L goal</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">{Math.round(hbotFunding.percentage)}%</p>
                          <p className="text-sm text-white/60">funded</p>
                        </div>
                      </div>
                      <Progress value={hbotFunding.percentage} className="h-3" />
                      <div className="flex items-center justify-between mt-3 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{hbotFunding.donors} donors</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-green-600">₹{((hbotFunding.goal - hbotFunding.raised) / 100000).toFixed(2)}L to go</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-white">Clinical Benefits:</h4>
                      {[
                        "Accelerates healing of chronic and non-healing wounds",
                        "Reduces tissue edema and inflammation",
                        "Improves infection control in anaerobic infections",
                        "Stimulates angiogenesis and tissue regeneration",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <p className="text-white/80 text-sm">{benefit}</p>
                        </div>
                      ))}

                    </div>

                    {/* Donation CTA */}
                    <Button
                      onClick={() => {
                        trackCTAClick("Donate for HBOT Chamber", "support_hospital_equipment_card");
                        setShowHBOTDialog(true);
                      }}
                      className="w-full py-6 text-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate for HBOT Chamber
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Ventilator Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-2 border-blue-500/30 hover:shadow-2xl transition-all duration-300 bg-[#111111]">
                  <CardHeader className="bg-[#0d0d0d] pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl text-blue-400 mb-2">ICU Ventilator (4 Units)</CardTitle>
                        <p className="text-white/60 text-sm">ICU-Grade Life Support System</p>
                      </div>
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Critical
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 pb-6">
                    {/* Equipment Image */}
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=400&fit=crop"
                        alt="Ventilator equipment"
                        className="w-full h-48 object-cover"
                      />
                    </div>

                    {/* Medical Information */}
                    <div className="bg-[#0d0d0d] p-4 rounded-lg mb-6 border border-white/[0.07]">
                      <h4 className="font-semibold text-blue-400 mb-2">About Ventilators</h4>
                      <p className="text-white/80 text-sm">
                        Advanced respiratory support system that provides life-sustaining breathing assistance
                        for patients unable to breathe adequately on their own. Essential for ICU critical care.
                      </p>
                    </div>

                    {/* Impact Statement */}
                    <div className="bg-[#0d0d0d] p-4 rounded-lg mb-6 border border-white/[0.07]">
                      <p className="text-white/80 text-sm">
                        <strong className="text-blue-400">Your Impact:</strong> Life-sustaining respiratory support that can save <strong>500+ critical patients per year</strong>,
                        providing 24/7 emergency breathing assistance.
                      </p>
                    </div>

                    {/* Funding Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-end mb-3">
                        <div>
                          <p className="text-3xl font-bold text-blue-400">₹{(ventilatorFunding.raised / 100000).toFixed(2)}L</p>
                          <p className="text-sm text-white/60">raised of ₹{(ventilatorFunding.goal / 100000).toFixed(2)}L goal</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">{Math.round(ventilatorFunding.percentage)}%</p>
                          <p className="text-sm text-white/60">funded</p>
                        </div>
                      </div>
                      <Progress value={ventilatorFunding.percentage} className="h-3" />
                      <div className="flex items-center justify-between mt-3 text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{ventilatorFunding.donors} donors</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-green-600">₹{((ventilatorFunding.goal - ventilatorFunding.raised) / 100000).toFixed(2)}L to go</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-3 mb-12">
                      <h4 className="font-semibold text-white">Critical Benefits:</h4>
                      {[
                        "Advanced respiratory support for ICU patients",
                        "24/7 emergency life-saving capability",
                        "State-of-the-art monitoring systems",
                        "Adjustable oxygen delivery and pressure",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-white/80 text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>

                    {/* Donation CTA */}
                    <Button
                      onClick={() => {
                        trackCTAClick("Donate for Ventilator", "support_hospital_equipment_card");
                        setShowVentilatorDialog(true);
                      }}
                      className="w-full py-6 text-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Donate for Ventilator
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Combined Donation Option */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="bg-[#111111] border border-white/[0.07] border-2">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">Support Both Equipment</h3>
                      <p className="text-white/80 mb-4">
                        Make a larger impact by contributing to both life-saving equipment campaigns. Your generosity will help us serve more patients in critical need.
                      </p>
                      <div className="flex items-center gap-4 justify-center md:justify-start text-sm text-white/60">
                        <div className="flex items-center gap-1">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span>100% goes to equipment</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span>Tax deductible</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        onClick={() => {
                          trackCTAClick("Donate to Both Campaigns", "support_hospital_equipment_card");
                          setShowBothDialog(true);
                        }}
                        className="px-10 py-6 text-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold"
                      >
                        <Heart className="w-6 h-6 mr-2" />
                        Donate to Both Campaigns
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Why Support Us Section */}
        <section className="py-16 md:py-24 px-4 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">Why Your Donation Matters</h2>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">
                We're committed to providing world-class healthcare to everyone, regardless of their ability to pay
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Compassionate Care",
                  description: "We treat every patient with dignity, respect, and the highest quality of medical care.",
                  color: "blue",
                },
                {
                  icon: Award,
                  title: "Expert Team",
                  description: "Our experienced medical professionals are dedicated to saving lives and improving health outcomes.",
                  color: "green",
                },
                {
                  icon: Activity,
                  title: "24/7 Emergency",
                  description: "Round-the-clock emergency services ensuring immediate care when you need it most.",
                  color: "red",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-all duration-300 h-full bg-[#111111] border border-white/[0.07]">
                    <CardContent className="p-0 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${item.color}-100/10 mb-6`}>
                        <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-600 to-blue-500">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Stethoscope className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Every Donation Saves Lives</h2>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                Join our mission to provide life-saving medical equipment. Your contribution directly impacts patient care and saves lives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={() => {
                    trackCTAClick("Donate Now", "support_hospital_cta_section");
                    document.getElementById('donate-equipment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-10 py-6 text-lg bg-[#111111] text-orange-400 border border-orange-500/30 hover:bg-[#111111]/80 shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Make a Donation
                </Button>
              </div>

              <div className="text-white/80 text-sm">
                <p>All donations are tax-deductible under Section 80G</p>
                <p className="mt-2">For queries: <a href="tel:+919943450401" className="underline hover:text-white">+91 99434 50401</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Donation Dialogs */}
      <DonationDialog
        open={showHBOTDialog}
        onOpenChange={setShowHBOTDialog}
        equipmentType="HBOT Chamber"
        equipmentColor="orange"
        onPaymentSuccess={(paymentId, amount) => handlePaymentSuccess(paymentId, amount, "HBOT Chamber")}
      />

      <DonationDialog
        open={showVentilatorDialog}
        onOpenChange={setShowVentilatorDialog}
        equipmentType="ICU Ventilator"
        equipmentColor="blue"
        onPaymentSuccess={(paymentId, amount) => handlePaymentSuccess(paymentId, amount, "ICU Ventilator")}
      />

      <DonationDialog
        open={showBothDialog}
        onOpenChange={setShowBothDialog}
        equipmentType="Both Equipment"
        equipmentColor="green"
        onPaymentSuccess={(paymentId, amount) => handlePaymentSuccess(paymentId, amount, "Both Equipment (HBOT Chamber & Ventilator)")}
      />

      {/* Success Dialog */}
      {showSuccessDialog && paymentDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-[#111111] border border-white/[0.07] rounded-xl p-6 max-w-md w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-bold text-green-400 mb-2">Thank You! 🙏</h3>
              <p className="text-white/60 mb-6">Your donation was successful and verified</p>

              <div className="bg-[#0d0d0d] rounded-lg p-4 text-left mb-4 border border-white/[0.07]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Equipment:</span>
                  <span className="text-white font-semibold text-sm">{paymentDetails.equipmentType}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/60">Amount:</span>
                  <span className="text-white font-semibold">₹{paymentDetails.amount}</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-sm text-white/60">Payment ID:</span>
                  <span className="text-white text-right break-all ml-2 text-xs font-mono">
                    {paymentDetails.paymentId}
                  </span>
                </div>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-sm text-green-400">
                  ✔ Payment verified and confirmed
                </p>
                <p className="text-sm text-green-400/80 mt-1">
                  Email & SMS confirmation sent by Razorpay
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-400">
                  📱 WhatsApp confirmation will open automatically
                </p>
              </div>

              <button
                onClick={() => setShowSuccessDialog(false)}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                <span>Close</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

// Donation Dialog Component
function DonationDialog({
  open,
  onOpenChange,
  equipmentType,
  equipmentColor,
  onPaymentSuccess
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  equipmentType: string;
  equipmentColor: string;
  onPaymentSuccess: (paymentId: string, amount: number) => void;
}) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const colorMap: Record<string, string> = {
    orange: 'border-orange-500 bg-orange-500/20 text-orange-400',
    blue: 'border-blue-500 bg-blue-500/20 text-blue-400',
    green: 'border-green-500 bg-green-500/20 text-green-400',
  };

  const bgColorMap: Record<string, string> = {
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
  };

  const handlePayment = async () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;

    if (!amount || amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    trackDonationIntent(`Donate for ${equipmentType}`);

    setIsProcessing(true);

    try {
      // 1. Load Razorpay SDK
      const loaded = await loadRazorpay();
      if (!loaded) {
        toast.error("Razorpay SDK failed to load. Please check your internet connection.");
        setIsProcessing(false);
        return;
      }

      // 2. Create order on server
      const orderResponse = await fetch(`${API_URL}/api/razorpay/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      if (!orderResponse.ok) {
        throw new Error('Failed to create order');
      }

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error(orderData.message || 'Order creation failed');
      }

      const { order } = orderData;

      // 3. Configure Razorpay payment options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxxxx",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "GKF – Gift Life",
        description: `Donation for ${equipmentType}`,
        image: "/logo.png",

        handler: async function (response: any) {
          try {
            // 4. Verify payment on server
            const verifyResponse = await fetch(`${API_URL}/api/razorpay/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              toast.success("Payment verified! Thank you for your donation 🙏");
              trackDonation({
                amount,
                program: `Support Hospital - ${equipmentType}`,
                paymentMethod: 'razorpay',
                isRecurring: false,
              });
              onPaymentSuccess(response.razorpay_payment_id, amount);
            } else {
              toast.error("Payment verification failed. Please contact support.");
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            toast.error("Payment verification failed. Please contact support with your payment ID.");
          } finally {
            setIsProcessing(false);
          }
        },

        prefill: {
          name: "",
          email: "",
          contact: "",
        },

        notes: {
          purpose: "Donation",
          equipment: equipmentType,
          organization: "Grace Kennett Foundation"
        },

        theme: {
          color: equipmentColor === 'orange' ? "#ea580c" : equipmentColor === 'blue' ? "#2563eb" : "#059669",
        },

        modal: {
          ondismiss: function () {
            toast.info("Payment cancelled");
            setIsProcessing(false);
          }
        }
      };

      // 5. Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      toast.error("Failed to initiate payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] bg-[#111111] border border-white/[0.07]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Donate for {equipmentType}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Amount Selection */}
          <div>
            <label className="text-sm font-semibold text-white/80 mb-3 block">Select Amount</label>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {predefinedAmounts.map((amt) => (
                <motion.button
                  key={amt}
                  onClick={() => {
                    setSelectedAmount(amt);
                    setCustomAmount('');
                  }}
                  className={`px-4 py-3 rounded-lg border-2 transition-all font-semibold ${selectedAmount === amt
                      ? colorMap[equipmentColor]
                      : 'border-white/[0.1] bg-[#111111] text-white/80 hover:border-white/20'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <IndianRupee className="w-4 h-4" />
                    <span>{amt.toLocaleString()}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="relative">
              <label className="text-sm font-semibold text-white/80 mb-2 block">Or Enter Custom Amount</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-3 border-2 border-white/[0.1] rounded-lg focus:border-orange-500 focus:outline-none transition-colors bg-[#111111] text-white"
                  min="1"
                />
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-400">
              <strong>Secure Payment:</strong> Your payment will be processed through Razorpay's secure payment gateway.
              All payment methods are supported including UPI, Cards, Net Banking, and Wallets.
            </p>
          </div>

          {/* Donate Button */}
          <motion.button
            onClick={handlePayment}
            disabled={isProcessing || (!selectedAmount && !customAmount)}
            className={`w-full ${bgColorMap[equipmentColor]} hover:opacity-90 disabled:bg-white/[0.07] disabled:cursor-not-allowed text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md font-semibold`}
            whileHover={{ scale: isProcessing ? 1 : 1.02 }}
            whileTap={{ scale: isProcessing ? 1 : 0.98 }}
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Heart className="w-5 h-5 fill-white" />
                <span>Donate {customAmount || selectedAmount ? `₹${(customAmount ? parseFloat(customAmount) : selectedAmount)?.toLocaleString()}` : 'Now'}</span>
              </>
            )}
          </motion.button>

          <p className="text-xs text-white/50 text-center">
            🔒 100% Secure Payment • Tax Deductible under Section 80G
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
