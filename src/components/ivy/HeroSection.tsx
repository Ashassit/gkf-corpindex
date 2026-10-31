import { memo } from 'react';

interface HeroSectionProps {
  totalInstitutions: number;
  totalCategories: number;
}

export const HeroSection = memo(function HeroSection({ 
}: HeroSectionProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 mb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative">
        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-white text-3xl md:text-4xl mb-3">
           Internship and Volunteering Youth Program — Spread Kindness
          </h1>
      
        </div>

        {/* Statistics Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-2xl text-white mb-1">{totalInstitutions}+</p>
            <p className="text-blue-100 text-sm">Institutions</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-2xl text-white mb-1">{totalCategories}</p>
            <p className="text-blue-100 text-sm">Categories</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-2xl text-white mb-1">50+</p>
            <p className="text-blue-100 text-sm">Locations</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-2xl text-white mb-1">Active</p>
            <p className="text-blue-100 text-sm">Programs</p>
          </div>
        </div> */}
      </div>
    </div>
  );
});
