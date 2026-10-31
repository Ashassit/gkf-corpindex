import { useState, useEffect } from "react";
import { JobCard } from "../../job-card";
import { JobStructuredData } from "../../job-structured-data";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Briefcase, ArrowDown, CheckCircle2, Building2, Mail } from "lucide-react";

const jobListings = [
  {
    id: "nursing-staff",
    position: "Nursing Staff",
    salary: "₹20,000 – ₹30,000 per month (Negotiable)",
    profile:
      "We are a 30-bedded multi-specialty hospital with a strong focus on burns care and skin banking.",
    description:
      "We are seeking competent, compassionate, and committed nursing staff to join our critical care and emergency services. The role involves providing high-quality nursing care in Ventilator support, A&E, ICU, NICU, and Burns & Trauma units. This position offers a strong learning environment and an excellent opportunity for professional growth and career advancement, particularly in specialized burns and critical care nursing.",
    responsibilities: [
      "Provide nursing care to critically ill and emergency patients",
      "Assist in ventilator management and patient monitoring",
      "Work in A&E, ICU, NICU, and Burns & Trauma units",
      "Monitor vital signs and patient condition continuously",
      "Administer medications and treatments as prescribed",
      "Maintain accurate nursing records and documentation",
      "Follow infection control, safety, and hospital protocols",
      "Work closely with doctors and healthcare teams",
    ],
    qualities: [
      "Compassionate and patient-focused attitude",
      "Willingness to learn and grow professionally",
      "Strong commitment and teamwork skills",
    ],
  },
  {
    id: "chef",
    position: "Chef",
    salary: "₹18,000 – ₹28,000 per month (Negotiable)",
    profile:
      "We are a 30-bedded multi-specialty hospital with a strong focus on burns care and skin banking.",
    description:
      "We are looking for a skilled and experienced Chef to manage our hospital kitchen operations. The role involves preparing nutritious meals for patients, staff, and visitors while maintaining high standards of hygiene and food safety. This position offers an opportunity to make a meaningful impact on patient recovery through quality nutrition.",
    responsibilities: [
      "Plan and prepare nutritious meals according to dietary requirements",
      "Manage kitchen operations and maintain cleanliness standards",
      "Ensure food safety and hygiene protocols are followed",
      "Coordinate with dietitians for specialized patient meals",
      "Manage kitchen inventory and supplies",
      "Train and supervise kitchen staff",
      "Prepare special diet meals for patients with specific needs",
      "Maintain records of meal preparation and service",
    ],
    qualities: [
      "Experienced in institutional or hospital cooking",
      "Knowledge of nutrition and special dietary requirements",
      "Excellent hygiene and organizational skills",
      "Ability to work under pressure and manage time effectively",
    ],
  },
  {
    id: "front-office-executive",
    position: "Canteen Front Office",
    salary: "₹15,000 – ₹22,000 per month (Negotiable)",
    profile:
      "We are a 30-bedded multi-specialty hospital with a strong focus on burns care and skin banking.",
    description:
      "We are seeking a courteous, organized, and detail-oriented Canteen Front Office staff to manage our hospital canteen operations. The ideal candidate will be responsible for customer service, order management, billing, and ensuring smooth canteen operations while maintaining hygiene standards.",
    responsibilities: [
      "Greet and assist patients, staff, and visitors at the canteen counter",
      "Take food and beverage orders accurately and efficiently",
      "Handle billing, cash transactions, and maintain daily sales records",
      "Coordinate with kitchen staff for order preparation and delivery",
      "Maintain cleanliness and hygiene at the serving counter and dining area",
      "Manage inventory of consumables and inform management of stock requirements",
      "Handle customer queries and feedback professionally",
      "Ensure food quality standards and presentation before serving",
    ],
    qualities: [
      "Excellent communication and customer service skills",
      "Good organizational and multitasking abilities",
      "Basic computer knowledge and familiarity with billing systems",
      "Professional, polite, and service-oriented attitude",
      "Attention to detail and ability to work in a fast-paced environment",
    ],
  },
  {
  id: "intensivist",
  position: "Intensivist",
  salary: "Attractive salary (Negotiable based on experience)",
  profile:
    "Grace Kennet Foundation Hospital is a multi-specialty hospital with a strong focus on ICU care and a dedicated Burn Center unit.",
 description: `We are looking for recently trained, dynamic Intensivists to join our critical care team.
The role involves round-the-clock management of ICU and Burn Center units.
This position requires strong multitasking ability, quick clinical decision-making, and the capability to work in high-acuity environments.`,
  responsibilities: [
    "Manage ICU patients and critical cases round the clock (24/7 rotational duty)",
    "Oversee Burn Center critical care management",
    "Perform advanced airway and life-saving procedures",
    "Coordinate with surgical and multidisciplinary teams",
    "Monitor ventilated and hemodynamically unstable patients",
    "Ensure adherence to critical care protocols and patient safety standards",
    "Respond to medical emergencies within the hospital",
    "Maintain accurate clinical documentation and reporting",
  ],
  qualifications: [
    "MD/DNB in Critical Care (Recent graduates preferred)",
    "MD/DNB in Emergency Medicine",
    "Additional competency in Anesthesiology preferred",
    "Strong procedural skills in General Medicine",
  ],
  qualities: [
    "Excellent multitasking skills in high-pressure environments",
    "Strong clinical judgment and decision-making ability",
    "Energetic and committed to critical care excellence",
    "Ability to lead and function effectively within a team",
  ],
  institution: "Grace Kennet Foundation Hospital",
  workModel: "24/7 Rotational Duty (ICU & Burn Center)",
},
];

