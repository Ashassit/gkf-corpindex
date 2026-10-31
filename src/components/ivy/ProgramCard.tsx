import { memo } from 'react';
import type{ Institution } from './type/program';
import { MapPin } from './Icons';

interface ProgramCardProps {
  institution: Institution;
  onClick: () => void;
}

export const ProgramCard = memo(function ProgramCard({ institution, onClick }: ProgramCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 w-full text-left group"
    >
      <div className="flex flex-col gap-3">
        <h3 className="text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {institution.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">{institution.location}</span>
        </div>
        <p className="text-gray-700 text-sm line-clamp-2">
          {institution.tagline}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2 flex-wrap">
          <span className="bg-gray-100 px-3 py-1 rounded-full">{institution.type}</span>
          {institution.accommodation && (
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Accommodation
            </span>
          )}
        </div>
      </div>
    </button>
  );
});
