import { Briefcase, Building2, MapPin, Calendar, ArrowRight } from "lucide-react";

const vagasData = [
  {
    id: 1,
    cargo: "Técnico de Manutenção Sénior",
    empresa: "EDM - Electricidade de Moçambique",
    local: "Maputo Cidade",
    salario: "45.000 MZN - 55.000 MZN",
    tipo: "Tempo Inteiro",
    expira: "2 Dias",
    url: "https://emprego.co.mz/vagas/tecnico-de-manutencao-senior-edm/",
  },
  {
    id: 2,
    cargo: "Professor de Informática",
    empresa: "Universidade Eduardo Mondlane",
    local: "Maputo Cidade",
    salario: "35.000 MZN",
    tipo: "Tempo Inteiro",
    expira: "1 Semana",
    url: "https://www.uem.mz/concursos-e-vagas",
  },
  {
    id: 3,
    cargo: "Motorista de Chapa (Licença)",
    empresa: "Transportes Nacionais Lda",
    local: "Matola",
    salario: "12.000 MZN + Bónus",
    tipo: "Tempo Inteiro",
    expira: "Hoje",
    url: "https://emprego.co.mz/vagas/motorista-de-chapa-100/",
  },
  {
    id: 4,
    cargo: "Enfermeira de Serviço",
    empresa: "Clínica Sagrada Esperança",
    local: "Beira, Sofala",
    salario: "Confidencial",
    tipo: "Turnos",
    expira: "3 Dias",
    url: "https://emprego.co.mz/vagas/enfermeira-de-servico/",
  }
];

export default function Vagas() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 flex flex-col w-full min-h-[80vh]">
      
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
          <Briefcase className="text-mint" /> Vagas de Emprego
        </h1>
        <p className="text-sm text-gray-400">Oportunidades recentes focadas no mercado nacional.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {vagasData.map((vaga) => (
          <div key={vaga.id} className="bg-surface p-5 rounded-2xl shadow-sm border border-surface-light hover:border-mint/60 transition-colors group">
            <h2 className="font-bold text-lg text-white leading-tight mb-3 group-hover:text-mint transition-colors">{vaga.cargo}</h2>
            
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Building2 className="w-4 h-4 text-mint shrink-0" />
                <span className="font-medium">{vaga.empresa}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0" />
                <span>{vaga.local}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm font-bold text-charcoal bg-mint w-fit px-3 py-1.5 rounded-lg">
                <span>{vaga.salario}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-surface-light">
              <div className="flex items-center gap-1.5 text-xs text-orange-400 font-medium">
                <Calendar className="w-3.5 h-3.5" /> Expira em: {vaga.expira}
              </div>
              <a 
                href={vaga.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-surface-light hover:bg-white text-white hover:text-charcoal font-semibold text-sm px-4 py-2 rounded-lg transition-all shadow-sm"
              >
                Detalhes <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
