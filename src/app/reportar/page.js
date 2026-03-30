"use client";

import { useState } from "react";
import { AlertCircle, Zap, Droplet, CheckCircle2 } from "lucide-react";

export default function Reportar() {
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contacto = formData.get("contacto");
    
    // Quick validation
    if (!contacto || contacto.length < 8) {
      setErro("Por favor, insira um número de telefone válido em Moçambique.");
      return;
    }

    setErro("");
    // Simulate API delay
    setTimeout(() => {
      setEnviado(true);
    }, 600);
  };

  if (enviado) {
    return (
      <div className="p-8 flex flex-col items-center justify-center h-[70vh] text-center">
        <div className="w-20 h-20 bg-mint/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-mint" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Relatório Enviado!</h2>
        <p className="text-gray-400 mb-8">
          A sua ocorrência foi registada com sucesso na rede. As equipas técnicas serão notificadas.
        </p>
        <button 
          onClick={() => setEnviado(false)}
          className="bg-mint hover:bg-mint-hover text-charcoal px-6 py-4 rounded-xl font-bold w-full max-w-xs transition-colors text-lg"
        >
          Reportar Nova Falha
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col w-full max-w-3xl min-h-[80vh]">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <AlertCircle className="text-mint" /> Reportar Falha
        </h1>
        <p className="text-sm text-gray-400">Comunique emergências ou cortes de serviços públicos na sua zona.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        {/* Type Selection */}
        <div className="flex gap-3">
          <label className="flex-1 cursor-pointer">
            <input type="radio" name="tipo" value="energia" className="peer sr-only" defaultChecked />
            <div className="rounded-xl bg-surface border-2 border-surface-light p-4 text-center peer-checked:border-mint peer-checked:bg-mint/10 transition-all">
              <Zap className="w-6 h-6 mx-auto mb-2 text-mint" />
              <span className="font-semibold text-white text-sm">Energia (EDM)</span>
            </div>
          </label>
          <label className="flex-1 cursor-pointer">
            <input type="radio" name="tipo" value="agua" className="peer sr-only" />
            <div className="rounded-xl bg-surface border-2 border-surface-light p-4 text-center peer-checked:border-mint peer-checked:bg-mint/10 transition-all">
              <Droplet className="w-6 h-6 mx-auto mb-2 text-mint" />
              <span className="font-semibold text-white text-sm">Água (FIPAG)</span>
            </div>
          </label>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">Província</label>
          <select required className="w-full p-4 bg-surface border border-surface-light rounded-xl focus:ring-2 focus:ring-mint focus:border-mint outline-none text-white text-base appearance-none">
            <option value="" className="text-gray-500">Selecione a província</option>
            <option value="maputo-cidade">Maputo Cidade</option>
            <option value="maputo-prov">Maputo Província</option>
            <option value="gaza">Gaza</option>
            <option value="inhambane">Inhambane</option>
            <option value="sofala">Sofala</option>
            <option value="manica">Manica</option>
            <option value="zambezia">Zambézia</option>
            <option value="tete">Tete</option>
            <option value="nampula">Nampula</option>
            <option value="cabo-delgado">Cabo Delgado</option>
            <option value="niassa">Niassa</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">Bairro / Rua Específica</label>
          <input 
            type="text" 
            required 
            placeholder="Ex: Bairro do Zimpeto, Rua 3..." 
            className="w-full p-4 bg-surface border border-surface-light rounded-xl focus:ring-2 focus:ring-mint focus:border-mint outline-none text-white text-base placeholder-gray-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-300">Contacto de Telefone</label>
          <input 
            type="tel" 
            name="contacto"
            required 
            placeholder="84 000 0000" 
            className="w-full p-4 bg-surface border border-surface-light rounded-xl focus:ring-2 focus:ring-mint focus:border-mint outline-none text-white text-base placeholder-gray-500"
          />
        </div>

        {/* Error State */}
        {erro && (
          <div className="p-3 bg-red-900/30 border border-red-500/50 rounded-lg text-red-400 text-sm font-medium">
            {erro}
          </div>
        )}

        <button type="submit" className="mt-4 w-full bg-mint hover:bg-mint-hover active:bg-mint-hover text-charcoal font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all text-lg tracking-wide uppercase">
          Enviar Urgente
        </button>
      </form>
    </div>
  );
}
