import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Scissors, Check, MessageSquare } from 'lucide-react';
import { SERVICES_DATA, BARBERS_DATA, BUSINESS_INFO } from '../data/barbershopData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService = '',
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('corte-masculino');
  const [selectedBarberId, setSelectedBarberId] = useState<string>('qualquer');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('14:30');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [step, setStep] = useState<'form' | 'success'>('form');

  useEffect(() => {
    if (preSelectedService) {
      const match = SERVICES_DATA.find(
        (s) => s.name.toLowerCase() === preSelectedService.toLowerCase()
      );
      if (match) {
        setSelectedServiceId(match.id);
      }
    }
  }, [preSelectedService]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const selectedBarber = BARBERS_DATA.find((b) => b.id === selectedBarberId);

  const availableHours = [
    '09:00', '10:00', '11:00', '13:30', '14:30', '15:30', '16:30', '17:30', '18:30'
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const barberName = selectedBarber ? selectedBarber.name : 'Primeiro barbeiro disponível';

    const msg = `*Agendamento — Barbearia*\n\n` +
      `👤 *Cliente:* ${name}\n` +
      `📱 *Contato:* ${phone}\n` +
      `✂️ *Serviço:* ${selectedService.name} (R$ ${selectedService.price})\n` +
      `💈 *Barbeiro:* ${barberName}\n` +
      `📅 *Data desejada:* ${date}\n` +
      `⏰ *Horário:* ${timeSlot}\n\n` +
      `Gostaria de confirmar esse horário!`;

    const url = `https://wa.me/${BUSINESS_INFO.phoneClean}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setStep('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="booking-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            id="booking-modal-content"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="relative w-full max-w-xl bg-[#090D16] border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="booking-modal-close"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {step === 'success' ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F8FAFC]">
                  Solicitação Enviada!
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  O WhatsApp da Barbearia foi iniciado com todos os detalhes do seu agendamento. Nossa equipe confirmará o horário em instantes.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-xs font-bold uppercase tracking-wider text-[#F8FAFC] border border-white/20"
                  >
                    Fechar Janela
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 pr-8">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0F172A] border border-white/10 text-[10px] font-bold uppercase tracking-wider text-[#C5A059] mb-2">
                    <Scissors className="w-3 h-3" />
                    <span>Agendamento Rápido</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F8FAFC] tracking-tight">
                    Agende seu Atendimento
                  </h3>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Selecione o serviço, data e barbeiro de preferência.
                  </p>
                </div>

                <form onSubmit={handleConfirm} className="space-y-5">
                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                      1. Selecione o Serviço
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES_DATA.map((srv) => (
                        <div
                          key={srv.id}
                          onClick={() => setSelectedServiceId(srv.id)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 ${
                            selectedServiceId === srv.id
                              ? 'bg-[#0F172A] border-[#C5A059] shadow-md'
                              : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-[#F8FAFC]">{srv.name}</span>
                            <span className="text-xs font-bold text-[#C5A059] font-mono-num">
                              R$ {srv.price}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#94A3B8] block mt-0.5 font-mono-num">
                            {srv.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Barber Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                      2. Barbeiro Preferido
                    </label>
                    <select
                      value={selectedBarberId}
                      onChange={(e) => setSelectedBarberId(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-xs focus:outline-none"
                    >
                      <option value="qualquer">Qualquer barbeiro disponível</option>
                      {BARBERS_DATA.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name} ({b.role})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        3. Data
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-xs focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-2">
                        4. Horário
                      </label>
                      <select
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-xs focus:outline-none"
                      >
                        {availableHours.map((hr) => (
                          <option key={hr} value={hr}>
                            {hr}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-xs placeholder:text-[#64748B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#CBD5E1] mb-1.5">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(13) 99711-0101"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#090D16] border border-white/15 focus:border-[#C5A059] text-[#F8FAFC] text-xs placeholder:text-[#64748B] focus:outline-none font-mono-num"
                      />
                    </div>
                  </div>

                  {/* Summary & Confirm button */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex justify-between items-center mb-4 text-xs">
                      <span className="text-[#94A3B8]">Total do Serviço:</span>
                      <span className="text-[#F8FAFC] font-extrabold text-base font-mono-num">
                        R$ {selectedService.price}
                      </span>
                    </div>

                    <button
                      type="submit"
                      id="modal-confirm-whatsapp-btn"
                      className="w-full py-4 px-6 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-bold uppercase tracking-widest border border-[#C5A059] flex items-center justify-center gap-2 shadow-xl hover:shadow-[#C5A059]/20 transition-all duration-300 cursor-pointer active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                      <span>Confirmar Horário no WhatsApp</span>
                    </button>
                    <p className="text-[10px] text-center text-[#64748B] mt-2">
                      Conexão direta com a recepção da Barbearia · {BUSINESS_INFO.phone}
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
