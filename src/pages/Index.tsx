
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TextRotate } from '@/components/ui/text-rotate';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SqftEstimator from '@/components/SqftEstimator';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CityBadge from '@/components/CityBadge';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const [activeCity, setActiveCity] = useState<string>('all');
  
  const filteredProjects = activeCity === 'all' 
    ? projects.slice(0, 3) 
    : projects.filter(project => project.location.toLowerCase() === activeCity.toLowerCase()).slice(0, 3);

  const handleCityChange = (city: string) => {
    setActiveCity(city);
  };

  const handleQuoteClick = () => {
    window.open('https://wa.me/918435532184?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20construction%20project.', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Homes built with <span className="text-primary">heart</span>,<br /> 
                starting at <span className="text-accent">₹&nbsp;1,600&nbsp;/ sq&nbsp;ft</span>
              </motion.h1>
              
              <motion.div 
                className="text-lg mb-8 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <span>Crafted Constructions delivers </span>
                <TextRotate
                  texts={[
                    "high-quality",
                    "transparent",
                    "reliable",
                    "affordable",
                    "innovative",
                    "sustainable"
                  ]}
                  mainClassName="text-primary font-semibold inline-block"
                  rotationInterval={2500}
                  staggerDuration={0.05}
                  transition={{ type: "spring", damping: 20, stiffness: 300 }}
                />
                <span> construction services across Raipur, Nagpur & Bhandara. From dream homes to renovations, we build to last.</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/packages">View Packages</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={handleQuoteClick}>
                  Get Free Quote
                </Button>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <SqftEstimator />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Why Crafted Constructions?</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Since 2016, we've been building quality homes and lasting relationships across central India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Quality */}
            <div className="bg-white rounded-xl shadow-soft p-6 card-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Uncompromised Quality</h3>
              <p className="text-gray-600">
                We use premium materials and proven construction techniques to ensure your home stands the test of time, backed by warranties of up to 20 years.
              </p>
            </div>
            
            {/* Card 2: Transparency */}
            <div className="bg-white rounded-xl shadow-soft p-6 card-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Complete Transparency</h3>
              <p className="text-gray-600">
                Our per-square-foot pricing model eliminates hidden costs. What you see is what you pay—no surprises or last-minute additions.
              </p>
            </div>
            
            {/* Card 3: On-time Delivery */}
            <div className="bg-white rounded-xl shadow-soft p-6 card-hover">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">On-time Delivery</h3>
              <p className="text-gray-600">
                We respect your timelines and deliver projects on schedule. Our experienced team manages resources efficiently to avoid delays.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Package Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Our Construction Packages</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose from our transparent pricing packages designed to fit every budget and requirement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="bg-white p-6 rounded-xl shadow-soft card-hover">
              <h3 className="text-2xl font-display font-medium mb-2">Starter</h3>
              <p className="text-accent text-3xl font-bold mb-4">₹1,600<span className="text-base font-normal text-gray-500"> / sq ft</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>RCC frame structure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Standard fittings & finishes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>10-year structural warranty</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                <Link to="/packages" className="w-full">View Details</Link>
              </Button>
            </div>
            
            {/* Classic Package */}
            <div className="bg-white p-6 rounded-xl shadow-soft card-hover border-2 border-primary relative">
              <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 text-xs font-medium rounded">
                Most Popular
              </div>
              <h3 className="text-2xl font-display font-medium mb-2">Classic</h3>
              <p className="text-accent text-3xl font-bold mb-4">₹1,900<span className="text-base font-normal text-gray-500"> / sq ft</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Premium tiles in all rooms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Modular kitchen with granite</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>15-year structural warranty</span>
                </li>
              </ul>
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Link to="/packages" className="w-full">View Details</Link>
              </Button>
            </div>
            
            {/* Premium Package */}
            <div className="bg-white p-6 rounded-xl shadow-soft card-hover">
              <h3 className="text-2xl font-display font-medium mb-2">Premium</h3>
              <p className="text-accent text-3xl font-bold mb-4">₹2,300<span className="text-base font-normal text-gray-500"> / sq ft</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Italian marble flooring</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full smart-home integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>20-year comprehensive warranty</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                <Link to="/packages" className="w-full">View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Our Featured Projects</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore our work across different locations
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={handleQuoteClick}>
              View More Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Don't take our word for it—hear from the homeowners we've had the pleasure of serving.
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6 text-white">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Get in touch with our experts today and take the first step toward your perfect home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={handleQuoteClick}>
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/packages">View Packages</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
