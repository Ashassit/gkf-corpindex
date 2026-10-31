import { Heart, Menu, Phone, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <h1 className="text-lg tracking-tight text-white">Eat & Heal</h1>
              <p className="text-xs text-white/40">by GKF Eatery</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white/60 hover:text-orange-400 transition-colors">About</a>
            <a href="#diets" className="text-white/60 hover:text-orange-400 transition-colors">Diet Plans</a>
            <a href="#order" className="text-white/60 hover:text-orange-400 transition-colors">Order</a>
            <a href="#testimonials" className="text-white/60 hover:text-orange-400 transition-colors">Reviews</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-white/60 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-colors">
              <Phone className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all">
              <ShoppingCart className="w-4 h-4" />
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/60 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-white/60 hover:text-orange-400 transition-colors">About</a>
              <a href="#diets" className="text-white/60 hover:text-orange-400 transition-colors">Diet Plans</a>
              <a href="#order" className="text-white/60 hover:text-orange-400 transition-colors">Order</a>
              <a href="#testimonials" className="text-white/60 hover:text-orange-400 transition-colors">Reviews</a>
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-xl mt-2">
                <ShoppingCart className="w-4 h-4" />
                Order Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
