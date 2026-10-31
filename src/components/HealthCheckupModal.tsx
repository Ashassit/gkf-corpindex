import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  AlertCircle,
  FileText,
  Coffee,
  Pill,
  Heart
} from "lucide-react";
import { Badge } from "./ui/badge";

type HealthCheckupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function HealthCheckupModal({ isOpen, onClose }: HealthCheckupModalProps) {
  const packages = [
    {
      id: "p1",
      name: "Basic Health Plan",
      code: "P1",
      originalPrice: "₹ 4,400",
      discountedPrice: "₹ 3,080",
      discount: "30%",
      gradient: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
      tests: [
        "CBC",
        "RFT",
        "Urine Routine",
        "TSH",
        "HbA1c",
        "FBS/PPBS",
        "Fasting Lipid Profile",
        "PSA / PAP Smear",
        "ECG",
        "X-Ray",
        "Consultant's Opinion"
      ]
    },
    {
      id: "p2",
      name: "Comprehensive Diabetes Package",
      code: "P2",
      originalPrice: "₹ 4,750",
      discountedPrice: "₹ 3,325",
      discount: "30%",
      gradient: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-400",
      tests: [
        "HbA1c",
        "FBS/PPBS",
        "Urea/Creatinine",
        "Urine Routine / Acetone",
        "Urine PCR",
        "Biothesiometry",
        "ECG",
        "X-Ray",
        "Fasting Lipid Profile",
        "TSH",
        "Consultant's Opinion"
      ]
    },
    {
      id: "p3",
      name: "Master Health Check-up",
      code: "P3",
      originalPrice: "₹ 13,000",
      discountedPrice: "₹ 9,100",
      discount: "30%",
      gradient: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-200",
      borderColor: "border-orange-500",
      tests: [
        "Basic Health Plan (Plan I Plus)",
        "ECHO",
        "USG Abdomen",
        "Uric Acid",
        "LFT",
        "FT3, FT4",
        "PSA / PAP Smear",
        "Consultant's Opinion"
      ]
    }
  ];

  const guidelines = [
    { icon: Phone, text: "Please book your appointment." },
    { icon: Clock, text: "Please ensure that you have been fasting for 12 hours prior to your check-up." },
    { icon: Clock, text: "Please report on an empty stomach between 7:30 AM and 8:00 AM at our reception counter." },
    { icon: FileText, text: "Please bring your recent medical prescriptions and medical records." },
    { icon: AlertCircle, text: "Please share complete and accurate information with your doctor." },
    { icon: Pill, text: "Please take your diabetic and B.P. medications as usual." },
    { icon: AlertCircle, text: "Regarding other medication, please check with the coordinator through the receptionist." },
    { icon: Coffee, text: "Do not take any other liquid apart from water on the day of check-up." },
    { icon: Coffee, text: "You will be allowed to have food after a few important tests are completed." },
    { icon: Heart, text: "Please inform the coordinator if you are diabetic, pregnant, or have a cardiac ailment." }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-white via-orange-50/30 to-white rounded-3xl shadow-2xl max-w-7xl w-full overflow-hidden max-h-[95vh] relative border border-orange-200/50"
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-300/20 to-transparent rounded-full blur-3xl -z-10" />
            
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/90 backdrop-blur-sm hover:bg-orange-100 shadow-lg z-10 group"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5 text-gray-700 group-hover:text-orange-600 transition-colors" />
            </motion.button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[95vh] custom-scrollbar">
              <div className="p-8 md:p-12 space-y-12">
                {/* Header */}
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-orange-500" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                      GRACE KENNETT FOUNDATION HOSPITAL
                    </h2>
                    <motion.div
                      animate={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-orange-500" />
                    </motion.div>
                  </div>
                  <p className="text-gray-600 text-xl">
                    Health Check-up Packages
                  </p>
                  <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
                </motion.div>

                {/* Packages Section */}
                <div className="grid md:grid-cols-3 gap-6">
                  {packages.map((pkg, index) => {
                    return (
                      <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="relative group"
                      >
                        <div className={`border-2 ${pkg.borderColor} rounded-2xl p-6 ${pkg.bgColor} hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col relative overflow-hidden`}>
                          {/* Card Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                          
                          {/* Header with Badge */}
                          <div className="flex items-start justify-end mb-4">
                            <Badge variant="outline" className="border-orange-500 text-orange-700">
                              {pkg.code}
                            </Badge>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl text-orange-800 mb-4 min-h-[4rem] flex items-center">
                            {pkg.name}
                          </h3>

                          {/* Pricing */}
                          <div className="mb-6">
                            <p className="text-gray-600 line-through text-2xl">
                              {pkg.originalPrice}
                            </p>
                            <div className="flex items-end gap-2 mt-1">
                              <p className="text-3xl text-green-600">
                                {pkg.discountedPrice}
                              </p>
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="mb-1"
                              >
                                <Badge className="bg-orange-500 text-white border-0">
                                  {pkg.discount} Off
                                </Badge>
                              </motion.div>
                            </div>
                          </div>

                          {/* Tests List */}
                          <div className="flex-1">
                            <div className="space-y-2">
                              {pkg.tests.map((test, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.4 + idx * 0.05 }}
                                  className="flex items-start gap-2 text-sm text-gray-700"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span>{test}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Hover Effect Border */}
                          <div className="absolute inset-0 rounded-2xl border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Guidelines Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200/50"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl text-orange-600">
                      Guidelines for Health Checks
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {guidelines.map((guideline, idx) => {
                      const GuideIcon = guideline.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + idx * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
                            <GuideIcon className="w-4 h-4 text-orange-600" />
                          </div>
                          <p className="text-sm text-gray-700 flex-1 leading-relaxed pt-1">
                            {guideline.text}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden"
                >
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl">
                        Contact
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Address */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-orange-100 mb-1">Address</p>
                          <p className="text-sm">8, Kennett Road, Madurai – 625016.</p>
                        </div>
                      </motion.div>

                      {/* Phone */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-orange-100 mb-1">Phone</p>
                          <p className="text-sm">99435 50401, 95854 40401, 91591 40401</p>
                          <p className="text-sm mt-1">0452 – 2601849, 2601767</p>
                        </div>
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-orange-100 mb-1">Email</p>
                          <a
                            href="mailto:info@gkfmadurai.in"
                            className="text-sm hover:text-orange-200 transition-colors"
                          >
                            info@gkfmadurai.in
                          </a>
                        </div>
                      </motion.div>

                      {/* Website */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <Globe className="w-5 h-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-orange-100 mb-1">Website & Social</p>
                          <div className="text-sm space-y-1">
                            <a
                              href="https://www.gkfmadurai.in"
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-orange-200 transition-colors block"
                            >
                              www.gkfmadurai.in
                            </a>
                            <a
                              href="https://www.facebook.com/gkfindia"
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-orange-200 transition-colors block"
                            >
                              www.facebook.com/gkfindia
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 237, 213, 0.3);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(to bottom, #fb923c, #f97316);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(to bottom, #f97316, #ea580c);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
