import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData.ts';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappDefaultMsg
  )}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto"
    >
      {/* Discreet Preview Balloon */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-[#090D16]/95 border border-white/15 backdrop-blur-md shadow-2xl text-xs text-[#F8FAFC]">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span className="font-medium">Agende pelo WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#64748B] hover:text-[#F8FAFC] ml-1 p-0.5"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="btn-whatsapp-floating"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Barbearia no WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-black flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 whatsapp-pulse focus:outline-none"
      >
        <MessageCircle className="w-7 h-7 fill-current stroke-none" />
      </a>
    </div>
  );
};
