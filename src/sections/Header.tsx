import { Button } from "@/components/ui/button"
import { useState } from "react";

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
  return (
    <header className="sticky top-0 z-50 w-full bg-primary-custom font-quicksand border-b border-secondary-custom">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <a className="flex items-center whitespace-nowrap" href="/">
                    <span className="font-montserrat font-bold text-xl m-0 whitespace-nowrap text-white">
                        Cristian Hortua 
                    </span>
                </a>

                {/* Navigation - Desktop */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#inicio" className="text-sm font-medium text-white transition-all duration-200 hover:text-danger-custom hover:underline hover:underline-offset-8">
                        Inicio
                    </a>

                    <a href="#sobre-mi"  className="text-sm font-medium text-white transition-all duration-200 hover:text-danger-custom hover:underline hover:underline-offset-8">
                        Sobre Mi
                    </a>

                    <a href="#tecnologias" className="text-sm font-medium text-white transition-all duration-200 hover:text-danger-custom hover:underline hover:underline-offset-8">
                        Tecnologias
                    </a>

                    <a href="#proyectos" className="text-sm font-medium text-white transition-all duration-200 hover:text-danger-custom hover:underline hover:underline-offset-8">
                        Proyectos
                    </a>

                    <a href="#contacto" className="text-sm font-medium text-white transition-all duration-200 hover:text-danger-custom hover:underline hover:underline-offset-8">
                        Contacto
                    </a>
                </nav>

                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className=" md:hidden ml-auto flex items-center justify-center w-10 h-10 text-white hover:text-danger-custom transition-colors cursor-pointer" aria-label="Abrir menú" aria-expanded={isMenuOpen}>
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18" />
                            <path d="M6 6L18 18" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    )}
                    </button>
            </div>
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
                <nav className="flex flex-col items-center gap-4 pt-4">

                    <a href="#inicio" onClick={closeMenu} className="text-white hover:text-danger-custom transition-colors">
                        Inicio
                    </a>

                    <a href="#sobre-mi" onClick={closeMenu} className="text-white hover:text-danger-custom transition-colors">
                        Sobre Mi
                    </a>

                    <a href="#tecnologias" onClick={closeMenu} className="text-white hover:text-danger-custom transition-colors">
                        Tecnologias
                    </a>

                    <a href="#proyectos" onClick={closeMenu} className="text-white hover:text-danger-custom transition-colors">
                        Proyectos
                    </a>

                    <a href="#contacto" onClick={closeMenu} className="text-white hover:text-danger-custom transition-colors">
                        Contacto
                    </a>
                </nav>
            </div>
        </div>
    </header>
  )
}