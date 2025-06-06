
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessTimeline from '@/components/ProcessTimeline';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Process = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Our Process</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Transparent, efficient, and collaborative—discover our step-by-step approach to bringing your construction project to life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Timeline */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Our Construction Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the initial consultation to the final handover, we keep you informed and involved at every stage of the process.
            </p>
          </div>
          
          <ProcessTimeline />
        </div>
      </section>
      
      {/* Process Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-medium mb-4">Why Our Process Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures quality, transparency, and timely delivery for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Detailed Planning</h3>
              <p className="text-gray-600">
                We conduct thorough planning before construction begins to anticipate challenges and optimize resource allocation, preventing costly delays.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Regular Updates</h3>
              <p className="text-gray-600">
                We provide weekly progress reports and maintain open lines of communication, ensuring you're always informed about your project's status.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Each phase includes rigorous quality checks by our engineers and supervisors to ensure everything meets our high standards before proceeding.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                Our milestone-based payment structure ensures you only pay for completed work, with no hidden costs or unexpected expenses.
              </p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Efficient Execution</h3>
              <p className="text-gray-600">
                Our experienced team follows a well-coordinated workflow, ensuring materials and labor are available exactly when needed to minimize downtime.
              </p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium mb-3">Client Input</h3>
              <p className="text-gray-600">
                We involve you at key decision points, ensuring your vision is incorporated throughout the construction process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Involvement */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Your Involvement Matters</h2>
              <p className="text-gray-600 mb-6">
                We believe in collaborative construction. Throughout the process, we encourage your input and keep you involved in decision-making at key stages.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">1</div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Initial Design Input</h4>
                    <p className="text-gray-600">Share your vision, preferences, and requirements during the planning phase.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">2</div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Material Selection</h4>
                    <p className="text-gray-600">Choose from our curated selection of materials, fixtures, and finishes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">3</div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Progress Inspections</h4>
                    <p className="text-gray-600">Schedule site visits to see progress and discuss any adjustments needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mt-1 mr-4">4</div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Final Walkthrough</h4>
                    <p className="text-gray-600">Inspect the completed project before handover to ensure satisfaction.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-accent hover:bg-accent/90">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-soft">
              <img src="/process/client-meeting.jpg" alt="Client meeting" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-6">Have Questions About Our Process?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is ready to explain every aspect of our construction process and address any concerns you might have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-primary hover:bg-primary/90">
              <Link to="/packages">Explore Packages</Link>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Process;
