
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import HeadingReveal from '@/components/HeadingReveal';
import BentoGrid from '@/components/BentoGrid';
import BentoTile from '@/components/BentoTile';
import StatCounter from '@/components/StatCounter';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { projects } from '@/data/projects';

const homepageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ConstructionCompany'],
    name: 'Crafted Constructions',
    alternateName: 'Crafted Constructions',
    description: 'Quality home construction and renovation services at transparent prices. Homes built with heart starting at ₹1,600/sq ft across Raipur, Nagpur and Bhandara.',
    url: 'https://craftedconstructions.in',
    logo: 'https://craftedconstructions.in/logo.png',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    telephone: '+918435532184',
    email: 'info@craftedconstructions.com',
    foundingDate: '2016',
    founder: { '@type': 'Person', name: 'Vinod Silare' },
    priceRange: '₹₹₹',
    slogan: 'Homes built with heart',
    areaServed: [
      { '@type': 'City', name: 'Raipur', containedInPlace: { '@type': 'State', name: 'Chhattisgarh' } },
      { '@type': 'City', name: 'Nagpur', containedInPlace: { '@type': 'State', name: 'Maharashtra' } },
      { '@type': 'City', name: 'Bhandara', containedInPlace: { '@type': 'State', name: 'Maharashtra' } },
    ],
    openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-15:00'],
    serviceType: ['House Construction', 'Home Renovation', 'Commercial Construction'],
    sameAs: [
      'https://facebook.com/craftedconstructions',
      'https://instagram.com/craftedconstructions',
      'https://twitter.com/craftedconstructions',
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '150' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Crafted Constructions',
    url: 'https://craftedconstructions.in',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: 'https://craftedconstructions.in/projects?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  },
];

