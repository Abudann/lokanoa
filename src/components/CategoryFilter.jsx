export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="w-full mb-12">
      <div className="flex overflow-x-auto no-scrollbar space-x-2 md:space-x-4 pb-4 px-4 snap-x border-b border-black/10 dark:border-white/10">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`
                snap-start whitespace-nowrap px-5 py-2.5 rounded-full font-condensed tracking-wider uppercase text-sm font-bold transition-all duration-300
                ${isSelected 
                  ? 'bg-light-text text-light-bg dark:bg-dark-text dark:text-dark-bg shadow-md scale-105' 
                  : 'bg-transparent text-light-text/60 dark:text-dark-text/60 hover:text-light-text dark:hover:text-dark-text hover:bg-black/5 dark:hover:bg-white/5'}
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
