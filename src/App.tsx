import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { About } from './components/About.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';
import { BookingModal } from './components/BookingModal.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('Corte Masculino');
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#F8FAFC] selection:bg-[#C5A059]/20 selection:text-[#F8FAFC] relative">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 1. Início (Hero) */}
        <Hero onOpenBooking={() => handleOpenBooking('Corte Masculino')} />

        {/* 2. Serviços */}
        <Services onSelectService={handleOpenBooking} />

        {/* 3. Sobre Nós / Tradição & Estatísticas */}
        <About />

        {/* 4. Galeria */}
        <Gallery onOpenBooking={() => handleOpenBooking('Corte Masculino')} />

        {/* Prova Social */}
        <Testimonials />

        {/* 5. Contato & Agendamento */}
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button with Pulse */}
      <WhatsAppFloatingButton />

      {/* Interactive Booking & Lead Generation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedService={selectedService}
      />
    </div>
  );
}
