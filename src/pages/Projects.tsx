
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CityBadge from '@/components/CityBadge';
import ProjectCard from '@/components/ProjectCard';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { projects } from '@/data/projects';

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Crafted Constructions Project Portfolio',
  description: 'Completed construction and renovation projects across Raipur, Nagpur, and Bhandara.',
  url: 'https://craftedconstructions.in/projects',
  numberOfItems: projects.length,
  itemListElement: projects.map((project, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: project.title,
    url: `https://craftedconstructions.in/projects/${project.slug}`,
    image: project.thumbnail,
    description: project.description,
  })),
};

const cities = ['All', 'Raipur', 'Nagpur', 'Bhandara'];

const Projects = () => {
  const [activeCity, setActiveCity] = useState<string>('all');

  const filteredProjects = activeCity === 'all'
    ? projects
    : projects.filter(p => p.location.toLowerCase() === activeCity.toLowerCase());

  return (
    <div className="min-h-screen bg-[#0D0B09]">
      <SEO
        title="Construction Projects Portfolio"
        description="Browse 50+ completed homes and renovations in Raipur, Nagpur & Bhandara. Starter, Classic and Premium builds — explore our work and get inspired."
        canonical="/projects"
        breadcrumbs={[{ name: 'Projects', url: '/projects' }]}
        schema={projectsSchema}
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
            <span className="section-label">Our Work</span>
          </div>
          <h1 className="font-display font-bold text-[#EDE8DE] mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.05' }}>
            Projects That <span className="text-[#D4A843] italic">Define Us</span>
          </h1>
          <p className="text-[#7A7167] text-lg max-w-2xl leading-relaxed">
            Explore our portfolio of completed projects across Raipur, Nagpur, and Bhandara. Each project represents our commitment to quality and client satisfaction.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          {/* Filter */}
          <div className="flex items-center gap-0 mb-12 flex-wrap gap-y-2">
            {cities.map((city) => (
              <CityBadge
                key={city}
                city={city}
                active={activeCity === city.toLowerCase()}
                onClick={() => setActiveCity(city.toLowerCase())}
              />
            ))}
            <div className="ml-auto hidden md:flex items-center gap-2 text-[#5A5249] font-mono text-xs">
              <span className="text-[#D4A843]">{filteredProjects.length}</span> projects
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="font-display text-2xl text-[#EDE8DE] mb-3">No projects found</h3>
              <p className="text-[#7A7167]">No projects match your filter. Try another city.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#2E2820]">
              {filteredProjects.map((project, i) => (
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#161310] border-t border-[#2E2820]">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4A843]" />
              <span className="section-label">Start Your Project</span>
              <div className="h-px w-8 bg-[#D4A843]" />
            </div>
            <h2 className="font-display font-bold text-[#EDE8DE] mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Ready to Start Your Own Project?
            </h2>
            <p className="text-[#7A7167] mb-8 max-w-xl mx-auto">
              Let's turn your vision into reality. Contact us today for a free consultation and quote.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#D4A843] text-[#0D0B09] font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#E8C56A] transition-all"
            >
              Get a Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
