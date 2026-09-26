import { ServiceItem, BarberExpert, GalleryItem, Testimonial } from '../types.ts';

export const BUSINESS_INFO = {
  name: "Barbearia",
  tagline: "Estilo & Tradição",
  slogan: "A autoridade máxima em cuidados masculinos. Não é apenas um corte; é a sua assinatura de presença.",
  address: "Avenida Central, nº 1234 - Centro (Endereço Demonstrativo / Teste)",
  phone: "(13) 99711-0101",
  phoneClean: "5513997110101",
  hoursWeekday: "Terça a Sábado: 08:30 às 19:30",
  hoursWeekend: "Domingo e Segunda: Fechado (atendimento VIP sob consulta)",
  googleMapsUrl: "https://maps.google.com/?q=Avenida+Central",
  whatsappDefaultMsg: "Olá! Gostaria de agendar um horário na Barbearia.",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corte-masculino",
    name: "Corte Masculino",
    price: 40,
    duration: "45 min",
    description: "Visagismo sob medida, fade milimétrico, tesoura de precisão e finalização com pomadas nobres de alta fixação.",
    highlights: ["Visagismo e consultoria facial", "Lavagem com shampoo mentolado", "Finalização e styling com secador"],
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=900",
    popular: true,
    badge: "Mais Procurado"
  },
  {
    id: "barba-tradicional",
    name: "Barba",
    price: 45,
    duration: "35 min",
    description: "Ritual completo com toalha quente aromatizada, hidratação de pele, alinhamento na navalha afiada e óleo pós-barba nutritivo.",
    highlights: ["Emoliência com toalha a vapor", "Navalhete descartável e higienizado", "Bálsamo anti-irritação e tônico"],
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=900",
    popular: false,
    badge: "Ritual Clássico"
  },
  {
    id: "combo-imperial",
    name: "Combo Imperial (Corte + Barba)",
    price: 75,
    duration: "75 min",
    description: "A experiência completa de transformação. Corte cirúrgico alinhado ao desenho imponente de barba com toalha quente e bebida cortesia.",
    highlights: ["Corte completo + Barboterapia", "Alinhamento com lâmina japonesa", "Bebida do lounge cortesia"],
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=900",
    popular: true,
    badge: "Experiência VIP"
  }
];

export const BARBERS_DATA: BarberExpert[] = [
  {
    id: "arthur",
    name: "Arthur Santos",
    role: "Master Barber & Fundador",
    experience: "15 anos de arte",
    specialty: "Cortes Clássicos, Visagismo e Barba na Toalha",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "lucas",
    name: "Lucas Menezes",
    role: "Especialista em Degradê & Fade",
    experience: "8 anos de ofício",
    specialty: "Skin Fade, Low Fade e Linhas Geométricas",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "diego",
    name: "Diego Oliveira",
    role: "Barber Stylist & Visagista",
    experience: "7 anos de ofício",
    specialty: "Alinhamento de Fios, Visagismo Masculino e Barba",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
  }
];

export const STATS_DATA = [
  {
    value: 15,
    suffix: "+",
    label: "Anos de Tradição",
    description: "Construindo legados e moldando a identidade visual dos homens mais exigentes."
  },
  {
    value: 10000,
    suffix: "+",
    label: "Clientes Atendidos",
    description: "Histórias, relacionamentos de confiança e pontualidade britânica em cada cadeira."
  },
  {
    value: 5,
    suffix: "",
    label: "Barbeiros Especialistas",
    description: "Equipe treinada continuamente nas técnicas mais refinadas de corte e barboterapia."
  },
  {
    value: 4.9,
    suffix: "/5.0",
    label: "Avaliação Média",
    description: "Índice de satisfação unânime certificado por mais de 800 avaliações verificadas."
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Fade Milimétrico & Navalhado",
    category: "Corte",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=900",
    description: "Transição suave e acabamento com lâmina de precisão."
  },
  {
    id: "gal-2",
    title: "Barboterapia com Toalha a Vapor",
    category: "Barba",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=900",
    description: "Relaxamento dos poros, óleos nobres e lâmina cirúrgica."
  },
  {
    id: "gal-3",
    title: "O Lounge Barbearia",
    category: "Ambiente",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=900",
    description: "Poltronas de couro legítimo, iluminação âmbar e café especial."
  },
  {
    id: "gal-5",
    title: "Finalização & Styling Impecável",
    category: "Corte",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=900",
    description: "Texturização precisa com produtos nobres e acabamento natural."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Marcelo Guimarães",
    role: "Advogado & Cliente há 4 anos",
    rating: 5,
    comment: "Na Barbearia o atendimento é outro patamar. Pontualidade impecável, toalha quente revigorante e o corte mantém o padrão impecável por semanas. Não troco por nenhuma outra.",
    date: "Cliente Frequente"
  },
  {
    id: "t2",
    name: "Rodrigo Fontes",
    role: "Empresário",
    rating: 5,
    comment: "O ambiente transmite respeito e sofisticação logo na entrada. Fazer a barba aqui é um momento de desconexão e descanso. O acabamento da navalha é perfeito.",
    date: "Cliente Frequente"
  },
  {
    id: "t3",
    name: "Felipe Andrade",
    role: "Engenheiro Civil",
    rating: 5,
    comment: "Melhor degradê que já fiz sem sombra de dúvidas. Os profissionais entendem de visagismo de verdade e sabem exatamente o que combina com o seu rosto.",
    date: "Cliente Frequente"
  }
];
