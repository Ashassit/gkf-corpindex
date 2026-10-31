import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Users } from "lucide-react";
import { Button } from "../ui/button";

const jobListings = [
  {
    id: 1,
    title: "Registered Nurse",
    department: "Nursing",
    type: "Full-time",
    location: "Madurai, Tamil Nadu",
    description: "We are looking for a compassionate and skilled Registered Nurse to join our healthcare team.",
    requirements: [
      "Bachelor's degree in Nursing (B.Sc Nursing)",
      "Valid nursing license",
      "2+ years of experience preferred",
      "Excellent communication skills",
    ],
  },
  {
    id: 2,
    title: "Medical Laboratory Technician",
    department: "Laboratory",
    type: "Full-time",
    location: "Madurai, Tamil Nadu",
    description: "Seeking a detail-oriented Lab Technician to perform various laboratory tests and procedures.",
    requirements: [
      "Diploma/Degree in Medical Laboratory Technology",
      "Knowledge of laboratory equipment and procedures",
      "1+ years of experience",
      "Attention to detail and accuracy",
    ],
  },
  {
    id: 3,
    title: "Administrative Assistant",
    department: "Administration",
    type: "Full-time",
    location: "Madurai, Tamil Nadu",
    description: "We need an organized Administrative Assistant to support our hospital operations.",
    requirements: [
      "Bachelor's degree or equivalent",
      "Strong organizational skills",
      "Proficiency in MS Office",
      "Excellent interpersonal skills",
    ],
  },
  {
    id: 4,
    title: "Physiotherapist",
    department: "Rehabilitation",
    type: "Part-time",
    location: "Madurai, Tamil Nadu",
    description: "Join our team as a Physiotherapist to help patients recover and improve their mobility.",
    requirements: [
      "Bachelor's/Master's degree in Physiotherapy",
      "Valid license to practice",
      "Experience in rehabilitation",
      "Patient-centered approach",
    ],
  },
];

export function JobsSection() {
  return (
    <section className="section-container bg-[#0d0d0d] py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-xl mb-6">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h2 className="site-heading text-white mb-3">Current Job Openings</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Join our dedicated team and make a difference in healthcare. Explore our current job opportunities below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobListings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111111] p-6 rounded-xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-white mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-white/50">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 mb-4">{job.description}</p>

              <div className="mb-6">
                <p className="text-white/80 mb-2">Requirements:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center bg-[#111111] p-8 rounded-xl border border-orange-500/30"
        >
          <h3 className="text-white mb-3">Don't see a position that fits?</h3>
          <p className="text-white/60 mb-6">
            We're always looking for talented individuals to join our team. Submit your resume for future opportunities.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
            Submit General Application
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
