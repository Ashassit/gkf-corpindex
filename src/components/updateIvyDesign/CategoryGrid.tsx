import type { Category } from "../ivy/type/program";
import { ArrowRight, Search, X } from "lucide-react";
import { Input } from "../ui/input";

interface CategoryGridProps {
  categories: Category[];
  onCategoryClick: (categoryId: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

const categoryAccent: Record<string, { glow: string; badgeClass: string }> = {
  care: { glow: "rgba(168,85,247,0.1)", badgeClass: "text-purple-300" },
  teaching: { glow: "rgba(59,130,246,0.1)", badgeClass: "text-blue-300" },
  medicine: { glow: "rgba(239,68,68,0.1)", badgeClass: "text-red-300" },
  conservation: { glow: "rgba(16,185,129,0.1)", badgeClass: "text-emerald-300" },
  catering: { glow: "rgba(249,115,22,0.1)", badgeClass: "text-orange-300" },
  food: { glow: "rgba(251,191,36,0.1)", badgeClass: "text-amber-300" },
  wildlife: { glow: "rgba(132,204,22,0.1)", badgeClass: "text-lime-300" },
  trekking: { glow: "rgba(16,185,129,0.1)", badgeClass: "text-emerald-300" },
  marathon: { glow: "rgba(6,182,212,0.1)", badgeClass: "text-cyan-300" },
  architecture: { glow: "rgba(234,179,8,0.1)", badgeClass: "text-yellow-300" },
  martialarts: { glow: "rgba(244,63,94,0.1)", badgeClass: "text-rose-300" },
  classicalarts: { glow: "rgba(236,72,153,0.1)", badgeClass: "text-pink-300" },
};

export function CategoryGrid({
  categories,
  onCategoryClick,
  searchQuery = "",
  onSearchChange,
}: CategoryGridProps) {
  return (
    <div className="relative">
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 right-0 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <div className="relative mb-16 pt-4">
        <span className="text-indigo-400 text-xs uppercase tracking-widest font-medium">
          IVY 2026 — International Volunteer &amp; Internship Program
        </span>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tighter text-white mt-2">
              Make a{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Difference
              </span>
            </h1>
            <p className="text-lg text-white/45 leading-relaxed font-light mt-6 max-w-xl">
              Choose a category to explore volunteer opportunities that create lasting impact
              in communities across India.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 flex-shrink-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">13</div>
              <div className="text-white/30 text-xs uppercase tracking-widest mt-1">NGOs</div>
            </div>
            <div className="w-px bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6</div>
              <div className="text-white/30 text-xs uppercase tracking-widest mt-1">Active</div>
            </div>
            <div className="w-px bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-white/30 text-xs uppercase tracking-widest mt-1">Cities</div>
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mt-10" />

        {/* Search Bar */}
        {onSearchChange && (
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <Input
                type="text"
                placeholder="Search across all programs by name, location, or activity..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-12 pr-12 h-14 rounded-2xl border-white/[0.1] bg-white/[0.04] text-white placeholder:text-white/25 text-base focus:border-indigo-500/50"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm text-white/40">
                Showing global results — or click a category to filter
              </p>
            )}
          </div>
        )}
      </div>

      {/* Section label */}
      <div className="flex items-center justify-between mb-7">
        <p className="text-white/30 text-xs uppercase tracking-widest font-medium">Browse by Category</p>
        <span className="text-white/15 text-xs">{categories.length} categories</span>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category, index) => {
          const accent = categoryAccent[category.id] ?? { glow: "rgba(148,163,184,0.08)", badgeClass: "text-white/50" };
          return (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className="group relative bg-white/[0.03] hover:bg-white/[0.055] border border-white/[0.08] hover:border-white/[0.16] rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 text-left overflow-hidden"
              style={{
                animationDelay: `${index * 55}ms`,
                animation: "fadeInUp 0.5s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Per-category hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${accent.glow}, transparent 65%)` }}
              />

              <div className="relative z-10">
                {/* Icon + Count */}
                <div className="flex items-start justify-between mb-5">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300 leading-none">
                    {category.icon}
                  </div>
                  <span
                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-white/[0.05] ${
                      category.count > 0 ? accent.badgeClass : "text-white/20"
                    }`}
                  >
                    {category.count > 0 ? `${category.count} NGO${category.count > 1 ? "s" : ""}` : "Soon"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>

                <div
                  className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
                    category.count > 0 ? "text-white/40 group-hover:text-white/65" : "text-white/15"
                  }`}
                >
                  <span>Explore programs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/[0.02] group-hover:bg-white/[0.04] transition-colors duration-500 blur-xl" />
            </button>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </div>
  );
}
