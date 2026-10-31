import { memo } from 'react';
import type{ Category } from './type/program';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export const CategoryCard = memo(function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`${category.color} border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 w-full text-left group`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="text-5xl transform transition-transform duration-200 group-hover:scale-110">
          {category.icon}
        </div>
        <div className="text-center">
          <h3 className="text-gray-900 mb-1">{category.name}</h3>
          <p className="text-gray-600 text-sm">
            {category.count} {category.count === 1 ? 'Institution' : 'Institutions'}
          </p>
        </div>
      </div>
    </button>
  );
});
