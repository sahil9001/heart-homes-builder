import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>("");
  
  useEffect(() => {
    // Find the project by slug
    const foundProject = projects.find(p => p.slug === slug);
    
    if (foundProject) {
      setProject(foundProject);
      setActiveImage(foundProject.thumbnail);
    }
    
    setLoading(false);
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="min-h-screen pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects" className="text-primary hover:underline">
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Project Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link to="/projects" className="inline-flex items-center text-primary hover:underline mb-4">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Projects
              </Link>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">{project.title}</h1>
              
              <div className="flex flex-wrap items-center mt-4 text-gray-600 gap-x-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{project.location}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"></path>
                  </svg>
                  <span>{project.area}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                  <span>{project.package} Package</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0">
              <Button className="bg-accent hover:bg-accent/90" onClick={() => window.location.href = "/contact"}>
                Get Similar Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <img 
                src={activeImage} 
                alt={project.title} 
                className="w-full max-h-[600px] object-contain"
              />
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-4">
              <div 
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${activeImage === project.thumbnail ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setActiveImage(project.thumbnail)}
              >
                <img src={project.thumbnail} alt={project.title} className="w-full h-20 object-cover" />
              </div>
              
              {project.images.map((image: string, index: number) => (
                <div 
                  key={index}
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${activeImage === image ? 'border-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(image)}
                >
                  <img src={image} alt={`${project.title} ${index + 1}`} className="w-full h-20 object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Project Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-6">About This Project</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}. This project showcases our commitment to quality construction and client satisfaction. From the initial design phase through completion, we worked closely with the client to ensure their vision was brought to life.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">Project Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Completed within the estimated timeline</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Used premium materials as specified in the {project.package} package</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Customized design to match client's specific requirements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Implemented energy-efficient features for sustainability</span>
                  </li>
                </ul>
              </div>
              
              {/* Client Testimonial */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-4">Client Testimonial</h3>
                <blockquote className="italic text-gray-600 mb-4">
                  "Working with SS Constructions was a fantastic experience from start to finish. They were transparent about costs, responsive to our questions, and delivered exceptional quality. Our new {project.title.toLowerCase()} exceeded our expectations."
                </blockquote>
                <p className="font-medium">- Satisfied Client, {project.location}</p>
              </div>
            </div>
            
            {/* Project Details Sidebar */}
            <div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-sm">Project Type</p>
                    <p className="font-medium">{project.title.includes("Renovation") ? "Renovation" : "New Construction"}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Built-up Area</p>
                    <p className="font-medium">{project.area}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Package</p>
                    <p className="font-medium">{project.package}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-500 text-sm">Completion Time</p>
                    <p className="font-medium">{project.area.includes("sq ft") ? parseInt(project.area) > 3000 ? "8-10 months" : "5-7 months" : "4-6 months"}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h4 className="font-medium mb-3">Interested in a similar project?</h4>
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => window.location.href = "/contact"}>
                    Request a Quote
                  </Button>
                </div>
              </div>
              
              {/* Other Projects */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-medium mb-4">Similar Projects</h3>
                
                <div className="space-y-4">
                  {projects
                    .filter(p => p.package === project.package && p.id !== project.id)
                    .slice(0, 3)
                    .map(similarProject => (
                      <div key={similarProject.id} className="flex items-center space-x-3">
                        <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                          <img src={similarProject.thumbnail} alt={similarProject.title} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1 text-sm">
                            <Link to={`/projects/${similarProject.slug}`} className="hover:text-primary transition-colors">
                              {similarProject.title}
                            </Link>
                          </h5>
                          <p className="text-xs text-gray-500">{similarProject.location}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
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
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => window.location.href = "/contact"}>
            Get a Free Quote
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
