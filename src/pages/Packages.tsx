
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import { buildPackages, renovatePackages } from '@/data/packages';
import { faqItems } from '@/data/faq';

const Packages = () => {
  const [activeTab, setActiveTab] = useState('build');
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Our Transparent Packages</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you're building a new home or renovating an existing one, we offer transparent per-square-foot packages to suit every need and budget.
            </p>
          </div>
        </div>
      </section>
      
      {/* Package Tabs */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="build" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="build">New Construction</TabsTrigger>
                <TabsTrigger value="renovate">Renovation</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="build">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {buildPackages.map((pkg) => (
                  <PackageCard
                    key={pkg.tier}
                    tier={pkg.tier}
                    rate={pkg.rate}
                    features={pkg.features}
                    recommended={pkg.recommended}
                    type="build"
                  />
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-primary/5 rounded-xl">
                <h3 className="text-2xl font-display font-medium mb-4">What's Included in Our Construction Packages?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Structure & Foundation
                    </h4>
                    <p className="text-gray-600">Complete RCC frame, foundation, walls, slabs, and beams according to structural design.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Flooring & Tiling
                    </h4>
                    <p className="text-gray-600">Flooring as per package specifications, including laying and finishing.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Electrical & Plumbing
                    </h4>
                    <p className="text-gray-600">Complete electrical and plumbing work with quality fixtures as per package.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Kitchen & Bathrooms
                    </h4>
                    <p className="text-gray-600">Kitchen countertops, cabinets, and bathroom fixtures as per selected package.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Doors & Windows
                    </h4>
                    <p className="text-gray-600">All internal and external doors and windows with fittings as per package.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Paint & Finish
                    </h4>
                    <p className="text-gray-600">Complete interior and exterior painting with quality paints as specified.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="renovate">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {renovatePackages.map((pkg) => (
                  <PackageCard
                    key={pkg.tier}
                    tier={pkg.tier}
                    rate={pkg.rate}
                    features={pkg.features}
                    recommended={pkg.recommended}
                    type="renovate"
                  />
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-display font-medium mb-6">Renovation Before & After</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Before & After 1 */}
                  <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                    <div className="relative">
                      <div className="grid grid-cols-2">
                        <div className="relative">
                          <img src="/projects/renovation-before-1.jpg" alt="Before renovation" className="w-full h-64 object-cover" />
                          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2">Before</div>
                        </div>
                        <div className="relative">
                          <img src="/projects/renovation-after-1.jpg" alt="After renovation" className="w-full h-64 object-cover" />
                          <div className="absolute bottom-0 right-0 bg-primary text-white px-4 py-2">After</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Kitchen Renovation</h4>
                      <p className="text-gray-600">Complete kitchen overhaul with new cabinets, countertops, and appliances.</p>
                    </div>
                  </div>
                  
                  {/* Before & After 2 */}
                  <div className="bg-white rounded-xl shadow-soft overflow-hidden">
                    <div className="relative">
                      <div className="grid grid-cols-2">
                        <div className="relative">
                          <img src="/projects/renovation-before-2.jpg" alt="Before renovation" className="w-full h-64 object-cover" />
                          <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2">Before</div>
                        </div>
                        <div className="relative">
                          <img src="/projects/renovation-after-2.jpg" alt="After renovation" className="w-full h-64 object-cover" />
                          <div className="absolute bottom-0 right-0 bg-primary text-white px-4 py-2">After</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium">Living Room Transformation</h4>
                      <p className="text-gray-600">Modern update with new flooring, lighting, and wall treatments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Get answers to the most common questions about our packages and services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your question here? Feel free to reach out to us directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Packages;
