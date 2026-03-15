
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { processSteps } from '@/data/process';

const ourStorySchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Story — Crafted Constructions',
  description: 'Learn about Crafted Constructions — founded by Vinod Silare in 2016, now serving Raipur, Nagpur & Bhandara with quality home construction.',
  url: 'https://craftedconstructions.in/our-story',
  mainEntity: {
    '@type': 'ConstructionCompany',
    name: 'Crafted Constructions',
    foundingDate: '2016',
    founder: { '@type': 'Person', name: 'Vinod Silare', jobTitle: 'Founder & CEO' },
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '35' },
    description: 'Crafted Constructions delivers transparent, quality home construction across central India since 2016.',
    areaServed: ['Raipur', 'Nagpur', 'Bhandara'],
  },
};

const timeline = [
  {
    year: '2016',
    title: 'Foundation',
    desc: 'Crafted Constructions was established in Raipur with a small team of 10 professionals. Completed our first 5 residential projects, setting the foundation for our quality standards.',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
  },
  {
    year: '2018',
    title: 'Expansion',
    desc: 'Opened our second office in Nagpur. Introduced our transparent package-based pricing model. Team expanded to 35 professionals with specialized expertise.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
  },
  {
    year: '2020',
    title: 'Challenges & Adaptation',
    desc: 'Navigated the pandemic by implementing digital consultation services and strict safety protocols. Focused on renovation projects during construction restrictions.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  },
  {
    year: '2022',
    title: 'Innovation',
    desc: 'Incorporated smart home technology into our construction packages. Launched eco-friendly construction options. Expanded to Bhandara with our third office.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
  },
  {
    year: '2025',
    title: 'Future Vision',
    desc: 'Planning expansion to more cities in central India. Investing in sustainable construction technologies. Aiming to complete our 200th project milestone.',
    img: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop',
  },
];

const OurStory = () => {

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEO
        title="Our Story & Construction Process"
        description="From a small Raipur team in 2016 to 3 cities and 50+ projects — discover the Crafted Constructions story, our founders vision, and our step-by-step build process."
        canonical="/our-story"
        breadcrumbs={[{ name: 'Our Story', url: '/our-story' }]}
        schema={ourStorySchema}
      />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center">
            <p className="text-[#5B8DEF] text-sm font-medium uppercase tracking-widest mb-4">Our Story</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#FAFAFA] mb-6">Built on Trust,<br />Driven by Craft</h1>
            <p className="text-lg text-[#888888] max-w-3xl mx-auto">
              Get to know the story and the people behind Crafted Constructions — building quality homes and lasting relationships since 2016.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-6">The Story Behind the Build</h2>
              <p className="text-[#888888] mb-4 leading-relaxed">
                Crafted Constructions was founded in 2016 by Vinod Silare with a vision to transform the construction industry in central India through transparency, quality, and client-focused service.
              </p>
              <p className="text-[#888888] mb-4 leading-relaxed">
                After working for over 15 years in the construction sector, Vinod identified a critical gap in the market: clients were tired of hidden costs, unclear timelines, and compromised quality. This inspired him to establish a company that would set new standards for transparency and reliability.
              </p>
              <p className="text-[#888888] leading-relaxed">
                What started as a small team in Raipur has now expanded to Nagpur and Bhandara, with over 50 successful projects completed across residential, commercial, and renovation segments.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden">
                <div className="w-full h-72 bg-[#1a1a1a] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-[#5B8DEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-[#FAFAFA] font-display font-medium">Vinod Silare</p>
                    <p className="text-[#5B8DEF] text-sm">Founder & CEO</p>
                  </div>
                </div>
                <div className="p-6 border-t border-[#222222]">
                  <p className="text-[#888888] text-sm italic">"I started this company because I believed that building a home shouldn't feel like a gamble. Every client deserves to know exactly what they're paying for."</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding border-t border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-4">Our Commitment</h2>
            <p className="text-[#888888] max-w-2xl mx-auto">Building more than just structures — we're committed to building stronger communities.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Local Employment',
                desc: 'We prioritize hiring from local communities, providing training and employment opportunities to skilled and unskilled workers.',
                icon: '👥',
              },
              {
                title: 'Eco-Friendly Practices',
                desc: 'Our construction incorporates sustainable techniques, including waste reduction, water conservation, and energy-efficient designs.',
                icon: '🌿',
              },
              {
                title: 'Community Development',
                desc: 'We actively participate in community initiatives, from renovating public spaces to supporting local schools and healthcare.',
                icon: '🏙️',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-display font-bold text-[#FAFAFA] mb-3">{item.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-t border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-4">Our Journey</h2>
            <p className="text-[#888888] max-w-2xl mx-auto">A decade of growth, learning, and continuous improvement.</p>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#222222]" />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1} className="relative mb-16 last:mb-0">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-8 h-8 rounded-full bg-[#5B8DEF] border-4 border-[#0A0A0A] flex items-center justify-center z-10">
                  <span className="w-2 h-2 bg-white rounded-full" />
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? '' : ''}`}>
                  <div className={i % 2 === 1 ? 'md:order-last' : ''}>
                    <p className="text-[#5B8DEF] text-sm font-medium uppercase tracking-widest mb-2">{item.year}</p>
                    <h3 className="text-2xl font-display font-bold text-[#FAFAFA] mb-3">{item.title}</h3>
                    <p className="text-[#888888] leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={i % 2 === 1 ? 'md:order-first' : ''}>
                    <div className="rounded-xl overflow-hidden border border-[#222222]">
                      <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="section-padding border-t border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <p className="text-[#5B8DEF] text-sm font-medium uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-4">The Build Process</h2>
            <p className="text-[#888888] max-w-2xl mx-auto">
              From your first call to key handover — here's exactly how we build your home.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.08}>
                <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#5B8DEF] font-display font-bold text-sm">{String(step.id).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[#FAFAFA]">{step.title}</h3>
                      <p className="text-[#5B8DEF] text-xs">{step.duration}</p>
                    </div>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">{step.description}</p>
                  {step.paymentPercent > 0 && (
                    <div className="mt-4 pt-4 border-t border-[#222222]">
                      <p className="text-xs text-[#555555]">
                        Payment milestone: <span className="text-[#5B8DEF]">{step.paymentPercent}%</span>
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#5B8DEF] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Let's discuss your construction or renovation project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-[#5B8DEF] hover:bg-white/90 font-medium px-8 py-4 rounded-xl transition-all">
                Get a Quote
              </Link>
              <Link to="/projects" className="border border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-xl transition-all">
                View Our Work
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
