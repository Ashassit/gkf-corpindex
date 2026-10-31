import { Shield, Lock, Database, Cookie, Eye, Share2, Clock, AlertTriangle, UserCheck, ExternalLink, Bell, Mail } from 'lucide-react';
import { useState } from 'react';

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'information-collect', title: 'Information We Collect', icon: Database },
    { id: 'how-we-use', title: 'How We Use Your Information', icon: Eye },
    { id: 'legal-basis', title: 'Legal Basis for Processing', icon: Shield },
    { id: 'whatsapp-data', title: 'WhatsApp Data Processing', icon: Share2 },
    { id: 'data-sharing', title: 'Data Sharing', icon: Share2 },
    { id: 'data-retention', title: 'Data Retention', icon: Clock },
    { id: 'cookies', title: 'Cookies', icon: Cookie },
    { id: 'security', title: 'Security Measures', icon: Lock },
    { id: 'your-rights', title: 'Your Rights', icon: UserCheck },
    { id: 'third-party', title: 'Third-Party Links', icon: ExternalLink },
    { id: 'policy-updates', title: 'Updates to This Policy', icon: Bell },
    { id: 'contact-info', title: 'Contact Information', icon: Mail },
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
    <div className="pt-26 min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground">Last Updated: December 10, 2024</p>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                            ? 'bg-emerald-50 text-emerald-600'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <Icon className={`w-4 h-4 flex-shrink-0 ${
                          activeSection === section.id ? 'text-emerald-600' : 'text-gray-400 group-hover:text-gray-600'
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
                  <p className="text-gray-700">
                    This Privacy Policy explains how <strong>Grace Kennett Foundation</strong> ("we," "our," "us") collects, uses, and protects personal information when users interact with our website <strong>gkfmadurai.in</strong> and our WhatsApp-based appointment booking and support services.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="information-collect" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="mt-1">1. Information We Collect</h2>
                  </div>
                  <div className="ml-13 space-y-6">
                    <div>
                      <h3 className="mb-3">a. Information You Provide</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Name</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Phone number</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Appointment details or inquiries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Messages sent through WhatsApp or web forms</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3">b. Information Collected Automatically</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Device information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">IP address</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Browser details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">Website usage data via cookies or analytics tools</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3">c. WhatsApp Interaction Data</h3>
                      <p className="text-gray-700">
                        When you communicate with us on WhatsApp, Meta may process data as described in its own privacy policies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section id="how-we-use" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="mt-1">2. How We Use Your Information</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">We use personal information to:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Provide appointment booking and customer support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Respond to inquiries and service-related messages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Improve website experience and service quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Maintain internal records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Ensure compliance with medical and administrative regulations</span>
                      </li>
                    </ul>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-gray-700">
                        <strong>We do not sell or rent your information to third parties.</strong>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section id="legal-basis" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <h2 className="mt-1">3. Legal Basis for Processing</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">We process your data based on:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Your consent when you contact us via WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Legitimate interest to provide healthcare-related support and appointments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Legal compliance for healthcare documentation and record keeping</span>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* Section 4 */}
                <section id="whatsapp-data" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-5 h-5 text-green-600" />
                    </div>
                    <h2 className="mt-1">4. WhatsApp Data Processing</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">Messages sent via WhatsApp may be:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Processed through WhatsApp&apos;s API</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Used for automated responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Logged to facilitate service follow-up</span>
                      </li>
                    </ul>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="flex items-start gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>By initiating a WhatsApp conversation, you acknowledge that WhatsApp processes data under its own terms.</span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section id="data-sharing" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <h2 className="mt-1">5. Data Sharing</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">We may share information with:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Authorized medical and administrative staff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Technology providers supporting our website and messaging systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Regulatory bodies as required by law</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      We do not share personal data for marketing purposes without explicit consent.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section id="data-retention" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h2 className="mt-1">6. Data Retention</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">We retain information only as long as necessary for:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Appointment management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Support delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Legal and medical compliance requirements</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      Message logs may be archived as part of our communication system.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section id="cookies" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cookie className="w-5 h-5 text-pink-600" />
                    </div>
                    <h2 className="mt-1">7. Cookies</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">Our website may use cookies to:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Improve performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Track usage analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Enhance the browsing experience</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      You may disable cookies in your browser settings.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section id="security" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Lock className="w-5 h-5 text-red-600" />
                    </div>
                    <h2 className="mt-1">8. Security Measures</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      We implement technical and administrative safeguards to protect your information from unauthorized access, misuse, or disclosure.
                    </p>
                  </div>
                </section>

                {/* Section 9 */}
                <section id="your-rights" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h2 className="mt-1">9. Your Rights</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-4">Depending on your jurisdiction, you may request:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Access to your data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Correction of inaccurate information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Deletion of personal data (where permitted)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">Withdrawal of consent</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      Requests may be sent to the contact email listed below.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section id="third-party" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ExternalLink className="w-5 h-5 text-slate-600" />
                    </div>
                    <h2 className="mt-1">10. Third-Party Links</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      Our website may contain links to external websites. We are not responsible for their privacy practices.
                    </p>
                  </div>
                </section>

                {/* Section 11 */}
                <section id="policy-updates" className="mb-12 scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bell className="w-5 h-5 text-violet-600" />
                    </div>
                    <h2 className="mt-1">11. Updates to This Policy</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700">
                      We may update this Privacy Policy periodically. The revised version will be posted on this page.
                    </p>
                  </div>
                </section>

                {/* Section 12 */}
                <section id="contact-info" className="scroll-mt-24">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="mt-1">12. Contact Information</h2>
                  </div>
                  <div className="ml-13">
                    <p className="text-gray-700 mb-3">
                      For privacy-related inquiries, contact us at:
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
