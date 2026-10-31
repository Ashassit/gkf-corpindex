import { useState, useMemo } from "react";
import { CategoryGrid } from "../updateIvyDesign/CategoryGrid";
import { InstitutionList } from "../updateIvyDesign/InstitutionList";
import { InstitutionDetail } from "../updateIvyDesign/InstitutionDetail";
import { SearchAndFilter } from "../updateIvyDesign/SearchAndFilter";
import {
  categories,
  getInstitutionsByCategory,
  getInstitutionById,
} from "../ivy/data/institutions";

type View = "categories" | "institutions" | "detail" | "search";

interface Filters {
  types: string[];
  accommodation: boolean | null;
  locations: string[];
}

export function UpdatedIvy() {
  const [currentView, setCurrentView] = useState<View>("categories");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [selectedInstitutionId, setSelectedInstitutionId] = useState<string | null>(null);
  
  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    types: [],
    accommodation: null,
    locations: [],
  });

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentView("institutions");
    // Keep search query when navigating to category
    setFilters({ types: [], accommodation: null, locations: [] });
  };

  const handleInstitutionClick = (institutionId: string) => {
    setSelectedInstitutionId(institutionId);
    setCurrentView("detail");
  };

  const handleBackToCategories = () => {
    setCurrentView("categories");
    setSelectedCategoryId(null);
    setSelectedInstitutionId(null);
  };

  const handleBackToInstitutions = () => {
    setCurrentView("institutions");
    setSelectedInstitutionId(null);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // Show global search results when typing from categories page
    if (currentView === "categories" && query.trim()) {
      setCurrentView("search");
    } else if (currentView === "search" && !query.trim()) {
      setCurrentView("categories");
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setFilters({ types: [], accommodation: null, locations: [] });
    if (currentView === "search") {
      setCurrentView("categories");
    }
  };

  const selectedCategory = selectedCategoryId
    ? categories.find((cat) => cat.id === selectedCategoryId)
    : undefined;

  // Get all institutions for global search
  const allInstitutions = useMemo(() => {
    return categories.flatMap(cat => getInstitutionsByCategory(cat.id));
  }, []);

  // Get base institutions based on view
  const baseInstitutions = useMemo(() => {
    if (currentView === "search") {
      return allInstitutions;
    }
    return selectedCategoryId 
      ? getInstitutionsByCategory(selectedCategoryId) 
      : [];
  }, [currentView, selectedCategoryId, allInstitutions]);

  // Extract unique values for filters
  const { availableTypes, availableLocations } = useMemo(() => {
    const types = new Set<string>();
    const locations = new Set<string>();

    const institutionsForFilters = currentView === "search" || currentView === "categories"
      ? allInstitutions
      : baseInstitutions;

    institutionsForFilters.forEach((inst) => {
      if (inst.type) types.add(inst.type);
      if (inst.location) locations.add(inst.location);
    });

    return {
      availableTypes: Array.from(types).sort(),
      availableLocations: Array.from(locations).sort(),
    };
  }, [currentView, baseInstitutions, allInstitutions]);

  // Filter and search institutions
  const filteredInstitutions = useMemo(() => {
    let result = [...baseInstitutions];

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((inst) => {
        return (
          inst.name.toLowerCase().includes(query) ||
          inst.location.toLowerCase().includes(query) ||
          inst.description.toLowerCase().includes(query) ||
          inst.tagline.toLowerCase().includes(query) ||
          inst.activities.some((activity) =>
            activity.toLowerCase().includes(query)
          ) ||
          inst.volunteerActivities.some((activity) =>
            activity.toLowerCase().includes(query)
          ) ||
          inst.address.toLowerCase().includes(query)
        );
      });
    }

    // Apply type filter
    if (filters.types.length > 0) {
      result = result.filter((inst) =>
        filters.types.includes(inst.type)
      );
    }

    // Apply accommodation filter
    if (filters.accommodation !== null) {
      result = result.filter((inst) => inst.accommodation === filters.accommodation);
    }

    // Apply location filter
    if (filters.locations.length > 0) {
      result = result.filter((inst) =>
        filters.locations.includes(inst.location)
      );
    }

    return result;
  }, [baseInstitutions, searchQuery, filters]);

  const selectedInstitution = selectedInstitutionId
    ? getInstitutionById(selectedInstitutionId)
    : undefined;

  return (
    <div className="min-h-screen section-container mt-16 bg-[#080808]">
      {/* Categories View */}
      {currentView === "categories" && (
        <div className="max-w-7xl mx-auto px-6 py-8">
          <CategoryGrid
            categories={categories}
            onCategoryClick={handleCategoryClick}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>
      )}

      {/* Global Search Results View */}
      {currentView === "search" && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <SearchAndFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedFilters={filters}
              onFilterChange={setFilters}
              availableTypes={availableTypes}
              availableLocations={availableLocations}
              resultCount={filteredInstitutions.length}
            />
          </div>

          <InstitutionList
            institutions={filteredInstitutions}
            category={undefined}
            onBack={handleClearSearch}
            onInstitutionClick={handleInstitutionClick}
          />
        </div>
      )}

      {/* Category-Specific Institution List */}
      {currentView === "institutions" && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <SearchAndFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedFilters={filters}
              onFilterChange={setFilters}
              availableTypes={availableTypes}
              availableLocations={availableLocations}
              resultCount={filteredInstitutions.length}
            />
          </div>

          <InstitutionList
            institutions={filteredInstitutions}
            category={selectedCategory}
            onBack={handleBackToCategories}
            onInstitutionClick={handleInstitutionClick}
          />
        </div>
      )}

      {/* Institution Detail */}
      {currentView === "detail" && (
        <InstitutionDetail
          institution={selectedInstitution}
          onBack={handleBackToInstitutions}
        />
      )}
    </div>
  );
}