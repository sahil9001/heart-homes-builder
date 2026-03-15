
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    description: 'Transparent per-square-foot home construction packages starting at ₹1,600/sq ft. Starter, Classic, and Premium tiers available.',
    areaServed: ['Raipur', 'Nagpur', 'Bhandara'],
    offers: [
      { '@type': 'Offer', name: 'Starter Package', price: '1600', priceCurrency: 'INR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '1600', priceCurrency: 'INR', unitText: 'per sq ft' } },
      { '@type': 'Offer', name: 'Classic Package', price: '1900', priceCurrency: 'INR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '1900', priceCurrency: 'INR', unitText: 'per sq ft' } },
      { '@type': 'Offer', name: 'Premium Package', price: '2300', priceCurrency: 'INR', priceSpecification: { '@type': 'UnitPriceSpecification', price: '2300', priceCurrency: 'INR', unitText: 'per sq ft' } },
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
  const [activeTab, setActiveTab] = useState('build');

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEO
        title="Construction Packages & Pricing"
        description="Transparent per-sqft construction packages for Raipur, Nagpur & Bhandara. New build from ₹1,600/sq ft, renovation from ₹600/sq ft. No hidden costs — ever."
        canonical="/services"
        breadcrumbs={[{ name: 'Services & Packages', url: '/services' }]}
        schema={servicesSchema}
      />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center">
            <p className="text-[#5B8DEF] text-sm font-medium uppercase tracking-widest mb-4">Services & Packages</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#FAFAFA] mb-6">Transparent Pricing,<br />Zero Surprises</h1>
            <p className="text-lg text-[#888888] max-w-3xl mx-auto">
              Whether you're building a new home or renovating an existing one, our per-square-foot packages are designed to fit every need and budget.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Package Tabs */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="build" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <div className="flex justify-center mb-10">
              <TabsList className="bg-[#111111] border border-[#222222] p-1 rounded-xl">
                <TabsTrigger
                  value="build"
                  className="data-[state=active]:bg-[#5B8DEF] data-[state=active]:text-white text-[#888888] rounded-lg px-6 py-2"
                >
                  New Construction
                </TabsTrigger>
                <TabsTrigger
                  value="renovate"
                  className="data-[state=active]:bg-[#5B8DEF] data-[state=active]:text-white text-[#888888] rounded-lg px-6 py-2"
                >
                  Renovation
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="build">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {buildPackages.map((pkg) => (
                  <ScrollReveal key={pkg.tier}>
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

              <ScrollReveal className="mt-12 p-8 bg-[#111111] border border-[#222222] rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-[#FAFAFA] mb-6">What's Included in Every Build?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Structure & Foundation', desc: 'Complete RCC frame, foundation, walls, slabs, and beams according to structural design.' },
                    { title: 'Flooring & Tiling', desc: 'Flooring as per package specifications, including laying and finishing.' },
                    { title: 'Electrical & Plumbing', desc: 'Complete electrical and plumbing work with quality fixtures as per package.' },
                    { title: 'Kitchen & Bathrooms', desc: 'Kitchen countertops, cabinets, and bathroom fixtures as per selected package.' },
                    { title: 'Doors & Windows', desc: 'All internal and external doors and windows with fittings as per package.' },
                    { title: 'Paint & Finish', desc: 'Complete interior and exterior painting with quality paints as specified.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#5B8DEF]/10 border border-[#5B8DEF]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[#5B8DEF]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#FAFAFA] mb-1">{item.title}</h4>
                        <p className="text-[#888888] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </TabsContent>

            <TabsContent value="renovate">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {renovatePackages.map((pkg) => (
                  <ScrollReveal key={pkg.tier}>
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

              <ScrollReveal className="mt-12 p-8 bg-[#111111] border border-[#222222] rounded-2xl">
                <h3 className="text-2xl font-display font-bold text-[#FAFAFA] mb-4">Before & After Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Kitchen Renovation', desc: 'Complete kitchen overhaul with new cabinets, countertops, and appliances.' },
                    { title: 'Living Room Transformation', desc: 'Modern update with new flooring, lighting, and wall treatments.' },
                  ].map((item) => (
                    <div key={item.title} className="bg-[#0A0A0A] border border-[#222222] rounded-xl overflow-hidden">
                      <div className="grid grid-cols-2 h-48 bg-[#1a1a1a]">
                        <div className="relative flex items-center justify-center border-r border-[#222222]">
                          <p className="text-[#555555] text-xs">Before</p>
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">Before</div>
                        </div>
                        <div className="relative flex items-center justify-center">
                          <p className="text-[#555555] text-xs">After</p>
                          <div className="absolute bottom-2 right-2 bg-[#5B8DEF] text-white text-xs px-2 py-0.5 rounded">After</div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-[#FAFAFA]">{item.title}</h4>
                        <p className="text-[#888888] text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding border-t border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#888888] max-w-xl mx-auto">
              Get answers to the most common questions about our packages and services.
            </p>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#111111] border border-[#222222] rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-[#FAFAFA] hover:text-[#5B8DEF] hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#888888] pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <ScrollReveal className="text-center mt-12">
            <p className="text-[#888888] mb-6">Don't see your question here? Feel free to reach out to us directly.</p>
            <a
              href="/contact"
              className="inline-flex items-center bg-[#5B8DEF] hover:bg-[#7AAAF5] text-white px-6 py-3 rounded-xl transition-all"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
