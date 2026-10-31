import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, ChevronLeft, X, Mail, Users } from "lucide-react";
import boardicon from "../../assets/group_12117461.png";
import board from "../../assets/newImages/boardmembers.jpg";
import medical from "../../assets/medical-team_18558044.png";
import coddle from "../../assets/coddle_9927019.png";
import hmm from "../../assets/hrm_18565135.png";

import kk from "../../assets/kk.png";
import rk from "../../assets/rk.png";
import rm from "../../assets/rm.png";
import Adharsh from "../../assets/newImages/Adharsh.jpg";
import guru from "../../assets/newImages/guru.jpg";

import DrGayathri from "../../assets/newImages/Dr.P.Gayathri.jpg";
import urology from "../../assets/newImages/urology.jpg";
// import arjun from "../../assets/newImages/arjun.jpg";
import jekan from "../../assets/newImages/jekan.jpg";
import Deepika from "../../assets/newImages/deepika_amala.jpeg";
import Sundar from "../../assets/newImages/Sundar.jpeg"
import Sudha from "../../assets/newImages/Sudha.png";
import Selin from "../../assets/newImages/Selin.png";
import Ponraj from "../../assets/newImages/Ponraj.jpeg";


import Lokesh from "../../assets/newImages/lokesh.jpg";
import Phy from "../../assets/newImages/Phy.jpg";
import renuka from "../../assets/newImages/renuka.jpg";
import suresh from "../../assets/newImages/suresh.jpg";

import Muthukumar from "../../assets/newImages/Muthukumar.jpg";
import PaS from "../../assets/newImages/PaS.jpg";
import ka from "../../assets/newImages/kannapan.jpg";
import rp from "../../assets/newImages/rpriya.jpg";
import mh from "../../assets/newImages/mh.jpg";

import vns from "../../assets/vns.png";
import vp from "../../assets/vp.png";
import priyaMaam from "../../assets/priyaMaam.png";
import msSir from "../../assets/ms-sir.png";
import drDevaKeerthana from "../../assets/newImages/dr-deva-keerthana.jpg.jpeg";
// import pro from "../../assets/newImages/prosp.webp";
import VR from "../../assets/VR.png";
import pals from "../../assets/newImages/pppals.webp";
import cmo from "../../assets/newImages/CMO.jpeg";
import MM from "../../assets/newImages/MM.jpeg";
import CA from "../../assets/newImages/CA.jpeg";
// import piruthivi from "../../assets/piruthivi.png";
import Jothi from "../../assets/jothi.jpeg";

interface TeamMember {
  name: string;
  role: string;
  credentials?: string;
  image: string;
  description?: string;
  email?: string;
  specialties?: string[];
}

interface SubCategory {
  id: string;
  title: string;
  members: TeamMember[];
}

interface TeamCategory {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  subcategories?: SubCategory[];
  members?: TeamMember[];
}