export default function App() {
  const [, setSelectedPosition] = useState<string>("");

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Careers at GKF Hospital - Join Our Healthcare Team | Madurai";
    
    // Add or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Join GKF Hospital in Madurai. We're hiring Nursing Staff, Chef, and Front Office Executive. Apply now for full-time positions with competitive salary and growth opportunities."
    );

    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute(
      "content",
      "GKF Hospital jobs, Madurai hospital jobs, nursing jobs Madurai, hospital chef jobs, front office jobs, healthcare careers Tamil Nadu"
    );
  }, []);

  const handleApply = (positionId: string) => {
    setSelectedPosition(positionId);
    // Scroll to form
    setTimeout(() => {
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Add JobPosting Structured Data for Google for Jobs */}
      <JobStructuredData jobs={jobListings} />

      <div className="min-h-screen pt-20 bg-[#080808]">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-gray-900 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Briefcase className="size-16" />
            </div>
            <h1 className="text-5xl mb-6">Careers at GKF Hospital</h1>
            <p className="text-xl text-orange-50 max-w-2xl mx-auto">
              Join our team of dedicated healthcare professionals and make a difference in patients'
              lives
            </p>
            <div className="mt-10 flex justify-center">
              <ArrowDown className="size-8 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-[#111111] border-white/10">
              <CardContent className="pt-6">
                <CheckCircle2 className="size-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-semibold mb-2 text-white">Professional Growth</h3>
                <p className="text-white/60">
                  Continuous learning opportunities and career advancement in specialized healthcare
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[#111111] border-white/10">
              <CardContent className="pt-6">
                <Building2 className="size-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-semibold mb-2 text-white">State-of-the-Art Facility</h3>
                <p className="text-white/60">
                  Work in a modern 30-bedded multi-specialty hospital focused on burns care
                </p>
              </CardContent>
            </Card>
            <Card className="text-center bg-[#111111] border-white/10">
              <CardContent className="pt-6">
                <Mail className="size-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-xl font-semibold mb-2 text-white">Supportive Environment</h3>
                <p className="text-white/60">
                  Join a compassionate team dedicated to patient care and professional excellence
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white mb-4">Open Positions</h2>
            <p className="text-xl text-white/60">
              Explore our current job openings and find your perfect role
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobListings.map((job) => (
              <JobCard
                key={job.id}
                position={job.position}
                profile={job.profile}
                description={job.description}
                responsibilities={job.responsibilities}
                qualifications={job.qualifications}
                qualities={job.qualities}
                onApply={() => handleApply(job.id)}
              />
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-[#0d0d0d] py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white mb-4">Apply Now</h2>
              <p className="text-xl text-white/60">
                Fill out the form below to submit your application
              </p>
            </div>

            <div className="max-w-4xl mx-auto" id="application-form">
              <Card className="overflow-hidden border border-white/10 bg-[#111111]">
                <CardHeader className="bg-gradient-to-r from-orange-600 to-gray-900 text-white py-8">
                  <CardTitle className="text-3xl">Career Application Form</CardTitle>
                  <p className="text-orange-50 mt-2">Complete the application form below</p>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScK0L54kGs_CQtTnE8kcEbAgQN97qLtkRcsXz0BgBJOhDO9XA/viewform?embedded=true"
                    width="100%"
                    height="1200"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="w-full"
                    title="Job Application Form"
                  >
                    Loading…
                  </iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-[#111111] py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white">Questions About These Positions?</h3>
            <p className="text-white/60 mb-4">
              Contact our HR department for more information about career opportunities at GKF
              Hospital
            </p>
            <p className="text-orange-400 font-semibold">
              Location: Madurai, Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400">
              © 2026 GKF Hospital (Mazhalai Illam). All rights reserved. | Equal Opportunity
              Employer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}