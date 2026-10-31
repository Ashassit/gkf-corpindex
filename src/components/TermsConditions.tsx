import { Shield, FileText, MessageSquare, Calendar, Scale, Globe, Info, Lock, AlertCircle, Mail } from 'lucide-react';
import { useState } from 'react';

export function TermsConditions() {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'use-of-services', title: 'Use of Services', icon: FileText },
    { id: 'accuracy', title: 'Accuracy of Information', icon: Info },
    { id: 'whatsapp', title: 'WhatsApp Communications', icon: MessageSquare },
    { id: 'appointments', title: 'Appointment-Related Limitations', icon: Calendar },
    { id: 'intellectual', title: 'Intellectual Property', icon: Shield },
    { id: 'liability', title: 'Limitation of Liability', icon: AlertCircle },
    { id: 'third-party', title: 'Third-Party Services', icon: Globe },
    { id: 'termination', title: 'Termination of Access', icon: Lock },
    { id: 'governing', title: 'Governing Law', icon: Scale },
    { id: 'updates', title: 'Updates to Terms', icon: FileText },
    { id: 'contact', title: 'Contact Information', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="pt-26 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-3">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last Updated: December 10, 2024</p>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Please read these terms carefully before using our services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 bg-white rounded-xl shadow-sm border border-border p-6">
                <h3 className="mb-4 text-muted-foreground">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 group ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-600'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <Icon className={`w-4 h-4 flex-shrink-0 ${
                          activeSection === section.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'
                        }`} />
                        <span className="text-sm">{index + 1}. {section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-border p-8 lg:p-12">
                {/* Introduction */}
                <div className="mb-12 pb-8 border-b border-border">
                  <p className="text-gray-700 mb-4">
                    These Terms & Conditions govern the use of the website <strong>gkfmadurai.in</strong> and the WhatsApp appointment booking and support services provided by <strong>Grace Kennett Foundation</strong> ("we," "our," "us").
                  </p>
                  <p className="text-gray-700">
                    By accessing our website or messaging us on WhatsApp, you agree to these Terms.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="use-of-services" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="mt-1">1. Use of Services</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">You may use our website and WhatsApp services solely for:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Appointment booking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Support inquiries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Accessing information related to our foundation</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mb-4">You agree not to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Misuse or attempt to disrupt our services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Send inappropriate, harmful, or unlawful content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Impersonate others or submit false information</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="accuracy" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Info className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="mt-1">2. Accuracy of Information</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      We strive to maintain accurate information on our website; however, we do not guarantee completeness or error-free content. You are responsible for verifying any critical information before relying on it.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="whatsapp" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <h2 className="mt-1">3. WhatsApp Communications</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">By contacting us on WhatsApp:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">You consent to receiving messages related to appointments, support, and service updates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">You may receive automated responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">You may opt out at any time by messaging STOP</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      We reserve the right to maintain logs of WhatsApp communications for service and compliance purposes.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section id="appointments" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <h2 className="mt-1">4. Appointment-Related Limitations</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">Availability of appointments is subject to:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Medical department schedules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Staff availability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Priority cases and emergencies</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      We are not liable for delays, cancellations, or rescheduling due to operational or medical needs.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="intellectual" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h2 className="mt-1">5. Intellectual Property</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      All content on <strong>gkfmadurai.in</strong>, including logos, images, text, and design, is the property of Grace Kennett Foundation. You may not reproduce or distribute content without prior written permission.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="liability" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="mt-1">6. Limitation of Liability</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">Grace Kennett Foundation is not liable for:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Losses resulting from website downtime or technical errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Miscommunications caused by third-party platforms (including WhatsApp)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Inaccurate information provided by users</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      Our services are provided on an "as-is" basis.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="third-party" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h2 className="mt-1">7. Third-Party Services</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      We may use third-party providers for website hosting, WhatsApp API integration, or analytics. These providers operate under their own policies.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="termination" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-red-600" />
                    </div>
                    <h2 className="mt-1">8. Termination of Access</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      We may restrict or terminate access to our services if misuse is detected.
                    </p>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="governing" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Scale className="w-5 h-5 text-slate-600" />
                    </div>
                    <h2 className="mt-1">9. Governing Law</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      These Terms are governed by the laws applicable in India.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="updates" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="mt-1">10. Updates to Terms</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      We may modify these Terms periodically. Continued use of our services indicates acceptance of updated Terms.
                    </p>
                  </div>
                </section>

                {/* Section 11 */}
                <section id="contact" className="scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="mt-1">11. Contact Information</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-3">
                      For questions or concerns regarding these Terms, contact us at:
                    </p>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-600" />
                        <strong className="text-emerald-900">info@gracekennett.org</strong>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
