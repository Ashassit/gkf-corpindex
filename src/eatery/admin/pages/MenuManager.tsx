import { KitchenLayout } from '../KitchenLayout';
import { DishToggleCard } from '../components/DishToggleCard';
import { useDishes } from '../../lib/hooks/useDishes';

export function MenuManager() {
  const { dishes, loading, toggleAvailable, updatePrepTime } = useDishes();

  return (
    <KitchenLayout>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Menu Manager</h2>
      <p className="text-sm text-gray-500 mb-6">
        Toggle dishes on/off and set prep time. Changes reflect on customer menus instantly.
      </p>
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl">
          {dishes.map(dish => (
            <DishToggleCard
              key={dish.id}
              dish={dish}
              onToggle={toggleAvailable}
              onPrepTimeChange={updatePrepTime}
            />
          ))}
        </div>
      )}
    </KitchenLayout>
  );
}
