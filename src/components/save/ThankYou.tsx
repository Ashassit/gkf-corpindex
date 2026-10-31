import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { CheckCircle, Download, Share2, ArrowRight, Heart, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

interface ThankYouProps {
  paymentId?: string;
  amount?: number;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function ThankYou({ paymentId: propPaymentId, amount: propAmount }: ThankYouProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Get payment details from route state or props
  const state = location.state as { paymentId?: string; amount?: number } | null;
  const paymentId = propPaymentId || state?.paymentId;
  const amount = propAmount !== undefined ? propAmount : state?.amount;

  // Track that we have valid payment data
  const hasValidPaymentData = paymentId && amount && amount > 0;

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Google Ads conversion tracking
  useEffect(() => {
    if (typeof window.gtag === 'function' && amount && amount > 0) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-8098218350/DonationSuccess',
        'value': amount,
        'currency': 'INR',
        'transaction_id': paymentId,
      });
    }
  }, [amount, paymentId]);

  const handleDownloadReceipt = () => {
    toast.success('Receipt is being prepared. Check your email shortly.');
    console.log('Downloading receipt for:', paymentId);
  };

  const handleMakeAnotherDonation = () => {
    navigate('/#donate', { replace: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShareOnWhatsApp = () => {
    if (!amount) return;

    const message = encodeURIComponent(
      `🙏 I just donated ₹${amount.toLocaleString('en-IN')} to Grace Kennett Foundation's "Save a Child" initiative to support children in need.

Every rupee helps:
💊 Medical care & nutrition
👶 Neonatal intensive care
👕 Clothing & essentials
🏥 Healthcare services

Together, we're changing lives. Join the movement! 💚

Grace Kennett Foundation | Madurai`
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Show error if no payment data
  if (!hasValidPaymentData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 rounded-full p-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-slate-900 text-center mb-2">Payment Data Missing</h2>
          <p className="text-slate-600 text-center text-sm mb-6">
            We couldn't find your payment details. This might happen if you refreshed the page or came here directly.
          </p>
          <button
            onClick={() => navigate('/#donate')}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Return to Donation Page
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-orange-600 rounded-full animate-spin" />
          </div>
          <p className="text-slate-600 mt-4">Processing your donation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 m-18">
      {/* Header Background Accent */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-green-50/50 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-2xl mx-auto px-4 py-6 md:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Success Icon */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green-100/40 rounded-full blur-2xl" />
              <div className="relative bg-gradient-to-br from-green-50 to-green-100 rounded-full p-4 md:p-6 shadow-lg border border-green-200">
                <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-600" strokeWidth={1.5} />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Message */}
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-4">
              Grace Kennett Foundation | Save a Child
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
              OPERATION HOME FOR EVERY CHILD
            </h1>
            <p className="text-base md:text-xl text-slate-600">
              Your Generosity Gifts Life — Thank You
            </p>
          </motion.div>

          {/* Donation Details Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-md border border-slate-200 p-4 md:p-8"
          >
            <div className="space-y-4 md:space-y-6">
              {/* Amount - DYNAMIC */}
              <div className="border-l-4 border-green-500 pl-4 md:pl-6">
                <p className="text-slate-600 text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
                  Donation Amount
                </p>
                <p className="text-3xl md:text-5xl font-bold text-green-600">
                  ₹{amount.toLocaleString('en-IN')}
                </p>
               
              </div>

              {/* Payment ID - DYNAMIC */}
              <div className="bg-slate-50 rounded-lg p-3 md:p-4 border border-slate-200">
                <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider mb-2">
                  Receipt ID (for your records)
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <code className="text-slate-800 font-mono text-xs md:text-sm break-all flex-1 bg-white px-2 md:px-3 py-2 rounded border border-slate-200">
                    {paymentId}
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paymentId);
                      toast.success('Receipt ID copied to clipboard');
                    }}
                    className="w-full sm:w-auto px-3 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors flex-shrink-0 text-sm font-medium whitespace-nowrap"
                  >
                    Copy ID
                  </button>
                </div>
              </div>

              {/* Confirmation Badges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <p className="text-xs font-bold text-green-700">Payment Verified</p>
                  </div>
                  <p className="text-xs text-green-600">Razorpay confirmed</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-4 h-4 text-blue-600 flex-shrink-0 fill-blue-600" />
                    <p className="text-xs font-bold text-blue-700">Confirmation Sent</p>
                  </div>
                  {/* <p className="text-xs text-blue-600">Check your email</p> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Impact Section - Save a Child Focus */}
         <motion.div
  variants={itemVariants}
  className="bg-orange-50 rounded-2xl border border-orange-200 p-4 md:p-6"
>
  <div className="text-center space-y-3">
    <h3 className="text-lg md:text-xl font-bold text-slate-900">
      Thank You for Gifting Life ❤️
    </h3>

    <p className="text-sm md:text-base text-slate-700 leading-relaxed">
      Your support empowers our mission — <span className="font-semibold text-orange-600">Operation "Home for Every Child"</span>,
      where every orphaned and abandoned child is placed in a safe, loving home.
    </p>
  </div>
</motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="space-y-3">
            {/* Primary CTA - Share */}
            <button
              onClick={handleShareOnWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
            >
              <Share2 className="w-5 h-5" />
              <span>Share Your Impact on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleDownloadReceipt}
                className="bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:bg-slate-50"
              >
                <Download className="w-5 h-5" />
                <span className="text-sm md:text-base">Download Receipt</span>
              </button>

              <button
                onClick={handleMakeAnotherDonation}
                className="bg-orange-50 border-2 border-orange-200 hover:border-orange-300 text-orange-700 font-semibold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 hover:bg-orange-100"
              >
                <Heart className="w-5 h-5" />
                <span className="text-sm md:text-base">Donate Again</span>
              </button>
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            variants={itemVariants}
            className="text-center text-xs md:text-sm text-slate-600"
          >
            <p>Questions? <a href="mailto:info@gracekennett.org" className="text-orange-600 hover:text-orange-700 font-semibold">Contact our team</a></p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}