import React from 'react';
import { Instagram } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  
  // Diverse hairstyles from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop", // Sharp fade
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop", // Beard work
    "https://images.unsplash.com/photo-1593702295094-aea20986e8cf?q=80&w=2070&auto=format&fit=crop", // Styling
    "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop", // Textured top
    "https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=2080&auto=format&fit=crop", // Classic cut
    "https://images.unsplash.com/photo-1599351431202-6e0005079746?q=80&w=2070&auto=format&fit=crop", // Detail shot
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-900 relative">
       {/* Background pattern */}
       <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(#D4A536 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Centered Heading Section */}
        <div className="text-center mb-12">
          <h3 className="text-gold-500 uppercase tracking-widest text-sm font-bold mb-3">{t.gallery.portfolio}</h3>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">{t.gallery.title}</h2>
          
          <div className="flex justify-center">
             <a href="#" className="flex items-center gap-2 text-stone-400 hover:text-gold-400 transition-colors text-sm uppercase tracking-wider font-bold border border-stone-800 px-4 py-2 rounded-full hover:border-gold-500/50">
                <Instagram size={18} /> {t.gallery.followUs}
             </a>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer border border-stone-800 hover:border-gold-500/50 transition-colors"
            >
              <img 
                src={src} 
                alt={`Hairstyle ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[20%] group-hover:grayscale-0"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold-400 font-serif font-bold text-lg">{t.gallery.freshCut}</p>
                  <p className="text-stone-300 text-xs tracking-widest uppercase">{t.gallery.styledBy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <p className="text-stone-400 mb-6 italic">{t.gallery.quote}</p>
             <Button variant="gold">{t.gallery.viewFull}</Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;