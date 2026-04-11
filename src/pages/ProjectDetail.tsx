
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const handleQuoteClick = () => {
  window.open('https://wa.me/918435532184?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20construction%20project.', '_blank');
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    const foundProject = projects.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
      setActiveImage(foundProject.thumbnail);
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D0B09]">
        <div className="w-8 h-8 border border-[#D4A843] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0D0B09] pt-40">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-3xl text-[#EDE8DE] mb-4">Project Not Found</h1>
          <p className="text-[#7A7167] mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects" className="text-[#D4A843] font-mono text-xs uppercase tracking-widest">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `https://craftedconstructions.in/projects/${project.slug}`,
    image: project.thumbnail,
    locationCreated: { '@type': 'City', name: project.location },
    creator: { '@type': 'LocalBusiness', name: 'Crafted Constructions' },
  };

  const allImages = [project.thumbnail, ...project.images];
  const similarProjects = projects.filter(p => p.package === project.package && p.id !== project.id).slice(0, 3);
  const completionTime = parseInt(project.area) > 3000 ? '8–10 months' : '5–7 months';

  return (
    <div className="min-h-screen bg-[#0D0B09]">
      <SEO
        title={`${project.title} — ${project.location} ${project.package} Build`}
        description={`${project.description}. ${project.area} ${project.package} package construction in ${project.location} by Crafted Constructions.`}
        canonical={`/projects/${project.slug}`}
        ogImage={project.thumbnail}
        breadcrumbs={[{ name: 'Projects', url: '/projects' }, { name: project.title, url: `/projects/${project.slug}` }]}
        schema={projectSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img
          src={activeImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09] via-[#0D0B09]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0B09]/60 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-0 left-0 right-0 pt-28 pb-8">
          <div className="container mx-auto px-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-[#7A7167] hover:text-[#D4A843] font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              All Projects
            </Link>
          </div>
        </div>

        {/* Project title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto px-6">
            <span className="inline-block border border-[#D4A843] text-[#D4A843] font-mono text-[10px] px-3 py-1 uppercase tracking-widest mb-4">
              {project.package} Package
            </span>
            <h1 className="font-display font-bold text-[#EDE8DE] mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1' }}>
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#7A7167] font-mono text-xs uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <svg className="w-3 h-3 text-[#D4A843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </span>
              <span>·</span>
              <span>{project.area}</span>
              <span>·</span>
              <span>{completionTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image thumbnails */}
      <div className="border-b border-[#2E2820] bg-[#161310]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`flex-shrink-0 w-20 h-14 overflow-hidden transition-all duration-200 ${
                  activeImage === img
                    ? 'ring-2 ring-[#D4A843]'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-[#D4A843]" />
                  <span className="section-label">About This Project</span>
                </div>
                <p className="text-[#7A7167] leading-relaxed mb-6">
                  {project.description}. This project showcases our commitment to quality construction and client satisfaction. From the initial design phase through completion, we worked closely with the client to ensure their vision was brought to life.
                </p>
                <p className="text-[#7A7167] leading-relaxed">
                  The build was completed on time and within budget, using materials specified in the {project.package} package. Every detail — from the structural foundation to the finishing touches — was handled with our signature care and craftsmanship.
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-display font-bold text-[#EDE8DE] text-xl mb-6">Project Highlights</h3>
                <div className="space-y-3">
                  {[
                    'Completed within the estimated timeline',
                    `Premium materials as specified in the ${project.package} package`,
                    'Customized design to match client\'s specific requirements',
                    'Energy-efficient features integrated throughout',
                    'Post-completion support and warranty coverage',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-5 h-5 border border-[#D4A843]/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#D4A843] group-hover:border-[#D4A843] transition-all">
                        <svg className="w-3 h-3 text-[#D4A843] group-hover:text-[#0D0B09] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#7A7167] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="border-l-2 border-[#D4A843] pl-6 py-2">
                <p className="text-[#EDE8DE] italic font-display text-lg leading-relaxed mb-4">
                  "Working with Crafted Constructions was a fantastic experience. They were transparent about costs, responsive to our questions, and delivered exceptional quality. Our new home exceeded our expectations."
                </p>
                <p className="text-[#5A5249] font-mono text-xs uppercase tracking-wider">
                  — Satisfied Client, {project.location}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project details */}
              <div className="border border-[#2E2820] bg-[#161310] p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6 bg-[#D4A843]" />
                  <span className="section-label">Project Details</span>
                </div>
                <div className="space-y-4 divide-y divide-[#2E2820]">
                  {[
                    { label: 'Project Type', value: project.title.includes('Renovation') ? 'Renovation' : 'New Construction' },
                    { label: 'Location', value: project.location },
                    { label: 'Built-up Area', value: project.area },
                    { label: 'Package', value: project.package },
                    { label: 'Completion Time', value: completionTime },
                  ].map((item) => (
                    <div key={item.label} className="pt-4 first:pt-0">
                      <p className="text-[#5A5249] font-mono text-[10px] uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-[#EDE8DE] text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-[#2E2820]">
                  <p className="text-[#7A7167] text-xs mb-4">Interested in a similar project?</p>
                  <button
                    onClick={handleQuoteClick}
                    className="w-full bg-[#D4A843] text-[#0D0B09] font-semibold py-3 text-xs uppercase tracking-widest hover:bg-[#E8C56A] transition-all"
                  >
                    Get a Similar Quote
                  </button>
                </div>
              </div>

              {/* Similar projects */}
              {similarProjects.length > 0 && (
                <div className="border border-[#2E2820] bg-[#161310] p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-[#D4A843]" />
                    <span className="section-label">Similar Projects</span>
                  </div>
                  <div className="space-y-4">
                    {similarProjects.map((p) => (
                      <Link key={p.id} to={`/projects/${p.slug}`} className="flex gap-3 group">
                        <div className="w-16 h-12 flex-shrink-0 overflow-hidden">
                          <img src={p.thumbnail} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div>
                          <h5 className="text-[#EDE8DE] text-sm font-medium group-hover:text-[#D4A843] transition-colors leading-tight mb-1">{p.title}</h5>
                          <p className="text-[#5A5249] font-mono text-[10px] uppercase tracking-wider">{p.location}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            Start Your Own Project
          </h2>
          <p className="text-[#0D0B09]/70 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and let's bring your vision to life.
          </p>
          <button
            onClick={handleQuoteClick}
            className="bg-[#0D0B09] text-[#D4A843] font-semibold px-8 py-4 uppercase tracking-widest text-xs hover:bg-[#1E1A16] transition-all"
          >
            Get a Free Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
