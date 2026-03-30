import { LifeBuoy } from "lucide-react";
import Link from "next/link";

export default function ApoioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center justify-center text-center min-h-[70vh]">
      <div className="w-24 h-24 rounded-full bg-mint/10 flex items-center justify-center mb-8 border border-mint/20">
        <LifeBuoy className="w-12 h-12 text-mint" />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Apoio ao Cidadão</h1>
      <p className="text-gray-400 text-lg max-w-2xl mb-8">
        O sistema integrado de Apoio ao Cidadão está em manutenção agendada para otimização da base de dados.
        Por favor, se precisar de assistência imediata, utilize as nossas linhas de emergência.
      </p>
      <Link href="/emergencia" className="bg-mint text-charcoal px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors shadow-lg">
        Linhas de Emergência
      </Link>
    </div>
  );
}
