
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { buildPackages, renovatePackages } from '@/data/packages';
import { faqItems } from '@/data/faq';

const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Home Construction',
    provider: { '@type': 'LocalBusiness', name: 'Crafted Constructions', url: 'https://craftedconstructions.in' },
    name: 'New Construction Packages',
    description: 'Transparent per-square-foot home construction packages starting at ₹1,600/sq ft.',
    areaServed: ['Raipur', 'Nagpur', 'Bhandara'],
    offers: [
      { '@type': 'Offer', name: 'Starter Package', price: '1600', priceCurrency: 'INR' },
      { '@type': 'Offer', name: 'Classic Package', price: '1900', priceCurrency: 'INR' },
      { '@type': 'Offer', name: 'Premium Package', price: '2300', priceCurrency: 'INR' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<'build' | 'renovate'>('build');

  const included = [
    { title: 'Structure & Foundation', desc: 'Complete RCC frame, foundation, walls, slabs, and beams according to structural design.' },
    { title: 'Flooring & Tiling', desc: 'Flooring as per package specifications, including laying and finishing.' },
    { title: 'Electrical & Plumbing', desc: 'Complete electrical and plumbing work with quality fixtures as per package.' },
    { title: 'Kitchen & Bathrooms', desc: 'Kitchen countertops, cabinets, and bathroom fixtures as per selected package.' },
    { title: 'Doors & Windows', desc: 'All internal and external doors and windows with fittings as per package.' },
    { title: 'Paint & Finish', desc: 'Complete interior and exterior painting with quality paints as specified.' },
  ];

  return (
    <div className="min-h-screen bg-[#0D0B09]">
      <SEO
        title="Construction Packages & Pricing"
        description="Transparent per-sqft construction packages for Raipur, Nagpur & Bhandara. New build from ₹1,600/sq ft, renovation from ₹600/sq ft. No hidden costs — ever."
        canonical="/services"
        breadcrumbs={[{ name: 'Services & Packages', url: '/services' }]}
        schema={servicesSchema}
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
            <span className="section-label">Services & Packages</span>
          </div>
          <h1 className="font-display font-bold text-[#EDE8DE] mb-6 max-w-2xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05' }}>
            Transparent Pricing,<br />
            <span className="text-[#D4A843] italic">Zero Surprises</span>
          </h1>
          <p className="text-[#7A7167] text-lg max-w-2xl leading-relaxed">
            Whether you're building a new home or renovating an existing one, our per-square-foot packages are designed to fit every need and budget.
          </p>
        </div>
      </section>

      {/* Tab Switch */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          {/* Toggle */}
          <div className="flex items-center gap-0 mb-12 border border-[#2E2820] w-fit">
            {(['build', 'renovate'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-xs font-mono uppercase tracking-widest transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#D4A843] text-[#0D0B09] font-semibold'
                    : 'text-[#7A7167] hover:text-[#EDE8DE]'
                }`}
              >
                {tab === 'build' ? 'New Construction' : 'Renovation'}
              </button>
            ))}
          </div>

          {activeTab === 'build' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#2E2820]">
                {buildPackages.map((pkg, i) => (
                  <ScrollReveal key={pkg.tier} delay={i * 0.1} className="border-r border-[#2E2820] last:border-r-0">
                    <PackageCard
                      tier={pkg.tier}
                      rate={pkg.rate}
                      features={pkg.features}
                      recommended={pkg.recommended}
                      type="build"
                    />
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal className="mt-16">
                <div className="border border-[#2E2820] p-10 bg-[#161310]">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-px w-8 bg-[#D4A843]" />
                    <span className="section-label">What's Included</span>
                  </div>
                  <h3 className="font-display font-bold text-[#EDE8DE] text-2xl mb-8">In Every Build Package</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {included.map((item) => (
                      <div key={item.title} className="flex gap-4 group">
                        <div className="w-6 h-6 border border-[#D4A843]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#D4A843] group-hover:border-[#D4A843] transition-all">
                          <svg className="w-3 h-3 text-[#D4A843] group-hover:text-[#0D0B09] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#EDE8DE] mb-1 text-sm">{item.title}</h4>
                          <p className="text-[#7A7167] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </>
          )}

          {activeTab === 'renovate' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#2E2820] max-w-3xl">
                {renovatePackages.map((pkg, i) => (
                  <ScrollReveal key={pkg.tier} delay={i * 0.1} className="border-r border-[#2E2820] last:border-r-0">
                    <PackageCard
                      tier={pkg.tier}
                      rate={pkg.rate}
                      features={pkg.features}
                      recommended={pkg.recommended}
                      type="renovate"
                    />
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal className="mt-12 p-8 border border-[#2E2820] bg-[#161310] max-w-3xl">
                <h3 className="font-display font-bold text-[#EDE8DE] text-xl mb-4">Our Renovation Process</h3>
                <p className="text-[#7A7167] leading-relaxed text-sm">
                  We begin with a detailed site assessment and consultation to understand your vision and requirements. Our team then prepares a transparent cost breakdown before any work begins — so you're never surprised by the bill at the end.
                </p>
              </ScrollReveal>
            </>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding border-t border-[#2E2820] bg-[#161310]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">FAQ</span>
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-0 border-t border-[#2E2820]">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#2E2820]"
                >
                  <AccordionTrigger className="text-left text-[#EDE8DE] hover:text-[#D4A843] hover:no-underline py-6 font-sans font-medium text-sm">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#7A7167] pb-6 text-sm leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <ScrollReveal className="mt-12">
            <p className="text-[#5A5249] text-sm mb-6">Don't see your question here? Feel free to reach out directly.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-[#D4A843] font-mono text-xs uppercase tracking-widest hover:gap-5 transition-all duration-300 group"
            >
              Contact Us
              <span className="w-8 h-px bg-[#D4A843] group-hover:w-12 transition-all duration-300" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#D4A843] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(#0D0B09 1px, transparent 1px), linear-gradient(to right, #0D0B09 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-[#0D0B09] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Ready to Get Started?
          </h2>
          <p className="text-[#0D0B09]/70 mb-8 max-w-xl mx-auto">
            Tell us about your project and get a free, no-obligation quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-[#0D0B09] text-[#D4A843] font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#1E1A16] transition-all"
            >
              Get a Quote
            </a>
            <a
              href="/projects"
              className="border border-[#0D0B09]/30 text-[#0D0B09] font-medium px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#0D0B09]/10 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
