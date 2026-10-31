import { NavLink, useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { supabase } from '../../supabase/client';
import { ChefHat, ClipboardList, QrCode, LogOut } from 'lucide-react';

const nav = [
  { to: '/kitchen/orders', label: 'Live Orders', icon: ClipboardList },
  { to: '/kitchen/menu',   label: 'Menu',        icon: ChefHat },
  { to: '/kitchen/tables', label: 'Tables',       icon: QrCode },
];

export function KitchenLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate('/kitchen/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ChefHat className="w-5 h-5 text-orange-400" />
          <span className="font-semibold text-sm tracking-wide">GKF Eatery — Kitchen</span>
        </div>
        <nav className="flex items-center gap-1">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-white/10'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          ))}
          <button
            onClick={logout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors ml-2"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}
