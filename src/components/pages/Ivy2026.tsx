import React, { useState } from "react";
import { institutions, categories } from "../ivy/data/institutions";
import { IvyApplicationForm } from "../updateIvyDesign/IvyApplicationForm";

const Ivy2026: React.FC = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [showApplication, setShowApplication] = useState(false);

  const filteredInstitutions = institutions.filter((inst) => {
    return (
      (location === "" || inst.location === location) &&
      (category === "" || inst.category === category)
    );
  });

  // Get unique locations from institutions
  const uniqueLocations = Array.from(
    new Set(institutions.map((inst) => inst.location))
  ).sort();

  return (
    <div className="min-h-screen pl-10 pr-10 pt-30 bg-[#080808]">

      {/* Header */}
      <header className="bg-[#111111] border border-white/[0.07] shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-white">
            IVY Platform
          </h1>
          <p className="text-white/60">
            Connecting volunteers with meaningful NGO opportunities
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* HERO */}

        {/* IMPACT */}

        {/* SEARCH FILTERS */}
        <section className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow mb-12">
          <h3 className="text-xl font-bold mb-4 text-white">Discover Opportunities</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <select
              onChange={(e) => setLocation(e.target.value)}
              className="border border-white/[0.1] p-2 rounded bg-[#111111] text-white"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            <select
              onChange={(e) => setCategory(e.target.value)}
              className="border border-white/[0.1] p-2 rounded bg-[#111111] text-white"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.icon} {cat.name}</option>
              ))}
            </select>

          </div>
        </section>

        {/* PROGRAM LISTINGS */}
        <section>

          <h3 className="text-2xl font-bold mb-6 text-white">Featured Programs ({filteredInstitutions.length})</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredInstitutions.map((institution) => (
              <div
                key={institution.id}
                className="bg-[#111111] border border-white/[0.07] rounded-xl shadow p-6 hover:shadow-lg transition"
              >
                <h4 className="text-lg font-bold text-white">{institution.name}</h4>

                <p className="text-sm text-white/50 mt-1">
                  {institution.type} • {institution.location}
                </p>

                <p className="text-xs text-indigo-400 mt-1 font-medium">
                  {institution.tagline}
                </p>

                <p className="mt-3 text-white/60 text-sm line-clamp-3">
                  {institution.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {institution.activities.slice(0, 3).map((activity) => (
                    <span
                      key={activity}
                      className="bg-white/[0.07] text-white/80 text-xs px-2 py-1 rounded"
                    >
                      {activity}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-white/50">
                  Max Volunteers: {institution.maxVolunteers}
                </div>


                <button
  onClick={() => setShowApplication(true)}
  className="mt-6 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
>
  Apply Now
</button>
              </div>
            ))}

          </div>

        </section>

        {/* CTA */}
        {/* <section className="text-center mt-16">
          <h3 className="text-3xl font-bold">
            Ready to make an impact?
          </h3>

          <p className="text-white/60 mt-3">
            Apply today and start your volunteer journey.
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Start Application
          </button>
        </section> */}

      </main>
      {showApplication && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="relative w-full max-w-5xl bg-[#111111] border border-white/[0.07] rounded-xl shadow-xl max-h-[90vh] overflow-y-auto p-6">

      {/* Close Button */}
      <button
        onClick={() => setShowApplication(false)}
        className="absolute right-4 top-4 bg-white/[0.07] hover:bg-white/[0.12] text-white rounded-full px-3 py-1"
      >
        ✕
      </button>

      <IvyApplicationForm institutionName="IVY 2026 Volunteer Program" />

    </div>

  </div>
)}
    </div>
  );
};

export default Ivy2026;
