import type{ Institution } from './type/program';
import { X, MapPin, Users, Home, Phone, Award, Briefcase, CheckCircle } from './Icons';

interface ProgramDetailsPanelProps {
  institution: Institution;
  onClose: () => void;
  onBookNow: () => void;
}

export function ProgramDetailsPanel({ institution, onClose, onBookNow }: ProgramDetailsPanelProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-4xl">
          <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 z-10">
              <div className="flex items-start justify-between">
                <div className="flex-1 pr-4">
                  <h2 className="text-gray-900 mb-2">{institution.name}</h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{institution.location}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 py-6 space-y-8">
              {/* Tagline */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-gray-800 italic">{institution.tagline}</p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900">Type</span>
                  </div>
                  <p className="text-gray-700 text-sm ml-8">{institution.type}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900">Recognition</span>
                  </div>
                  <p className="text-gray-700 text-sm ml-8">{institution.recognition}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900">Staff & Beneficiaries</span>
                  </div>
                  <p className="text-gray-700 text-sm ml-8">
                    {institution.staff} staff, {institution.beneficiaries} beneficiaries
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900">Accommodation</span>
                  </div>
                  <p className="text-gray-700 text-sm ml-8">
                    {institution.accommodation 
                      ? `Available for ${institution.maxVolunteers} volunteers` 
                      : 'Not available'}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Address
                </h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-xl">
                  {institution.address}
                </p>
              </div>

              {/* Contacts */}
              <div>
                <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  Contact Information
                </h3>
                <div className="space-y-2">
                  {institution.contacts.map((contact, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-900">{contact.name}</p>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-blue-600 hover:text-blue-700 text-sm"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities / Services */}
              <div>
                <h3 className="text-gray-900 mb-3">Activities & Services</h3>
                <div className="flex flex-wrap gap-2">
                  {institution.activities.map((activity, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Volunteer Activities */}
              <div>
                <h3 className="text-gray-900 mb-3">Volunteer Activities</h3>
                <ul className="space-y-3">
                  {institution.volunteerActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-gray-900 mb-3">About This Placement</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {institution.description}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
              <button
                onClick={onBookNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition-colors shadow-lg"
              >
                Book This Placement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
