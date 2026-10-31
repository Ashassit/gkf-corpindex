import type { Dish, CartItem } from '../../lib/types';
import { Plus, Minus } from 'lucide-react';

type Props = {
  dish: Dish;
  cartItem: CartItem | undefined;
  onAdd: (dish: Dish) => void;
  onSetQty: (dishId: string, qty: number) => void;
};

export function DishCard({ dish, cartItem, onAdd, onSetQty }: Props) {
  const qty = cartItem?.qty ?? 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold text-gray-900">{dish.name}</p>
        <p className="text-sm text-orange-500 font-medium">₹{dish.price}</p>
        <p className="text-xs text-gray-400 mt-0.5">~{dish.prep_time_mins} min</p>
      </div>

      {qty === 0 ? (
        <button
          onClick={() => onAdd(dish)}
          className="flex items-center gap-1 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      ) : (
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSetQty(dish.id, qty - 1)}
            className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-200 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-6 text-center font-bold text-gray-900">{qty}</span>
          <button
            onClick={() => onSetQty(dish.id, qty + 1)}
            className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
