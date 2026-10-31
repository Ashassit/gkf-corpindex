import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export function ServiceCard({ title, subtitle, description, benefits, imageUrl }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-emerald-800 mb-1">{title}</h3>
        <p className="text-emerald-600 mb-3">{subtitle}</p>
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
