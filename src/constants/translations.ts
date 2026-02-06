export type Language = 'en' | 'es' | 'de';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      aiStyler: 'AI Styler',
      contact: 'Contact',
      bookNow: 'Book Now'
    },
    hero: {
      subtitle: 'Est. 2024 • Premium Grooming',
      titleStart: 'Sharpen Your',
      titleEnd: 'Image',
      description: 'Where precision craftsmanship meets cutting-edge technology. Experience the perfect cut, tailored to your lifestyle.',
      tryAi: 'Try AI Restyle',
      viewServices: 'View Services',
      bookNow: 'Book Now'
    },
    booking: {
      title: 'Book an Appointment',
      name: 'Name',
      date: 'Date',
      time: 'Time',
      confirm: 'Confirm',
      cancel: 'Cancel',
      reserved: 'Appointment reserved!',
      close: 'Close'
    },
    about: {
      titleStart: 'Crafting',
      titleEnd: 'Confidence',
      description: "We don't just cut hair; we engineer your image. Step into a space where classic grooming meets futuristic precision.",
      est: 'Est. 2024'
    },
    services: {
      menu: 'Our Menu',
      title: 'Services',
      classicCut: { name: 'Classic Haircut', desc: 'Consultation, precision cut, hot towel finish, and styling.' },
      beardSculpt: { name: 'Beard Sculpting', desc: 'Razor line-up, trimming, shaping, and beard oil treatment.' },
      royalShave: { name: 'The Royal Shave', desc: 'Traditional straight razor shave with pre-shave oil and hot towels.' },
      fullService: { name: 'Full Service', desc: 'Haircut + Royal Shave combo for the ultimate grooming experience.' }
    },
    gallery: {
      portfolio: 'Portfolio',
      title: 'Our Masterpieces',
      followUs: 'Follow Us',
      freshCut: 'Fresh Cut',
      styledBy: 'Styled by Marco',
      quote: '"Style is a way to say who you are without having to speak."',
      viewFull: 'View Full Gallery'
    },
    aiStyler: {
      title: 'Virtual Styler',
      description: 'Unsure about a new look? Upload a selfie and describe your desired style. Our Gemini-powered AI will visualize it for you instantly.',
      upload: 'Click to upload photo',
      uploadHint: 'JPG or PNG. Good lighting works best.',
      promptLabel: 'Describe the look',
      promptPlaceholder: 'E.g., Give me a fade haircut, make my hair silver, add a beard...',
      generate: 'Generate Style',
      processing: 'Processing...',
      consulting: 'Consulting AI stylist...',
      resultPlaceholder: 'Result will appear here',
      error: 'Something went wrong. Please try again.',
      failed: 'Failed to generate image.',
      resultLabel: 'Result'
    },
    contact: {
      title: 'Contact Us',
      contactInfo: 'Contact Info',
      hoursTitle: 'Opening Hours',
      monFri: 'Mon - Fri',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'Closed',
      whatsapp: 'Book on WhatsApp',
      footer: 'Blade & Pixel. All rights reserved.',
      address: '123 Barber Street, Creative District, Tech City'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      gallery: 'Galería',
      aiStyler: 'Estilista IA',
      contact: 'Contacto',
      bookNow: 'Reservar'
    },
    hero: {
      subtitle: 'Est. 2024 • Aseo Premium',
      titleStart: 'Define Tu',
      titleEnd: 'Imagen',
      description: 'Donde la artesanía de precisión se encuentra con la tecnología de vanguardia. Experimenta el corte perfecto, adaptado a tu estilo de vida.',
      tryAi: 'Prueba Estilo IA',
      viewServices: 'Ver Servicios',
      bookNow: 'Reservar'
    },
    booking: {
      title: 'Reservar Cita',
      name: 'Nombre',
      date: 'Fecha',
      time: 'Hora',
      confirm: 'Confirmar',
      cancel: 'Cancelar',
      reserved: '¡Cita reservada!',
      close: 'Cerrar'
    },
    about: {
      titleStart: 'Creando',
      titleEnd: 'Confianza',
      description: "No solo cortamos cabello; diseñamos tu imagen. Entra en un espacio donde el aseo clásico se encuentra con la precisión futurista.",
      est: 'Est. 2024'
    },
    services: {
      menu: 'Nuestro Menú',
      title: 'Servicios',
      classicCut: { name: 'Corte Clásico', desc: 'Consulta, corte de precisión, toalla caliente y peinado.' },
      beardSculpt: { name: 'Esculpido de Barba', desc: 'Alineación con navaja, recorte, forma y tratamiento con aceite.' },
      royalShave: { name: 'Afeitado Real', desc: 'Afeitado tradicional con navaja recta, aceite pre-afeitado y toallas calientes.' },
      fullService: { name: 'Servicio Completo', desc: 'Combo de Corte + Afeitado Real para la experiencia definitiva.' }
    },
    gallery: {
      portfolio: 'Portafolio',
      title: 'Obras Maestras',
      followUs: 'Síguenos',
      freshCut: 'Corte Fresco',
      styledBy: 'Estilo por Marco',
      quote: '"El estilo es una forma de decir quién eres sin tener que hablar."',
      viewFull: 'Ver Galería Completa'
    },
    aiStyler: {
      title: 'Estilista Virtual',
      description: '¿Indeciso sobre un nuevo look? Sube una selfie y describe tu estilo deseado. Nuestra IA Gemini lo visualizará para ti al instante.',
      upload: 'Clic para subir foto',
      uploadHint: 'JPG o PNG. Buena iluminación funciona mejor.',
      promptLabel: 'Describe el look',
      promptPlaceholder: 'Ej., Hazme un corte degradado, pon mi cabello plateado, añade barba...',
      generate: 'Generar Estilo',
      processing: 'Procesando...',
      consulting: 'Consultando estilista IA...',
      resultPlaceholder: 'El resultado aparecerá aquí',
      error: 'Algo salió mal. Por favor intenta de nuevo.',
      failed: 'Error al generar imagen.',
      resultLabel: 'Resultado'
    },
    contact: {
      title: 'Contáctanos',
      contactInfo: 'Información',
      hoursTitle: 'Horario',
      monFri: 'Lun - Vie',
      sat: 'Sábado',
      sun: 'Domingo',
      closed: 'Cerrado',
      whatsapp: 'Reserva por WhatsApp',
      footer: 'Blade & Pixel. Todos los derechos reservados.',
      address: 'Calle Barber 123, Distrito Creativo, Ciudad Tech'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      gallery: 'Galerie',
      aiStyler: 'AI Styler',
      contact: 'Kontakt',
      bookNow: 'Buchen'
    },
    hero: {
      subtitle: 'Est. 2024 • Premium Pflege',
      titleStart: 'Schärfe Dein',
      titleEnd: 'Image',
      description: 'Wo präzises Handwerk auf Spitzentechnologie trifft. Erlebe den perfekten Schnitt, maßgeschneidert auf deinen Lifestyle.',
      tryAi: 'AI Styling Testen',
      viewServices: 'Leistungen',
      bookNow: 'Termin buchen'
    },
    booking: {
      title: 'Termin buchen',
      name: 'Name',
      date: 'Datum',
      time: 'Uhrzeit',
      confirm: 'Bestätigen',
      cancel: 'Abbrechen',
      reserved: 'Termin reserviert!',
      close: 'Schließen'
    },
    about: {
      titleStart: 'Wir Schaffen',
      titleEnd: 'Selbstvertrauen',
      description: "Wir schneiden nicht nur Haare; wir konstruieren dein Image. Tritt ein in einen Raum, wo klassische Pflege auf futuristische Präzision trifft.",
      est: 'Est. 2024'
    },
    services: {
      menu: 'Unser Menü',
      title: 'Dienstleistungen',
      classicCut: { name: 'Klassischer Haarschnitt', desc: 'Beratung, Präzisionsschnitt, heißes Handtuch und Styling.' },
      beardSculpt: { name: 'Bart-Formung', desc: 'Rasurkonturen, Trimmen, Formen und Bartöl-Behandlung.' },
      royalShave: { name: 'Die Königliche Rasur', desc: 'Traditionelle Nassrasur mit Pre-Shave-Öl und heißen Handtüchern.' },
      fullService: { name: 'Komplett-Service', desc: 'Haarschnitt + Königliche Rasur für das ultimative Pflegeerlebnis.' }
    },
    gallery: {
      portfolio: 'Portfolio',
      title: 'Unsere Meisterwerke',
      followUs: 'Folge Uns',
      freshCut: 'Frischer Schnitt',
      styledBy: 'Gestylt von Marco',
      quote: '"Stil ist eine Art zu sagen, wer du bist, ohne sprechen zu müssen."',
      viewFull: 'Ganze Galerie Ansehen'
    },
    aiStyler: {
      title: 'Virtueller Styler',
      description: 'Unsicher über einen neuen Look? Lade ein Selfie hoch und beschreibe deinen Wunsch-Style. Unsere Gemini-Power AI visualisiert es sofort.',
      upload: 'Klicken zum Hochladen',
      uploadHint: 'JPG oder PNG. Gute Beleuchtung ist am besten.',
      promptLabel: 'Beschreibe den Look',
      promptPlaceholder: 'Z.B., Mach einen Fade-Schnitt, färbe die Haare silber, füge einen Bart hinzu...',
      generate: 'Style Generieren',
      processing: 'Verarbeitung...',
      consulting: 'Konsultiere AI Stylist...',
      resultPlaceholder: 'Ergebnis erscheint hier',
      error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
      failed: 'Bild konnte nicht generiert werden.',
      resultLabel: 'Ergebnis'
    },
    contact: {
      title: 'Kontakt',
      contactInfo: 'Kontaktinfo',
      hoursTitle: 'Öffnungszeiten',
      monFri: 'Mo - Fr',
      sat: 'Samstag',
      sun: 'Sonntag',
      closed: 'Geschlossen',
      whatsapp: 'Buchen per WhatsApp',
      footer: 'Blade & Pixel. Alle Rechte vorbehalten.',
      address: 'Barber Straße 123, Kreativviertel, Tech Stadt'
    }
  }
};
