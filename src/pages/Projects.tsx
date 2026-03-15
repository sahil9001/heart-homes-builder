
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

const Projects = () => {
  const [activeCity, setActiveCity] = useState<string>('all');

  const filteredProjects = activeCity === 'all'
    ? projects
    : projects.filter(project => project.location.toLowerCase() === activeCity.toLowerCase());

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <SEO
        title="Construction Projects Portfolio"
        description="Browse 50+ completed homes and renovations in Raipur, Nagpur & Bhandara. Starter, Classic and Premium builds — explore our work and get inspired."
        canonical="/projects"
        breadcrumbs={[{ name: 'Projects', url: '/projects' }]}
        schema={projectsSchema}
      />
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#222222]">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center">
            <p className="text-[#5B8DEF] text-sm font-medium uppercase tracking-widest mb-4">Our Work</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-[#FAFAFA] mb-6">Projects That Define Us</h1>
            <p className="text-lg text-[#888888] max-w-3xl mx-auto">
              Explore our portfolio of completed projects across Raipur, Nagpur, and Bhandara. Each project represents our commitment to quality and client satisfaction.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <CityBadge city="All" active={activeCity === 'all'} onClick={() => setActiveCity('all')} />
            <CityBadge city="Raipur" active={activeCity === 'raipur'} onClick={() => setActiveCity('raipur')} />
            <CityBadge city="Nagpur" active={activeCity === 'nagpur'} onClick={() => setActiveCity('nagpur')} />
            <CityBadge city="Bhandara" active={activeCity === 'bhandara'} onClick={() => setActiveCity('bhandara')} />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.05}>
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-display font-medium text-[#FAFAFA] mb-2">No projects found</h3>
              <p className="text-[#888888]">No projects match your current filter. Try another city or view all.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5B8DEF]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-white">
            Ready to Start Your Own Project?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let's turn your vision into reality. Contact us today for a free consultation and quote.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-[#5B8DEF] hover:bg-white/90 px-8 py-4 rounded-xl transition-all text-lg font-medium"
          >
            Get a Free Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
