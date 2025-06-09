
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = () => {
    window.open('https://wa.me/918435532184?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20construction%20project.', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-display font-bold text-2xl text-primary">Crafted <span className="text-accent">Constructions</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/packages" className="font-medium text-gray-700 hover:text-primary transition-colors">Packages</Link>
            <Link to="/process" className="font-medium text-gray-700 hover:text-primary transition-colors">Process</Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-accent hover:bg-accent/90" onClick={handleQuoteClick}>
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 focus:outline-none"
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
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 font-medium text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/packages" className="py-2 font-medium text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Packages</Link>
              <Link to="/process" className="py-2 font-medium text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Process</Link>
              <Link to="/about" className="py-2 font-medium text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="py-2 font-medium text-gray-700 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Button className="w-full bg-accent hover:bg-accent/90" onClick={() => {handleQuoteClick(); setMobileMenuOpen(false);}}>
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
