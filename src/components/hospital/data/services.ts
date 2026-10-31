// Core Services Data
import magic from "../../../assets/pediatric_12024667.png";
import fire from "../../../assets/fire_2203927.png";
import inject from "../../../assets/inject_7265860.png";
import medical from "../../../assets/medical_12744241.png";
import face from "../../../assets/face_1667556.png";
import report from "../../../assets/medical-report_7209270.png";
import anesthesiology from "../../../assets/hospital/Anesthesiology.webp";
import cardiology from "../../../assets/hospital/Cardiology.webp";
import dental from "../../../assets/hospital/dental-unit.webp";
import diabetology from "../../../assets/hospital/diabetology-unit.webp";
import emergency from "../../../assets/hospital/emergency-unit.webp";
import ent from "../../../assets/hospital/Ent.webp";
import generalMedicine from "../../../assets/hospital/Gneral-Medicine.webp";
import gynecology from "../../../assets/hospital/gynecology-unit.webp";
import neurology from "../../../assets/hospital/Neurology.webp";
import nutrition from "../../../assets/hospital/Nutrition.webp";
import orthopaedics from "../../../assets/hospital/Orthopaedics.webp";
import paediatric from "../../../assets/hospital/paediatric-unit.webp";
import physiotherapy from "../../../assets/hospital/physiotherapy.webp";
import plasticSurgery from "../../../assets/hospital/Plastic-and-re.webp";
import psychiatry from "../../../assets/hospital/psychiatric-unit.webp";
import radiology from "../../../assets/hospital/Radiology.webp";
import surgery from "../../../assets/hospital/Surgery.webp";
import urology from "../../../assets/hospital/Urology.webp";
import skinBank from "../../../assets/dermis_2025329.png";
import oncology from "../../../assets/care_10297738.png";
import gastroenterology from "../../../assets/stomach_16463080.png";
import nephrology from "../../../assets/kidney_9643211.png";
import pulmonology from "../../../assets/pulmonology_17306618.png";
import knife from "../../../assets/knife_4713541.png";
import mind from "../../../assets/mind_13428590.png";
import PS from "../../../assets/vaccination_16951415.png";
import balance from "../../../assets/hospital/balance_10246703.png";
import dfoot from "../../../assets/imageGallery/dfoot.jpg";

export const coreServices = [
  {
    emoji: magic,
    name: "Paediatric Burn Care",
    description:
      "Dedicated unit for children with thermal, chemical, or electrical burns.",
    gradient: "from-blue-500 to-cyan-500",
    image: "",
  },
  {
    emoji: fire,
    name: "Critical Burn Care",
    description:
      "One of India's few centres with a Skin Bank & Burns Units — from emergency care to full rehabilitation.",
    gradient: "from-orange-500 to-red-500",
    image: "",
  },
  {
    emoji: inject,
    name: "Scar & Wound Clinics",
    description:
      "Beyond survival — restoring function, appearance, and confidence.",
    gradient: "from-purple-500 to-pink-500",
    image: "",
  },
  {
    emoji: medical,
    name: "Diabetic Foot Care",
    description:
      "Working with your doctor to prevent amputations and save mobility.",
    gradient: "from-green-500 to-emerald-500",
    image: dfoot,
  },
  {
    emoji: face,
    name: "Hand & Facial Trauma",
    description:
      "24/7 microsurgery & reconstruction — bringing back strength and dignity.",
    gradient: "from-indigo-500 to-blue-500",
    image: "",
  },
  {
    emoji: report,
    name: "Animal Bites Clinic",
    description:
      "Expert care for dog and other animal bites — preventing infection and ensuring safety.",
    gradient: "from-amber-500 to-orange-500",
    image: "",
  },
];

