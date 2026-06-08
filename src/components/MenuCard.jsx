import { useState } from 'react';

export default function MenuCard({ product }) {
  const [imageError, setImageError] = useState(false);

  const imagePath = product.image;

  return (
    <div className="group flex flex-col bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden shadow-sm hover:shadow-xl dark:shadow-black/20 dark:hover:shadow-black/50 transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container - Always dark background to blend black-bg images */}
      {imagePath && !imageError && (
        <div className="w-full aspect-square bg-zinc-900 overflow-hidden relative">
          <img 
            src={imagePath} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3 gap-4">
          <h3 className="font-display text-xl md:text-2xl font-bold text-light-text dark:text-dark-text leading-tight">
            {product.name}
          </h3>
          <span className="font-condensed font-bold text-lg text-light-accent dark:text-dark-accent whitespace-nowrap">
            {product.price}k
          </span>
        </div>
        
        {product.description && (
          <p className="font-sans text-sm text-light-text/70 dark:text-dark-text/70 leading-relaxed flex-grow">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
}
