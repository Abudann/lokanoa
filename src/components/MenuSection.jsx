import { useState, useEffect, useRef } from 'react';
import CategoryFilter from './CategoryFilter';
import MenuCard from './MenuCard';
import { categories, products } from '../data/products';

// Simple wrapper for intersection observer fade-in
function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="menu" className="py-24 bg-light-bg dark:bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-4 tracking-wide uppercase">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-light-accent dark:bg-dark-accent mx-auto"></div>
        </div>

        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-light-text/60 dark:text-dark-text/60 font-sans">
            No products found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <FadeInSection key={product.id} delay={(index % 4) * 100}>
                <MenuCard product={product} />
              </FadeInSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
