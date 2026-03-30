import Link from "next/link";
import { Home, LifeBuoy, ShieldCheck, Lock } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#121212] border-t border-surface z-[9999] opacity-100 pb-safe md:hidden">
      <div className="flex justify-around items-center h-16 w-full px-2">
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-mint hover:bg-surface active:bg-surface-light transition-colors">
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Início</span>
        </Link>
        <Link href="/apoio" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-mint hover:bg-surface active:bg-surface-light transition-colors">
          <LifeBuoy className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Apoio</span>
        </Link>
        <Link href="/transparencia" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-mint hover:bg-surface active:bg-surface-light transition-colors">
          <ShieldCheck className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Portal</span>
        </Link>
        <Link href="/area-reservada" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-mint hover:bg-surface active:bg-surface-light transition-colors">
          <Lock className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Privado</span>
        </Link>
      </div>
    </nav>
  );
}
