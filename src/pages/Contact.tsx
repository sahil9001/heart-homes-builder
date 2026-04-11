
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Crafted Constructions',
  description: 'Get a free construction quote from Crafted Constructions. Contact us for home building and renovation projects in Raipur, Nagpur, and Bhandara.',
  url: 'https://craftedconstructions.in/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Crafted Constructions',
    telephone: '+918435532184',
    email: 'info@craftedconstructions.com',
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-15:00'],
  },
};

const contactDetails = [
  {
    label: 'Phone',
    value: '+91 84355 32184',
    href: 'tel:+918435532184',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@craftedconstructions.com',
    href: 'mailto:info@craftedconstructions.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+91 84355 32184',
    href: 'https://wa.me/918435532184',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0D0B09]">
      <SEO
        title="Contact Us — Free Quote"
        description="Ready to build? Contact Crafted Constructions for a free consultation and quote. Serving Raipur, Nagpur & Bhandara. Response within 24 hours."
        canonical="/contact"
        breadcrumbs={[{ name: 'Contact', url: '/contact' }]}
        schema={contactSchema}
      />
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-20 border-b border-[#2E2820] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#D4A843 1px, transparent 1px), linear-gradient(to right, #D4A843 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#D4A843]" />
            <span className="section-label">Contact</span>
          </div>
          <h1 className="font-display font-bold text-[#EDE8DE] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05' }}>
            Let's Build <span className="text-[#D4A843] italic">Together</span>
          </h1>
          <p className="text-[#7A7167] text-lg max-w-2xl leading-relaxed">
            Have questions or ready to start your construction journey? Get in touch with our team for a free consultation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form column */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[#D4A843]" />
                  <span className="section-label">Request a Free Quote</span>
                </div>
                <p className="text-[#7A7167] mb-8 text-sm leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours with a customized quote for your project.
                </p>
                <QuoteForm />
              </ScrollReveal>
            </div>

            {/* Info column */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={0.15}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-[#D4A843]" />
                  <span className="section-label">Contact Information</span>
                </div>
                <p className="text-[#7A7167] mb-8 text-sm leading-relaxed">
                  Reach out directly or send us a message on WhatsApp — we respond within 24 hours.
                </p>

                {/* Contact details */}
                <div className="space-y-4 mb-8">
                  {contactDetails.map((detail) => (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="flex items-center gap-4 p-4 border border-[#2E2820] bg-[#161310] hover:border-[#D4A843]/40 hover:bg-[#1E1A16] transition-all group"
                    >
                      <div className="w-8 h-8 border border-[#2E2820] flex items-center justify-center text-[#D4A843] flex-shrink-0 group-hover:bg-[#D4A843] group-hover:text-[#0D0B09] transition-all">
                        {detail.icon}
                      </div>
                      <div>
                        <p className="text-[#5A5249] font-mono text-[10px] uppercase tracking-wider">{detail.label}</p>
                        <p className="text-[#EDE8DE] text-sm">{detail.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Business hours */}
                <div className="border border-[#2E2820] bg-[#161310] p-6">
                  <p className="section-label mb-5">Business Hours</p>
                  <div className="space-y-2">
                    {[
                      { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                      { day: 'Saturday', hours: '9:00 AM – 3:00 PM' },
                      { day: 'Sunday', hours: 'By appointment' },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between items-center py-2 border-b border-[#2E2820] last:border-0">
                        <span className="text-[#EDE8DE] text-sm">{item.day}</span>
                        <span className="text-[#7A7167] text-sm font-mono">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service areas */}
                <div className="border border-[#2E2820] bg-[#161310] p-6">
                  <p className="section-label mb-5">Service Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {['Raipur', 'Nagpur', 'Bhandara'].map((city) => (
                      <div
                        key={city}
                        className="border border-[#D4A843]/30 text-[#D4A843] font-mono text-xs px-4 py-2 uppercase tracking-widest"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
