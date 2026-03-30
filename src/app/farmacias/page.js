"use client";

import { useState } from "react";
import { Pill, Search, MapPin, Phone, Clock } from "lucide-react";

const farmaciasData = [
  {
    id: 1,
    nome: "Farmácia Neves",
    endereco: "Av. 24 de Julho, Maputo",
    provincia: "Maputo Cidade",
    contacto: "84 500 1111",
    status: "Aberta 24h",
  },
  {
    id: 2,
    nome: "Farmácia Esperança",
    endereco: "Av. de Angola, Maputo",
    provincia: "Maputo Cidade",
    contacto: "82 500 2222",
    status: "Encerrada (Abre às 08h)",
  },
  {
    id: 3,
    nome: "Farmácia Popular Matola",
    endereco: "Fomento, Rua Principal",
    provincia: "Maputo Província",
    contacto: "87 500 3333",
    status: "Aberta 24h",
  },
  {
    id: 4,
    nome: "Farmácia Central Beira",
    endereco: "Macuti, Beira",
    provincia: "Sofala",
    contacto: "84 500 4444",
    status: "Aberta 24h",
  }
];

export default function Farmacias() {
  const [busca, setBusca] = useState("");

  const filtradas = farmaciasData.filter(f => 
    f.nome.toLowerCase().includes(busca.toLowerCase()) ||
    f.provincia.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col w-full min-h-[80vh]">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Pill className="text-mint" /> Farmácias de Serviço
        </h1>
        <p className="text-sm text-gray-400">Encontre farmácias abertas perto de si.</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Pesquisar por nome ou província..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full bg-surface border border-surface-light rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint shadow-sm transition-all placeholder-gray-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtradas.length > 0 ? (
          filtradas.map((f) => (
            <div key={f.id} className="bg-surface p-5 rounded-2xl shadow-sm border border-surface-light flex flex-col gap-3 relative overflow-hidden transition-all hover:border-mint/50">
              <div className="flex justify-between items-start pt-1">
                <h2 className="font-bold text-white text-lg leading-tight">{f.nome}</h2>
              </div>
              
              <div className="flex items-center gap-2 text-xs">
                {f.status.includes("24h") ? (
                  <span className="px-2 py-1 rounded-md font-medium bg-mint/10 text-mint border border-mint/20 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {f.status}
                  </span>
                ) : (
                  <span className="px-2 py-1 rounded-md font-medium bg-red-900/30 text-red-400 border border-red-500/30 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {f.status}
                  </span>
                )}
                <span className="text-gray-400">• {f.provincia}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-300 mt-2">
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{f.endereco}</span>
              </div>
              
              <div className="flex items-center gap-2 text-sm mt-1">
                <Phone className="w-4 h-4 text-mint" />
                <a href={`tel:+258${f.contacto.replace(/\s/g,'')}`} className="text-mint font-semibold hover:text-mint-hover transition-colors">
                  +258 {f.contacto}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-surface rounded-2xl border border-dashed border-surface-light">
            <p className="text-gray-400 text-sm">Nenhuma farmácia encontrada para "{busca}".</p>
          </div>
        )}
      </div>

    </div>
  );
}
