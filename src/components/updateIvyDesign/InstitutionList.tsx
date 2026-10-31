import type { Institution, Category } from "../ivy/type/program";
import { ArrowLeft, MapPin, Users, Home, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface InstitutionListProps {
  institutions: Institution[];
  category: Category | undefined;
  onBack: () => void;
  onInstitutionClick: (institutionId: string) => void;
}

const categoryColors: Record<string, { border: string; shadow: string; badge: string; dot: string }> = {
  care: { border: "hover:border-purple-500/35", shadow: "hover:shadow-purple-500/10", badge: "bg-purple-500/15 text-purple-300 border-purple-500/25", dot: "bg-purple-400" },
  teaching: { border: "hover:border-blue-500/35", shadow: "hover:shadow-blue-500/10", badge: "bg-blue-500/15 text-blue-300 border-blue-500/25", dot: "bg-blue-400" },
  medicine: { border: "hover:border-red-500/35", shadow: "hover:shadow-red-500/10", badge: "bg-red-500/15 text-red-300 border-red-500/25", dot: "bg-red-400" },
  conservation: { border: "hover:border-emerald-500/35", shadow: "hover:shadow-emerald-500/10", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25", dot: "bg-emerald-400" },
  catering: { border: "hover:border-orange-500/35", shadow: "hover:shadow-orange-500/10", badge: "bg-orange-500/15 text-orange-300 border-orange-500/25", dot: "bg-orange-400" },
  food: { border: "hover:border-amber-500/35", shadow: "hover:shadow-amber-500/10", badge: "bg-amber-500/15 text-amber-300 border-amber-500/25", dot: "bg-amber-400" },
};

const fallbackColor = { border: "hover:border-white/20", shadow: "hover:shadow-white/5", badge: "bg-white/10 text-white/60 border-white/15", dot: "bg-white/40" };

export function InstitutionList({
  institutions,
  category,
  onBack,
  onInstitutionClick,
}: InstitutionListProps) {
  const colors = category ? (categoryColors[category.id] ?? fallbackColor) : fallbackColor;

  return (
    <div>
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-8 -ml-4 hover:bg-transparent hover:-translate-x-1 transition-all duration-300 text-white/60 hover:text-white"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="font-medium">
          {category ? "Back to Categories" : "Back to Search"}
        </span>
      </Button>

      {/* Header Section */}
      <div className="mb-12 pb-8 border-b border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            {category ? (
              <div className="flex items-center gap-4 mb-3">
                <div className="text-5xl">{category.icon}</div>
                <div>
                  <span className="text-indigo-400 text-xs uppercase tracking-widest font-medium block mb-1">Category</span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    {category.name}
                  </h1>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-indigo-400 text-xs uppercase tracking-widest font-medium block mb-2">Global Search</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  Search Results
                </h1>
              </div>
            )}
            <p className="text-white/40 font-light mt-3">
              <span className="text-white font-semibold">{institutions.length}</span>{" "}
              {institutions.length === 1 ? "opportunity" : "opportunities"} found
            </p>
          </div>
          <div className="h-px md:h-auto md:w-px bg-white/[0.08] flex-shrink-0 hidden md:block md:self-stretch" />
          <p className="text-white/25 text-sm max-w-xs">
            Click any program to view full details, volunteer activities, and application info.
          </p>
        </div>
      </div>

      {/* Institutions Grid */}
      {institutions.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {institutions.map((institution, index) => (
            <article
              key={institution.id}
              onClick={() => onInstitutionClick(institution.id)}
              className={`group cursor-pointer bg-white/[0.03] ${colors.border} hover:bg-white/[0.05] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colors.shadow} relative`}
              style={{
                animationDelay: `${index * 80}ms`,
                animation: "fadeInUp 0.5s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Top accent bar — slides in on hover */}
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div className="p-7">
                {/* Category + type badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${colors.badge}`}>
                    {institution.type}
                  </span>
                  {institution.accommodation && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-white/50 flex items-center gap-1.5">
                      <Home className="w-3 h-3" />
                      Accommodation
                    </span>
                  )}
                </div>

                {/* Name + tagline */}
                <h2 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-snug group-hover:text-white/90 transition-colors">
                  {institution.name}
                </h2>
                <p className="text-sm text-indigo-400/80 italic font-light mb-4">
                  "{institution.tagline}"
                </p>

                {/* Description */}
                <p className="text-white/50 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {institution.description}
                </p>

                {/* Info row */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <MapPin className="w-4 h-4 text-white/35 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-wide">Location</div>
                      <div className="text-xs font-semibold text-white line-clamp-1">{institution.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <Users className="w-4 h-4 text-white/35 flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-wide">Capacity</div>
                      <div className="text-xs font-semibold text-white">{institution.maxVolunteers} volunteers</div>
                    </div>
                  </div>
                </div>

                {/* Activities */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {institution.activities.slice(0, 3).map((activity) => (
                    <span
                      key={activity}
                      className="text-xs bg-white/[0.05] text-white/55 px-2.5 py-1 rounded-lg border border-white/[0.06]"
                    >
                      {activity}
                    </span>
                  ))}
                  {institution.activities.length > 3 && (
                    <span className="text-xs text-white/30 px-2.5 py-1">
                      +{institution.activities.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-xs text-white/30">View full details &amp; apply</span>
                  <div className="flex items-center gap-1.5 text-indigo-400 text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                    <span>Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/[0.05] border border-white/[0.08] mb-6">
            <Sparkles className="w-10 h-10 text-white/20" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Coming Soon</h3>
          <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            We're working on adding more volunteer opportunities in this category.
            Check back soon!
          </p>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
}
