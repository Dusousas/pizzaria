import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    // Bloqueia a rolagem quando o menu está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Menu desktop */}
            <nav className='hidden lg:block'>
                <ul className='flex gap-6 uppercase tracking-wider text-lg font-semibold'>
                    <li className='text-Orange'><a href="/">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>

            {/* Botão do menu mobile */}
            <div className='lg:hidden'>
                <button 
                    onClick={toggleMenu} 
                    className='p-2 z-50 relative'
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <FaTimes className="text-2xl text-white" />
                    ) : (
                        <FaBars className="text-2xl text-white" />
                    )}
                </button>
            </div>

            {/* Menu mobile */}
            <div 
                className={`fixed top-0 right-0 h-full w-full bg-black/50 z-40 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleMenu}
            >
                <div 
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-5 h-full flex flex-col">
                        {/* Removido o botão X duplicado aqui */}
                        <div className="mb-8">
                            {/* Espaço para manter o layout, mas sem botão duplicado */}
                        </div>
                        <ul className='flex flex-col gap-6 uppercase tracking-wider text-lg font-semibold text-black'>
                            <li className='text-Orange'><a href="/" onClick={toggleMenu}>Início</a></li>
                            <li><a href="#about" onClick={toggleMenu}>Sobre</a></li>
                            <li><a href="#menu" onClick={toggleMenu}>Menu</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>Contato</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}