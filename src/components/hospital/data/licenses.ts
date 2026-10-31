import { BadgeCheck, FileCheck, Award, type LucideIcon } from "lucide-react";

export interface License {
  name: string;
  icon: LucideIcon;
  description: string;
  gradient: string;
  details: string[];
}

export const licenses: License[] = [
  {
    name: "CEA Certification",
    icon: FileCheck,
    description:"",
    gradient: "from-green-500 to-green-600",
    details: [
      "Certified by the Central Electricity Authority (CEA)",]
  },
  {
    name: "NABH Certification",
    icon: BadgeCheck,
    description:
      "National Accreditation Board for Hospitals & Healthcare Providers (NABH) certification demonstrates our commitment to quality patient care and safety standards. This prestigious accreditation ensures that our hospital meets stringent quality benchmarks in patient care, infection control, nursing care, documentation, and overall hospital management. NABH certification is recognized nationally and internationally as a mark of excellence in healthcare delivery.",
    gradient: "from-blue-500 to-blue-600",
    details: [
      "Ensures patient safety and quality care",
      "Standardized protocols and procedures",
      "Regular quality audits and assessments",
      "Continuous improvement in healthcare services",
    ],
  },
  {
    name: "Skin Bank Certification",
    icon: FileCheck,
    description:
      "Our Skin Bank is certified and operates under strict regulatory guidelines for the collection, processing, storage, and distribution of skin tissue for transplantation. This certification validates our adherence to international standards for tissue banking, ensuring safe and ethical practices in skin harvesting, preservation, and transplantation. We are among the few hospitals in South India with a certified Skin Bank, making us a crucial resource for burn and reconstructive surgery patients.",
    gradient: "from-orange-500 to-orange-600",
    details: [
      "Licensed tissue banking facility",
      "Stringent donor screening protocols",
      "Advanced preservation techniques",
      "Compliance with international tissue banking standards",
    ],
  },
  {
    name: "ISO 9001:2015 Certification",
    icon: Award,
    description:
      "ISO 9001:2015 certification confirms that our Quality Management System (QMS) meets international standards. This certification demonstrates our systematic approach to managing processes, ensuring consistent delivery of quality healthcare services. It encompasses all aspects of our operations including patient care, administrative processes, support services, and continuous improvement initiatives. The ISO 9001:2015 framework helps us maintain high standards while adapting to changing healthcare needs.",
    gradient: "from-purple-500 to-purple-600",
    details: [
      "International quality management standards",
      "Process-oriented approach to healthcare delivery",
      "Customer satisfaction focus",
      "Continuous monitoring and improvement",
    ],
  }
];
