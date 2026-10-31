import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Bot, Send, X, Loader2, Sparkles } from 'lucide-react';
import butterfly from '../../../assets/logo2.png';
import {
  trackAppointmentConversion,
  trackAdoptionConversion,
  trackApplicationConversion,
  trackWhatsAppBooking,
} from '../../utils/conversionTracking';
import { trackDonation, trackDonationIntent } from '../../utils/analytics';
import msSir from "../../../assets/ms-sir.png";
import drDevaKeerthana from "../../../assets/newImages/dr-deva-keerthana.jpg.jpeg";
import PaS from "../../../assets/newImages/PaS.jpg";
import DrGayathri from "../../../assets/newImages/Dr.P.Gayathri.jpg";
import urology from "../../../assets/newImages/urology.jpg";
import arjun from "../../../assets/newImages/arjun.jpg";
import jekan from "../../../assets/newImages/jekan.jpg";
import kk from "../../../assets/kk.png";
import Lokesh from "../../../assets/newImages/lokesh.jpg";
import Phy from "../../../assets/newImages/Phy.jpg";
import renuka from "../../../assets/newImages/renuka.jpg";
import suresh from "../../../assets/newImages/suresh.jpg";
import guru from "../../../assets/newImages/guru.jpg";
import Adharsh from "../../../assets/newImages/Adharsh.jpg";
import Muthukumar from "../../../assets/newImages/Muthukumar.jpg";
import rk from "../../../assets/rk.png";
import rm from "../../../assets/rm.png";
import ka from "../../../assets/newImages/kannapan.jpg";
import rp from "../../../assets/newImages/rpriya.jpg";
import mh from "../../../assets/newImages/mh.jpg";

interface Message {
  role: 'user' | 'bot';
  content: string;
  buttons?: { label: string; value: string }[];
}

