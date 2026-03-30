"use client";

import { useState } from "react";
import { Bus, MapPin, Search, ArrowRightLeft, DollarSign } from "lucide-react";

const rotasData = [
  {
    id: 1,
    origem: "Baixa (Museu)",
    destino: "Zimpeto",
    preco: "15,00 MZN",
    status: "Regular",
    paragens: ["Benfica", "Junta", "Malhazine", "Zimpeto"]
  },
  {
    id: 2,
    origem: "Baixa",
    destino: "Xiquelene",
    preco: "15,00 MZN",
    status: "Intenso",
    paragens: ["Alto Maé", "Polana", "Praça dos Heróis", "Xiquelene"]
  },
  {
    id: 3,
    origem: "Malhasine",
    destino: "Costa do Sol",
    preco: "20,00 MZN",
    status: "Pouco Movimento",
    paragens: ["Magoanine", "Albasine", "Chiango", "Costa do Sol"]
  },
  {
    id: 4,
    origem: "Matola Gare",
    destino: "Baixa",
    preco: "50,00 MZN (Comboio/Metro)",
    status: "Regular",
    paragens: ["Machava", "Infulene", "Maputo Estação"]
  }
];

export default function Transporte() {
  const [busca, setBusca] = useState("");

  const filtradas = rotasData.filter(r => 
    r.origem.toLowerCase().includes(busca.toLowerCase()) ||
    r.destino.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col w-full min-h-[80vh]">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Bus className="text-mint" /> Rotas de Chapa
        </h1>
        <p className="text-sm text-gray-400">Verifique os preços e rotas do transporte público.</p>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Pesquisar origem ou destino..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full bg-surface border border-surface-light rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-mint focus:border-mint shadow-sm transition-all placeholder-gray-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtradas.length > 0 ? (
          filtradas.map((r) => (
            <div key={r.id} className="bg-surface p-5 rounded-2xl shadow-sm border border-surface-light flex flex-col relative overflow-hidden transition-all">
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3 w-full">
                  <div className="font-bold text-white text-lg">{r.origem}</div>
                  <ArrowRightLeft className="w-5 h-5 text-gray-500 shrink-0" />
                  <div className="font-bold text-mint text-lg">{r.destino}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-mint/10 text-mint border border-mint/20 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5" /> {r.preco}
                </span>
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${r.status === 'Intenso' ? 'bg-orange-900/30 text-orange-400 border-orange-500/30' : 'bg-gray-800 text-gray-300 border-gray-700'}`}>
                  {r.status}
                </span>
              </div>

              <div className="pt-3 border-t border-surface-light">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1.5 font-medium uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" /> Principais Paragens
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {r.paragens.join(" ➔ ")}
                </p>
              </div>

            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-surface rounded-2xl border border-dashed border-surface-light">
            <p className="text-gray-400 text-sm">Nenhuma rota encontrada para "{busca}".</p>
          </div>
        )}
      </div>

    </div>
  );
}