export const otherServices = [
  {
    name: "Accident & Emergency",
    icon: emergency,
    description:
      "24/7 emergency medical services with comprehensive triage system. Our well-equipped emergency unit handles all types of medical emergencies with experienced staff available round the clock.",
    gradient: "from-red-500 to-red-600",
  },
  {
    name: "Anesthesiology",
    icon: anesthesiology,
    description:
      "Expert pain management and anesthesia services. Our anesthesiologists ensure safe and comfortable surgical experiences.",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    name: "Cardiology",
    icon: cardiology,
    description:
      "Comprehensive heart and cardiovascular care. Our cardiologists provide diagnosis, treatment, and management of all cardiac conditions.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    name: "Dentistry",
    icon: dental,
    description:
      "Comprehensive dental care services including preventive care, restorative treatments, and cosmetic dentistry.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Diabetology",
    icon: diabetology,
    description:
      "Specialized diabetes management and care. Our expert team provides comprehensive treatment plans, dietary guidance, and ongoing monitoring for diabetes patients.",
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "ENT (Ear, Nose & Throat)",
    icon: ent,
    description:
      "Specialized treatment for ear, nose, and throat conditions including infections, hearing issues, and sinus problems.",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    name: "Gastroenterology",
    icon: gastroenterology,
    description:
      "Expert care for digestive system disorders. We offer diagnosis and treatment for conditions affecting the stomach, liver, intestines, and pancreas.",
    gradient: "from-amber-500 to-orange-600",
  }, {
    name: "Gastrointestinal Surgery",
    icon: balance,
    description:
      "Expert care for digestive system disorders. We offer diagnosis and treatment for conditions affecting the stomach, liver, intestines, and pancreas.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "General Medicine",
    icon: generalMedicine,
    description:
      "Comprehensive medical care for a wide range of health conditions. Our general physicians provide thorough examinations, diagnosis, and treatment plans.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "General Surgery",
    icon: surgery,
    description:
      "General and specialized surgical procedures performed by experienced surgeons using modern techniques and equipment.",
    gradient: "from-slate-500 to-slate-600",
  },
  {
    name: "Neurology",
    icon: neurology,
    description:
      "Comprehensive brain and nervous system care. Our neurologists diagnose and treat conditions affecting the brain, spine, and nerves.",
    gradient: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    name: "Neurosurgery",
    icon: mind,
    description:
      "--------------------------------------------",
    gradient: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    name: "Nephrology",
    icon: nephrology,
    description:
      "Advanced kidney care and management of renal disorders. Our nephrologists provide dialysis support and long-term kidney health monitoring.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    name: "Nutrition & Dietetics",
    icon: nutrition,
    description:
      "Professional nutritional counseling and personalized diet planning to support health goals and manage medical conditions.",
    gradient: "from-lime-500 to-lime-600",
  },
  {
    name: "Obstetrics & Gynaecology",
    icon: gynecology,
    description:
      "Complete women's health services including prenatal care, delivery, and gynecological treatments in a comfortable and caring environment.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Oncology",
    icon: oncology,
    description:
      "Comprehensive cancer diagnosis, treatment, and care. Our oncology team provides chemotherapy, surgical, and palliative support with compassion.",
    gradient: "from-rose-500 to-red-600",
  },{
    name: "Surgical Oncology",
    icon: knife,
    description:
      "--------------------------------------------",
    gradient: "from-rose-500 to-red-600",
  },

  {
    name: "Orthopaedics",
    icon: orthopaedics,
    description:
      "Advanced bone and joint treatments. We specialize in treating fractures, joint disorders, and musculoskeletal conditions with both surgical and non-surgical approaches.",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    name: "Paediatrics",
    icon: paediatric,
    description:
      "Specialized child healthcare and development services. Our pediatricians provide comprehensive care from infancy through adolescence.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    name: "Paediatric Surgery",
    icon: PS,
    description:  
      "----------------------------------------------------",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    name: "Physiotherapy",
    icon: physiotherapy,
    description:
      "Physical rehabilitation therapy for injury recovery, pain management, and mobility improvement through personalized treatment plans.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "Plastic and Reconstructive Surgery",
    icon: plasticSurgery,
    description:
      "Expert reconstructive and cosmetic surgery services. Our skilled surgeons perform complex reconstructive procedures and aesthetic enhancements.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    name: "Psychiatry",
    icon: psychiatry,
    description:
      "Comprehensive mental health and counseling services. We provide diagnosis, treatment, and ongoing support for various psychiatric conditions in a compassionate environment.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Pulmonology",
    icon: pulmonology,
    description:
      "Specialized treatment for respiratory and lung-related conditions including asthma, COPD, and sleep-related breathing disorders.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    name: "Radiology",
    icon: radiology,
    description:
      "State-of-the-art medical imaging and diagnostics. We offer X-rays, ultrasounds, and other imaging services with latest technology for accurate diagnosis.",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Skin Bank",
    icon: skinBank,
    description:
      "Specialized facility for skin graft preservation and transplantation, supporting burn and reconstructive treatments with ethical tissue banking.",
    gradient: "from-stone-500 to-neutral-600",
  },
  {
    name: "Urology",
    icon: urology,
    description:
      "Expert care for urinary system and male reproductive health conditions with both medical and surgical treatment options.",
    gradient: "from-sky-500 to-sky-600",
  },
];
