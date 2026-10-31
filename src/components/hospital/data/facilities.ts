import bioMedical from "../../../assets/facility/Bio-Medical.webp";
import dialysis from "../../../assets/facility/Dialysis.webp";
import bss from "../../../assets/facility/BSS-Communitity-College.webp";
import communityHall from "../../../assets/facility/Community-Hall.webp";
import eatery from "../../../assets/facility/Eatery.webp";
import endoscopy from "../../../assets/facility/Endoscopy.webp";
import intensive from "../../../assets/facility/Intensive.webp";
import laundry from "../../../assets/facility/laundary.webp";
import microbiology from "../../../assets/facility/Microbiology.webp";
import xray from "../../../assets/facility/X-ray.webp";
import parking from "../../../assets/facility/Parking.webp";
import care from "../../../assets/facility/care_15765318.png";

export const facilities = [
  {
    name: "Intensive Respiratory Care Unit (IRCU)",
    image: intensive,
    description: "Critical respiratory care",
  },
  {
    name: "Biomedical Management",
    image: bioMedical,
    description: "Safe waste management",
  },
  {
    name: "Highly equipped Clinical, Biochemistry, Microbiology Laboratory",
    image: microbiology,
    description: "Comprehensive diagnostic testing",
  },
  {
    name: "Main Twin OT, Endoscopy OT, Minor OT",
    image: endoscopy,
    description: "Multiple operating theatres",
  },
  {
    name: "Dialysis Unit",
    image: dialysis,
    description: "Kidney dialysis services",
  },
  {
    name: "Mechanized Laundry",
    image: laundry,
    description: "Clean linen services",
  },
  { name: "X-Ray", image: xray, description: "Medical imaging" },
  { name: "Eatery", image: eatery, description: "Nutritious meals" },
  {
    name: "Parking",
    image: parking,
    description: "Vehicle parking facilities",
  },
  {
    name: "Community Hall",
    image: communityHall,
    description: "Community events space",
  },
  {
    name: "BSS Community College",
    image: bss,
    description: "Education facilities",
  },
  {
    name: "Long-Term Care",
    image: care,
    description: "-----------",
  },
];
