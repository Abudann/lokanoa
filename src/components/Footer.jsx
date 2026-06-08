import { MapPin, Phone } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-black/10 dark:border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-display text-3xl font-bold tracking-widest uppercase text-light-text dark:text-dark-text mb-4">
              Lokanóa
            </h3>
            <p className="font-sans text-light-text/70 dark:text-dark-text/70 italic max-w-xs">
              "Made for Good Days"
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-condensed text-xl font-bold tracking-wider uppercase text-light-text dark:text-dark-text mb-6">
              Contact
            </h4>
            <div className="space-y-4 font-sans text-light-text/80 dark:text-dark-text/80">
              <a 
                href="https://instagram.com/lokanoa.pnk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>@lokanoa.pnk</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Pontianak, West Kalimantan</span>
              </div>
              <a 
                href="https://wa.me/6282148651719"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>0821-4865-1719</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-condensed text-xl font-bold tracking-wider uppercase text-light-text dark:text-dark-text mb-6">
              Opening Hours
            </h4>
            <div className="space-y-2 font-sans text-light-text/80 dark:text-dark-text/80 text-center md:text-left">
              <p>Mon - Sun</p>
              <p>Check Instagram for updates</p>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 dark:border-white/10 pt-8 mt-8 text-center">
          <p className="font-sans text-sm text-light-text/50 dark:text-dark-text/50">
            &copy; {new Date().getFullYear()} Lokanóa Pontianak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
