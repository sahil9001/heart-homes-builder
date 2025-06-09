
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions or ready to start your construction journey? Get in touch with our team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-6">Get a Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours with a customized quote for your project.
              </p>

              <QuoteForm />
            </div>

            <div className="lg:pl-8">
              <h2 className="text-2xl sm:text-3xl font-display font-medium mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                You can also reach out to us directly using the contact information below or send us a message on WhatsApp.
              </p>

              <div className="space-y-8">
                {/* Main Contact */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-display font-medium text-xl mb-4">Get In Touch</h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <p className="text-gray-600">+91 84355 32184</p>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <p className="text-gray-600">info@craftedconstructions.com</p>
                    </div>

                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                      </svg>
                      <a href="https://wa.me/918435532184" className="text-green-600 hover:text-green-700">WhatsApp: +91 84355 32184</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8">
                <h3 className="font-display font-medium text-xl mb-4">Business Hours</h3>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Monday - Friday:</span>
                    <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Saturday:</span>
                    <span className="text-gray-600">9:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Sunday:</span>
                    <span className="text-gray-600">Closed (Available for site visits by appointment)</span>
                  </div>
                </div>
              </div>

              {/* Connect With Us */}
              <div className="mt-8">
                <h3 className="font-display font-medium text-xl mb-4">Connect With Us</h3>

                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    className="bg-gray-100 hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com"
                    className="bg-gray-100 hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://twitter.com"
                    className="bg-gray-100 hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195c-.899-.96-2.18-1.56-3.594-1.56-2.72 0-4.924 2.206-4.924 4.926 0 .386.044.762.127 1.122-4.094-.206-7.725-2.168-10.149-5.152-.424.726-.665 1.568-.665 2.464 0 1.71.87 3.2 2.188 4.088a4.927 4.927 0 01-2.229-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.413.113-.85.174-1.3.174-.315 0-.625-.028-.927-.082.626 1.956 2.444 3.38 4.6 3.42-1.68 1.32-3.809 2.104-6.12 2.104-.398 0-.79-.023-1.175-.068C2.163 21.9 4.734 22.75 7.5 22.75c9.007 0 13.938-7.493 13.938-13.982 0-.21-.005-.422-.015-.63a9.935 9.935 0 002.415-2.54l.017-.028z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://youtube.com"
                    className="bg-gray-100 hover:bg-primary hover:text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.017 3.017 0 00-2.12-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://wa.me/918435532184"
                    className="bg-green-500 hover:bg-green-600 text-white transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
