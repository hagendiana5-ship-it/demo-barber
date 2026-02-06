import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-stone-900 text-white pt-24 pb-8 border-t border-stone-800">
      <div className="container mx-auto px-6">
        
        {/* Google Maps Embed */}
        <div className="w-full h-80 mb-16 rounded-lg overflow-hidden border border-stone-800 relative group">
          <div className="absolute inset-0 bg-gold-500/5 pointer-events-none z-10 mix-blend-overlay" />
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) brightness(0.8)' }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Barbershop Location"
            className="group-hover:grayscale-[0.5] transition-all duration-700"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-gold-400">BLADE & PIXEL</h3>
            <p className="text-stone-400 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-gold-500 hover:text-gold-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold">{t.contact.contactInfo}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-stone-400">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <p>{t.contact.address}</p>
              </div>
              <div className="flex items-center gap-3 text-stone-400">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold">{t.contact.hoursTitle}</h4>
            <ul className="space-y-3 text-stone-400">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>{t.contact.monFri}</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>{t.contact.sat}</span>
                <span>09:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>{t.contact.sun}</span>
                <span className="text-gold-500">{t.contact.closed}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-stone-800 text-stone-600 text-sm">
          <p>&copy; {new Date().getFullYear()} {t.contact.footer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;