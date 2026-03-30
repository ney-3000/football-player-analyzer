import Link from "next/link";
import { MapPin, AlertCircle, Briefcase, Phone, Pill, Bus, ArrowRight, ShieldCheck, Activity, Globe } from "lucide-react";

export default function Home() {
  const servicos = [
    {
      nome: "Hospitais & Clínicas",
      icone: <MapPin className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />,
      link: "/clinicas",
      desc: "Localize postos de saúde de urgência e farmácias de planta.",
    },
    {
      nome: "Reparações Nacionais",
      icone: <AlertCircle className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />,
      link: "/reportar",
      desc: "Reporte cortes de energia (EDM) e falhas operacionais diretamente.",
    },
    {
      nome: "Bolsa de Vagas",
      icone: <Briefcase className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />,
      link: "/vagas",
      desc: "Acesso direto a oportunidades de carreira no mercado MZN.",
    },
    {
      nome: "Números Vitais",
      icone: <Phone className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />,
      link: "/emergencia",
      desc: "Contactos urgentes: Polícia, Bombeiros, Proteção Civil.",
    },
    {
      nome: "Rede Farmacêutica",
      icone: <Pill className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />,
      link: "/farmacias",
      desc: "Listagem atualizada de farmácias com rastreio 24 horas.",
    },
    {
      nome: "Infraestrutura Viária",
      icone: <Bus className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />,
      link: "/transporte",
      desc: "Monitorize as rotas interprovinciais e urbanas de Chapas.",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* MASSIVE HERO SECTION (Split on Desktop, Stacked on Mobile) */}
      <section className="relative w-full border-b border-surface-light bg-[#0a0a0a] overflow-hidden">
        {/* Aesthetic Background Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwem0yMCAyMGgyMHYyMEgyMHoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 py-16 md:px-12 md:py-32 relative z-10 w-full">
          
          {/* Left Hero Text - Extreme Bold Corporate Feel */}
          <div className="flex flex-col gap-6 w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/30 bg-mint/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-mint animate-pulse"></span>
              <span className="text-xs font-bold text-mint tracking-widest uppercase">Portal Oficial Zuca</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter">
              AÇÃO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-[#00ccff]">DIGITAL</span> <br/>
              AGORA.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-xl">
              Centralizamos a infraestrutura pública e o setor privado moçambicano numa única plataforma ultra-rápida. Corte a burocracia, encontre o que precisa num segundo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/reportar" className="bg-mint text-charcoal px-8 py-5 rounded-xl font-black text-lg hover:bg-white transition-all shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_40px_rgba(0,255,136,0.5)] flex items-center justify-center gap-2 group">
                <AlertCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" /> Reportar Emergência
              </Link>
              <Link href="/vagas" className="bg-surface text-white border border-surface-light hover:border-mint hover:bg-surface-light px-8 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                Acesso à Carreira <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Hero Visual - Live Status Dashboard Mockup */}
          <div className="hidden lg:flex flex-col gap-4 bg-surface p-8 rounded-3xl border border-surface-light shadow-2xl skew-y-2 lg:-skew-x-2 transform transition-all hover:skew-y-0 hover:skew-x-0 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-mint/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-mint/30 transition-all"></div>
            
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="text-mint w-6 h-6" /> Status da Rede Nacional
            </h3>
            
            <div className="flex flex-col gap-3">
              <div className="bg-charcoal p-4 rounded-xl border border-surface-light flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-300">EDM (Electricidade)</div>
                  <div className="text-xs text-mint mt-1">Sistemas Operacionais</div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-surface flex items-center justify-center bg-mint/10">
                  <span className="font-bold text-mint text-sm">99%</span>
                </div>
              </div>

              <div className="bg-charcoal p-4 rounded-xl border border-surface-light flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-300">FIPAG (Águas)</div>
                  <div className="text-xs text-yellow-500 mt-1">Avisos no Canal Sul</div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-surface flex items-center justify-center bg-yellow-500/10">
                  <span className="font-bold text-yellow-500 text-sm">84%</span>
                </div>
              </div>

              <div className="bg-charcoal p-4 rounded-xl border border-surface-light flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-gray-300">Servidores Zuca</div>
                  <div className="text-xs text-mint mt-1">Conexão 5G Activa</div>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-surface flex items-center justify-center bg-mint/10">
                  <span className="font-bold text-mint text-sm">OK</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ENTERPRISE GRID SECTION */}
      <section className="max-w-[1440px] mx-auto w-full px-4 md:px-12 py-12 md:py-24 flex flex-col gap-8 md:gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Catálogo de Resoluções.</h2>
            <p className="text-gray-400 mt-2 text-lg">Acesso imediato às dependências críticas do Estado.</p>
          </div>
          <Link href="/clinicas" className="text-mint font-bold hover:underline flex items-center gap-1 text-lg">
            Explorar Ecossistema <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {servicos.map((servico, index) => (
            <Link 
              key={index} 
              href={servico.link}
              className="group flex flex-col p-8 bg-surface rounded-3xl border border-surface-light hover:border-mint hover:bg-surface-light hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all min-h-[220px] relative overflow-hidden"
            >
              {/* Subtle accent hover glow inside the card */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-mint/5 rounded-full blur-[40px] group-hover:bg-mint/20 transition-all duration-500 pointer-events-none"></div>
              
              <div className="bg-charcoal w-16 h-16 rounded-2xl flex items-center justify-center border border-surface-light group-hover:border-mint/50 transition-colors mb-6 z-10">
                {servico.icone}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 z-10 group-hover:text-mint transition-colors">{servico.nome}</h3>
              <p className="text-sm text-gray-400 font-medium leading-relaxed max-w-[90%] z-10">{servico.desc}</p>
              
              <div className="mt-auto pt-4 flex items-center text-mint text-sm font-bold uppercase tracking-wider opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                Aceder Directório <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Global Footer (Desktop scale) */}
      <footer className="w-full bg-[#0a0a0a] border-t border-surface-light py-12 px-4 md:px-12 mt-auto">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-black text-white">ZUCA<span className="text-mint">.</span></span>
            <span className="text-sm text-gray-500 leading-relaxed text-center md:text-left">
              &copy; {new Date().getFullYear()} Zuca. Todos os direitos reservados.<br/>
              Desenvolvido de raiz por <strong className="text-gray-300">Neyton Muhlanga</strong>.
            </span>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-2 mx-auto md:mx-0">
            <h4 className="font-bold text-white mb-2">Redes Oficiais</h4>
            <a href="https://www.portaldogoverno.gov.mz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint text-sm transition-colors">Governo Eletrónico</a>
            <a href="https://www.edm.co.mz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint text-sm transition-colors">Portal EDM</a>
            <a href="https://www.fipag.co.mz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint text-sm transition-colors">FIPAG Transparência</a>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
             <h4 className="font-bold text-white mb-2">Segurança</h4>
             <span className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-2"><ShieldCheck className="w-4 h-4 text-mint shrink-0"/> Auditoria AIOX</span>
             <span className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-2"><Globe className="w-4 h-4 text-mint shrink-0"/> Redes Vercel 5G</span>
          </div>
          
        </div>
      </footer>

    </div>
  );
}
