
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import StatCounter from '@/components/StatCounter';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import SEO from '@/components/SEO';
import { projects } from '@/data/projects';

const homepageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ConstructionCompany'],
    name: 'Crafted Constructions',
    description: 'Quality home construction and renovation services at transparent prices. Homes built with heart starting at ₹1,600/sq ft across Raipur, Nagpur and Bhandara.',
    url: 'https://craftedconstructions.in',
    telephone: '+918435532184',
    email: 'info@craftedconstructions.com',
    foundingDate: '2016',
    founder: { '@type': 'Person', name: 'Vinod Silare' },
    priceRange: '₹₹₹',
    areaServed: [
      { '@type': 'City', name: 'Raipur' },
      { '@type': 'City', name: 'Nagpur' },
      { '@type': 'City', name: 'Bhandara' },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '150' },
  },
];

const handleQuoteClick = () => {
  window.open('https://wa.me/918435532184?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20construction%20project.', '_blank');
};

const services = [
  { label: 'New Construction', icon: '◈' },
  { label: 'Home Renovation', icon: '◈' },
  { label: 'Commercial Builds', icon: '◈' },
  { label: 'Smart Homes', icon: '◈' },
  { label: 'Structural Design', icon: '◈' },
  { label: 'Interior Finishing', icon: '◈' },
];

