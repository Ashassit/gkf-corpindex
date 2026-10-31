import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {  Users, CheckCircle2 } from "lucide-react";

interface JobCardProps {
  position: string;
  profile: string;
  description: string;
  responsibilities: string[];
  qualifications?: string[]; // optional
  qualities: string[];
  onApply: () => void;
}

export function JobCard({
  position,
  description,
  responsibilities,
  qualifications,
  qualities,
  onApply,
}: JobCardProps) {
  return (
    <Card className="hover:shadow-2xl transition-all duration-300 bg-[#111111] border border-white/10 hover:border-white/20 h-full flex flex-col">
      <CardHeader className="bg-gradient-to-r from-gray-900 to-orange-900 text-white rounded-t-lg p-8">
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-3xl">{position}</CardTitle>
          <Button onClick={onApply} className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
            Apply Now
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8 p-8 flex-1">
        {/* <div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="size-5 text-orange-600" />
            <h4 className="font-semibold text-lg text-white">Hospital Profile</h4>
          </div>
          <p className="text-white/60 leading-relaxed">{profile}</p>
        </div> */}

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Users className="size-5 text-white/50" />
            <h4 className="font-semibold text-lg text-white">Job Description</h4>
          </div>
          <p className="text-white/60 leading-relaxed whitespace-pre-line">{description}</p>
        </div>

        {qualifications && qualifications.length > 0 && (
  <div>
    <h4 className="font-semibold text-lg mb-4 text-white">
      Qualifications Required
    </h4>
    <ul className="space-y-3">
      {qualifications.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <CheckCircle2 className="size-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <span className="text-white/60 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}

        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Key Responsibilities</h4>
          <ul className="space-y-3">
            {responsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4 text-white">Desired Qualities</h4>
          <ul className="space-y-3">
            {qualities.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-white/50 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}