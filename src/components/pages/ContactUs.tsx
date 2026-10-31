import { ContactInfo } from "../contact/ContactInfo";
import { SkinDonationForm } from "../contact/SkinDonationForm";
import { CareerForm } from "../contact/CareerForm";
// import { JobsSection } from "../contact/JobsSection";
import { Toaster } from "../ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { FileText, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

// Extract map URL to a constant
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.513032744505!2d78.1057558!3d9.9174499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf7e6317643b%3A0xa837db1fc71ebad5!2sGrace%20Kennett%20Foundation!5e0!3m2!1sen!2sin!4v1730623100000!5m2!1sen!2sin";

export function ContactUs() {
  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
      <Helmet>
        <title>Contact Grace Kennett Foundation | Hospital in Madurai | +91 4522601767</title>
        <meta name="description" content="Reach GKF Hospital at 8, Kennett Road, Madurai 625016. Emergency: 24/7. OPD: 8 AM – 8 PM. Book appointments, get directions, or call us." />
        <link rel="canonical" href="https://gkfmadurai.in/contact" />
        <meta property="og:title" content="Contact GKF Hospital | Madurai" />
        <meta property="og:description" content="8, Kennett Road, Madurai 625016. Emergency: 24/7. OPD: 8 AM–8 PM. Call +91 4522601767." />
        <meta property="og:url" content="https://gkfmadurai.in/contact" />
      </Helmet>
      <Toaster />
      {/* Simple Header */}
      <header className="bg-orange-500 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="site-heading text-white mb-4">Contact Us</h1>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" />
              <p className="text-white text-lg">
                Grace Kennett Foundation Hospital - Madurai, Tamil Nadu
              </p>
            </div>
          </motion.div>
        </div>
      </header>
      {/* Main Content */}
      <main className="mx-auto px-4 max-w-7xl">
        {/* Contact Information Section */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Card */}
            <div>
              <ContactInfo />
            </div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[500px] bg-[#111111] border border-white/[0.07] border-2 border-orange-500"
            >
              <iframe
                src={GOOGLE_MAPS_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Grace Kennett Foundation Hospital Location"
                onError={(e) => {
                  console.error("Map failed to load:", e);
                }}
              ></iframe>
            </motion.div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t-2 border-white/[0.07] my-12"></div>

        {/* Jobs Section */}
        {/* <JobsSection /> */}

        {/* Divider */}
        <div className="border-t-2 border-white/[0.07] my-12"></div>

        {/* Forms Section */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="site-heading text-white mb-3">
              Forms & Applications
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose the appropriate form below to submit your information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Tabs defaultValue="skin-donation" className="max-w-5xl mx-auto">
              <TabsList
                className="grid w-full grid-cols-2 mb-8 h-auto p-2 bg-[#111111] rounded-xl"
                aria-label="Contact Forms"
              >
                <TabsTrigger
                  value="skin-donation"
                  className="py-3 rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Skin Donation Pledge</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger
                  value="career"
                  className="py-3 rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Training & Career</span>
                  </div>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="skin-donation" className="mt-0">
                <SkinDonationForm />
              </TabsContent>

              <TabsContent value="career" className="mt-0">
                <CareerForm />
              </TabsContent>
            </Tabs>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
