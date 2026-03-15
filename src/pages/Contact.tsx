
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import ScrollReveal from '@/components/ScrollReveal';

const Contact = () => {
  useEffect(() => {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://craftedconstructions.in/contact');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://craftedconstructions.in/contact';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center">
            <p className="text-[#5B8DEF] text-sm font-medium uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#FAFAFA] mb-6">Let's Build Together</h1>
            <p className="text-lg text-[#888888] max-w-3xl mx-auto">
              Have questions or ready to start your construction journey? Get in touch with our team for a free consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="text-2xl font-display font-bold text-[#FAFAFA] mb-4">Request a Free Quote</h2>
              <p className="text-[#888888] mb-8">
                Fill out the form and our team will get back to you within 24 hours with a customized quote for your project.
              </p>
              <QuoteForm />
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:pl-8">
              <h2 className="text-2xl font-display font-bold text-[#FAFAFA] mb-4">Contact Information</h2>
              <p className="text-[#888888] mb-8">
                Reach out directly or send us a message on WhatsApp — we respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="bg-[#111111] border border-[#222222] p-6 rounded-2xl">
                  <h3 className="font-display font-bold text-[#FAFAFA] text-lg mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#5B8DEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <p className="text-[#FAFAFA]">+91 84355 32184</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#5B8DEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-[#FAFAFA]">info@craftedconstructions.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <a href="https://wa.me/918435532184" className="text-green-400 hover:text-green-300 transition-colors">WhatsApp: +91 84355 32184</a>
                    </div>
                  </div>
                </div>

                <div className="bg-[#111111] border border-[#222222] p-6 rounded-2xl">
                  <h3 className="font-display font-bold text-[#FAFAFA] text-lg mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#FAFAFA]">Monday - Friday</span>
                      <span className="text-[#888888]">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#FAFAFA]">Saturday</span>
                      <span className="text-[#888888]">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#FAFAFA]">Sunday</span>
                      <span className="text-[#888888]">By appointment</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#111111] border border-[#222222] p-6 rounded-2xl">
                  <h3 className="font-display font-bold text-[#FAFAFA] text-lg mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {[
                      { href: 'https://facebook.com', label: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                      { href: 'https://instagram.com', label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="bg-[#222222] hover:bg-[#5B8DEF] text-[#888888] hover:text-white transition-all w-10 h-10 rounded-xl flex items-center justify-center"
                        aria-label={social.label}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                    <a
                      href="https://wa.me/918435532184"
                      className="bg-green-500 hover:bg-green-600 text-white transition-all w-10 h-10 rounded-xl flex items-center justify-center"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