const teamCategories: TeamCategory[] = [
  {
    id: "board",
    title: "Board",
    icon: boardicon,
    gradient: "from-blue-500 to-indigo-600",
    members: [], // No subcategories, just a placeholder image
  },
  {
    id: "medical",
    title: "Medical",
    icon: medical,
    gradient: "from-red-500 to-pink-600",
    // keep subcategories in data for maintainability, but UI will show them flattened
    subcategories: [
      {
        id: "specialists",
        title: "Surgical Specialists",
        members: [{
          name: "Dr. (Capt.) Augustus Samuel Dodd M.S., M.B.A.",
          role: "Medical Superintendent",
          image: msSir,
          specialties: ["General Surgery"],
          description: "M.B.B.S., M.B.A",
        },
        {
          name: "Dr. Deva Keerthana D.Y",
          role: "Plastic Surgeon",
          image: drDevaKeerthana,
          specialties: ["General Surgery", "Plastic Surgery"],
          description: "MBBS, M.S. (General Surgery), M.Ch. (Plastic Surgery).",
        },
        {
          name: "Dr. Harini Nithyanandhi",
          role: "Chief Medical Officer",
          image: cmo,
          specialties: [],
          description: "",
        },
        {
          name: "Dr. B. Hemanth Kumar",
          role: "Paediatric Surgeon",
          image: "",
          specialties: ["Surgical Paediatrics"],
          description:
            "M.B.B.S., M.S. (Pediatric Surgery). Available On Call.",
        },
        {
          name: "Dr. A. N. Gurumoorthy",
          role: "Surgical Oncologist",
          image: guru,
          specialties: ["Surgical Oncology"],
          description: "M.Ch. (Surgical Oncology). Available On Call.",
        },
        {
          name: "Dr. D. Alwin Gurnaraj",
          role: "Surgical Gastroenterologist",
          image: "",
          specialties: ["Surgical Gastroenterology"],
          description:
            "M.S., M.Ch. (Surgical Gastroenterology). Available On Call.",
        },
        {
          name: "Dr. Adharsh",
          role: "Vascular Surgeon",
          image: Adharsh,
          specialties: ["Vascular Surgery"],
          description: "M.S. (Vascular Surgery). Available On Call.",
        },
        ],
      },
      {
        id: "consultants",
        title: "Medical Specialists",
        members: [
          {
            name: "Dr. P. Gayathri",
            role: "Physician",
            image: DrGayathri,
            specialties: ["General Medicine"],
            description:
              "M.B.B.S., M.D. (General Medicine). Available On Call.",
          },
          {
            name : "DR. Sundar Natarajan",
            role : "Physician",
            image : Sundar,
            specialties: ["Physician"],
            description: "M.B.B.S., M.D. (Internal Medicine). Available On Call.",
          },
          {
            name: "Dr. M. S. Rajarajeswaran",
            role: "Paediatrician",
            image: PaS,
            specialties: ["Child Care", "Immunization"],
            description:
              "M.D., D.Ch. Available Monday to Saturday, 7:30 PM – 9:00 PM.",
          },
          {
            name: "Dr. S. Mahaboob Hussain",
            role: "Dentist",
            image: mh,
            specialties: ["Dental Care", "Oral Surgery"],
            description:
              "B.D.S. Available Monday to Saturday, 10:00 AM – 1:00 PM and 5:00 PM – 8:00 PM.",
          },
          {
            name: "Dr. (Surg. Lt. Cdr.) D. Kirupakara Krishnan",
            role: "Psychiatrist",
            image: kk,
            specialties: ["Mental Health", "Counseling"],
            description:
              "M.D. (Psychiatry). Available Monday to Saturday, 5:00 PM – 7:00 PM.",
          },
          {
            name: "Dr. Kannappan Alagappan",
            role: "ENT Specialist",
            image: ka,
            specialties: ["Otorhinolaryngology"],
            description:
              "M.B.B.S., D.L.O. Available Monday to Friday, 1:00 PM – 3:00 PM.",
          },
          {
            name: "Dr. R. Rajapriya",
            role: "Radiologist",
            image: rp,
            specialties: ["Sonology", "Interventional Radiology"],
            description:
              "M.B.B.S., D.M.R.D. Available Monday to Saturday, 4:00 PM – 6:00 PM.",
          },
          {
            name: "Dr. John",
            role: "Radiologist",
            image: "",
            specialties: ["Sonology", "Interventional Radiology"],
            description: "Available Monday to Saturday, 4:00 PM – 6:00 PM.",
          },
          {
            name: "Dr. G. Ram Mohan",
            role: "Anesthesiologist",
            image: rm,
            specialties: ["Anesthesiology"],
            description: "M.D., D.A. Available On Call.",
          },
          {
            name: "Dr. Muthukumar",
            role: "Anesthesiologist",
            image: Muthukumar,
            specialties: ["Anesthesiology"],
            description: "Available On Call.",
          },
          {
            name: "Dr. Thangajothi",
            role: "Anesthesiologist",
            image: "",
            specialties: ["Anesthesiology"],
            description: "Available On Call.",
          },
          {
            name: "Dr. S. Rajakumari",
            role: "Obstetrician & Gynaecologist",
            image: rk,
            specialties: ["Women's Health", "Maternity"],
            description:
              "M.B.B.S., D.G.O. Available Monday, Wednesday & Friday, 4:00 PM – 6:00 PM.",
          },
          {
            name: "Dr. P. Lokesh",
            role: "Orthopaedic Surgeon",
            image: Lokesh,
            specialties: ["Orthopaedics"],
            description:
              "M.B.B.S., M.S. (Ortho), D.N.B. (Ortho), M.N.A.M.S. Available Monday to Saturday, 5:00 PM – 6:00 PM.",
          },
          // {
          //   name: "Dr. T. Deenadayalan",
          //   role: "Medical Oncologist",
          //   image: "",
          //   specialties: ["Medical Oncology"],
          //   description: "M.D., D.M. (Medical Oncology). Available On Call.",
          // },
          {
            name: "Dr. C. Suresh Khanna",
            role: "Neurologist",
            image: suresh,
            specialties: ["Neurology"],
            description:
              "M.D. (Gen. Med.), D.M. (Neurology). Available On Call.",
          },
          {
            name: "Dr. R. Jeyakumar",
            role: "Neurosurgeon",
            image: "",
            specialties: ["Neurosurgery"],
            description: "M.Ch. (Neurosurgery). Available On Call.",
          },
          {
            name: "Dr. C. P. M. Chandrasekar",
            role: "Urologist",
            image: urology,
            specialties: ["Urology"],
            description: "M.B.B.S., M.S. (Urology). Available On Call.",
          },
          {
            name: "Dr. Ponraj R",
            role: "Cardiologist",
            image : Ponraj,
            specialties: ["Cardiology"],
            description: "M.D., D.M. (Cardiology). Available On Call.",
          },
          // {
          //   name: "Dr. D. Arjun",
          //   role: "Cardiologist",
          //   image: arjun,
          //   specialties: ["Cardiology"],
          //   description: "M.D., D.M. (Cardiology). Available On Call.",
          // },
          {
            name: "Dr. A. Jegan",
            role: "Nephrologist",
            image: jekan,
            specialties: ["Nephrology"],
            description: "M.D., D.M. (Nephrology). Available On Call.",
          },
          {
            name: "Dr. Parvatha Sundari",
            role: "Ophthalmologist",
            image: "",
            specialties: ["Ophthalmology"],
            description: "M.B.B.S., D.O. Available On Call.",
          },
          {
            name: "Hari Hara Subramanian K",
            role: "Physiotherapist",
            image: Phy,
            specialties: ["Physiotherapy"],
            description: "M.P.T. Available On Call.",
          },
          {
            name: "Renukadevi S",
            role: "Dietitian",
            image: renuka,
            specialties: ["Nutrition", "Dietetics"],
            description: "M.Sc. (Nutrition & Dietetics). Available On Call.",
          },
          {
            name: "Dr A Deepika Amala",
            role: "Dermatologist",
            image : Deepika,
            specialties: ["Dermatologist"],
            description: "MD., DV., FAM. Available On Call.",
          },
          {
            name : "Selin S",
            role : "Nursing Superintendent",
            image : Selin,
            specialties : ["Nursing Superintendent"],
            description: "M.Sc. Available On Call.",
          },
          {
            name : "Sudha K",
            role : "Nursing Supervisor",
            image : Sudha,
            specialties : ["Nursing Supervisor"],
            description: "MBA. Available On Call.",
          }
        ],
      },
      {
        id: "critical-care",
        title: "Others",
        members: [],
      },
    ],
  },
  {
    id: "mazhalai",
    title: "Mazhalai Illam",
    icon: coddle,
    gradient: "from-purple-500 to-pink-600",
    subcategories: [
      {
        id: "education",
        title: "Admin",
        members: [
          {
            name: "Priya Augustus Dodd",
            role: "Project Co-ordinator",
            image: priyaMaam,
            specialties: [],
            description: "",
          },
          {
            name: "V. Nirmala Sorubarani",
            role: "",
            image: vns,
            specialties: [],
            description: "Contact: 9626940401.",
          },
          {
            name: "V. Pandi",
            role: "",
            image: vp,
            specialties: [],
            description: "Contact: 9952555954.",
          },
        ],
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    icon: hmm,
    gradient: "from-green-500 to-teal-600",
    subcategories: [
      {
        id: "admin",
        title: "Admin",
        members: [{
          name: "Valentina Rani",
          role: "Principal",
          image: VR,
          specialties: [],
          description: "",
        }, {
          name: "Dr. Harini Nithyanandhi",
          role: "Chief Medical Officer",
          image: cmo,
          specialties: [],
          description: "",
        }, {
          name: "A Rubini",
          role: "Chief Admin",
          image: CA,
          specialties: [],
          description: "",
        }, {
          name: "S Preethi",
          role: "Head - PALS",
          image: pals,
          specialties: [],
          description: "",
        },
        ],
      },
      {
        id: "technical",
        title: "Department Heads",
        members: [{
          name: "Ashok",
          role: "Materials Management",
          image: MM,
          specialties: [],
          description: "",
        }, {
          name: "Jothi",
          role: "Pharmacy",
          image: Jothi,
          specialties: [],
          description: "",
        }, {
          name: "Valentina Rani",
          role: "Lab & Skin Bank",
          image: VR,
          specialties: [],
          description: "",
        }, {
          name: "Hari Hara Subramanian K M.P.T.",
          role: "Physiotherapist",
          image: Phy,
          specialties: [],
          description: "",
        }, 
        // {
        //   name: "Piruthiviraj M",
        //   role: "Information Technology",
        //   image: piruthivi,
        //   specialties: [],
        //   description: "",
        // }, 
        // {
        //   name: "Selvapriya",
        //   role: "Public Relations",
        //   image: pro,
        //   specialties: [],
        //   description: "",
        // }
      ],
      },
    ],
  },
];

export default function MyTeam() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const selectedCategoryData = teamCategories.find((c) => c.id === selectedCategory);

  // Helper: flatten all members for medical (or any category with subcategories)
  const getFlattenedMembers = (category?: TeamCategory) => {
    if (!category) return [] as TeamMember[];
    if (category.members && category.members.length > 0) return category.members;
    if (category.subcategories && category.subcategories.length > 0) {
      return category.subcategories.flatMap((s) => s.members || []);
    }
    return [] as TeamMember[];
  };

  // Placeholder image for board members
  const boardMembersImage = board;

  return (
    <div id="team" className="bg-black font-sans">
      <section
        className="section-container bg-black relative overflow-hidden py-20"
        id="team"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="site-heading text-white">
              Our Team
            </h2>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              Meet the dedicated professionals who make our organization
              exceptional
            </p>
          </motion.div>

          {!selectedCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamCategories?.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  viewport={{ once: true }}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-orange-500 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                    <CardContent className="p-8 flex flex-col items-center justify-center text-center h-64 !pt-8">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <ImageWithFallback
                          src={category.icon}
                          alt={`${category.title} Icon`}
                          className="w-10 h-10 object-contain"
                        />
                      </motion.div>

                      <h3 className="text-2xl text-white font-semibold mb-3">
                        {category.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        {category.id === "board"
                          ? "View team photo"
                          : (category.subcategories?.reduce(
                            (sum, s) => sum + s.members.length,
                            0
                          ) ?? category.members?.length ?? 0) + " members"}
                      </p>
                      <ArrowRight className="w-5 h-5 text-orange-500" />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {selectedCategory && selectedCategoryData && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-4xl text-white mb-2">
                    {selectedCategoryData.title}
                  </h3>
                  <p className="text-white/70">
                    {selectedCategoryData.id === "board"
                      ? "Our Board Members"
                      : selectedCategoryData.id === "medical"
                        ? "All medical staff in one list"
                        : "Explore all departments and team members"}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="bg-gray-900 text-white border-gray-700 hover:bg-gray-800 hover:border-orange-500"
                  onClick={() => setSelectedCategory(null)}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>

              {/* Board Image Display */}
              {selectedCategoryData.id === "board" && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="max-w-5xl mx-auto"
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                    <div className="aspect-[16/10] relative">
                      <ImageWithFallback
                        src={boardMembersImage}
                        alt="Board Members"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h4 className="text-3xl text-white mb-2">Board Members</h4>
                        <p className="text-white/80">Leadership team dedicated to excellence</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Medical: Flattened single list view */}
              {selectedCategoryData.id === "medical" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="mb-8 text-center">
                    <h4 className="text-2xl text-white">Medical Team</h4>
                    <p className="text-white/70 text-sm">
                      {getFlattenedMembers(selectedCategoryData).length} members
                    </p>
                    <div className="h-1 w-40 mx-auto bg-orange-500 rounded-full mt-4"></div>
                  </div>

                  {/* Members Grid (flattened) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFlattenedMembers(selectedCategoryData).map((member, memberIndex) => (
                      <motion.div
                        key={memberIndex}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: memberIndex * 0.03 }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        onClick={() => setSelectedMember(member)}
                        className="cursor-pointer group"
                      >
                        <div className="flex flex-col justify-between items-center text-center w-full h-44 p-3">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-800">
                            <ImageWithFallback
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>

                          <div className="w-full">
                            <h5 className="text-white mt-2 mb-0.5 text-sm font-medium line-clamp-1">
                              {member.name}
                            </h5>
                            <p className="text-orange-500 text-xs mb-2 line-clamp-1">
                              {member.role}
                            </p>

                            <div className="flex items-center justify-center text-orange-500 text-xs group-hover:text-orange-400 transition-colors">
                              View Profile
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Non-board & non-medical: keep original subdivided layout */}
              {selectedCategoryData.id !== "board" && selectedCategoryData.id !== "medical" && (
                <div className="space-y-16">
                  {selectedCategoryData.subcategories?.map((sub, subIndex) => (
                    <motion.div
                      key={sub.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: subIndex * 0.2 }}
                      className="relative"
                    >
                      {/* Subcategory Header with Gradient Border */}
                      <div className="mb-8">
                        <div className="flex flex-col items-center gap-2 mb-4">
                          <div className="text-center">
                            <h4 className="text-2xl text-white">{sub.title}</h4>
                            <p className="text-white/70 text-sm">
                              {sub.members.length} {sub.members.length === 1 ? "member" : "members"}
                            </p>
                          </div>
                        </div>

                        <div className="h-1 w-40 mx-auto bg-orange-500 rounded-full"></div>
                      </div>

                      {/* Members Grid */}
                      {sub.members.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {sub.members.map((member, memberIndex) => (
                            <motion.div
                              key={memberIndex}
                              initial={{ opacity: 0, scale: 0.98 }}
                              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                              transition={{
                                duration: 0.35,
                                delay: subIndex * 0.2 + memberIndex * 0.08,
                              }}
                              whileHover={{ scale: 1.03, y: -4 }}
                              onClick={() => setSelectedMember(member)}
                              className="cursor-pointer group"
                            >
                              <div className="flex flex-col justify-between items-center text-center w-full h-44 p-3">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-800">
                                  <ImageWithFallback
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center"
                                  />
                                </div>

                                <div className="w-full">
                                  <h5 className="text-white mt-2 mb-0.5 text-sm font-medium line-clamp-1">
                                    {member.name}
                                  </h5>
                                  <p className="text-orange-500 text-xs mb-2 line-clamp-1">
                                    {member.role}
                                  </p>

                                  <div className="flex items-center justify-center text-orange-500 text-xs group-hover:text-orange-400 transition-colors">
                                    View Profile
                                    <ArrowRight className="w-3 h-3 ml-1" />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800">
                          <Users className="w-12 h-12 text-white/30 mx-auto mb-4" />
                          <p className="text-white/50">No members in this category yet</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          <AnimatePresence>
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} viewport={{ once: true }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedMember(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-700"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 rounded-full text-white"
                    onClick={() => setSelectedMember(null)}
                  >
                    <X className="w-6 h-6" />
                  </Button>

                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 relative bg-gradient-to-b from-gray-800 to-gray-950">
                      <div className="w-full aspect-[3/4] relative">
                        <ImageWithFallback
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-gray-900/80 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none opacity-50 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="lg:col-span-3 p-8 lg:p-12">
                      <h3 className="text-3xl text-white mb-2">{selectedMember.name}</h3>
                      <p className="text-orange-500 mb-6">{selectedMember.role}</p>

                      {selectedMember.description && (
                        <p className="text-white/90 text-base leading-relaxed whitespace-pre-line mb-8">
                          {selectedMember.description}
                        </p>
                      )}

                      {selectedMember.specialties && selectedMember.specialties.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-white mb-3">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedMember.specialties.map((specialty) => (
                              <Badge key={specialty} className="bg-orange-950/50 text-orange-400 border-orange-800/50">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedMember.email && (
                        <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-950/30 to-red-950/30 p-6 rounded-2xl border border-orange-900/30">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                            <Mail className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white/60 text-sm">Contact</p>
                            <a href={`mailto:${selectedMember.email}`} className="text-orange-400 hover:text-orange-300 hover:underline">
                              {selectedMember.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}