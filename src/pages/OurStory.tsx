
import React from 'react';
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
    title: 'Resilience',
    desc: 'Navigated the pandemic by implementing digital consultation services and strict safety protocols. Focused on renovation projects and emerged stronger.',
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

const values = [
  {
    title: 'Local Employment',
    desc: 'We prioritize hiring from local communities, providing training and employment opportunities to skilled and unskilled workers.',
    num: '01',
  },
  {
    title: 'Eco-Friendly Practices',
    desc: 'Our construction incorporates sustainable techniques, including waste reduction, water conservation, and energy-efficient designs.',
    num: '02',
  },
  {
    title: 'Community Development',
    desc: 'We actively participate in community initiatives, from renovating public spaces to supporting local schools and healthcare.',
    num: '03',
  },
];

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#0D0B09]">
      <SEO
        title="Our Story & Construction Process"
        description="From a small Raipur team in 2016 to 3 cities and 50+ projects — discover the Crafted Constructions story, our founder's vision, and our build process."
        canonical="/our-story"
        breadcrumbs={[{ name: 'Our Story', url: '/our-story' }]}
        schema={ourStorySchema}
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
            <span className="section-label">Our Story</span>
          </div>
          <h1 className="font-display font-bold text-[#EDE8DE] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05' }}>
            Built on Trust,<br />
            <span className="text-[#D4A843] italic">Driven by Craft</span>
          </h1>
          <p className="text-[#7A7167] text-lg max-w-2xl leading-relaxed">
            Get to know the story and the people behind Crafted Constructions — building quality homes and lasting relationships since 2016.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding border-b border-[#2E2820]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#D4A843]" />
                <span className="section-label">The Founder</span>
              </div>
              <h2 className="font-display font-bold text-[#EDE8DE] mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: '1.1' }}>
                The Story Behind the Build
              </h2>
              <p className="text-[#7A7167] mb-5 leading-relaxed">
                Crafted Constructions was founded in 2016 by Vinod Silare with a vision to transform the construction industry in central India through transparency, quality, and client-focused service.
              </p>
              <p className="text-[#7A7167] mb-5 leading-relaxed">
                After working for over 15 years in the construction sector, Vinod identified a critical gap in the market: clients were tired of hidden costs, unclear timelines, and compromised quality. This inspired him to establish a company that would set new standards for transparency and reliability.
              </p>
              <p className="text-[#7A7167] leading-relaxed">
                What started as a small team in Raipur has now expanded to Nagpur and Bhandara, with over 50 successful projects completed across residential, commercial, and renovation segments.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&facepad=2"
                    alt="Vinod Silare — Founder"
                    className="w-full h-96 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09]/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="border-l-2 border-[#D4A843] pl-4">
                    <p className="text-[#EDE8DE] italic font-display text-base leading-relaxed mb-3">
                      "I started this company because I believed that building a home shouldn't feel like a gamble. Every client deserves to know exactly what they're paying for."
                    </p>
                    <p className="text-[#D4A843] font-mono text-xs uppercase tracking-wider">— Vinod Silare, Founder & CEO</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding border-b border-[#2E2820] bg-[#161310]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">Our Commitment</span>
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
              Building More Than Structures
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#2E2820]">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1} className="border-r border-[#2E2820] last:border-r-0 p-8 lg:p-10 group hover:bg-[#0D0B09] transition-all duration-300">
                <span className="font-mono text-[#2E2820] text-5xl font-bold block mb-6 group-hover:text-[#D4A843]/20 transition-colors">{item.num}</span>
                <h3 className="font-display font-bold text-[#EDE8DE] text-xl mb-4">{item.title}</h3>
                <p className="text-[#7A7167] text-sm leading-relaxed">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-b border-[#2E2820]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">Our Journey</span>
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
              A Decade of Growth
            </h2>
          </ScrollReveal>

          <div className="space-y-0 border-l border-[#2E2820] ml-4 md:ml-0 md:border-0">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 last:mb-0 relative pl-8 md:pl-0`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:hidden top-0 w-3 h-3 bg-[#D4A843] -translate-x-1.5 mt-1" />

                  <div className={i % 2 === 1 ? 'md:order-last' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="font-mono text-[#D4A843] text-sm font-bold border border-[#D4A843]/30 px-3 py-1">{item.year}</div>
                    </div>
                    <h3 className="font-display font-bold text-[#EDE8DE] text-2xl mb-3">{item.title}</h3>
                    <p className="text-[#7A7167] leading-relaxed">{item.desc}</p>
                  </div>

                  <div className={i % 2 === 1 ? 'md:order-first' : ''}>
                    <div className="overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="section-padding border-b border-[#2E2820] bg-[#161310]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">How We Work</span>
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
              The Build Process
            </h2>
            <p className="text-[#7A7167] mt-4 max-w-2xl">
              From your first call to key handover — here's exactly how we build your home.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#2E2820]">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.08} className="border-r border-b border-[#2E2820] p-8 group hover:bg-[#0D0B09] transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-[#D4A843] text-3xl font-bold leading-none opacity-60">
                    {String(step.id).padStart(2, '0')}
                  </span>
                  {step.paymentPercent > 0 && (
                    <span className="font-mono text-[10px] text-[#5A5249] border border-[#2E2820] px-2 py-1 uppercase tracking-wider">
                      {step.paymentPercent}% payment
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-[#EDE8DE] text-lg mb-1">{step.title}</h3>
                <p className="text-[#D4A843] font-mono text-[10px] uppercase tracking-widest mb-3">{step.duration}</p>
                <p className="text-[#7A7167] text-sm leading-relaxed">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
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
            Ready to Work With Us?
          </h2>
          <p className="text-[#0D0B09]/70 mb-8 max-w-xl mx-auto">
            Let's discuss your construction or renovation project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#0D0B09] text-[#D4A843] font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#1E1A16] transition-all"
            >
              Get a Quote
            </Link>
            <Link
              to="/projects"
              className="border border-[#0D0B09]/30 text-[#0D0B09] font-medium px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#0D0B09]/10 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
