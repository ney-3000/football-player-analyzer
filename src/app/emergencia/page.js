"use client";

import { Phone, ShieldAlert, Flame, Ambulance, Siren } from "lucide-react";

export default function Emergencia() {
  const contactos = [
    {
      titulo: "Número Nacional de Emergência",
      numero: "112",
      descricao: "Contacte para qualquer emergência crítica a nível nacional.",
      icone: <Siren className="w-8 h-8 text-white" />,
      cor: "bg-red-600",
      borda: "border-red-500",
    },
    {
      titulo: "Polícia da República de Moçambique (PRM)",
      numero: "119",
      descricao: "Apoio policial rápido (Piquete Provincial).",
      icone: <ShieldAlert className="w-8 h-8 text-white" />,
      cor: "bg-blue-600",
      borda: "border-blue-500",
    },
    {
      titulo: "Serviço Nacional de Salvação Pública (Bombeiros)",
      numero: "198",
      descricao: "Incêndios, resgates e inundações drásticas.",
      icone: <Flame className="w-8 h-8 text-white" />,
      cor: "bg-orange-500",
      borda: "border-orange-400",
    },
    {
      titulo: "Inem / Ambulância Piquete Central",
      numero: "117",
      descricao: "Assistência médica pré-hospitalar via Serviço Nacional de Saúde.",
      icone: <Ambulance className="w-8 h-8 text-white" />,
      cor: "bg-green-600",
      borda: "border-green-500",
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col w-full min-h-[80vh]">
      
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3 flex items-center gap-3 tracking-tight">
          <Phone className="text-mint w-8 h-8" /> Números de Emergência
        </h1>
        <p className="text-base text-gray-400 leading-relaxed">
          Pressione qualquer número abaixo para efetuar a chamada imediatamente do seu telemóvel. Todas as chamadas para as linhas 1xx são <strong className="text-white">gratuitas</strong> em Moçambique.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactos.map((c, index) => (
          <a 
            key={index}
            href={`tel:${c.numero}`}
            className="flex flex-col group relative overflow-hidden bg-surface border border-surface-light rounded-3xl p-6 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all h-full min-h-[220px]"
          >
            {/* Background Glow */}
            <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity ${c.cor}`}></div>
            
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg border ${c.cor} ${c.borda} z-10 group-hover:scale-110 transition-transform`}>
              {c.icone}
            </div>
            
            <div className="z-10 flex-1">
              <h2 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-mint transition-colors">{c.titulo}</h2>
              <p className="text-sm text-gray-400 font-medium leading-relaxed">{c.descricao}</p>
            </div>

            <div className="mt-6 z-10 flex items-center justify-between pt-4 border-t border-surface-light">
              <span className="text-2xl font-black tracking-widest text-white">{c.numero}</span>
              <span className="bg-surface-light text-mint rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider group-hover:bg-white group-hover:text-charcoal transition-colors">
                Ligar Agora
              </span>
            </div>

          </a>
        ))}
      </div>

    </div>
  );
}
