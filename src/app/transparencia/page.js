import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function TransparenciaPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center justify-center text-center min-h-[70vh]">
      <div className="w-24 h-24 rounded-full bg-mint/10 flex items-center justify-center mb-8 border border-mint/20">
        <ShieldCheck className="w-12 h-12 text-mint" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Portal da Transparência</h1>
      <p className="text-gray-400 text-lg max-w-2xl mb-8">
        Aceda aos relatórios públicos de prestação de contas, orçamentos anuais e auditorias governamentais da infraestrutura digital Zuca.
      </p>
      <div className="flex gap-4">
        <button className="bg-surface text-white border border-surface-light px-8 py-4 rounded-xl font-bold cursor-not-allowed opacity-50">
          Relatório 2025 (PDF)
        </button>
        <Link href="/" className="bg-mint text-charcoal px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors">
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
}
