import { useNavigate } from 'react-router-dom';
import { useCart } from '../../lib/CartContext';
import { useDishes } from '../../lib/hooks/useDishes';
import { DishCard } from '../components/DishCard';
import { CartBar } from '../components/CartBar';
import type { Dish } from '../../lib/types';
import { ArrowLeft } from 'lucide-react';

export function Menu() {
  const { dishes, loading } = useDishes(true);
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const handleAdd = (dish: Dish) => dispatch({ type: 'ADD', dish });
  const handleSetQty = (dishId: string, qty: number) => dispatch({ type: 'SET_QTY', dishId, qty });

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="font-bold text-gray-900">Our Menu</h1>
          {state.tableNumber && (
            <p className="text-xs text-gray-400">Table {state.tableNumber}</p>
          )}
        </div>
      </div>

      <div className="p-4">
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : dishes.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-3">🍽️</p>
            <p>No items available right now.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {dishes.map(dish => (
              <DishCard
                key={dish.id}
                dish={dish}
                cartItem={state.items.find(i => i.dish.id === dish.id)}
                onAdd={handleAdd}
                onSetQty={handleSetQty}
              />
            ))}
          </div>
        )}
      </div>

      <CartBar />
    </div>
  );
}
