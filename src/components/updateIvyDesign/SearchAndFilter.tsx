import { Search, X, SlidersHorizontal, MapPin, Home } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useState } from "react";

interface SearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedFilters: {
    types: string[];
    accommodation: boolean | null;
    locations: string[];
  };
  onFilterChange: (filters: {
    types: string[];
    accommodation: boolean | null;
    locations: string[];
  }) => void;
  availableTypes: string[];
  availableLocations: string[];
  resultCount: number;
}

export function SearchAndFilter({
  searchQuery,
  onSearchChange,
  selectedFilters,
  onFilterChange,
  availableTypes,
  availableLocations,
  resultCount,
}: SearchAndFilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  const handleTypeToggle = (type: string) => {
    const newTypes = selectedFilters.types.includes(type)
      ? selectedFilters.types.filter((t) => t !== type)
      : [...selectedFilters.types, type];
    onFilterChange({ ...selectedFilters, types: newTypes });
  };

  const handleLocationToggle = (location: string) => {
    const newLocations = selectedFilters.locations.includes(location)
      ? selectedFilters.locations.filter((l) => l !== location)
      : [...selectedFilters.locations, location];
    onFilterChange({ ...selectedFilters, locations: newLocations });
  };

  const handleAccommodationToggle = () => {
    const newValue =
      selectedFilters.accommodation === null
        ? true
        : selectedFilters.accommodation
        ? null
        : true;
    onFilterChange({ ...selectedFilters, accommodation: newValue });
  };

  const clearAllFilters = () => {
    onSearchChange("");
    onFilterChange({ types: [], accommodation: null, locations: [] });
    setShowFilters(false);
  };

  const activeFilterCount =
    selectedFilters.types.length +
    selectedFilters.locations.length +
    (selectedFilters.accommodation !== null ? 1 : 0);

  const hasActiveFilters = searchQuery || activeFilterCount > 0;

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/30" />
          <Input
            type="text"
            placeholder="Search by name, location, or activity..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-12 pr-12 h-14 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/30 text-base focus:border-orange-500/50"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Toggle Button */}
        <Button
          variant={showFilters ? "default" : "outline"}
          onClick={() => setShowFilters(!showFilters)}
          className={`h-14 px-6 rounded-2xl font-medium transition-all duration-300 ${
            showFilters
              ? "bg-orange-500 text-white border-orange-500"
              : "border-white/10 text-white/70 hover:border-orange-500/50"
          }`}
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-2 bg-orange-500/20 text-orange-400 rounded-full px-2 py-0.5 text-xs font-semibold">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </div>

      {/* Results Count & Clear */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between bg-white/5 rounded-2xl px-6 py-3 border border-white/10">
          <p className="text-sm text-white/60">
            <span className="font-semibold text-white">{resultCount}</span>{" "}
            {resultCount === 1 ? "program" : "programs"} found
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-white/60 hover:text-white hover:bg-white/5 rounded-xl"
          >
            <X className="w-4 h-4 mr-1" />
            Clear all
          </Button>
        </div>
      )}

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-[#111111] rounded-2xl p-6 border border-white/10 space-y-6 animate-slideDown">
          {/* Institution Types */}
          {availableTypes.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                Institution Type
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeToggle(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedFilters.types.includes(type)
                        ? "bg-orange-500 text-white shadow-md"
                        : "bg-white/10 text-white/70 hover:bg-white/15"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Accommodation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              Accommodation
            </h3>
            <button
              onClick={handleAccommodationToggle}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedFilters.accommodation
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/15"
              }`}
            >
              <Home className="w-4 h-4" />
              Accommodation Available
            </button>
          </div>

          {/* Locations */}
          {availableLocations.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                Location
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableLocations.map((location) => (
                  <button
                    key={location}
                    onClick={() => handleLocationToggle(location)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      selectedFilters.locations.includes(location)
                        ? "bg-orange-500 text-white shadow-md"
                        : "bg-white/10 text-white/70 hover:bg-white/15"
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    {location}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters Summary */}
          {activeFilterCount > 0 && (
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/60">
                  {activeFilterCount} active{" "}
                  {activeFilterCount === 1 ? "filter" : "filters"}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    onFilterChange({ types: [], accommodation: null, locations: [] })
                  }
                  className="text-white/60 hover:text-white"
                >
                  Reset filters
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
