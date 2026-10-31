import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Clock,
  DollarSign,
  Target,
  TrendingUp,
  Phone,
  Mail,
  CheckCircle2,
  Flame,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import VR from "../../assets/VR.png";
import bsss1 from "../../assets/ccgkf1.jpg";
import bsss2 from "../../assets/ccgkf2.jpg";
import bsss3 from "../../assets/newImages/bcmimagenew1.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Separator } from "../ui/separator";

export function CommunityCollege() {
  const advantages = [
    { icon: Clock, title: "Flexible Time", color: "text-blue-500" },
    { icon: Users, title: "No Age Limit", color: "text-green-500" },
    { icon: Target, title: "Skill Based Education", color: "text-orange-500" },
    { icon: DollarSign, title: "Affordable Cost", color: "text-purple-500" },
    {
      icon: BookOpen,
      title: "Minimum Educational Qualification",
      color: "text-red-500",
    },
    { icon: TrendingUp, title: "Need Based Education", color: "text-teal-500" },
  ];

  const galleryImages = [bsss1, bsss2, bsss3];

  // const courses = [
  //   {
  //     title: "BSS Diploma in Medical Laboratory Technology",
  //     duration: "Two years",
  //     code: "AHE 001",
  //   },
  //   {
  //     title: "BSS Diploma in Operation Theatre Technology",
  //     duration: "Two years",
  //     code: "AHE 005",
  //   },
  //   {
  //     title: "BSS Diploma in Patient Care",
  //     duration: "Two years",
  //     code: "AHS 001",
  //   },
  //   {
  //     title: "BSS Diploma in Physiotherapy and Activity Therapy",
  //     duration: "One year",
  //     code: "AHS 004",
  //   },
  //   {
  //     title: "BSS Diploma in Sports Management",
  //     duration: "One year",
  //     code: "SSS 002",
  //   },
  //   {
  //     title: "BSS Diploma in Burns Management and Skin Banking",
  //     duration: "One year",
  //     code: "AHE 106",
  //   },
  // ];

  const imaCourses = [
    {
      sno: 1,
      course: "Diploma in Health Assistant (DHA)",
      duration: "2 Years",
    },
    { sno: 2, course: "Diploma in OT Technology (DOT)", duration: "2 Years" },
    {
      sno: 3,
      course: "Diploma in Medical & Laboratory Technology (DMLT)",
      duration: "2 Years",
    },
  ];

  const bssCourses = [
    {
      sno: 1,
      course: "Diploma in Burns Management and Skin Bank",
      duration: "1 Year",
    },
  ];

  const bssPurposes = [
    "Provide job-oriented courses",
    "Help students gain practical skills",
    "Promote self-employment and small business opportunities",
    "Improve education in rural and urban areas",
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#080808]">
      {/* Hero Section */}
      <section className="section-container relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          // style={{
          //   backgroundImage:
          //     "url(https://images.unsplash.com/photo-1725738704638-361eac814fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZWR1Y2F0aW9uJTIwY2FtcHVzfGVufDF8fHx8MTc2MDQxNzQ5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
          // }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="site-heading">
              GKF Community College
              <span className="block text-orange-400 mt-2">
                Education & Training
              </span>
            </h1>
            <p className="text-xl">
              The GKF Community College is run in association with the Bharat
              Sevak Samaj (BSS).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal Section */}
      <section className="section-container bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-4">
              <Badge className="bg-orange-500 text-white px-6 py-2 text-lg">
                Leadership
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <ImageWithFallback
                src={VR}
                alt="Principal"
                className="w-60 h-60 rounded-none object-cover shadow-lg"
              />
            </div>
            <h2 className="site-heading">Ms Valentina Rani</h2>
            <p className="text-xl text-white/60">Principal</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container bg-[#080808]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="site-heading bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Introduction
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              The GKF Community College is run in association with the Bharat
              Sevak Samaj (BSS).
            </p>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="site-heading">Learn, Work & Earn Concept</h3>
              <p className="text-lg leading-relaxed">
                Selected students are offered a stipend and this enables
                students to complete the course free of cost.
              </p>
            </div>
          </motion.div>

          {/* Advantages Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <h3 className="text-3xl text-center mb-12 text-white">
              Advantages of Community College
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-[#111111] border border-white/[0.07]">
                    <CardContent className="p-6 text-center">
                      <advantage.icon
                        className={`w-12 h-12 mx-auto mb-4 ${advantage.color}`}
                      />
                      <h4 className="text-lg text-white">
                        {advantage.title}
                      </h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-container bg-[#0d0d0d]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      {/* <section className="section-container bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="site-heading bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Courses Offered
            </h2>
            <p className="text-xl text-gray-600">Diploma Courses</p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-4">
            {courses.map((course, index) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl text-gray-800 mb-2">
                          {course.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-orange-600 border-orange-300">
                            {course.duration}
                          </Badge>
                          <Badge variant="outline" className="text-blue-600 border-blue-300">
                            {course.code}
                          </Badge>
                        </div>
                      </div>
                      <GraduationCap className="w-10 h-10 text-orange-500 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-container bg-[#080808] space-y-8">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-4xl mb-2 text-white">Educational Programs</h1>
          <p className="text-white/60">
            Professional Healthcare Training & Development
          </p>
        </div>
        {/* IMA Education Section */}
        <Card className="border-2 border-white/[0.07] p-4 bg-[#111111]">
          <CardHeader className="bg-[#0d0d0d]">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-white">IMA Education</CardTitle>
                <CardDescription className="text-white/60">
                  Indian Medical Association Education
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-white/80">
                Educational and training activities conducted by the Indian
                Medical Association to improve the knowledge, skills, and
                professional standards of doctors and healthcare workers.
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 mb-4 text-white">
                <BookOpen className="h-5 w-5 text-blue-500" />
                Courses Offered
              </h3>
              <div className="border border-white/[0.07] rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#0d0d0d] border-white/[0.07]">
                      <TableHead className="w-20 text-white/80">S.No</TableHead>
                      <TableHead className="text-white/80">Course</TableHead>
                      <TableHead className="w-32 text-white/80">Duration</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {imaCourses.map((course) => (
                      <TableRow key={course.sno} className="border-white/[0.07] hover:bg-white/[0.03]">
                        <TableCell className="text-white/80">{course.sno}</TableCell>
                        <TableCell className="text-white/80">{course.course}</TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="bg-white/[0.07] text-white/80">{course.duration}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 p-4 rounded-lg">
              <h4 className="flex items-center gap-2 mb-2 text-white">
                <CheckCircle2 className="h-5 w-5 text-orange-400" />
                Admission Criteria
              </h4>
              <p className="text-sm text-white/80">
                Candidate should have passed{" "}
                <span className="font-semibold text-white">10th Standard</span> for all one
                and two year courses and{" "}
                <span className="font-semibold text-white">+2</span> for three years
                course.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* BSS Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Animated border glow effect - rotating gradient */}
          <div
            className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 via-yellow-500 to-orange-600 rounded-lg blur-xl opacity-75 animate-pulse"
            style={{
              animation:
                "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, rotate 3s linear infinite",
            }}
          />
          <div
            className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-red-500 via-yellow-400 to-orange-500 rounded-lg blur-md opacity-90"
            style={{
              animation: "rotate 4s linear infinite reverse",
            }}
          />

          <Card
            className="border-4 border-orange-500 p-4 shadow-2xl relative overflow-hidden bg-[#111111]"
            style={{
              boxShadow:
                "0 0 60px rgba(249, 115, 22, 0.8), 0 0 100px rgba(249, 115, 22, 0.4), inset 0 0 20px rgba(249, 115, 22, 0.1)",
            }}
          >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-500/10 to-orange-500/10 rounded-full -ml-24 -mb-24" />

            <CardHeader
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg relative z-10"
              style={{
                boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">BSS Education</CardTitle>
                    <CardDescription className="text-white/90">
                      Bharat Sevak Samaj - People's Service Society of India
                    </CardDescription>
                  </div>
                </div>
                <Badge className="bg-[#111111] text-orange-400 border border-orange-500/30 px-4 py-2 text-sm shadow-lg animate-pulse">
                  <Flame className="h-4 w-4 mr-1 inline" />
                  Exclusive Program
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6 relative z-10">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-sm text-white/80">
                  BSS is a National Development Agency promoted by the Planning
                  Commission of India. It was established to help people improve
                  their skills and education through vocational training
                  programs.
                </p>
              </div>

              {/* Unique Burns Course Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-xl text-white relative overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 30px rgba(249, 115, 22, 0.5), 0 0 60px rgba(239, 68, 68, 0.3)",
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                <div className="relative flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <Flame className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl">Only Institution</h4>
                      <Badge className="bg-white text-orange-600 shadow-lg">
                        Exclusive
                      </Badge>
                    </div>
                    <p className="text-sm leading-relaxed opacity-95">
                      We are proud to be the{" "}
                      <span className="font-semibold">only institution</span>{" "}
                      offering specialized training in
                      <span className="font-semibold">
                        {" "}
                        Burns Management and Skin Bank
                      </span>
                      , providing unique expertise in this critical healthcare
                      field.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div>
                <h3 className="flex items-center gap-2 mb-4 text-white">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  <span>Courses Offered</span>
                </h3>
                <div
                  className="border-2 border-orange-500/30 rounded-lg overflow-hidden shadow-md"
                  style={{
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                  }}
                >
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-white/[0.07]">
                        <TableHead className="w-20 text-white/80">S.No</TableHead>
                        <TableHead className="text-white/80">Course</TableHead>
                        <TableHead className="w-32 text-white/80">Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bssCourses.map((course) => (
                        <TableRow
                          key={course.sno}
                          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-500 border-b-white/[0.07]"
                        >
                          <TableCell className="text-white/80">{course.sno}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-white">
                                {course.course}
                              </span>
                              <Badge className="bg-orange-500 text-white text-xs ml-2 shadow-md">
                                Only Here
                              </Badge>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-white/[0.07] text-white/80">{course.duration}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="bg-blue-500/10 border-2 border-blue-500/30 p-4 rounded-lg">
                <p className="text-sm mb-3 text-white/80">
                  In our institution, more than{" "}
                  <span className="font-semibold text-white">40 students</span> have
                  completed and are having good careers in their departments.
                </p>
              </div>

              <div>
                <h4 className="flex items-center gap-2 mb-4 text-white">
                  <CheckCircle2 className="h-5 w-5 text-orange-500" />
                  Purpose
                </h4>
                <Separator className="mb-4 bg-white/[0.07]" />
                <div className="space-y-3">
                  {bssPurposes.map((purpose, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-orange-500/20 rounded-full p-1 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-orange-400" />
                      </div>
                      <p className="text-sm flex-1 text-white/80">{purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Eligibility & Admission Section */}
      <section className="section-container bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-2 border-orange-500/30 bg-[#111111]">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400 flex items-center gap-3">
                    <Award className="w-8 h-8" />
                    Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white">
                        <strong>1 year & 2 Years courses:</strong> 10th std and
                        above
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white">
                        <strong>Age:</strong> 15 years and above
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white">
                        <strong>Gender:</strong> Male & Female
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Admission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-blue-500/30 bg-[#111111]">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400 flex items-center gap-3">
                    <BookOpen className="w-8 h-8" />
                    Admission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white">
                        <strong>Academic Year:</strong> From March
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-white">
                        <strong>Calendar Year:</strong> From November
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-12 bg-gradient-to-br from-orange-500 to-red-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl mb-4">
              An Opportunity is at Your Feet. Avail It!
            </h2>

            <div className="flex flex-wrap gap-3 justify-center items-center mb-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <Phone className="w-4 h-4" />
                <span>0452-2601767 / 2601849</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 99434 50401</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:gkfindia@hotmail.com"
                  className="hover:underline"
                >
                  gkfindia@hotmail.com
                </a>
              </div>
            </div>

            {/* <div className="mt-6">
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-2 rounded-full shadow-lg"
            >
              Apply Now
            </Button>
          </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
