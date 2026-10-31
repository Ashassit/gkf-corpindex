import type { Institution } from "../ivy/type/program";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Users,
  Award,
  Briefcase,
  Home,
  CheckCircle2,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface InstitutionDetailProps {
  institution: Institution | undefined;
  onBack: () => void;
}

export function InstitutionDetail({ institution, onBack }: InstitutionDetailProps) {
  if (!institution) return null;

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#080808]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 -ml-4 hover:bg-transparent hover:translate-x-[-4px] transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="font-medium">Back to Programs</span>
        </Button>

        {/* Hero Section */}
        <div className="mb-12 animate-fadeIn">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
              {institution.name}
            </h1>
            <p className="text-xl text-white/50 italic font-light leading-relaxed">
              "{institution.tagline}"
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 px-4 py-2 text-sm rounded-full">
              {institution.type}
            </Badge>
            {institution.accommodation && (
              <Badge
                variant="outline"
                className="border-white/20 text-white/60 px-4 py-2 text-sm rounded-full flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Accommodation Available
              </Badge>
            )}
          </div>
        </div>

        {/* About Section */}
        <section className="mb-12 animate-fadeIn" style={{ animationDelay: "100ms" }}>
          <div className="bg-[#111111] rounded-3xl p-8 md:p-10 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              About This Program
            </h2>
            <p className="text-lg text-white/60 leading-relaxed font-light">
              {institution.description}
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 animate-fadeIn" style={{ animationDelay: "200ms" }}>
          {/* Capacity Card */}
          <div className="bg-[#111111] rounded-3xl p-8 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Capacity</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/60 font-medium">Staff Members</span>
                <span className="text-2xl font-bold text-white">{institution.staff}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-white/60 font-medium">Beneficiaries</span>
                <span className="text-2xl font-bold text-white">{institution.beneficiaries}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-white/60 font-medium">Max Volunteers</span>
                <span className="text-2xl font-bold text-blue-600">{institution.maxVolunteers}</span>
              </div>
            </div>
          </div>

          {/* Recognition Card */}
          <div className="bg-[#111111] rounded-3xl p-8 border border-orange-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Recognition</h3>
            </div>
            <p className="text-white/60 leading-relaxed font-light text-lg">
              {institution.recognition}
            </p>
          </div>
        </div>

        {/* Location Card */}
        <section className="mb-12 animate-fadeIn" style={{ animationDelay: "300ms" }}>
          <div className="bg-[#111111] rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Location</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">{institution.location}</p>
              <p className="text-white/50">{institution.address}</p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-12 animate-fadeIn" style={{ animationDelay: "400ms" }}>
          <div className="bg-[#111111] rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Activities & Programs</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {institution.activities.map((activity, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-500/10 text-white/80 rounded-full text-sm font-medium border border-purple-500/20 hover:border-purple-500/40 transition-all"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="mb-12 animate-fadeIn" style={{ animationDelay: "500ms" }}>
          <div className="bg-[#111111] rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-white">Volunteer Opportunities</h3>
              </div>
              <p className="text-white/50 font-light">
                Ways you can contribute and make a lasting difference
              </p>
            </div>
            <div className="space-y-4">
              {institution.volunteerActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-white/5 to-transparent hover:from-green-500/10 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/80 leading-relaxed flex-1">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IVY Application CTA */}
        <section className="animate-fadeIn" style={{ animationDelay: "600ms" }}>
          <div className="relative bg-gradient-to-br from-indigo-950/80 via-[#0d0d18] to-purple-950/60 border border-indigo-500/20 rounded-3xl p-10 md:p-12 overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/[0.08] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/[0.06] rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gray-900" fill="currentColor" />
                </div>
                <h3 className="text-3xl font-bold text-white">Join the IVY Program</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg font-light leading-relaxed max-w-2xl">
                Open for Foreign Travelers, Domestic Volunteers, College Students, and Medical Interns.
              </p>

              <p className="text-white/90 mb-8 leading-relaxed max-w-2xl font-light">
                Become part of the Intensive & Volunteer Youth (IVY) Program and contribute
                meaningfully through social service, hospital exposure, and community engagement.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-sm leading-relaxed">
                    International & Domestic Volunteers Welcome
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-sm leading-relaxed">
                    Hospital & Healthcare Exposure Available
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-white/90 text-sm leading-relaxed">
                    Structured Volunteer & Internship Opportunities
                  </span>
                </div>
              </div>

              <Button
                className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
                onClick={() => navigate(`/ivy/apply/${institution.name}`)}
              >
                Apply for IVY at {institution.name}
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
