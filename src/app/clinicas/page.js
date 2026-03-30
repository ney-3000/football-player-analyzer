"use client";

import { useState } from "react";
import { Search, MapPin, Phone, Hospital } from "lucide-react";

const clinicasData = [
  {
    id: 1,
    nome: "Hospital Central de Maputo",
    tipo: "Público",
    endereco: "Av. Agostinho Neto, Maputo",
    provincia: "Maputo Cidade",
    contacto: "82 000 0001",
    urgencia: true,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hospital+Central+de+Maputo"
  },
  {
    id: 2,
    nome: "Hospital Geral José Macamo",
    tipo: "Público",
    endereco: "Av. de Moçambique, Maputo",
    provincia: "Maputo Cidade",
    contacto: "84 000 0002",
    urgencia: true,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hospital+Geral+José+Macamo"
  },
  {
    id: 3,
    nome: "Clínica Especial de Maputo",
    tipo: "Privado",
    endereco: "Av. 24 de Julho",
    provincia: "Maputo Cidade",
    contacto: "84 100 0003",
    urgencia: false,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Clínica+Especial+de+Maputo+Av+24+de+Julho"
  },
  {
    id: 4,
    nome: "Hospital Provincial da Matola",
    tipo: "Público",
    endereco: "Matola Sede",
    provincia: "Maputo Província",
    contacto: "87 200 0004",
    urgencia: true,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hospital+Provincial+da+Matola"
  },
  {
    id: 5,
    nome: "Hospital Central da Beira",
    tipo: "Público",
    endereco: "Bairro do Macuti, Beira",
    provincia: "Sofala",
    contacto: "84 300 0005",
    urgencia: true,
    mapLink: "https://www.google.com/maps/search/?api=1&query=Hospital+Central+da+Beira"
  }
];

export default function Clinicas() {
  const [busca, setBusca] = useState("");

  const clincasFiltradas = clinicasData.filter(c => 
    c.nome.toLowerCase().includes(busca.toLowerCase()) ||
    c.provincia.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col w-full min-h-[80vh]">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Hospital className="text-mint" /> Clínicas e Hospitais
        </h1>
        <p className="text-sm text-gray-400">Encontre a unidade de saúde mais próxima de si.</p>
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
        {clincasFiltradas.length > 0 ? (
          clincasFiltradas.map((c) => (
            <div key={c.id} className="bg-surface p-5 rounded-2xl shadow-sm border border-surface-light flex flex-col gap-3 relative overflow-hidden transition-all hover:border-mint/50">
              {c.urgencia && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl tracking-wider">
                  URGÊNCIAS 24H
                </div>
              )}
              
              <div className="flex justify-between items-start pt-1">
                <h2 className="font-bold text-white text-lg pr-20 leading-tight">{c.nome}</h2>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className={`px-2 py-0.5 rounded-md font-medium border ${c.tipo === 'Público' ? 'bg-blue-900/30 text-blue-400 border-blue-500/30' : 'bg-purple-900/30 text-purple-400 border-purple-500/30'}`}>
                  {c.tipo}
                </span>
                <span>• {c.provincia}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-300 mt-2">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                <a href={c.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors underline decoration-gray-500 hover:decoration-mint underline-offset-4">
                  {c.endereco}
                </a>
              </div>
              
              <div className="flex items-center gap-2 text-sm mt-1">
                <Phone className="w-4 h-4 text-mint" />
                <a href={`tel:+258${c.contacto.replace(/\s/g,'')}`} className="text-mint font-semibold hover:text-mint-hover transition-colors">
                  +258 {c.contacto}
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-surface rounded-2xl border border-dashed border-surface-light">
            <p className="text-gray-400 text-sm">Nenhuma clínica encontrada para "{busca}".</p>
          </div>
        )}
      </div>

    </div>
  );
}
