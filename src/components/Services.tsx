import React from 'react';
import { ServiceItem } from '../types';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services: ServiceItem[] = [
    { name: t.services.classicCut.name, price: '$45', description: t.services.classicCut.desc },
    { name: t.services.beardSculpt.name, price: '$35', description: t.services.beardSculpt.desc },
    { name: t.services.royalShave.name, price: '$55', description: t.services.royalShave.desc },
    { name: t.services.fullService.name, price: '$90', description: t.services.fullService.desc },
  ];

  return (
    <section id="services" className="py-24 bg-stone-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-2">{t.services.menu}</h3>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">{t.services.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-6 border border-stone-800 bg-stone-900/30 transition-all duration-500 rounded-sm relative overflow-hidden cursor-pointer
                         hover:border-gold-400 hover:bg-gradient-to-br hover:from-stone-900 hover:via-stone-800 hover:to-gold-900/30
                         hover:shadow-[0_0_20px_rgba(212,165,54,0.15)] hover:-translate-y-1"
            >
               {/* Metallic sheen overlay on hover */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" />
               
               <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold-500/20 transition-all duration-500" />
               
               <div className="flex justify-between items-baseline mb-4 relative z-10">
                 <h4 className="font-serif text-xl text-stone-100 font-bold group-hover:text-gold-300 transition-colors duration-300">{service.name}</h4>
                 <span className="font-sans font-bold text-gold-500 text-lg group-hover:text-gold-300 drop-shadow-sm">{service.price}</span>
               </div>
               
               <p className="text-stone-400 font-light leading-relaxed relative z-10 group-hover:text-stone-300 transition-colors">
                 {service.description}
               </p>

               {/* Bottom line accent */}
               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-900 to-transparent group-hover:via-gold-400 group-hover:h-[2px] transition-all duration-300" />
               
               {/* Hidden Book Arrow */}
               <div className="absolute bottom-4 right-4 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gold-400">
                  <ArrowRight size={20} />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;