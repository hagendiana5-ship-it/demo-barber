import React from 'react';
import { Scissors } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-32 min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image - Moved from Hero */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2948&auto=format&fit=crop" 
          alt="Barbershop Atmosphere" 
          className="w-full h-full object-cover"
        />
        {/* Subtle warm wash overlay */}
        <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay" /> 
      </div>

      <div className="container mx-auto px-6 relative z-10">
         {/* Glass Panel: Increased opacity for better readability */}
         <div className="max-w-4xl mx-auto bg-stone-950/75 backdrop-blur-xl border border-white/10 p-10 md:p-20 rounded-sm shadow-2xl relative overflow-hidden group">
            
            {/* Animated decorative sheen passing through the glass */}
            <div className="absolute top-0 -left-[150%] w-[80%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] animate-[shine_8s_infinite_linear]" />

            <div className="text-center space-y-8 relative z-10">
               <div className="flex justify-center mb-2">
                 <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,165,54,0.4)] animate-float">
                    <Scissors className="text-stone-900 w-10 h-10" />
                 </div>
               </div>

               <h2 className="font-serif text-4xl md:text-7xl font-black text-white drop-shadow-xl tracking-tight leading-none">
                 {t.about.titleStart} <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 animate-pulse-slow">
                   {t.about.titleEnd}
                 </span>
               </h2>

               <p className="font-sans text-lg md:text-2xl text-stone-200 font-medium leading-relaxed drop-shadow-md max-w-2xl mx-auto">
                 {t.about.description}
               </p>

               <div className="pt-8">
                  <div className="inline-flex flex-col items-center gap-2">
                    <span className="h-px w-24 bg-gold-400 shadow-[0_0_10px_#D4A536]"></span>
                    <span className="text-gold-300 font-serif italic text-xl tracking-widest uppercase">
                      {t.about.est}
                    </span>
                    <span className="h-px w-24 bg-gold-400 shadow-[0_0_10px_#D4A536]"></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default About;