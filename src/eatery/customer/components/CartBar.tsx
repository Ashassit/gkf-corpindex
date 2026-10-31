import { useNavigate } from 'react-router-dom';
import { useCart, cartTotal, cartCount } from '../../lib/CartContext';
import { ShoppingBag } from 'lucide-react';

export function CartBar() {
  const { state } = useCart();
  const navigate = useNavigate();
  const count = cartCount(state.items);
  const total = cartTotal(state.items);

  if (count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-xl">
      <button
        onClick={() => navigate('/order/cart')}
        className="w-full bg-orange-500 text-white py-3.5 rounded-2xl font-semibold flex items-center justify-between px-5 hover:bg-orange-600 transition-colors active:scale-[0.98]"
      >
        <span className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          {count} item{count > 1 ? 's' : ''}
        </span>
        <span>₹{total} →</span>
      </button>
    </div>
  );
}
