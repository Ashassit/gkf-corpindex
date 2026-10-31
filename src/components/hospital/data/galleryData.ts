import ANE from "../../../assets/newImages/AandE.jpg";
import ane1 from "../../../assets/newImages/ane1.jpg";
import ane2 from "../../../assets/newImages/ane2.jpg";
import ane3 from "../../../assets/newImages/ane3.jpg";
import bed1 from "../../../assets/newImages/bedone.jpg";
import bed2 from "../../../assets/newImages/bed2.jpg";
import bed3 from "../../../assets/newImages/bed3.jpg";
import redwardbed from "../../../assets/newImages/redward1.jpg";
import red1 from "../../../assets/newImages/redone.jpg";
import red2 from "../../../assets/newImages/redward2.jpg";


export const statsGalleryData = {
  "Bedded Hospital": {
    title: "Hospital Beds",
    description: "Our modern, well-equipped hospital facilities with 30 comfortable beds",
    images: [
      {
        url: bed1,
        caption: "Modern hospital rooms with state-of-the-art medical equipment",
      },
      {
        url: bed2,
        caption: "Comfortable patient rooms designed for recovery and healing",
      },
      {
        url: bed3,
        caption: "Advanced monitoring systems for patient safety",
      },
      {
        url: redwardbed,
        caption: "Clean and spacious wards with natural lighting",
      },
    ],
  },
  "Bedded Burn Centre": {
    title: "Burn Centre Beds",
    description: "Specialized 15-bed burns treatment center with advanced care facilities",
    images: [
      {
        url: red1,
        caption: "Specialized burns treatment facility with advanced care",
      },
      {
        url:red2,
        caption: "Dedicated medical team for burns care",
      },
      {
        url: "",
        caption: "State-of-the-art wound care technology",
      },
      {
        url: "",
        caption: "Comprehensive burns rehabilitation center",
      },
    ],
  },
  "Hour Emergency": {
    title: "24/7 Emergency Services",
    description: "Round-the-clock emergency care with experienced medical professionals",
    images: [
      {
        url:ANE,
        caption: "24/7 emergency room ready for immediate care",
      },
      {
        url: ane1,
        caption: "Advanced emergency medical equipment",
      },
      {
        url: ane2,
        caption: "Rapid response ambulance services",
      },
      {
        url: ane3,
        caption: "Expert emergency medical team on standby",
      },
    ],
  },
  "Specialities": {
    title: "20+ Medical Specialities",
    description: "Comprehensive range of specialized medical services under one roof",
    images: [
      {
        url: "",
        caption: "Multi-specialty healthcare services",
      },
      {
        url: "",
        caption: "Expert specialists in various medical fields",
      },
      {
        url: "",
        caption: "Advanced diagnostic and treatment facilities",
      },
      {
        url: "",
        caption: "Comprehensive patient care across specialties",
      },
    ],
  },
};

export type StatType = keyof typeof statsGalleryData;