const Index = () => {
  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0D0B09]">
      <SEO
        title="Crafted Constructions — Homes Built with Heart | Starting at ₹1,600/sq ft"
        description="Premium home construction and renovation services across Raipur, Nagpur & Bhandara. Transparent per-sqft pricing starting at ₹1,600. Founded 2016. Get a free quote today."
        canonical="/"
        schema={homepageSchema}
      />
      <Navbar />

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=85&fit=crop"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0B09]/75" />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'linear-gradient(#D4A843 1px, transparent 1px), linear-gradient(to right, #D4A843 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pb-20 pt-40 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-[#D4A843]" />
            <span className="font-mono text-[10px] text-[#D4A843] uppercase tracking-[0.35em]">
              Est. 2016 · Raipur · Nagpur · Bhandara
            </span>
          </motion.div>

          <div className="max-w-5xl">
            <motion.h1
              className="font-display font-bold text-[#EDE8DE] leading-[0.9] mb-8"
              style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              We Build
              <br />
              <span className="text-[#D4A843] italic">What Lasts.</span>
            </motion.h1>

            <motion.p
              className="text-[#7A7167] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafted Constructions delivers transparent, quality construction across central India.
              From dream homes to complete renovations — starting at ₹1,600 / sq ft.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <button
                onClick={handleQuoteClick}
                className="bg-[#D4A843] text-[#0D0B09] font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#E8C56A] hover:shadow-[0_0_30px_rgba(212,168,67,0.3)] transition-all duration-300"
              >
                Get Free Quote
              </button>
              <Link
                to="/projects"
                className="border border-[#EDE8DE]/30 text-[#EDE8DE] font-medium px-8 py-4 uppercase tracking-widest text-xs hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-300 text-center"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="relative z-10 border-t border-[#2E2820] bg-[#0D0B09]/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2E2820]">
              {[
                { value: '9+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '3', label: 'Cities Served' },
                { value: '₹1,600', label: 'Starting / sq ft' },
              ].map((stat, i) => (
                <div key={i} className="px-8 py-6 text-center">
                  <div className="font-display font-bold text-2xl md:text-3xl text-[#EDE8DE] mb-1">{stat.value}</div>
                  <div className="font-mono text-[10px] text-[#5A5249] uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── SERVICES MARQUEE ─────────────────────── */}
      <section className="py-5 bg-[#D4A843] overflow-hidden">
        <div className="marquee-track">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="flex items-center gap-4 px-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-[#0D0B09] font-semibold">
              <span className="text-[#0D0B09]/40">{s.icon}</span>
              {s.label}
            </span>
          ))}
        </div>
      </section>

      {/* ─── ABOUT INTRO ──────────────────────────── */}
      <section className="section-padding border-b border-[#2E2820]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#D4A843]" />
                <span className="section-label">Who We Are</span>
              </div>
              <h2 className="font-display font-bold text-[#EDE8DE] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1' }}>
                Built on Trust,<br />Driven by Craft
              </h2>
              <p className="text-[#7A7167] leading-relaxed mb-6">
                Founded by Vinod Silare in 2016, Crafted Constructions was built on a simple belief: that every client deserves to know exactly what they're paying for. No hidden costs. No compromises. Just exceptional quality.
              </p>
              <p className="text-[#7A7167] leading-relaxed mb-10">
                Today, we serve Raipur, Nagpur, and Bhandara with a team of 35+ specialists committed to transparent, on-time delivery of your dream home.
              </p>
              <Link
                to="/our-story"
                className="inline-flex items-center gap-3 text-[#D4A843] font-mono text-xs uppercase tracking-widest hover:gap-5 transition-all duration-300 group"
              >
                Read Our Story
                <span className="w-8 h-px bg-[#D4A843] group-hover:w-12 transition-all duration-300" />
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                {/* Main image */}
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80&fit=crop"
                    alt="Construction work"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09]/60 to-transparent" />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-[#D4A843] p-6 w-40">
                  <div className="font-display font-bold text-3xl text-[#0D0B09] leading-none mb-1">50+</div>
                  <div className="font-mono text-[10px] text-[#0D0B09]/70 uppercase tracking-wider">Projects Delivered</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────── */}
      <section className="section-padding border-b border-[#2E2820]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">What We Build</span>
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
              Full Spectrum Construction
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                number: '01',
                title: 'New Construction',
                desc: 'Full-scale residential and commercial builds from ground up. Structural design, foundation, and finishing — all under one roof.',
                price: '₹1,600',
                unit: 'per sq ft onwards',
                img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop',
              },
              {
                number: '02',
                title: 'Home Renovation',
                desc: 'Transform your existing space with a complete renovation — from structural changes to premium finishes.',
                price: '₹600',
                unit: 'per sq ft onwards',
                img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop',
              },
              {
                number: '03',
                title: 'Commercial Builds',
                desc: 'Modern office complexes, retail spaces, and institutional builds — engineered for function and built to impress.',
                price: 'Custom',
                unit: 'quote on request',
                img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80&fit=crop',
              },
            ].map((service, i) => (
              <ScrollReveal key={service.number} delay={i * 0.1}>
                <div className="group relative overflow-hidden border-b md:border-b-0 md:border-r border-[#2E2820] last:border-0 hover:bg-[#161310] transition-all duration-300">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-start justify-between mb-8">
                      <span className="font-mono text-[#2E2820] text-6xl font-bold leading-none group-hover:text-[#D4A843]/20 transition-colors">{service.number}</span>
                      <div className="text-right">
                        <div className="font-display font-bold text-[#EDE8DE] text-xl">{service.price}</div>
                        <div className="font-mono text-[10px] text-[#5A5249] uppercase tracking-wider">{service.unit}</div>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-[#EDE8DE] text-xl mb-3">{service.title}</h3>
                    <p className="text-[#7A7167] text-sm leading-relaxed mb-6">{service.desc}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-[#D4A843] font-mono text-xs uppercase tracking-widest group-hover:gap-4 transition-all duration-300"
                    >
                      Explore <span className="w-6 h-px bg-[#D4A843]" />
                    </Link>
                  </div>
                  <div className="overflow-hidden h-48">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09]/40 to-transparent" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────── */}
      <section className="py-20 bg-[#161310] border-b border-[#2E2820]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-[#2E2820]">
            <div className="md:px-12">
              <StatCounter target={9} suffix="+" label="Years Experience" />
            </div>
            <div className="md:px-12">
              <StatCounter target={50} suffix="+" label="Projects Completed" />
            </div>
            <div className="md:px-12">
              <StatCounter target={3} label="Cities Served" />
            </div>
            <div className="md:px-12 text-center">
              <div className="font-display font-bold text-5xl md:text-6xl text-[#EDE8DE] mb-2 leading-none">
                ₹<span className="text-[#D4A843]">1,600</span>
              </div>
              <div className="text-[#5A5249] text-xs font-mono uppercase tracking-[0.2em] mt-2">Starting / sq ft</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROJECTS ─────────────────────────────── */}
      <section className="section-padding border-b border-[#2E2820]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#D4A843]" />
                <span className="section-label">Our Work</span>
              </div>
              <h2 className="font-display font-bold text-[#EDE8DE]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
                Projects That Define Us
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-3 text-[#D4A843] font-mono text-xs uppercase tracking-widest hover:gap-5 transition-all duration-300 group mt-4 md:mt-0"
            >
              View All Projects
              <span className="w-8 h-px bg-[#D4A843] group-hover:w-12 transition-all duration-300" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#2E2820]">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05} className="border-r border-b border-[#2E2820] last:border-r-0">
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  location={project.location}
                  area={project.area}
                  slug={project.slug}
                  thumbnail={project.thumbnail}
                  package={project.package}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 text-[#D4A843] font-mono text-xs uppercase tracking-widest"
            >
              View All Projects <span className="w-8 h-px bg-[#D4A843]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────── */}
      <section className="section-padding border-b border-[#2E2820] bg-[#0D0B09]">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">Client Reviews</span>
              <div className="h-px w-8 bg-[#D4A843]" />
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE]" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1' }}>
              What Our Clients Say
            </h2>
          </ScrollReveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80&fit=crop"
            alt="Beautiful home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0B09]/88" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">Start Your Project</span>
              <div className="h-px w-8 bg-[#D4A843]" />
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE] mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}>
              Ready to Build Your<br />Dream Home?
            </h2>
            <p className="text-[#7A7167] mb-10 max-w-xl mx-auto leading-relaxed">
              Get in touch with our experts and take the first step toward your perfect home. Free consultation, transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleQuoteClick}
                className="bg-[#D4A843] text-[#0D0B09] font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#E8C56A] hover:shadow-[0_0_30px_rgba(212,168,67,0.3)] transition-all duration-300"
              >
                Get Free Quote
              </button>
              <Link
                to="/services"
                className="border border-[#EDE8DE]/30 text-[#EDE8DE] font-medium px-8 py-4 uppercase tracking-widest text-xs hover:border-[#D4A843] hover:text-[#D4A843] transition-all duration-300 text-center"
              >
                View Packages
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
