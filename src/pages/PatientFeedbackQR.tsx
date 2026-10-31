import QRCode from "react-qr-code";

const FEEDBACK_URL = "https://gkfmadurai.in/patient-feedback";

export function PatientFeedbackQR() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      {/* Print button — hidden when printing */}
      <button
        onClick={handlePrint}
        className="fixed top-6 right-6 px-5 py-2.5 bg-orange-500 text-white rounded-full text-sm font-medium shadow-lg hover:bg-orange-600 transition-colors print:hidden"
      >
        Print QR
      </button>

      {/* Printable card */}
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-sm w-full text-center print:shadow-none print:rounded-none print:p-0 print:max-w-full">
        {/* Hospital branding */}
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-1">
            GKF Hospital, Madurai
          </p>
          <h1 className="text-2xl font-bold text-gray-900 leading-snug">
            Share Your Experience
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Your feedback helps us serve you better
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white border-2 border-orange-100 rounded-xl inline-block">
            <QRCode
              value={FEEDBACK_URL}
              size={200}
              bgColor="#ffffff"
              fgColor="#111827"
              level="M"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-orange-50 rounded-xl px-5 py-4 mb-6">
          <p className="text-sm font-medium text-gray-800 mb-1">How to use</p>
          <p className="text-xs text-gray-600 leading-relaxed">
            Open your phone camera and point it at the QR code above. Tap the
            link that appears to open the feedback form.
          </p>
        </div>

        {/* URL fallback */}
        <p className="text-xs text-gray-400 break-all">{FEEDBACK_URL}</p>
      </div>
    </div>
  );
}
