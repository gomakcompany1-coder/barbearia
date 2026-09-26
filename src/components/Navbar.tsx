import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Phone, Menu, X, Calendar, MapPin, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData.ts';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-[#090D16]/90 via-[#090D16]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#inicio"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#F8FAFC] group-hover:border-[#C5A059] group-hover:text-[#C5A059] transition-all duration-300 shadow-md">
                <Scissors className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] leading-none uppercase">
                  Barbe<span className="text-[#C5A059]">aria</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#94A3B8] uppercase font-sans mt-0.5">
                  Estilo & Tradição · Espaço Masculino
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-[#94A3B8] hover:text-[#F8FAFC] transition-colors relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Header Right Action */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                id="header-phone-quicklink"
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center gap-2 text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                title="Ligue para a Barbearia"
              >
                <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>
                <span className="font-medium tracking-tight font-mono-num">{BUSINESS_INFO.phone}</span>
              </a>

              <button
                id="header-cta-booking"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-semibold tracking-wider uppercase border border-white/15 hover:border-[#C5A059]/60 transition-all duration-300 shadow-lg hover:shadow-[#C5A059]/10 cursor-pointer active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Entrar em contato</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                id="mobile-menu-trigger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg bg-[#0F172A] border border-white/10 text-[#F8FAFC] hover:border-white/25 focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Sheet) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              id="mobile-drawer-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[340px] bg-[#090D16] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#C5A059]">
                      <Scissors className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-lg text-[#F8FAFC] uppercase block leading-none">
                        Barbearia
                      </span>
                      <span className="text-[10px] text-[#94A3B8] tracking-widest uppercase">
                        Estilo & Tradição
                      </span>
                    </div>
                  </div>
                  <button
                    id="mobile-menu-close-btn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#94A3B8] hover:text-[#F8FAFC]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex flex-col gap-2 mt-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-lg text-base font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-all flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-[#64748B]">→</span>
                    </a>
                  ))}
                </nav>

                {/* Quick Info */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                  <div className="flex items-start gap-3 text-xs text-[#94A3B8]">
                    <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                    <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#94A3B8]">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{BUSINESS_INFO.hoursWeekday}</span>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-6">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 px-4 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-[#F8FAFC] text-sm font-semibold tracking-wider uppercase border border-white/20 hover:border-[#C5A059] flex items-center justify-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Entrar em contato</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
