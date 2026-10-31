import { useState } from 'react';
import type { Dish } from '../../lib/types';

type Props = {
  dish: Dish;
  onToggle: (id: string, available: boolean) => Promise<void>;
  onPrepTimeChange: (id: string, mins: number) => Promise<void>;
};

export function DishToggleCard({ dish, onToggle, onPrepTimeChange }: Props) {
  const [prepTime, setPrepTime] = useState(dish.prep_time_mins);
  const [saving, setSaving] = useState(false);

  const handleToggle = async () => {
    setSaving(true);
    await onToggle(dish.id, !dish.is_available);
    setSaving(false);
  };

  const handlePrepBlur = async () => {
    if (prepTime === dish.prep_time_mins) return;
    await onPrepTimeChange(dish.id, prepTime);
  };

  return (
    <div className={`bg-white rounded-xl border-2 p-4 flex items-center gap-4 transition-colors ${
      dish.is_available ? 'border-green-200' : 'border-gray-200 opacity-60'
    }`}>
      <div className="flex-1">
        <p className="font-semibold text-gray-900">{dish.name}</p>
        <p className="text-sm text-gray-500">₹{dish.price}</p>
      </div>

      <div className="flex items-center gap-1">
        <input
          type="number"
          min={1}
          max={60}
          value={prepTime}
          onChange={e => setPrepTime(Number(e.target.value))}
          onBlur={handlePrepBlur}
          className="w-14 text-center border border-gray-300 rounded-lg px-1 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <span className="text-xs text-gray-400">min</span>
      </div>

      <button
        onClick={handleToggle}
        disabled={saving}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none ${
          dish.is_available ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
            dish.is_available ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
