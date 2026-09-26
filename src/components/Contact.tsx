import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageCircle, Navigation, Scissors, Calendar } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/barbershopData.ts';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'Corte Masculino',
    date: '',
    time: '14:00',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build friendly WhatsApp message
    const message = `Olá, equipe Barbearia! Me chamo *${formData.name}*.\n\n` +
      `Gostaria de agendar um horário:\n` +
      `✂️ *Serviço:* ${formData.service}\n` +
      (formData.date ? `📅 *Data:* ${formData.date}\n` : '') +
      (formData.time ? `⏰ *Horário:* ${formData.time}\n` : '') +
      (formData.notes ? `📝 *Observação:* ${formData.notes}\n` : '') +
      `\nAguardo a confirmação da disponibilidade. Obrigado!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${encoded}`;

    setSubmitted(true);
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative bg-[#090D16] border-t border-white/5">
      {/* Background radial spotlight */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0F172A]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F172A] border border-white/10 mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#CBD5E1]">
              Agendamento & Localização
            </span>
          </div>
          <h2
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F8FAFC] leading-none mb-6"
          >
            Fale Conosco & <span className="text-[#C5A059]">Agende seu Horário</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] font-body leading-relaxed max-w-2xl mx-auto">
            Atendimento exclusivo com hora marcada para garantir que você não perca tempo esperando. Envie sua solicitação ou venha nos visitar no nosso espaço.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#F8FAFC] tracking-tight">
                    Endereço Oficial
                  </h3>
                  <p className="text-sm text-[#CBD5E1] mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#C5A059] hover:text-[#E0C07A] font-semibold mt-2 group"
                  >
                    <span>Ver rota no Google Maps</span>
                    <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#F8FAFC] tracking-tight">
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-base text-[#F8FAFC] font-semibold tracking-wide font-mono-num mt-1">
                    {BUSINESS_INFO.phone}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Atendimento rápido e confirmação direta de horário.
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-xs font-bold text-[#F8FAFC] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Iniciar conversa no WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#0F172A] border border-white/15 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-[#F8FAFC] tracking-tight">
                    Horário de Atendimento
                  </h3>
                  <div className="text-sm space-y-1.5 mt-2">
                    <div className="flex justify-between gap-4 text-xs">
                      <span className="text-[#94A3B8]">Terça a Sábado:</span>
                      <span className="text-[#F8FAFC] font-medium font-mono-num">08:30 às 19:30</span>
                    </div>
                    <div className="flex justify-between gap-4 text-xs">
                      <span className="text-[#94A3B8]">Domingo e Segunda:</span>
                      <span className="text-[#64748B] italic">Sob consulta prévia</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#C5A059] font-medium mt-3 bg-[#C5A059]/10 p-2 rounded border border-[#C5A059]/20">
                    💡 Dica: Recomendamos agendar com pelo menos 24h de antecedência para garantir seu horário predileto.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Appointment Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
              <div className="mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F8FAFC] tracking-tight">
                  Formulário de Contato & Agendamento
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5">
                  Preencha seus dados para conectar-se diretamente ao nosso sistema de atendimento.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold uppercase text-[#F8FAFC]">
                    Solicitação Encaminhada!
                  </h4>
                  <p className="text-sm text-[#CBD5E1] max-w-md mx-auto">
                    Seu agendamento foi aberto no WhatsApp da Barbearia. Caso a janela não tenha aberto automaticamente, clique no botão abaixo:
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir Conversa Agora</span>
                  </a>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] underline pt-4"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Oliveira"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-sm placeholder:text-[#64748B] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(13) 99711-0101"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-sm placeholder:text-[#64748B] focus:outline-none transition-colors font-mono-num"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                      Serviço Desejado
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-sm focus:outline-none transition-colors cursor-pointer"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.name} className="bg-[#090D16] text-[#F8FAFC]">
                          {s.name} — R$ {s.price} ({s.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Data Preferida
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        Horário Estimado
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-sm focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="09:00">09:00 (Manhã)</option>
                        <option value="10:30">10:30 (Manhã)</option>
                        <option value="13:30">13:30 (Tarde)</option>
                        <option value="15:00">15:00 (Tarde)</option>
                        <option value="16:30">16:30 (Tarde)</option>
                        <option value="18:00">18:00 (Noite)</option>
                        <option value="19:00">19:00 (Noite)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                      Preferências ou Observações (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Prefiro atendimento com barbeiro especialista em degradê..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-sm placeholder:text-[#64748B] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-4 px-6 rounded-xl bg-[#090D16] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-bold uppercase tracking-widest border border-white/25 hover:border-[#C5A059] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 cursor-pointer group active:scale-[0.98]"
                  >
                    <span>Entrar em contato</span>
                    <Send className="w-4 h-4 text-[#C5A059] transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-center text-[#64748B] pt-2">
                    🔒 Seus dados serão utilizados unicamente para a confirmação do seu agendamento.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
