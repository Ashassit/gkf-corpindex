import { MapPin, Mail, Phone, Globe, Smartphone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-[#111111] p-8 rounded-lg border border-white/10 h-full">
      <h3 className="text-white mb-6">Grace Kennett Foundation Hospital</h3>

      <div className="space-y-6">
        {/* Address */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <MapPin className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h4 className="text-white/80 mb-1">Address</h4>
              <p className="text-white/50">8, Kennett Road Madurai,</p>
              <p className="text-white/50">Tamil Nadu, India - 625016</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Mail className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-white/80 mb-2">Email</h4>
              <div className="space-y-1">
                <a href="mailto:gkfindia@hotmail.com" className="block text-white/50 hover:text-orange-500 transition-colors">
                  gkfindia@hotmail.com
                </a>
                <a href="mailto:info@gkfmadurai.in" className="block text-white/50 hover:text-orange-500 transition-colors">
                  info@gkfmadurai.in
                </a>
                <a href="mailto:admin@gkfmadurai.in" className="block text-white/50 hover:text-orange-500 transition-colors">
                  admin@gkfmadurai.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Office Phone */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Phone className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-white/80 mb-2">Office Phone</h4>
              <div className="space-y-1">
                <a href="tel:+914522601767" className="block text-white/50 hover:text-orange-500 transition-colors">
                  +91 452 2601767
                </a>
                <a href="tel:+914522601849" className="block text-white/50 hover:text-orange-500 transition-colors">
                  +91 452 2601849
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Smartphone className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-white/80 mb-2">Mobile</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                <a href="tel:+919489818494" className="text-white/50 hover:text-orange-500 transition-colors">
                  +91 94898 18494
                </a>
                <a href="tel:+919585440401" className="text-white/50 hover:text-orange-500 transition-colors">
                  +91 95854 40401
                </a>
                <a href="tel:+919943450401" className="text-white/50 hover:text-orange-500 transition-colors">
                  +91 99434 50401
                </a>
                <a href="tel:+919159140401" className="text-white/50 hover:text-orange-500 transition-colors">
                  +91 91591 40401
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Website */}
        <div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Globe className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <h4 className="text-white/80 mb-2">Website</h4>
              <a
                href="https://gkfmadurai.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-orange-500 transition-colors break-all"
              >
                https://gkfmadurai.in/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
