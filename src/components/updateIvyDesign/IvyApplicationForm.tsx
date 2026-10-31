import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CheckCircle2, User, GraduationCap, Globe, Calendar, Phone, Heart, Sparkles } from "lucide-react";

export function IvyApplicationForm({ institutionName }: { institutionName?: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    age: "",
    nationality: "",
    email: "",
    phone: "",
    applicantType: "",
    collegeName: "",
    course: "",
    yearOfStudy: "",
    profession: "",
    medicalBackground: "",
    availability: "",
    passportNumber: "",
    visaStatus: "",
    emergencyContact: "",
    motivation: "",
    institution: institutionName || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://formspree.io/f/xykdvzvk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
    }

    setLoading(false);
  };

  const inputClass = "h-12 rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus:border-indigo-500/60 focus-visible:ring-indigo-500/30";
  const labelClass = "text-white/60 font-medium text-sm";

  if (success) {
    return (
      <div className="flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/20">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Application Submitted!
          </h2>
          <p className="text-white/50 leading-relaxed max-w-md mx-auto">
            Thank you for applying to the IVY Program. Our team will review your application
            and contact you within 5–7 business days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 px-2">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-5 shadow-xl shadow-indigo-500/20">
            <Heart className="w-7 h-7 text-white" fill="currentColor" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">IVY Program Application</h1>
          <p className="text-white/40 font-light max-w-xl mx-auto leading-relaxed">
            Join our international volunteer program. Please fill out all required fields carefully.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent mx-auto mt-5" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* Personal Info */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <User className="w-4 h-4 text-blue-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Personal Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName" className={labelClass}>
                  Full Name <span className="text-red-400">*</span>
                </Label>
                <Input id="fullName" name="fullName" placeholder="Enter your full name" required
                  onChange={handleChange} value={formData.fullName} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-red-400">*</span>
                </Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required
                  onChange={handleChange} value={formData.email} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender" className={labelClass}>Gender</Label>
                <Select name="gender" onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                  <SelectTrigger id="gender" className={`${inputClass} [&>span]:text-white/60`}>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/[0.1] text-white">
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="age" className={labelClass}>
                  Age <span className="text-red-400">*</span>
                </Label>
                <Input id="age" name="age" type="number" placeholder="Enter your age" required
                  onChange={handleChange} value={formData.age} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationality" className={labelClass}>
                  Nationality <span className="text-red-400">*</span>
                </Label>
                <Input id="nationality" name="nationality" placeholder="Enter your nationality" required
                  onChange={handleChange} value={formData.nationality} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-red-400">*</span>
                </Label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" required
                  onChange={handleChange} value={formData.phone} className={inputClass} />
              </div>
            </div>
          </section>

          {/* Applicant Category */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Applicant Category</h2>
            </div>

            <div className="max-w-md space-y-2">
              <Label htmlFor="applicantType" className={labelClass}>
                Category <span className="text-red-400">*</span>
              </Label>
              <Select name="applicantType" required onValueChange={(value) => setFormData({ ...formData, applicantType: value })}>
                <SelectTrigger id="applicantType" className={`${inputClass} [&>span]:text-white/60`}>
                  <SelectValue placeholder="Select your category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/[0.1] text-white">
                  <SelectItem value="Foreign Volunteer">Foreign Volunteer</SelectItem>
                  <SelectItem value="Domestic Volunteer">Domestic Volunteer</SelectItem>
                  <SelectItem value="College Student">College Student</SelectItem>
                  <SelectItem value="Medical Intern">Medical Intern</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Academic & Professional */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-green-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Academic &amp; Professional Background</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="collegeName" className={labelClass}>College / University Name</Label>
                <Input id="collegeName" name="collegeName" placeholder="Enter institution name"
                  onChange={handleChange} value={formData.collegeName} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="course" className={labelClass}>Course / Degree</Label>
                <Input id="course" name="course" placeholder="e.g., Bachelor of Medicine"
                  onChange={handleChange} value={formData.course} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="yearOfStudy" className={labelClass}>Year of Study</Label>
                <Input id="yearOfStudy" name="yearOfStudy" placeholder="e.g., 3rd Year"
                  onChange={handleChange} value={formData.yearOfStudy} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession" className={labelClass}>Profession (if applicable)</Label>
                <Input id="profession" name="profession" placeholder="Enter your profession"
                  onChange={handleChange} value={formData.profession} className={inputClass} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="medicalBackground" className={labelClass}>Medical / Healthcare Experience</Label>
              <Textarea id="medicalBackground" name="medicalBackground"
                placeholder="Please describe any relevant medical or healthcare experience..."
                rows={4} onChange={handleChange} value={formData.medicalBackground}
                className="rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus:border-indigo-500/60 resize-none" />
            </div>
          </section>

          {/* Program Details */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-orange-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Program Details</h2>
            </div>

            <div className="max-w-md space-y-2">
              <Label htmlFor="availability" className={labelClass}>
                Program Duration <span className="text-red-400">*</span>
              </Label>
              <Select name="availability" required onValueChange={(value) => setFormData({ ...formData, availability: value })}>
                <SelectTrigger id="availability" className={`${inputClass} [&>span]:text-white/60`}>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/[0.1] text-white">
                  <SelectItem value="2 Weeks">2 Weeks</SelectItem>
                  <SelectItem value="1 Month">1 Month</SelectItem>
                  <SelectItem value="3 Months">3 Months</SelectItem>
                  <SelectItem value="6 Months">6 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* Travel & Legal */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Globe className="w-4 h-4 text-cyan-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Travel &amp; Legal Information</h2>
            </div>

            <p className="text-xs text-white/30 -mt-2">For international applicants only</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="passportNumber" className={labelClass}>Passport Number</Label>
                <Input id="passportNumber" name="passportNumber" placeholder="Enter passport number"
                  onChange={handleChange} value={formData.passportNumber} className={inputClass} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="visaStatus" className={labelClass}>Visa Status</Label>
                <Input id="visaStatus" name="visaStatus" placeholder="e.g., Tourist, Student"
                  onChange={handleChange} value={formData.visaStatus} className={inputClass} />
              </div>
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <Phone className="w-4 h-4 text-red-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Emergency Contact</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact" className={labelClass}>
                Name &amp; Phone <span className="text-red-400">*</span>
              </Label>
              <Input id="emergencyContact" name="emergencyContact"
                placeholder="John Doe — +91 00000 00000" required
                onChange={handleChange} value={formData.emergencyContact} className={inputClass} />
            </div>
          </section>

          {/* Statement of Purpose */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
              <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
                <Heart className="w-4 h-4 text-pink-400" fill="currentColor" />
              </div>
              <h2 className="text-lg font-bold text-white">Statement of Purpose</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation" className={labelClass}>
                Why do you want to join the IVY Program? <span className="text-red-400">*</span>
              </Label>
              <Textarea id="motivation" name="motivation"
                placeholder="Please share your motivation, goals, and what you hope to achieve..."
                required rows={6} onChange={handleChange} value={formData.motivation}
                className="rounded-xl bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/25 focus:border-indigo-500/60 resize-none" />
              <p className="text-xs text-white/25">Minimum 100 characters recommended</p>
            </div>
          </section>

          <input type="hidden" name="institution" value={formData.institution} />

          <Button
            type="submit"
            className="w-full h-14 text-base font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
            disabled={loading}
          >
            {loading ? "Submitting Application..." : "Submit Application"}
          </Button>

        </form>
      </div>
    </div>
  );
}
