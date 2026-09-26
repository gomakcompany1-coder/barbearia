import React from 'react';
import { motion } from 'motion/react';
import { Clock, Check, Scissors, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/barbershopData.ts';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-24 sm:py-32 relative bg-[#090D16] border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0F172A]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F172A] border border-white/10 mb-4">
            <Scissors className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#CBD5E1]">
              Menu de Cuidados Masculinos
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F8FAFC] leading-none mb-6"
          >
            Nossos <span className="text-[#C5A059]">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-body leading-relaxed max-w-2xl mx-auto">
            Da precisão anatômica da tesoura ao relaxamento profundo da toalha quente. Cada procedimento é executado com rigor técnico e produtos de referência internacional.
          </p>
        </div>

        {/* Services Grid (Main services in a balanced grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES_DATA.filter((s) => s.id !== 'combo-imperial').map((service, index) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Service Image with Dark Vignette */}
                <div className="relative h-60 w-full overflow-hidden bg-[#090D16]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#090D16]/90 text-[#F8FAFC] border border-white/20 backdrop-blur-md">
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Duration Chip */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs text-[#CBD5E1]">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="font-mono-num">{service.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#F8FAFC]">
                      {service.name}
                    </h3>
                    <div className="text-right">
                      <span className="font-display text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                        R$ {service.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#94A3B8] font-body leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                        <div className="w-4 h-4 rounded-full bg-[#C5A059]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#C5A059]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-6 pb-6 pt-0">
                <button
                  id={`btn-service-book-${service.id}`}
                  onClick={() => onSelectService(service.name)}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#090D16] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-bold tracking-wider uppercase border border-white/15 hover:border-[#C5A059] flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer active:scale-[0.98]"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Combo Banner */}
        <motion.div
          id="featured-combo-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#141E33] to-[#0F172A] border border-white/15 p-6 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
              alt="Barbearia Experiência VIP"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E0C07A] text-[10px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Experiência Completa do Homem Moderno</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F8FAFC] tracking-tight mb-2">
                Combo Imperial — Corte Masculino + Barboterapia Completa
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Alinhamento cirúrgico de cabelo e barba em uma única sessão exclusiva de 75 minutos com toalha aromatizada a vapor, finalização com lâmina japonesa e bebida cortesia do nosso lounge.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 lg:shrink-0">
              <div className="text-left sm:text-right">
                <span className="text-xs text-[#94A3B8] block uppercase tracking-wider font-semibold">Valor Especial</span>
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
                  R$ 75
                </span>
              </div>
              <button
                id="btn-combo-imperial-book"
                onClick={() => onSelectService('Combo Imperial (Corte + Barba)')}
                className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#090D16] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-bold tracking-widest uppercase border border-[#C5A059]/70 hover:border-[#C5A059] transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
              >
                Entrar em contato
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
