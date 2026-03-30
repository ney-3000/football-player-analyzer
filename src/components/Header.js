"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Home, MapPin, AlertCircle, Briefcase, Pill, Bus, Search, ShieldCheck, LifeBuoy, Lock } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  const links = [
    { name: "Início", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Hospitais & Clínicas", path: "/clinicas", icon: <MapPin className="w-5 h-5" /> },
    { name: "Farmácias", path: "/farmacias", icon: <Pill className="w-5 h-5" /> },
    { name: "Reportar Problema", path: "/reportar", icon: <AlertCircle className="w-5 h-5" /> },
    { name: "Vagas", path: "/vagas", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Transporte", path: "/transporte", icon: <Bus className="w-5 h-5" /> },
  ];

  return (
    <>
      <header className="sticky top-0 w-full z-50 flex flex-col">
        {/* Top Utility Bar (Desktop Only) */}
        <div className="hidden md:flex items-center justify-between h-10 px-6 lg:px-12 bg-surface text-gray-300 text-xs font-semibold tracking-wide border-b border-surface-light">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-mint" /> 
            PORTAL SEGURO GOVERNAMENTAL E PRIVADO
          </div>
          <div className="flex items-center gap-6">
            <Link href="/apoio" className="hover:text-white transition-colors">Apoio ao Cidadão</Link>
            <Link href="/transparencia" className="hover:text-white transition-colors">Transparência</Link>
            <Link href="/area-reservada" className="bg-mint text-charcoal px-4 py-1.5 rounded-full hover:bg-white transition-colors hover:shadow-[0_0_10px_rgba(0,255,136,0.3)]">
              Área Reservada
            </Link>
          </div>
        </div>

        {/* Main Header / Desktop Navbar & Mobile Top Bar */}
        <div className="bg-charcoal/95 backdrop-blur-md border-b border-surface w-full shadow-lg">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6 lg:px-12 mx-auto w-full">
            
            {/* Branding */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-mint rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.3)] group-hover:scale-105 transition-transform">
                <span className="text-charcoal font-black text-xl italic tracking-tighter">Z</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-black tracking-tight text-white leading-none">ZUCA<span className="text-mint">.</span></span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase hidden md:block leading-none mt-1">Serviços Moçambique</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <Link 
                    key={idx} 
                    href={item.path} 
                    className={`text-sm font-bold transition-all border-b-2 py-6 ${isActive ? "text-mint border-mint" : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Search / Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-mint transition-colors" />
                <input 
                  type="text" 
                  placeholder="Pesquisar..." 
                  className="bg-surface border border-surface-light rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-mint focus:ring-1 focus:ring-mint transition-all w-64 text-white placeholder-gray-500"
                />
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 -mr-2 rounded-xl hover:bg-surface active:bg-surface-light transition-colors text-white hover:text-mint"
              aria-label="Menu"
            >
              <Menu className="w-7 h-7 outline-none" />
            </button>

          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[99999] bg-charcoal/95 backdrop-blur-xl flex flex-col justify-start w-full h-full animate-in slide-in-from-right-full duration-300 ease-out lg:hidden">
          <div className="flex items-center justify-between h-16 px-4 border-b border-surface w-full">
            <span className="text-xl font-bold text-white tracking-tight">ZUCA Menu</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 -mr-2 rounded-full bg-surface-light hover:bg-white hover:text-charcoal transition-colors text-white"
              aria-label="Encerrar Menu"
            >
              <X className="w-6 h-6 outline-none" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 py-8 w-full">
            <ul className="flex flex-col gap-3">
              {links.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <li key={idx}>
                    <Link 
                      href={item.path}
                      className={`flex items-center gap-4 p-4 rounded-2xl text-lg font-bold transition-all border ${
                        isActive 
                          ? "bg-mint/10 text-mint border-mint/30 shadow-[0_0_15px_rgba(0,255,136,0.1)]" 
                          : "bg-surface text-gray-300 border-surface-light hover:text-white hover:border-gray-500 active:bg-surface-light"
                      }`}
                    >
                      <span className={isActive ? "text-mint" : "text-gray-500"}>{item.icon}</span>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Sub-menu Pyramid Cards */}
            <div className="mt-8 flex flex-col gap-3 pb-safe items-center">
              <Link href="/apoio" className="flex items-center justify-center gap-3 bg-mint text-charcoal py-4 px-6 rounded-2xl font-black shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:scale-105 active:scale-95 transition-all w-[85%]">
                <LifeBuoy className="w-5 h-5 shrink-0" /> Apoio ao Cidadão
              </Link>
              <Link href="/transparencia" className="flex items-center justify-center gap-3 bg-mint text-charcoal py-4 px-6 rounded-2xl font-black shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:scale-105 active:scale-95 transition-all w-[85%]">
                <ShieldCheck className="w-5 h-5 shrink-0" /> Transparência
              </Link>
              <Link href="/area-reservada" className="flex items-center justify-center gap-3 bg-mint text-charcoal py-4 px-6 rounded-2xl font-black shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:scale-105 active:scale-95 transition-all w-[85%]">
                <Lock className="w-5 h-5 shrink-0" /> Área Reservada
              </Link>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}