const handleQuoteClick = () => {
  window.open('https://wa.me/918435532184?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20construction%20project.', '_blank');
};

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEO
        title="Crafted Constructions — Homes Built with Heart | Starting at ₹1,600/sq ft"
        description="Premium home construction and renovation services across Raipur, Nagpur & Bhandara. Transparent per-sqft pricing starting at ₹1,600. Founded 2016. Get a free quote today."
        canonical="/"
        schema={homepageSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Noise/grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }} />

        {/* Subtle blue radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(91,141,239,0.08)_0%,_transparent_70%)]" />

        <div className="container mx-auto px-4 pt-32 pb-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#111111] border border-[#222222] rounded-full px-4 py-1.5 mb-8 text-sm text-[#888888]"
          >
            <span className="w-2 h-2 rounded-full bg-[#5B8DEF] animate-pulse" />
            Building since 2016 · Raipur · Nagpur · Bhandara
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#FAFAFA] leading-none tracking-tight mb-8">
            <HeadingReveal text="We Build" />
            <br />
            <HeadingReveal text="What Lasts." delay={0.3} />
          </h1>

          <motion.p
            className="text-lg md:text-xl text-[#888888] max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Crafted Constructions delivers transparent, quality construction across central India. From dream homes to complete renovations — starting at ₹1,600 / sq ft.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link
              to="/services"
              className="bg-[#5B8DEF] hover:bg-[#7AAAF5] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(91,141,239,0.4)]"
            >
              View Packages
            </Link>
            <button
              onClick={handleQuoteClick}
              className="border border-[#333333] text-[#FAFAFA] hover:border-[#5B8DEF] hover:text-[#5B8DEF] font-medium px-8 py-4 rounded-xl transition-all duration-300"
            >
              Get Free Quote
            </button>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </section>

      {/* Services Bento Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-4">What We Build</h2>
            <p className="text-[#888888] max-w-xl mx-auto">
              From the foundation to the finishing touches — every project is handled with the same commitment to quality.
            </p>
          </ScrollReveal>

          <BentoGrid className="auto-rows-[200px]">
            {/* New Construction - large */}
            <BentoTile size="lg" className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5B8DEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-[#FAFAFA] mb-2">New Construction</h3>
                <p className="text-[#888888]">Full-scale residential and commercial builds from ground up. Starting ₹1,600/sq ft.</p>
              </div>
              <Link to="/services" className="text-[#5B8DEF] text-sm font-medium hover:text-[#7AAAF5] transition-colors flex items-center gap-1">
                Explore packages <span>→</span>
              </Link>
            </BentoTile>

            {/* Renovation */}
            <BentoTile size="md" className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#5B8DEF]/10 border border-[#5B8DEF]/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#5B8DEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-[#FAFAFA] mb-2">Renovation</h3>
                <p className="text-[#888888] text-sm">Transform your existing space. Starting ₹600/sq ft.</p>
              </div>
            </BentoTile>

            {/* Service Areas */}
            <BentoTile size="md" className="p-8 flex flex-col justify-between bg-[#5B8DEF]/5 border-[#5B8DEF]/20">
              <div>
                <p className="text-[#5B8DEF] text-xs font-medium uppercase tracking-widest mb-3">Service Areas</p>
                <div className="space-y-2">
                  {['Raipur', 'Nagpur', 'Bhandara'].map((city) => (
                    <div key={city} className="flex items-center gap-2 text-[#FAFAFA]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B8DEF]" />
                      {city}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[#888888] text-xs mt-4">Central India's trusted builder</p>
            </BentoTile>

            {/* Starting Price */}
            <BentoTile size="md" className="p-8 flex flex-col justify-center items-center text-center">
              <p className="text-[#888888] text-xs uppercase tracking-widest mb-2">Starting at</p>
              <p className="text-4xl font-display font-bold text-[#FAFAFA]">₹1,600</p>
              <p className="text-[#888888] text-sm">per sq ft</p>
            </BentoTile>

            {/* Years Experience */}
            <BentoTile size="md" className="p-8 flex flex-col justify-center items-center text-center">
              <p className="text-5xl font-display font-bold text-[#5B8DEF]">9+</p>
              <p className="text-[#888888] text-sm mt-2">Years of Experience</p>
              <p className="text-[#555555] text-xs mt-1">Since 2016</p>
            </BentoTile>

            {/* Get Quote CTA */}
            <BentoTile
              size="md"
              className="p-8 flex flex-col justify-center items-center text-center bg-[#5B8DEF] border-[#5B8DEF] cursor-pointer"
              onClick={handleQuoteClick}
            >
              <p className="text-white text-xl font-display font-bold mb-2">Get a Free Quote</p>
              <p className="text-white/70 text-sm">24-hour response</p>
              <div className="mt-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </BentoTile>
          </BentoGrid>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 border-y border-[#222222]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter target={9} suffix="+" label="Years Experience" />
            <StatCounter target={3} label="Cities Served" />
            <StatCounter target={50} suffix="+" label="Projects Completed" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-[#FAFAFA] mb-2">₹1,600</div>
              <div className="text-[#888888] text-sm uppercase tracking-widest">Starting / sq ft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Bento */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <ScrollReveal className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-2">Featured Projects</h2>
              <p className="text-[#888888]">A glimpse of our finest work across central India.</p>
            </div>
            <Link to="/projects" className="text-[#5B8DEF] hover:text-[#7AAAF5] font-medium transition-colors hidden md:block">
              View all →
            </Link>
          </ScrollReveal>

          <BentoGrid className="auto-rows-[280px]">
            {/* Large project */}
            <BentoTile size="xl" className="relative overflow-hidden">
              <img
                src={featuredProjects[0]?.thumbnail}
                alt={featuredProjects[0]?.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[#5B8DEF] text-xs font-medium uppercase tracking-widest">{featuredProjects[0]?.package}</span>
                <h3 className="text-xl font-display font-bold text-white mt-1">{featuredProjects[0]?.title}</h3>
                <p className="text-white/60 text-sm">{featuredProjects[0]?.location} · {featuredProjects[0]?.area}</p>
              </div>
            </BentoTile>

            {/* Two small projects */}
            {featuredProjects.slice(1, 3).map((project) => (
              <BentoTile key={project.id} size="md" className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[#5B8DEF] text-xs font-medium uppercase tracking-widest">{project.package}</span>
                  <h3 className="text-base font-display font-bold text-white mt-1">{project.title}</h3>
                  <p className="text-white/60 text-xs">{project.location}</p>
                </div>
              </BentoTile>
            ))}
          </BentoGrid>

          <div className="text-center mt-8 md:hidden">
            <Link to="/projects" className="text-[#5B8DEF] hover:text-[#7AAAF5] font-medium transition-colors">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding border-t border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#FAFAFA] mb-4">What Our Clients Say</h2>
            <p className="text-[#888888] max-w-xl mx-auto">
              Don't take our word for it — hear from the homeowners we've had the pleasure of serving.
            </p>
          </ScrollReveal>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5B8DEF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Start Your Project Today.
            </h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
              Get in touch with our experts and take the first step toward your perfect home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                className="bg-white text-[#5B8DEF] hover:bg-white/90 font-medium px-8 py-4 rounded-xl transition-all"
                onClick={handleQuoteClick}
              >
                Get Free Quote
              </button>
              <Link
                to="/services"
                className="border border-white/30 text-white hover:bg-white/10 font-medium px-8 py-4 rounded-xl transition-all"
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
