
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleQuoteClick = () => {
    window.open('https://wa.me/918435532184?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20construction%20project.', '_blank');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/our-story', label: 'Our Story' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0D0B09]/95 backdrop-blur-md border-b border-[#D4A843]/20'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 border border-[#D4A843] flex items-center justify-center">
                <span className="text-[#D4A843] font-mono text-xs font-bold">CC</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-lg text-[#EDE8DE] tracking-tight block">
                  Crafted
                </span>
                <span className="font-mono text-[10px] text-[#D4A843] uppercase tracking-[0.3em] block">
                  Constructions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-xs font-mono uppercase tracking-widest transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-[#D4A843]'
                      : 'text-[#7A7167] hover:text-[#EDE8DE]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <button
                onClick={handleQuoteClick}
                className="bg-[#D4A843] text-[#0D0B09] text-xs font-semibold px-6 py-2.5 uppercase tracking-widest hover:bg-[#E8C56A] transition-all duration-200"
              >
                Get Free Quote
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#7A7167] hover:text-[#EDE8DE] transition-colors p-1"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Gold rule under nav when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent" />
        )}
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div
          className="absolute inset-0 bg-[#0D0B09]/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0D0B09] border-l border-[#2E2820] transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-8 pt-24">
            <div className="space-y-1 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block py-3 border-b border-[#2E2820] text-sm font-mono uppercase tracking-widest transition-colors ${
                    isActive(link.href) ? 'text-[#D4A843]' : 'text-[#7A7167] hover:text-[#EDE8DE]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={handleQuoteClick}
              className="w-full bg-[#D4A843] text-[#0D0B09] text-xs font-bold px-6 py-4 uppercase tracking-widest hover:bg-[#E8C56A] transition-all"
            >
              Get Free Quote
            </button>
            <p className="text-[#5A5249] text-xs mt-4 text-center font-mono">EST. 2016 · RAIPUR · NAGPUR · BHANDARA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
