
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = () => {
    window.open('https://wa.me/918435532184?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20construction%20project.', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222]' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display font-bold text-2xl text-[#FAFAFA]">Crafted <span className="text-[#5B8DEF]">Constructions</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-[#888888] hover:text-[#FAFAFA] transition-colors">Home</Link>
            <Link to="/services" className="font-medium text-[#888888] hover:text-[#FAFAFA] transition-colors">Services</Link>
            <Link to="/our-story" className="font-medium text-[#888888] hover:text-[#FAFAFA] transition-colors">Our Story</Link>
            <Link to="/projects" className="font-medium text-[#888888] hover:text-[#FAFAFA] transition-colors">Projects</Link>
            <Link to="/contact" className="font-medium text-[#888888] hover:text-[#FAFAFA] transition-colors">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#5B8DEF] hover:bg-[#7AAAF5] text-white" onClick={handleQuoteClick}>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#888888] focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#222222]">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 font-medium text-[#888888] hover:text-[#FAFAFA]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" className="py-2 font-medium text-[#888888] hover:text-[#FAFAFA]" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/our-story" className="py-2 font-medium text-[#888888] hover:text-[#FAFAFA]" onClick={() => setMobileMenuOpen(false)}>Our Story</Link>
              <Link to="/projects" className="py-2 font-medium text-[#888888] hover:text-[#FAFAFA]" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
              <Link to="/contact" className="py-2 font-medium text-[#888888] hover:text-[#FAFAFA]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Button className="w-full bg-[#5B8DEF] hover:bg-[#7AAAF5] text-white" onClick={() => { handleQuoteClick(); setMobileMenuOpen(false); }}>
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
