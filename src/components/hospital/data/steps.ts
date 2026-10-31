import {
  ClipboardList,
  Stethoscope,
  FlaskConical,
  HeartPulse,
  Pill,
  CreditCard,
  Heart,
  UserPlus,
  Activity,
  BedDouble,
  DollarSign,
  Info,
  FileSignature,
  LogOut,
  type LucideIcon,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

export const opdSteps: Step[] = [
  {
    number: "01",
    title: "Registration",
    icon: ClipboardList,
    description:
      "Register at the PALS/reception desk (colour code yellow): Upon arrival, the patient needs to register at the reception desk by providing their personal information, medical history, and reason for the visit. The PALS team member will provide a unique identification number on a folder to the patient, which they will need to carry throughout their visit.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    title: "Consultation with the doctor",
    icon: Stethoscope,
    description:
      "The patient will be called for a consultation with the doctor based on their appointment time or the availability of the doctor. During the consultation, the doctor will examine the patient, discuss their medical history, and recommend necessary tests or treatments.",
    color: "from-purple-500 to-purple-600",
  },
  {
    number: "03",
    title: "Diagnostic tests",
    icon: FlaskConical,
    description:
      "Based on the doctor's recommendation, the patient may need to undergo diagnostic tests such as blood tests, X-rays, or ultrasound scans. The hospital staff will guide the patient to the respective diagnostic center or laboratory, where the tests will be conducted.",
    color: "from-green-500 to-green-600",
  },
  {
    number: "04",
    title: "Follow-up consultation",
    icon: HeartPulse,
    description:
      "After the diagnostic tests, the patient will need to follow up with the doctor for further diagnosis and treatment. The follow-up consultation can be scheduled on the same day or as per the doctor's advice.",
    color: "from-orange-500 to-orange-600",
  },
  {
    number: "05",
    title: "Prescription and medication",
    icon: Pill,
    description:
      "If the doctor prescribes medication, the patient needs to collect the prescription from the doctor and purchase the medication from the pharmacy within the hospital premises.",
    color: "from-pink-500 to-pink-600",
  },
  {
    number: "06",
    title: "Payment and discharge",
    icon: CreditCard,
    description:
      "After completing the treatment and consultation, the patient needs to pay the bills at the billing counter and collect the necessary discharge papers.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    number: "07",
    title: "Follow-up care",
    icon: Heart,
    description:
      "The patient should follow the doctor's advice, take medication as prescribed, and attend the follow-up consultations as scheduled. They should also maintain a healthy lifestyle and diet to prevent further health problems.",
    color: "from-red-500 to-red-600",
  },
];

export const admissionSteps: Step[] = [
  {
    number: "01",
    title: "Registration",
    icon: UserPlus,
    description:
      "When a patient arrives at the hospital, they will need to register by providing their personal and medical information. This information is used to create a unique ID for the patient, which is used to identify them throughout their stay at the hospital.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    number: "02",
    title: "Triage",
    icon: Activity,
    description:
      "After registration, the patient will be evaluated by a nurse or other healthcare professional to determine the severity of their condition. This is known as triage, and it helps to ensure that patients are seen in order of urgency.",
    color: "from-teal-500 to-teal-600",
  },
  {
    number: "03",
    title: "Room Allotment",
    icon: BedDouble,
    description:
      "Once the patient's condition has been evaluated, they will be assigned to a room based on their medical needs and availability of rooms. The patient will be provided with information about the facilities in their room, including the bed, bathroom, and other amenities.",
    color: "from-violet-500 to-violet-600",
  },
  {
    number: "04",
    title: "Cost Information",
    icon: DollarSign,
    description:
      "The patient will be provided with information about the cost of their stay at the hospital, including any fees associated with the room, medical procedures, and other services. This information will help the patient to understand the financial implications of their hospitalization.",
    color: "from-amber-500 to-amber-600",
  },
  {
    number: "05",
    title: "Payments",
    icon: CreditCard,
    description:
      "Before admission, you will need to make an initial payment and other advances as required, which will be deducted from your final bill when you are discharged. If you plan to use health insurance to cover your hospitalization expenses, you will need to inform the PALS team at the reception desk.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    number: "06",
    title: "Facilities Information",
    icon: Info,
    description:
      "The hospital staff will provide the patient with information about the facilities available at the hospital, including food services, visiting hours, and other amenities. The patient may also be provided with information about support services, such as social workers, chaplains, and other professionals who can help to address any emotional needs.",
    color: "from-sky-500 to-sky-600",
  },
  {
    number: "07",
    title: "Consent on Hospital Admission Regarding Payment and Procedures",
    icon: FileSignature,
    description: `When you are admitted to our hospital, you will be required to provide consent for the payment and procedures associated with your care.\n
The consent process typically involves signing forms that outline the payment arrangements, including the amount of any deposits or payments that you will be required to make.\n
You will also be informed about the procedures that will be performed during your hospital stay, and asked to provide consent for any necessary medical treatments or interventions.\n
It is important to ask any questions you may have about the payment and procedures before signing the consent form, so that you fully understand your rights and responsibilities as a patient.\n
Hospital staff should be available to answer any questions you may have and provide you with the information you need to make informed decisions about your care.\n
Overall, providing consent for payment and procedures is a crucial part of the hospital admission process, as it helps to ensure that you receive the best possible care while also protecting your rights as a patient.`,
    color: "from-rose-500 to-rose-600",
  },
  {
    number: "08",
    title: "The Discharge Process",
    icon: LogOut,
    description: `When you are ready to leave the hospital, a staff member will guide you through the discharge process, which can take a few hours to complete.\n
You will need to pay your final bill using cash or a credit/debit card.\n
The staff will give you a summary of your treatment and return any items you used during your stay, such as a thermometer or bedpan.\n
The staff will also explain any medications you need to continue taking after you leave and provide any follow-up instructions.\n
If you need an ambulance to take you home, let the staff know and they will arrange it.\n
If you are leaving the hospital as a Planned Discharge, you need to leave your room by 12:00 pm, and if there are any delays, you will be transferred to the Transit Area by 2:00 pm.\n
The staff shall guide you regarding At Request and Against Medical Advice discharges.`,
    color: "from-fuchsia-500 to-fuchsia-600",
  },
];