export const consultants = [
  {
    sno: 1,
    name: "Dr. (Capt.) Augustus Samuel Dodd M.S., M.B.A.",
    speciality: "Medical Superintendent / General Surgeon",
    opdTime: "Monday to Friday\n10:30 AM – 12:00 PM\n7:00 PM – 7:30 PM\nSaturday\n9:00 AM – 10:00 AM",
    photo: msSir
  },
  {
    sno: 2,
    name: "Dr. Deva Keerthana D.Y MBBS, M.S. (General Surgery), M.Ch. (Plastic Surgery)",
    speciality: "Plastic Surgery",
    opdTime: "On Call",
    photo: drDevaKeerthana
  },
  {
    sno: 4,
    name: "Dr. Karthick",
    speciality: "Plastic and Reconstructive Surgery",
    opdTime: "Monday to Friday\n5:00 PM – 8:00 PM",
    photo: ""
  },
  {
    sno: 5,
    name: "Dr. P. Gayathri M.B.B.S., M.D. (General Medicine)",
    speciality: "General Medicine",
    opdTime: "Monday to Friday\n2:00 PM – 6:00 PM",
    photo: DrGayathri
  },
  {
    sno: 6,
    name: "Dr. M. S. Rajarajeswaran M.D., D.Ch.",
    speciality: "Paediatrics",
    opdTime: "Monday to Saturday\n7:30 PM – 9:00 PM",
    photo: PaS
  },
  {
    sno: 7,
    name: "Dr. B. Hemanth Kumar M.B.B.S., M.S. (Pediatric Surgery)",
    speciality: "Surgical Paediatrics",
    opdTime: "On Call",
    photo: ""
  },
  {
    sno: 8,
    name: "Dr. S. Mahaboob Hussain B.D.S.",
    speciality: "Dentistry",
    opdTime: "Monday to Saturday\n10:00 AM – 12:00 PM\n5:00 PM – 7:00 PM\nSunday\n10:00 AM – 12:00 PM",
    photo: mh
  },
  {
    sno: 9,
    name: "DR. (SURG LT CDR) D . KIRUPAKARA KRISHNAN",
    speciality: "Psychiatry",
    opdTime: "Monday to Saturday\n5:00 PM – 7:00 PM",
    photo: kk
  },
  {
    sno: 10,
    name: "Dr. Kannappan Alagappan M.B.B.S., D.L.O.",
    speciality: "ENT (Otorhinolaryngology)",
    opdTime: "Monday to Friday\n1:00 PM – 3:00 PM",
    photo: ka
  },
  {
    sno: 11,
    name: "Dr. R. Rajapriya M.B.B.S., D.M.R.D.",
    speciality: "Sonology / Interventional Radiology",
    opdTime: "Monday to Saturday\n4:00 PM – 6:00 PM",
    photo: rp
  },
  {
    sno: 12,
    name: "Dr. John",
    speciality: "Sonology / Interventional Radiology",
    opdTime: "Monday to Saturday\n4:00 PM – 6:00 PM",
    photo: ""
  },
  {
    sno: 13,
    name: "Dr. G. Ram Mohan M.D., D.A.",
    speciality: "Anesthesiology",
    opdTime: "On Call",
    photo: rm
  },
  {
    sno: 14,
    name: "Dr. Muthukumar",
    speciality: "Anesthesiology",
    opdTime: "On Call",
    photo: Muthukumar
  },
  {
    sno: 15,
    name: "Dr. Thangajothi",
    speciality: "Anesthesiology",
    opdTime: "On Call",
    photo: ""
  },
  {
    sno: 16,
    name: "Dr. S. Rajakumari M.B.B.S., D.G.O.",
    speciality: "Obstetrics & Gynaecology",
    opdTime: "Monday to Saturday\n10:00 AM – 12:00 PM",
    photo: rk
  },
  {
    sno: 17,
    name: "Dr. P. Lokesh M.B.B.S., M.S. (Ortho), D.N.B. (Ortho), M.N.A.M.S.",
    speciality: "Orthopaedics",
    opdTime: "Monday, Wednesday, Friday\n4:00 PM – 5:00 PM",
    photo: Lokesh
  },
  {
    sno: 18,
    name: "Dr. T. Deenadayalan M.D., D.M. (Medical Oncology)",
    speciality: "Medical Oncology",
    opdTime: "On Call",
    photo: ""
  },
  {
    sno: 19,
    name: "Dr. A. N. Gurumoorthy M.Ch. (Surgical Oncology)",
    speciality: "Surgical Oncology",
    opdTime: "On Call",
    photo: guru
  },
  {
    sno: 20,
    name: "Dr. C. Suresh Khanna M.D. (Gen. Med.), D.M. (Neurology)",
    speciality: "Neurology",
    opdTime: "On Call",
    photo: suresh
  },
  {
    sno: 21,
    name: "Dr. R. Jeyakumar M.Ch. (Neurosurgery)",
    speciality: "Neurosurgery",
    opdTime: "On Call",
    photo: ""
  },
  {
    sno: 22,
    name: "Dr. C. P. M. Chandrasekar M.B.B.S., M.S. (Urology)",
    speciality: "Urology",
    opdTime: "On Call",
    photo: urology
  },
  {
    sno: 23,
    name: "Dr. D. Alwin Gurnaraj M.S., M.Ch. (Surgical Gastroenterology)",
    speciality: "Surgical Gastroenterology",
    opdTime: "On Call",
    photo: ""
  },
  {
    sno: 24,
    name: "Dr. D. Arjun M.D., D.M. (Cardiology)",
    speciality: "Cardiology",
    opdTime: "On Call",
    photo: arjun
  },
  {
    sno: 25,
    name: "Dr. A. Jegan M.D., D.M. (Nephrology)",
    speciality: "Nephrology",
    opdTime: "On Call",
    photo: jekan
  },
  {
    sno: 26,
    name: "Dr. Adharsh M.S. (Vascular Surgery)",
    speciality: "Vascular Surgery",
    opdTime: "On Call",
    photo: Adharsh
  },
  {
    sno: 27,
    name: "Dr. Parvatha Sundari M.B.B.S., D.O.",
    speciality: "Ophthalmology",
    opdTime: "On Call",
    photo: ""
  },
  {
    sno: 28,
    name: "Dr. Harini",
    speciality: "Chief Medical Officer",
    opdTime: "7.30 AM – 3.30 PM",
    photo: ""
  },
  {
    sno: 29,
    name: "Hari Hara Subramanian K M.P.T.",
    speciality: "Physiotherapy",
    opdTime: "Monday to Saturday\n9:00 AM – 1:00 PM\n4:00 PM – 8:00 PM",
    photo: Phy
  },
  {
    sno: 30,
    name: "Renuka Devi S M.Sc. (Nutrition & Dietetics)",
    speciality: "Dietetics",
    opdTime: "Monday to Saturday\n9:00 AM – 1:00 PM\n4:00 PM – 8:00 PM",
    photo: renuka
  },
  {
    sno: 31,
    name: "Dr. Vijayalakshmi",
    speciality: "Pulmonology",
    opdTime: "Monday to Friday\n1:00 PM – 2:00 PM",
    photo: ""
  },
  {
    sno: 32,
    name: "Ms. Apurva Meenakshi B.ASLP",
    speciality: "Audiology & Speech Language Pathology",
    opdTime: "Saturday\n9:00 AM – 10:00 AM",
    photo: ""
  },
];

