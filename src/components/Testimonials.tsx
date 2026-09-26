import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/barbershopData.ts';

export const Testimonials: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-8 pb-20 sm:pb-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0F172A] border border-white/10 mb-3">
            <Star className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#CBD5E1]">
              Prova Social de Confiança
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F8FAFC]">
            O que dizem os clientes mais exigentes
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            Homens que valorizam pontualidade, higiene impecável e um corte com assinatura própria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between relative group border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-[#C5A059]/30 transition-colors" />
                </div>
                <p className="text-sm text-[#CBD5E1] italic leading-relaxed font-body mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base font-bold text-[#F8FAFC] tracking-tight">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#94A3B8]">{item.role}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#C5A059] font-medium bg-[#C5A059]/10 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
