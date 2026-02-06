import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../constants/translations';

interface NavbarProps {
  onOpenBooking?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.aiStyler, href: '#ai-styler' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const getLangLabel = (lang: Language) => {
    switch(lang) {
      case 'en': return 'ENG';
      case 'es': return 'ESP';
      case 'de': return 'DEU';
      default: return (lang as string).toUpperCase();
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-950/90 backdrop-blur-md py-4 border-b border-gold-500/20' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-gold-300 to-gold-600 p-2 rounded-full">
            <Scissors className="w-5 h-5 md:w-6 md:h-6 text-stone-900" />
          </div>
          <span className="font-serif font-black text-lg md:text-xl tracking-widest text-gold-400">
            BLADE<span className="text-white">&</span>PIXEL
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-stone-300 hover:text-gold-400 font-sans uppercase text-xs tracking-widest transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-4 w-px bg-stone-700 mx-2" />

          {/* Language Switcher Desktop */}
          <div className="flex gap-2">
             {(['en', 'de', 'es'] as Language[]).map((lang) => (
               <button
                 key={lang}
                 onClick={() => handleLanguageChange(lang)}
                 className={`uppercase text-xs font-bold transition-colors ${language === lang ? 'text-gold-400' : 'text-stone-500 hover:text-stone-300'}`}
               >
                 {getLangLabel(lang)}
               </button>
             ))}
          </div>

          <button 
            onClick={onOpenBooking}
            className="border border-gold-500 text-gold-400 px-6 py-2 rounded-sm uppercase text-xs tracking-widest hover:bg-gold-500 hover:text-stone-900 transition-colors"
          >
            {t.nav.bookNow}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          {/* Mobile Language Switcher - Always Visible */}
           <div className="flex gap-3 text-xs font-bold uppercase text-stone-500 bg-stone-900/50 px-3 py-1.5 rounded-full border border-stone-800">
             {(['en', 'de', 'es'] as Language[]).map((lang) => (
               <button
                 key={lang}
                 onClick={() => handleLanguageChange(lang)}
                 className={`transition-colors ${language === lang ? 'text-gold-400' : 'hover:text-stone-300'}`}
               >
                 {getLangLabel(lang)}
               </button>
             ))}
           </div>

          <button 
            className="text-gold-400 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-stone-900 border-t border-stone-800 animate-fade-in-down shadow-2xl h-screen bg-opacity-95 backdrop-blur-xl">
          <div className="flex flex-col p-6 gap-6 items-center pt-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-300 hover:text-gold-400 font-serif text-2xl font-bold py-2"
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenBooking && onOpenBooking(); }}
              className="mt-4 metallic-btn text-stone-900 px-8 py-3 rounded-sm uppercase text-sm font-bold tracking-widest"
            >
              {t.nav.bookNow}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
