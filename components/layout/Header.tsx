'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md py-3 shadow-lg' : 'py-6'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl lg:text-3xl font-bold text-white hover:opacity-90 transition-opacity z-50">
            Space Cowboy <span className="text-highlight">Production</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 lg:space-x-10">
              <li><Link href="#portfolio" className="text-white text-base lg:text-lg hover:text-highlight transition-colors font-medium">Portfolio</Link></li>
              <li><Link href="#services" className="text-white text-base lg:text-lg hover:text-highlight transition-colors font-medium">Services</Link></li>
              <li><Link href="#about" className="text-white text-base lg:text-lg hover:text-highlight transition-colors font-medium">À propos</Link></li>
              <li><Link href="#contact" className="bg-highlight text-white px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold">Contact</Link></li>
            </ul>
          </nav>

          {/* Burger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center items-center">
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : 'mb-1.5'}`}></span>
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
              <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-primary/98 backdrop-blur-lg transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-8 text-center">
              <li><Link href="#portfolio" onClick={closeMenu} className="text-white text-3xl hover:text-highlight transition-colors font-bold">Portfolio</Link></li>
              <li><Link href="#services" onClick={closeMenu} className="text-white text-3xl hover:text-highlight transition-colors font-bold">Services</Link></li>
              <li><Link href="#about" onClick={closeMenu} className="text-white text-3xl hover:text-highlight transition-colors font-bold">À propos</Link></li>
              <li><Link href="#contact" onClick={closeMenu} className="bg-highlight text-white px-10 py-4 rounded-xl hover:bg-opacity-90 transition-all transform hover:scale-105 font-bold text-2xl">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
