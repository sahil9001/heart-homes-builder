
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://craftedconstructions.in${location.pathname}`);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://craftedconstructions.in${location.pathname}`;
      document.head.appendChild(link);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0D0B09] flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#D4A843 1px, transparent 1px), linear-gradient(to right, #D4A843 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Large 404 background text */}
        <div
          className="absolute select-none pointer-events-none font-display font-bold text-[#2E2820]"
          style={{ fontSize: 'clamp(8rem, 30vw, 25rem)', lineHeight: '1', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          404
        </div>

        <div className="container mx-auto px-6 text-center relative z-10 py-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4A843]" />
            <span className="section-label">Page Not Found</span>
            <div className="h-px w-8 bg-[#D4A843]" />
          </div>

          <h1 className="font-display font-bold text-[#EDE8DE] mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: '1.1' }}>
            This Page Doesn't Exist
          </h1>

          <p className="text-[#7A7167] max-w-lg mx-auto mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="bg-[#D4A843] text-[#0D0B09] font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#E8C56A] transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="border border-[#2E2820] text-[#7A7167] font-medium px-8 py-4 uppercase tracking-widest text-xs hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
