import { memo } from 'react';

export const SkeletonCard = memo(function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full" />
        <div className="text-center w-full space-y-2">
          <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
        </div>
      </div>
    </div>
  );
});
