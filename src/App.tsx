import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import AIStyler from './components/AIStyler';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const onOpenBooking = () => setIsBookingOpen(true);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-gold-500 selection:text-stone-900">
      <Navbar onOpenBooking={onOpenBooking} />
      <main>
        <Hero onOpenBooking={onOpenBooking} />
        <About />
        <Services />
        <Gallery />
        <AIStyler />
        <Contact />
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/15551234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-green-900/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={28} fill="white" className="group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 bg-white text-stone-900 px-3 py-1 rounded shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {t.contact.whatsapp}
        </span>
      </a>

      <BookingModal open={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
};

export default App;
