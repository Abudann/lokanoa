export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-light-bg dark:bg-dark-bg">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/hero.png" 
          alt="Lokanóa Hero" 
          className="w-full h-full object-cover object-center opacity-40 dark:opacity-30"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        {/* Fallback gradient if image fails/isn't there */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-light-bg dark:to-dark-bg pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.2em] uppercase text-light-text dark:text-dark-text mb-6">
          Lokanóa
        </h1>
        <p className="font-display text-xl md:text-3xl italic text-light-accent dark:text-dark-accent mb-12 tracking-wide">
          "Made for Good Days"
        </p>
        
        <a 
          href="#menu"
          className="group relative inline-flex items-center justify-center px-8 py-3 font-condensed uppercase tracking-widest text-sm font-bold text-light-bg bg-light-text dark:text-dark-bg dark:bg-dark-text overflow-hidden rounded-sm transition-transform hover:scale-105"
        >
          <span className="relative z-10">Explore Menu</span>
        </a>
      </div>
    </section>
  );
}
