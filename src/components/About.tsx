import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldCheck, Award, Flame, Coffee, CheckCircle2, Star, Users, Clock } from 'lucide-react';
import { STATS_DATA, BARBERS_DATA } from '../data/barbershopData.ts';

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-mono-num font-display">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative bg-[#090D16] overflow-hidden">
      {/* Visual accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F172A]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Split Section: Narrative & Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F172A] border border-white/10">
              <Award className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#CBD5E1]">
                Nossa História & Tradição
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F8FAFC] leading-[1.05]">
              Construindo a presença do homem que <span className="text-[#C5A059]">não passa despercebido.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#94A3B8] font-body leading-relaxed">
              Fundada com o compromisso da excelência, a <strong className="text-[#F8FAFC] font-semibold">Barbearia</strong> nasceu com um propósito inegociável: resgatar a nobreza do ofício clássico da barbearia, aliando-o às tendências mais avançadas da estética masculina contemporânea.
            </p>

            <p className="text-sm sm:text-base text-[#94A3B8] font-body leading-relaxed">
              Aqui, o tempo desacelera. Não trabalhamos com pressa nem com soluções genéricas. Cada cliente recebe uma consultoria de visagismo individualizada, navalhetes estritamente descartáveis, toalhas com infusão térmica de óleos essenciais e o respeito absoluto pelo seu horário.
            </p>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0F172A]/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-wide">Navalha Tradicional</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Toalha quente a vapor com óleos antissépticos e bálsamos nobres.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0F172A]/60 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center shrink-0">
                  <Coffee className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-wide">Lounge & Cortesia</h4>
                  <p className="text-xs text-[#94A3B8] mt-0.5">Espresso artesanal moído na hora, cerveja gelada e Wi-Fi de alta velocidade.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#0F172A]">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000"
                alt="Ambiente Barbearia"
                className="w-full h-[460px] object-cover filter brightness-[0.9] contrast-[1.08]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-transparent to-transparent" />

              {/* Floating Testimonial Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#090D16]/90 border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#F8FAFC] block uppercase tracking-wider">
                      Compromisso de Excelência
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">
                      Biossegurança hospitalar e precisão em cada traço.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS SECTION: 15+ anos, 10.000+ clientes, 5 barbeiros, 4.9 nota */}
        <div className="pt-12 pb-16 border-y border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {STATS_DATA.map((stat, idx) => (
              <motion.div
                key={stat.label}
                id={`stat-card-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col text-left group"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight mb-2 group-hover:text-[#C5A059] transition-colors">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value === 4.9 ? 1 : 0}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#F8FAFC] mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Barbers / Experts Showcase */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C5A059] block mb-2">
              Corpo Técnico
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F8FAFC] tracking-tight">
              Mestres da Navalha & Tesoura
            </h3>
            <p className="text-sm text-[#94A3B8] mt-2">
              Profissionais experientes dedicados a valorizar sua imagem com técnica refinada e discrição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BARBERS_DATA.map((barber, index) => (
              <motion.div
                key={barber.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 flex flex-col items-center text-center group border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-5 border-2 border-[#C5A059]/40 p-1 bg-[#090D16] group-hover:border-[#C5A059] transition-colors">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover rounded-full filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-display text-xl font-bold uppercase text-[#F8FAFC] tracking-tight">
                  {barber.name}
                </h4>
                <span className="text-xs font-semibold text-[#C5A059] tracking-wider uppercase mt-1 mb-2">
                  {barber.role}
                </span>
                <span className="text-[11px] text-[#CBD5E1] bg-white/5 px-2.5 py-0.5 rounded-full mb-3 font-mono-num">
                  {barber.experience}
                </span>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {barber.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
