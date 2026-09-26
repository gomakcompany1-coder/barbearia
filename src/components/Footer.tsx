import React from 'react';
import { Scissors, MapPin, Phone, Clock, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#05070B] border-t border-white/10 text-[#94A3B8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#C5A059]">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="font-display text-2xl font-bold uppercase text-[#F8FAFC] tracking-tight">
                Barbearia
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Estilo, tradição e precisão. O espaço onde o cuidado masculino atinge o mais alto patamar de excelência.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#C5A059] block">
                Atendimento com Hora Marcada
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F8FAFC] mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#F8FAFC] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F8FAFC] transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F8FAFC] transition-colors">
                  Sobre Nós & Mestria
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#F8FAFC] transition-colors">
                  Galeria & Espaço
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#F8FAFC] transition-colors">
                  Contato & Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F8FAFC] mb-4">
              Procedimentos
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex justify-between">
                <span>Corte Masculino</span>
                <span className="text-[#F8FAFC] font-mono-num font-semibold">R$ 40</span>
              </li>
              <li className="flex justify-between">
                <span>Barba na Toalha Quente</span>
                <span className="text-[#F8FAFC] font-mono-num font-semibold">R$ 45</span>
              </li>
              <li className="flex justify-between">
                <span>Combo Imperial (VIP)</span>
                <span className="text-[#F8FAFC] font-mono-num font-semibold">R$ 75</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Local */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F8FAFC] mb-4">
              Localização & Contato
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="text-[#CBD5E1]">{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-[#F8FAFC] font-medium hover:text-[#C5A059] transition-colors font-mono-num"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{BUSINESS_INFO.hoursWeekday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} Barbearia. Todos os direitos reservados. (Site Demonstrativo)</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer group"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
