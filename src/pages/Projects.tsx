
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CityBadge from '@/components/CityBadge';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const [activeCity, setActiveCity] = useState<string>('all');
  
  const filteredProjects = activeCity === 'all' 
    ? projects 
    : projects.filter(project => project.location.toLowerCase() === activeCity.toLowerCase());

  const handleCityChange = (city: string) => {
    setActiveCity(city);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Our Projects</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our portfolio of completed projects across Raipur, Nagpur, and Bhandara. Each project represents our commitment to quality and client satisfaction.
            </p>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <CityBadge 
              city="All" 
              active={activeCity === 'all'} 
              onClick={() => handleCityChange('all')} 
            />
            <CityBadge 
              city="Raipur" 
              active={activeCity === 'raipur'} 
              onClick={() => handleCityChange('raipur')} 
            />
            <CityBadge 
              city="Nagpur" 
              active={activeCity === 'nagpur'} 
              onClick={() => handleCityChange('nagpur')} 
            />
            <CityBadge 
              city="Bhandara" 
              active={activeCity === 'bhandara'} 
              onClick={() => handleCityChange('bhandara')} 
            />
          </div>
          
          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                location={project.location}
                area={project.area}
                slug={project.slug}
                thumbnail={project.thumbnail}
                package={project.package}
              />
            ))}
          </div>
          
          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-display font-medium mb-2">No projects found</h3>
              <p className="text-gray-600">
                No projects match your current filter. Please try another city or view all projects.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6 text-white">
            Ready to Start Your Own Project?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let's turn your vision into reality. Contact us today for a free consultation and quote.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-all text-lg font-medium"
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
