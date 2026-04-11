
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0B09] border-t border-[#2E2820] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px',
      }} />

      {/* Top gold accent bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4A843]/40 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#D4A843] flex items-center justify-center">
                <span className="text-[#D4A843] font-mono text-sm font-bold">CC</span>
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-xl text-[#EDE8DE] tracking-tight block">Crafted</span>
                <span className="font-mono text-[10px] text-[#D4A843] uppercase tracking-[0.3em] block">Constructions</span>
              </div>
            </div>
            <p className="text-[#7A7167] text-sm leading-relaxed mb-6 max-w-xs">
              Homes built with heart, starting at ₹1,600 per sq ft. Building quality homes and lasting relationships since 2016.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://facebook.com', label: 'Facebook', d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                { href: 'https://instagram.com', label: 'Instagram', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-[#2E2820] flex items-center justify-center text-[#5A5249] hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
              <a
                href="https://wa.me/918435532184"
                aria-label="WhatsApp"
                className="w-9 h-9 border border-[#2E2820] flex items-center justify-center text-[#5A5249] hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links column */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-[10px] text-[#D4A843] uppercase tracking-[0.3em] mb-6">Navigation</p>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services & Packages' },
                { to: '/projects', label: 'Our Projects' },
                { to: '/our-story', label: 'Our Story' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#7A7167] hover:text-[#D4A843] transition-colors text-sm font-mono flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#2E2820] group-hover:bg-[#D4A843] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] text-[#D4A843] uppercase tracking-[0.3em] mb-6">Get In Touch</p>
            <div className="space-y-4">
              <div>
                <p className="text-[#5A5249] text-xs font-mono uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+918435532184" className="text-[#EDE8DE] text-sm hover:text-[#D4A843] transition-colors">+91 84355 32184</a>
              </div>
              <div>
                <p className="text-[#5A5249] text-xs font-mono uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:info@craftedconstructions.com" className="text-[#EDE8DE] text-sm hover:text-[#D4A843] transition-colors">info@craftedconstructions.com</a>
              </div>
              <div>
                <p className="text-[#5A5249] text-xs font-mono uppercase tracking-wider mb-1">Service Areas</p>
                <p className="text-[#7A7167] text-sm">Raipur · Nagpur · Bhandara</p>
              </div>
              <div>
                <p className="text-[#5A5249] text-xs font-mono uppercase tracking-wider mb-1">Hours</p>
                <p className="text-[#7A7167] text-sm">Mon–Fri: 9 AM – 6 PM</p>
                <p className="text-[#7A7167] text-sm">Sat: 9 AM – 3 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2E2820] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5A5249] text-xs font-mono">
            © {currentYear} Crafted Constructions. All rights reserved.
          </p>
          <p className="text-[#5A5249] text-xs font-mono tracking-wider">
            EST. 2016 · HOMES BUILT WITH HEART
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a
          href="https://wa.me/918435532184"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] shadow-lg hover:bg-[#20BD5A] transition-all"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
