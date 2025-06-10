import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  useEffect(() => {
    // Set canonical URL for this page
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://craftedconstructions.in/about');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://craftedconstructions.in/about';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get to know the story and the people behind Crafted Constructions, building quality homes and lasting relationships since 2016.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Crafted Constructions was founded in 2016 by Vinod Silare with a vision to transform the construction industry in central India through transparency, quality, and client-focused service.
              </p>
              <p className="text-gray-600 mb-4">
                After working for over 15 years in the construction sector, Vinod identified a critical gap in the market: clients were tired of hidden costs, unclear timelines, and compromised quality. This inspired him to establish a company that would set new standards for transparency and reliability in the industry.
              </p>
              <p className="text-gray-600">
                What started as a small team in Raipur has now expanded to Nagpur and Bhandara, with over 100 successful projects completed across residential, commercial, and renovation segments.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-soft">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Founder Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A decade of growth, learning, and continuous improvement.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

            {/* 2016 - Foundation */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h3 className="text-2xl font-display font-medium mb-2">2016 - Foundation</h3>
                  <p className="text-gray-600">
                    Crafted Constructions was established in Raipur with a small team of 10 professionals. Completed our first 5 residential projects, setting the foundation for our quality standards.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <div className="rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop" alt="Construction foundation" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2018 - Expansion */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <div className="rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="Construction expansion" className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium mb-2">2018 - Expansion</h3>
                  <p className="text-gray-600">
                    Opened our second office in Nagpur. Introduced our transparent package-based pricing model. Team expanded to 35 professionals with specialized expertise.
                  </p>
                </div>
              </div>
            </div>

            {/* 2020 - Challenges & Adaptation */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h3 className="text-2xl font-display font-medium mb-2">2020 - Challenges & Adaptation</h3>
                  <p className="text-gray-600">
                    Navigated the pandemic by implementing digital consultation services and strict safety protocols. Focused on renovation projects during construction restrictions.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <div className="rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" alt="Construction during pandemic" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2022 - Innovation */}
            <div className="relative mb-16">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-last md:order-first">
                  <div className="rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" alt="Modern construction innovation" className="w-full h-auto" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium mb-2">2022 - Innovation</h3>
                  <p className="text-gray-600">
                    Incorporated smart home technology into our construction packages. Launched eco-friendly construction options. Expanded to Bhandara with our third office.
                  </p>
                </div>
              </div>
            </div>

            {/* 2025 - Future Vision */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right">
                  <h3 className="text-2xl font-display font-medium mb-2">2025 - Future Vision</h3>
                  <p className="text-gray-600">
                    Planning expansion to more cities in central India. Investing in sustainable construction technologies. Aiming to complete our 200th project milestone.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <div className="rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&h=400&fit=crop" alt="Future construction vision" className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The talented professionals who bring your dream homes to life with skill, precision, and passion.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Founder */}
            <div></div>
            <div className="bg-white rounded-xl shadow-soft overflow-hidden text-center">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Profile Photo</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-medium text-xl mb-1">Vinod Silare</h3>
                <p className="text-primary mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 10 years of experience in construction, Vinod leads the company with his vision for quality and transparency.
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">
              Beyond our core team, we employ skilled craftsmen, technicians, and support staff who contribute to our mission of building quality homes across central India.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CSR Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-last lg:order-first">
              <div className="rounded-xl overflow-hidden shadow-soft">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop" alt="Corporate Social Responsibility" className="w-full h-auto" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Our Commitment to Society</h2>
              <p className="text-gray-600 mb-6">
                At Crafted Constructions, we believe in building more than just structures—we're committed to building stronger communities and a sustainable future.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Local Employment
                  </h4>
                  <p className="text-gray-600">
                    We prioritize hiring from local communities, providing training and employment opportunities to skilled and unskilled workers in the regions we operate.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Eco-Friendly Practices
                  </h4>
                  <p className="text-gray-600">
                    Our construction practices incorporate environmentally sustainable techniques, including waste reduction, water conservation, and energy-efficient designs.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.816 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    Community Development
                  </h4>
                  <p className="text-gray-600">
                    We actively participate in community initiatives, from renovating public spaces to supporting local schools and healthcare facilities.
                  </p>
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
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let's discuss your construction or renovation project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
