import { Building2, Globe, Copy, Check, Heart, Pin, CreditCard, IndianRupee, User, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { trackDonation, trackDonationIntent } from '../utils/analytics';

interface DonorDetails {
  name: string;
  aadhar: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_URL = 'https://chatbot2025gkf.onrender.com';

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

export function DonationSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const navigate = useNavigate();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    toast.success(`${label} copied to clipboard`);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleRazorpayPayment = async (amount: number, donor: DonorDetails) => {
    try {
      const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

      if (!razorpayKeyId || razorpayKeyId === 'rzp_test_PLACEHOLDER') {
        toast.error('Payment gateway not configured. Please contact administrator.');
        console.error('VITE_RAZORPAY_KEY_ID not configured in environment variables');
        return;
      }

      const loaded = await loadRazorpay();
      if (!loaded) {
        toast.error("Razorpay SDK failed to load. Please check your internet connection.");
        return;
      }

      const orderResponse = await fetch(`${API_URL}/api/razorpay/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      if (!orderResponse.ok) throw new Error('Failed to create order');

      const orderData = await orderResponse.json();
      if (!orderData.success) throw new Error(orderData.message || 'Order creation failed');

      const { order } = orderData;

      const options = {
        key: razorpayKeyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,
        name: "GKF – Gift Life",
        description: "Donation for a better tomorrow",
        image: "/logo2.png",
        handler: function (response: any) {
          toast.success("Payment successful! Redirecting to confirmation...");
          trackDonation({
            amount,
            program: 'Save a Child',
            paymentMethod: 'razorpay',
            isRecurring: false,
          });
          navigate('/donation-success', {
            state: {
              paymentId: response.razorpay_payment_id,
              amount,
              donorName: donor.name || null,
            }
          });
        },
        prefill: { name: donor.name || "", email: "", contact: "" },
        notes: {
          purpose: "Donation",
          organization: "Grace Kennett Foundation",
          ...(donor.name && { donor_name: donor.name }),
          ...(donor.aadhar && { aadhar_number: donor.aadhar.replace(/\s/g, '') }),
        },
        theme: { color: "#ea580c" },
        modal: { ondismiss: function () { toast.info("Payment cancelled"); } }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <section id="donate" className="section-container relative py-12 md:py-14 bg-[#0a0a0a] overflow-hidden">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Section Header — pin + orange card */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <Pin className="w-4 h-4 text-orange-600 fill-orange-600" />
              </div>
              <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-4 shadow-lg shadow-orange-500/30 rounded-lg">
                <h2 className="site-heading text-white mb-1">Make Your Donation</h2>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-white fill-white" />
                  <p className="text-white font-medium">Gift Life</p>
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Razorpay Payment Card */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <RazorpayDonationCard onPayment={handleRazorpayPayment} />
          </motion.div>

          {/* Bank Details */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CompactBankCard
                title="Indian Donations"
                icon={Building2}
                accentColor="orange"
                details={[
                  { label: "Bank", value: "State Bank of India" },
                  { label: "A/c Name", value: "Grace Kennett Foundation" },
                  { label: "A/c Number", value: "35167385741", canCopy: true },
                  { label: "IFSC Code", value: "SBIN0000869", canCopy: true },
                  { label: "Swift Code", value: "SBININBB454", canCopy: true },
                  { label: "Address", value: "7A, West Veli Street, Madurai 625001. TN" },
                ]}
                copyToClipboard={copyToClipboard}
                copiedText={copiedText}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CompactBankCard
                title="International Donations"
                icon={Globe}
                accentColor="dark"
                details={[
                  { label: "Bank", value: "State Bank of India" },
                  { label: "A/c Name", value: "Grace Kennett Foundation" },
                  { label: "A/c Number", value: "40106676719", canCopy: true },
                  { label: "IFSC Code", value: "SBIN0000691", canCopy: true },
                  { label: "Branch Code", value: "00691", canCopy: true },
                  { label: "SWIFT Code", value: "SBININBB104", canCopy: true },
                ]}
                copyToClipboard={copyToClipboard}
                copiedText={copiedText}
              />
            </motion.div>
          </div>

          {/* Footer Message */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full border border-white/10">
              <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
              <p className="text-white">Every donation changes a life forever</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Razorpay Donation Card ───────────────────────────────────────────────────
function RazorpayDonationCard({ onPayment }: { onPayment: (amount: number, donor: DonorDetails) => void }) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000];

  const formatAadhar = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 12);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
  };

  const handleDonate = async () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;

    if (!amount || amount <= 0) { toast.error('Please enter a valid amount'); return; }
    if (!donorName.trim()) { toast.error('Please enter your name'); return; }

    const rawAadhar = aadharNumber.replace(/\s/g, '');
    if (!rawAadhar) { toast.error('Please enter your Aadhar number'); return; }
    if (rawAadhar.length !== 12) { toast.error('Aadhar number must be 12 digits'); return; }

    trackDonationIntent('Save a Child');
    setIsProcessing(true);
    try {
      onPayment(amount, { name: donorName.trim(), aadhar: rawAadhar });
    } catch {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const activeAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 border border-orange-500/30">
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
        <Pin className="w-5 h-5 text-orange-700 fill-orange-700" />
      </div>

      <div className="grid md:grid-cols-2 gap-0">

        {/* ── Left: Info panel — orange background ─────────── */}
        <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-6 md:p-8 relative overflow-hidden">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">Secure Online Donation</h3>
                <p className="text-orange-100 text-sm">Verified &amp; Instant</p>
              </div>
            </div>

            <p className="text-white text-sm leading-relaxed mb-4">
              Make a secure donation through our verified Razorpay payment gateway. Your contribution is processed instantly with full payment verification.
            </p>

            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3.5 border border-white/20 mb-3">
              <p className="text-orange-100 text-xs mb-1.5">💳 Accepted Payment Methods:</p>
              <p className="text-white text-sm font-medium">Credit Card • Debit Card • UPI • Net Banking • Wallets</p>
            </div>

            <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-3.5 border border-green-400/30">
              <p className="text-white text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-green-300 flex-shrink-0" />
                <span>100% Secure &amp; Verified Payments</span>
              </p>
            </div>
          </div>
        </div>

        {/* ── Right: Form panel — dark background ──────────── */}
        <div className="bg-[#111111] p-6 md:p-8 space-y-4 border-l border-orange-500/20">

          {/* Amount selection */}
          <div>
            <label className="text-white text-sm font-medium block mb-2.5">Select Amount</label>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {predefinedAmounts.map((amt) => (
                <motion.button
                  key={amt}
                  onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                  className={`px-3 py-2.5 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedAmount === amt
                      ? 'border-orange-500 bg-orange-500/15 text-orange-400'
                      : 'border-white/10 bg-white/5 text-white hover:border-orange-500/40 hover:bg-white/8'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="flex items-center justify-center gap-0.5">
                    <IndianRupee className="w-3.5 h-3.5" />
                    {amt.toLocaleString()}
                  </span>
                </motion.button>
              ))}
            </div>

            <label className="text-white text-sm font-medium block mb-2">Or Enter Custom Amount</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <IndianRupee className="w-4 h-4 text-white/40" />
              </div>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                placeholder="Enter amount"
                className="w-full pl-9 pr-4 py-2.5 border-2 border-white/10 bg-white/5 text-white placeholder-white/30 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-sm"
                min="1"
              />
            </div>
          </div>

          {/* Donor details */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-white text-sm font-medium">Donor Details</p>
              <span className="text-xs bg-orange-500/20 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded-full">Required</span>
            </div>

            <div className="space-y-2.5">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <User className="w-4 h-4 text-white/30" />
                </div>
                <input
                  type="text"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Your name"
                  className="w-full pl-9 pr-4 py-2.5 border-2 border-white/10 bg-white/5 text-white placeholder-white/30 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-sm"
                />
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <ShieldCheck className="w-4 h-4 text-white/30" />
                </div>
                <input
                  type="text"
                  value={aadharNumber}
                  onChange={(e) => setAadharNumber(formatAadhar(e.target.value))}
                  placeholder="Aadhar number (XXXX XXXX XXXX)"
                  className="w-full pl-9 pr-4 py-2.5 border-2 border-white/10 bg-white/5 text-white placeholder-white/30 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-sm tracking-widest"
                  maxLength={14}
                />
              </div>

              <p className="text-white/80 text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3" />
                Your details are required for donation records and are never shared.
              </p>
            </div>
          </div>

          {/* Donate button */}
          <motion.button
            onClick={handleDonate}
            disabled={isProcessing || (!selectedAmount && !customAmount)}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-white/10 disabled:to-white/10 disabled:text-white/30 disabled:cursor-not-allowed text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg font-semibold text-base"
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
                <span>
                  {activeAmount && activeAmount > 0
                    ? `Donate ₹${activeAmount.toLocaleString()}`
                    : 'Donate Now'}
                </span>
              </>
            )}
          </motion.button>

          <p className="text-white/80 text-center text-sm">
            🔒 Secured by Razorpay • Payment Verified
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Compact Bank Card ────────────────────────────────────────────────────────
function CompactBankCard({
  title,
  icon: Icon,
  accentColor,
  details,
  copyToClipboard,
  copiedText,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: 'orange' | 'dark';
  details: Array<{ label: string; value: string; canCopy?: boolean }>;
  copyToClipboard: (text: string, label: string) => void;
  copiedText: string | null;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const headerClass = accentColor === 'orange'
    ? 'bg-gradient-to-r from-orange-600 to-orange-500'
    : 'bg-gradient-to-r from-[#1a1a1a] to-[#222]';

  return (
    <div className="relative bg-[#111111] rounded-xl border border-white/10 overflow-hidden shadow-xl">
      <div className="absolute -top-1.5 left-4 z-10">
        <Pin className="w-4 h-4 text-orange-500 fill-orange-500" />
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full ${headerClass} text-white px-4 py-3 flex items-center justify-between hover:opacity-95 transition-opacity border-b border-white/10`}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-3 space-y-1.5">
          {details.map((detail, index) => (
            <CompactBankDetail
              key={index}
              label={detail.label}
              value={detail.value}
              canCopy={detail.canCopy}
              onCopy={copyToClipboard}
              copiedText={copiedText}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Compact Bank Detail Row ──────────────────────────────────────────────────
function CompactBankDetail({
  label,
  value,
  canCopy = false,
  onCopy,
  copiedText,
}: {
  label: string;
  value: string;
  canCopy?: boolean;
  onCopy: (text: string, label: string) => void;
  copiedText: string | null;
}) {
  const isCopied = copiedText === label;

  return (
    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors">
      <div className="flex-1 min-w-0">
        <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-white text-sm font-medium break-words">{value}</p>
      </div>
      {canCopy && (
        <motion.button
          onClick={() => onCopy(value, label)}
          className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
            isCopied
              ? 'bg-green-500/20 border border-green-500/30 text-green-400'
              : 'bg-white/8 border border-white/10 text-white/50 hover:bg-orange-500/20 hover:border-orange-500/30 hover:text-orange-400'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </motion.button>
      )}
    </div>
  );
}
