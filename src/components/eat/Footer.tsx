import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <h3 className="text-white">Eat & Heal</h3>
                <p className="text-sm text-gray-400">by GKF Eatery</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Part of Grace Kennett Foundation - 80+ years of trusted healthcare in Madurai. 
              Bringing hospital-grade nutrition to your table.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#diets" className="hover:text-emerald-500 transition-colors">Diet Plans</a></li>
              <li><a href="#order" className="hover:text-emerald-500 transition-colors">How to Order</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-500 transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>info@eatandheal.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>Madurai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Eat & Heal by GKF Eatery. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">FSSAI Certificate</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
