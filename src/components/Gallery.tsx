import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ZoomIn, Scissors, Calendar } from 'lucide-react';
import { GALLERY_DATA } from '../data/barbershopData.ts';
import { GalleryItem } from '../types.ts';

interface GalleryProps {
  onOpenBooking: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filters = ['Todos', 'Corte', 'Barba', 'Ambiente'];

  const filteredItems = activeFilter === 'Todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="galeria" className="pt-20 sm:pt-28 pb-6 sm:pb-8 relative bg-[#090D16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0F172A] border border-white/10 mb-4">
              <Camera className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#CBD5E1]">
                Portfólio de Mestria
              </span>
            </div>
            <h2
              id="gallery-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F8FAFC] leading-none"
            >
              Galeria & <span className="text-[#C5A059]">Espaço</span>
            </h2>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                id={`filter-btn-${filter.toLowerCase()}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#0F172A] text-[#F8FAFC] border border-[#C5A059] shadow-lg shadow-[#C5A059]/10'
                    : 'bg-white/5 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/10 border border-transparent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-[#0F172A] border border-white/10 aspect-[4/3] cursor-pointer shadow-lg hover:border-white/25 transition-all duration-300"
                onClick={() => setSelectedPhoto(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-[0.9] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090D16] via-[#090D16]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#CBD5E1] border border-white/10">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F8FAFC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-4 h-4 text-[#C5A059]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-[#F8FAFC] tracking-tight leading-tight group-hover:text-[#C5A059] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] shrink-0">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold uppercase text-[#F8FAFC] tracking-tight">
                Gostou de algum estilo ou acabamento?
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                Mostre a foto diretamente ao seu barbeiro durante a sua consultoria inicial.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#090D16] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-bold uppercase tracking-wider border border-white/20 hover:border-[#C5A059] shrink-0 transition-all duration-300 cursor-pointer"
          >
            Entrar em contato
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-4xl w-full bg-[#0F172A] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-[#F8FAFC] flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Fechar prévia"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video sm:aspect-[16/10] w-full bg-[#090D16]">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-[#F8FAFC] mt-1">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] mt-1">
                    {selectedPhoto.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedPhoto(null);
                    onOpenBooking();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#090D16] hover:bg-[#1E293B] text-[#F8FAFC] text-xs font-bold uppercase tracking-wider border border-[#C5A059] shrink-0"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>Entrar em contato</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
