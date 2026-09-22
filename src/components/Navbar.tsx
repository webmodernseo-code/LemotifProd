'use client';

import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Prestations', href: '#services' },
    { label: 'Calculateur', href: '#calculateur' },
    { label: 'Le Studio', href: '#studio' },
    { label: 'Avis', href: '#temoignages' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-200">
              <Camera className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-wider uppercase text-white font-serif">
                Le Motif <span className="text-amber-400">Prod</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-sans">
                Photographie & Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-300 hover:text-amber-400 transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Réserver une séance</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium"
              aria-label="Réserver"
            >
              <PhoneCall className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e14] border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Réserver une séance</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
