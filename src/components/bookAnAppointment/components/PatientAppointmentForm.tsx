import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import qrcode from "../../../assets/whatsapp_qr_code.png";

export function PatientAppointmentForm() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '8428640401';
    const message = encodeURIComponent('appointment');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#080808] flex items-start justify-center pt-32 pb-12 px-4">
      <Helmet>
        <title>Book an Appointment | Grace Kennett Foundation Hospital Madurai</title>
        <meta name="description" content="Book an appointment at Grace Kennett Foundation Hospital, Madurai via WhatsApp. Fast, easy appointment booking for all departments. Call +91 4522601767." />
        <link rel="canonical" href="https://gkfmadurai.in/patient-appointments" />
      </Helmet>
      <Card className="max-w-5xl w-full bg-[#111111] border-white/10">
        <CardHeader className="p-4 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-500" />
            <CardTitle className="text-lg text-white">Book Your Appointment</CardTitle>
          </div>
          <CardDescription className="text-sm text-white/50">
            Schedule your appointment easily through our WhatsApp chatbot
          </CardDescription>
        </CardHeader>

        <CardContent className="p-4 space-y-4">
          <Button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Open WhatsApp to Book Appointment
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {/* Instructions Section */}
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <MessageCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="text-base font-medium text-white">Use WhatsApp Chatbot to Book Your Appointment</h3>

                <div className="space-y-2 text-sm text-white/60">
                  <p>Follow these simple steps to book your patient appointment:</p>

                  <ol className="list-decimal list-inside space-y-1 ml-1">
                    <li>Click the <span className="font-medium text-white">WhatsApp button</span> above</li>
                    <li>Type <span className="font-medium text-white">"appointment"</span> in the chat</li>
                    <li>You will receive 3 options - select <span className="font-medium text-white">"Appointment"</span></li>
                    <li>From the appointment options, select <span className="font-medium text-white">"Patient Appointment"</span></li>
                    <li>Fill out the form that appears and click <span className="font-medium text-white">Submit</span></li>
                  </ol>

                  <p className="pt-1">Our team will review your request and contact you with a scheduled date and time for your visit.</p>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-medium text-white">Scan to Book</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <img
                  src={qrcode}
                  alt="WhatsApp QR Code"
                  className="w-48 h-48"
                />
              </div>
              <p className="text-sm text-white/50 text-center">
                Scan this QR code with your phone camera to open WhatsApp and book your appointment
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
