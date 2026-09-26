import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ChevronDown, MapPin, Star, ShieldCheck, Sparkles, Scissors } from 'lucide-react';
import { BUSINESS_INFO } from '../data/barbershopData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#090D16]"
    >
      {/* Background Cinematographic Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=85&w=2000"
          alt="Barbearia Ambiente Premium"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.32] contrast-[1.12]"
          referrerPolicy="no-referrer"
        />
        {/* Layered Vignettes and Depth Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/65 to-[#090D16]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#090D16]/40 to-[#090D16]" />
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Top Pill Authority Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F172A]/90 border border-white/15 backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#F8FAFC]">
                Barbearia · Tradição & Precisão Artesanal
              </span>
            </div>
          </motion.div>

          {/* Main Clamp Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1
              id="hero-main-title"
              className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-[#F8FAFC] leading-[0.92] select-none"
            >
              Estilo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8FAFC] via-[#CBD5E1] to-[#94A3B8]">&</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#F8FAFC] via-[#F1F5F9] to-[#C5A059]">
                Tradição
              </span>
            </h1>
          </motion.div>

          {/* Magnetic Authoritative Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#94A3B8] max-w-2xl font-normal leading-relaxed tracking-wide mb-10 text-center font-body"
          >
            {BUSINESS_INFO.slogan} Cortes com visagismo cirúrgico, navalha afiada na toalha a vapor e um ambiente privativo desenhado para quem valoriza a própria postura.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-primary-cta"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-[#F8FAFC] text-sm sm:text-base font-semibold tracking-wider uppercase border border-white/20 hover:border-[#C5A059] transition-all duration-300 shadow-2xl hover:shadow-[#C5A059]/15 group cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#C5A059] transition-transform group-hover:scale-110" />
              <span>Entrar em contato</span>
            </button>

            <a
              id="hero-secondary-cta"
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#CBD5E1] hover:text-[#F8FAFC] text-sm sm:text-base font-medium tracking-wide border border-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              <Scissors className="w-4 h-4 text-[#94A3B8]" />
              <span>Ver Serviços & Valores</span>
            </a>
          </motion.div>

          {/* Quick Authority Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl"
          >
            <div className="flex items-center justify-center gap-3 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-xs text-[#CBD5E1] font-medium tracking-tight">
                Avenida Central, 1234 (Endereço Teste)
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5">
              <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059] shrink-0" />
              <span className="text-xs text-[#CBD5E1] font-medium tracking-tight">
                Nota 4.9 · Mais de 800 avaliações
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 py-2 px-3 rounded-lg bg-white/[0.02] border border-white/5">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span className="text-xs text-[#CBD5E1] font-medium tracking-tight">
                Pontualidade & Hora Marcada
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Chevron Indicator */}
      <a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#64748B] hover:text-[#F8FAFC] transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono-num">Explorar</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