function renderBotText(text: string) {
  return text.split('\n').map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i}>
        {i > 0 && <br />}
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j}>{part.slice(2, -2)}</strong>
            : part
        )}
      </span>
    );
  });
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: 'Hello! How can I assist you today?',
      buttons: [
        { label: '📅 Appointments', value: 'show_appointments' },
        { label: '📝 Enquiries', value: 'show_enquiries' },
        { label: '❤️ Donations', value: 'show_donations' },
        { label: '👨‍⚕️ Consultants', value: 'show_consultants' },
      ],
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sessionIdRef = useRef<string>(
    (() => {
      const existing = localStorage.getItem('chatSessionId');
      if (existing) return existing;
      const id = crypto.randomUUID();
      localStorage.setItem('chatSessionId', id);
      return id;
    })()
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Refocus input after loading completes
    if (!loading && isOpen) {
      inputRef.current?.focus();
    }
  }, [loading, isOpen]);

  const sendMessageToBot = async (userMessage: string) => {
    // -------------------------------------------------------
    // FRONT-END FAQ HANDLER (No backend call needed)
    // -------------------------------------------------------
    const msg = userMessage.toLowerCase();

    // 1. Visiting hours
    if (msg.includes("visiting hour") || msg.includes("visit time")) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content: "Our hospital visiting hours are **24/7**.",
        }
      ]);
      return;
    }

    // 2. Location / Directions
    if (msg.includes("location") || msg.includes("where are you") || msg.includes("hospital address") || msg.includes("direction") || msg.includes("how to reach") || msg.includes("how to get")) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content:
            "Here is our hospital location:\n\nGrace Kennett Foundation\nhttps://www.google.com/maps/place/Grace+Kennett+Foundation/",
          buttons: [{ label: "Open Maps", value: "open maps" }]
        }
      ]);
      return;
    }

    // 3. Departments
    if (msg.includes("department") || msg.includes("services available")) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content: "We have **all major medical departments** available.",
        }
      ]);
      return;
    }

    // 4. Pharmacy
    if (msg.includes("pharmacy")) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content: "Yes, we have a **full-time pharmacy** inside the hospital.",
        }
      ]);
      return;
    }

    // 5. Lab tests
    if (msg.includes("lab test") || msg.includes("tests available") || msg.includes("laboratory")) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content: "Yes, we offer **all major lab tests** at GKF Hospital.",
        }
      ]);
      return;
    }

    // 6. Contact numbers
    if (msg.includes("contact") || msg.includes("phone") || msg.includes("number")) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content:
            "Hospital Contact:\n\n• Medical Emergency: **+91 4522601767**\n• Adoption Related: **9943450401**",
        }
      ]);
      return;
    }

    // 7. Insurance
    if (msg.includes("insurance") || msg.includes("tpa") || msg.includes("cashless")) {
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content:
            "Yes, we accept medical insurance.\n\nWould you like to see the list of supported insurance partners?",
          buttons: [{ label: "View Insurance Partners", value: "insurance list" }]
        }
      ]);
      return;
    }

    // 8. Insurance list
    if (msg.includes("insurance list")) {
      const insuranceNames = [
        "MD India Government Employees & Pensioners",
        "Star Health Insurance",
        "Family Health Plan (FHPL)",
        "ICICI Lombard",
        "Good Health Insurance",
        "Paramount Insurance",
        "Aditya Birla",
        "Go Digit",
        "Plunes",
        "NAVI",
        "Galaxy",
        "Link-K (TPA)",
        "Ericson Insurance"
      ];

      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content:
            "Here are our supported insurance companies:\n\n" +
            insuranceNames.map(i => `• ${i}`).join("\n"),
        }
      ]);
      return;
    }

    // 9. Open maps
    if (msg.includes("open maps")) {
      window.open("https://www.google.com/maps/place/Grace+Kennett+Foundation/", "_blank");
      setMessages(prev => [
        ...prev,
        {
          role: "bot",
          content: "Opening Google Maps in a new tab...",
        }
      ]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://chatbot2025gkf.onrender.com/api/chatbot/message`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: userMessage,
            sessionId: sessionIdRef.current,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to get response');
      }

      // Parse response and detect if we need buttons
      const botMessage: Message = {
        role: 'bot',
        content: data.botResponse,
      };

      // Add buttons based on bot response content
      const responseText = data.botResponse.toLowerCase();

      // Internship or volunteering choice
      if (responseText.includes('internship or volunteering')) {
        botMessage.buttons = [
          { label: '💼 Internship', value: 'internship' },
          { label: '🤝 Volunteering', value: 'volunteering' },
        ];
      }

      // Gender selection
      if (responseText.includes('gender')) {
        botMessage.buttons = [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ];
      }

      // Confirm or cancel
      if (responseText.includes('confirm') && responseText.includes('cancel')) {
        botMessage.buttons = [
          { label: '✅ Confirm', value: 'confirm' },
          { label: '❌ Cancel', value: 'cancel' },
        ];
      }

      setMessages(prev => [...prev, botMessage]);
    } catch (error: any) {
      console.error('Chatbot error:', error);
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    await sendMessageToBot(userMessage);
  };

  const handleButtonClick = async (value: string, label: string) => {
    if (loading) return;

    // Add user message showing what button they clicked
    setMessages(prev => [...prev, { role: 'user', content: label }]);

    // Show Appointments submenu
    if (value === 'show_appointments') {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: 'What type of appointment would you like to book?',
          buttons: [
            { label: '🏥 Patient Appointment', value: 'appointment' },
            { label: '👨‍⚕️ Medical Representative Visit', value: 'medical rep' },
          ],
        },
      ]);
      return;
    }

    // Show Enquiries submenu
    if (value === 'show_enquiries') {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: 'What enquiry would you like to make?',
          buttons: [
            { label: '👶 Child Adoption', value: 'adopt' },
            { label: '🎓 Internship/Volunteering', value: 'intern' },
          ],
        },
      ]);
      return;
    }

    // Show Donations submenu
    if (value === 'show_donations') {
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: 'Choose a donation program:',
          buttons: [
            { label: '🏠 Home for Every Child', value: 'home_donation' },
            { label: '💧 Little Drops', value: 'little_drops' },
            { label: '🏥 Support Hospital', value: 'support_hosp' },
          ],
        },
      ]);
      return;
    }

    // Show Consultants list
    if (value === 'show_consultants') {
      setMessages(prev => [
        ...prev,
        { role: 'bot', content: '👨‍⚕️ Our Consultants' },
        { role: 'bot', content: '__CONSULTANTS_UI__' },
      ]);
      return;
    }

    // WhatsApp redirect for Appointment
    if (value === 'appointment') {
      trackAppointmentConversion('patient');
      trackWhatsAppBooking('appointment');
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: '📱 Opening WhatsApp to book your appointment. You\'ll be able to select your preferred date, time, and doctor.\n\nWaiting for you on WhatsApp...',
        },
      ]);
      setTimeout(() => {
        const phoneNumber = '8428640401';
        const message = encodeURIComponent('appointment');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }, 1000);
      return;
    }

    // Website booking for Medical Rep Visit
    if (value === 'medical rep') {
      trackAppointmentConversion('medrep');
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: '📋 Taking you to our Medical Representative Visit booking page. You can select your preferred date and fill in your details there.',
        },
      ]);
      setTimeout(() => {
        setIsOpen(false);
        window.location.href = '/medrep-book';
      }, 800);
      return;
    }

    // WhatsApp redirect for Child Adoption Enquiry
    if (value === 'adopt') {
      trackAdoptionConversion();
      trackWhatsAppBooking('adoption');
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: '📱 Opening WhatsApp for Child Adoption Enquiry. Our team will guide you through the entire process at Mazhalai Illam.\n\nWaiting for you on WhatsApp...',
        },
      ]);
      setTimeout(() => {
        const phoneNumber = '9943450401';
        const message = encodeURIComponent('adoption enquiry');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }, 1000);
      return;
    }

    // WhatsApp redirect for Internship/Volunteering
    if (value === 'intern') {
      trackApplicationConversion('volunteering');
      trackWhatsAppBooking('internship');
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: '📱 Opening WhatsApp for Internship/Volunteering enquiry. Share your skills and availability.\n\nWaiting for you on WhatsApp...',
        },
      ]);
      setTimeout(() => {
        const phoneNumber = '8428640401';
        const message = encodeURIComponent('internship or volunteering');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }, 1000);
      return;
    }

    // Home for Every Child - In-chat donation block
    if (value === 'home_donation') {
      trackDonationIntent('Save a Child');
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content:
            '❤️ Make a Difference Today!\n\nYour donation provides shelter, education, healthcare, and love to abandoned children. Together we can create a home for every child.\n\nAll donations are tax-deductible under Section 80G. For bank transfer details or queries, call +91 452 2601767.',
          buttons: [
            { label: '₹1,000', value: 'donate_1000' },
            { label: '₹5,000', value: 'donate_5000' },
            { label: '₹10,000', value: 'donate_10000' },
            { label: '₹25,000', value: 'donate_25000' },
            { label: 'Donate Custom Amount', value: 'donate_custom' },
          ],
        },
      ]);
      return;
    }

    // Donation amounts - direct Razorpay with conversion tracking
    if (['donate_1000', 'donate_5000', 'donate_10000', 'donate_25000', 'donate_custom'].includes(value)) {
      const amountMap: Record<string, number> = {
        donate_1000: 1000,
        donate_5000: 5000,
        donate_10000: 10000,
        donate_25000: 25000,
        donate_custom: 0,
      };
      const amountDisplay: Record<string, string> = {
        donate_1000: '₹1,000',
        donate_5000: '₹5,000',
        donate_10000: '₹10,000',
        donate_25000: '₹25,000',
        donate_custom: 'custom amount',
      };
      const selectedAmount = amountDisplay[value];
      const numericAmount = amountMap[value];

      trackDonationIntent('Save a Child');
      if (numericAmount > 0) {
        trackDonation({
          amount: numericAmount,
          program: 'Save a Child',
          paymentMethod: 'razorpay',
          isRecurring: false,
        });
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content:
            selectedAmount === 'custom amount'
              ? '📝 Please enter your desired donation amount and we will guide you on payment options (Razorpay + bank transfer + 80G receipt).'
              : `💝 You chose ${selectedAmount}. Opening the payment link on Razorpay...`,
        },
      ]);
      if (value !== 'donate_custom') {
        setTimeout(() => {
          window.open('https://rzp.io/rzp/vTys7VlF', '_blank');
        }, 800);
      }
      return;
    }

    // Little Drops - Open Razorpay payment page with tracking
    if (value === 'little_drops') {
      trackDonationIntent('Little Drops');
      trackDonation({
        amount: 500,
        program: 'Little Drops',
        paymentMethod: 'razorpay',
        isRecurring: false,
      });
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: '💧 Opening Little Drops donation page on Razorpay. Your contribution will directly help us make a difference!\n\nThank you for your generosity!',
        },
      ]);
      setTimeout(() => {
        window.open('https://rzp.io/rzp/vTys7VlF', '_blank');
      }, 1000);
      return;
    }

    // Support Hospital - Navigate to support hospital page
    if (value === 'support_hosp') {
      trackDonationIntent('Support Hospital');
      setMessages(prev => [
        ...prev,
        {
          role: 'bot',
          content: '🏥 Opening Support Hospital campaign page. Help us raise funds for critical medical equipment!\n\nThank you for your support!',
        },
      ]);
      setTimeout(() => {
        setIsOpen(false);
        window.location.href = '/support-hospital';
      }, 800);
      return;
    }

  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        role: 'bot',
        content: 'Hello! How can I assist you today?',
        buttons: [
          { label: '📅 Appointments', value: 'show_appointments' },
          { label: '📝 Enquiries', value: 'show_enquiries' },
          { label: '❤️ Donations', value: 'show_donations' },
        { label: '👨‍⚕️ Consultants', value: 'show_consultants' },
        ],
      },
    ]);

    const newId = crypto.randomUUID();
    localStorage.setItem('chatSessionId', newId);
    sessionIdRef.current = newId;
    setInput('');
  };

  return (
    <>
      {/* Floating Chatbot Button - Bottom RIGHT */}
      <motion.div
        className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Assistance Label */}
        <AnimatePresence>
          {!isOpen && showLabel && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full shadow-xl border border-white/[0.1]"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-white/80">GKF Gift Life Assistance</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLabel(false);
                }}
                className="ml-2 text-white/30 hover:text-white/60 transition-colors"
                aria-label="Close label"
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chatbot Button */}
        {!isOpen && (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            {/* Pulse Animation Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-orange-400"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <Button
              size="lg"
              className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 relative"
              onClick={() => setIsOpen(true)}
              aria-label="Open GKF Assistant"
            >
              <Bot className="w-7 h-7" />
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-[9999]"
          >
            <Card className="w-96 h-[500px] shadow-2xl flex flex-col bg-[#111] border-white/[0.08] text-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 border-b bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-xl">
                <div className="flex items-center gap-3">
                  <div className="
  w-12 h-12 rounded-full
  bg-gradient-to-br from-black via-neutral-900 to-black
  flex items-center justify-center
  shadow-[inset_4px_4px_8px_rgba(255,255,255,0.15),inset_-4px_-4px_8px_rgba(0,0,0,0.6),0_4px_8px_rgba(0,0,0,0.5)]
">
                    <img
                      src={butterfly}
                      alt="GKF Assistant"
                      className="w-9 h-7"
                    />
                  </div>

                  <div>
                    <CardTitle className="text-white">GKF Assistant</CardTitle>
                    <p className="text-orange-100 text-xs">Gift Life Assistance</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleReset}
                    title="Reset conversation"
                    className="text-white hover:bg-white/20"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M3 21v-5h5" />
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0 min-h-0">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 bg-[#111]">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
  className={`max-w-[80%] whitespace-pre-wrap break-words ${
    message.role === 'user'
      ? 'rounded-2xl p-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white'
      : message.content === '__CONSULTANTS_UI__'
      ? ''
      : 'rounded-2xl p-3 bg-white/[0.07] border border-white/[0.08] text-white/80'
  }`}
>
                          {message.content === '__CONSULTANTS_UI__' ? (
  <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
    {consultants.map((c) => (
      <div
        key={c.sno}
        className="flex gap-3 p-3 rounded-xl bg-white/[0.05] border border-white/[0.08]"
      >
        <img
  src={
    c.photo ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      c.name
    )}&background=F97316&color=fff`
  }
          className="w-14 h-14 rounded-full object-cover flex-shrink-0"
        />

        <div className="flex flex-col text-sm">
          <span className="font-semibold text-white">
            {c.name}
          </span>

          <span className="text-orange-400 text-xs font-medium">
            {c.speciality}
          </span>

          <span className="text-white/45 text-xs whitespace-pre-line">
            {c.opdTime}
          </span>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-sm">{renderBotText(message.content)}</p>
)}
                        </div>
                      </div>

                      {/* Render buttons if present */}
                      {message.buttons && message.buttons.length > 0 && (
                        <div className="flex justify-start mt-2">
                          <div className="max-w-[80%] flex flex-wrap gap-2">
                            {message.buttons.map((button, btnIndex) => (
                              <Button
                                key={btnIndex}
                                variant="outline"
                                size="sm"
                                onClick={() => handleButtonClick(button.value, button.label)}
                                disabled={loading}
                                className="text-sm bg-white/[0.04] border-white/[0.12] text-white/70 hover:bg-orange-500/20 hover:border-orange-500/40 hover:text-orange-400 transition-all"
                              >
                                {button.label}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-white/[0.07] border border-white/[0.08] rounded-2xl p-3">
                        <Loader2 className="w-4 h-4 animate-spin text-orange-400" />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="border-t border-white/[0.08] p-4 flex-shrink-0 bg-[#0d0d0d]">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      disabled={loading}
                      className="rounded-full bg-white/[0.06] border-white/[0.1] text-white placeholder:text-white/30 focus-visible:ring-orange-500/50"
                    />
                    <Button
                      onClick={handleSend}
                      size="icon"
                      disabled={loading || !input.trim()}
                      className="rounded-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}