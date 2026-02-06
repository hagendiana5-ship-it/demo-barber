import React from 'react';
import Button from './Button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* VIDEO PLACEHOLDER: Ensure 'src' points to your desired video file. 
            The 'poster' image is displayed while the video loads or if it fails. */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2948&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          <source src="/videos/barber-hero.mp4" type="video/mp4" />
          <source src="/barber-hero.mp4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 pt-20">
        <h2 className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-bold animate-pulse-slow">
          {t.hero.subtitle}
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
          {t.hero.titleStart} <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-600">{t.hero.titleEnd}</span>
        </h1>

        <p className="font-sans text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={onOpenBooking}>
            {t.hero.bookNow ?? t.nav.bookNow}
          </Button>
          <a href="#services" className="px-8 py-3 text-white border border-white/20 hover:border-gold-400 hover:text-gold-400 transition-colors uppercase tracking-widest text-sm font-bold rounded-sm backdrop-blur-sm">
            {t.hero.viewServices}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold-400/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
