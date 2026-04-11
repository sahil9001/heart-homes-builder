
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '@/data/testimonials';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? 'text-[#D4A843]' : 'text-[#2E2820]'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="relative">
      {/* Large quote mark */}
      <div className="absolute -top-8 left-0 font-display text-[12rem] leading-none text-[#D4A843]/5 select-none pointer-events-none">
        "
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-6 flex justify-center">{renderStars(active.rating)}</div>
            <blockquote className="font-display text-2xl md:text-3xl text-[#EDE8DE] leading-relaxed font-medium italic mb-8">
              "{active.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-[#D4A843]" />
              <div className="text-center">
                <p className="text-[#EDE8DE] font-medium text-sm">{active.name}</p>
                <p className="text-[#7A7167] text-xs font-mono">{active.location} · {active.project}</p>
              </div>
              <div className="w-8 h-px bg-[#D4A843]" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Testimonial ${index + 1}`}
            className={`transition-all duration-300 ${
              index === activeIndex
                ? 'w-8 h-1 bg-[#D4A843]'
                : 'w-1 h-1 bg-[#2E2820] hover:bg-[#5A5249]'
            }`}
          />
        ))}
      </div>

      {/* Prev/next */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={() => setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
          className="w-10 h-10 border border-[#2E2820] flex items-center justify-center text-[#5A5249] hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
          aria-label="Previous"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)}
          className="w-10 h-10 border border-[#2E2820] flex items-center justify-center text-[#5A5249] hover:border-[#D4A843] hover:text-[#D4A843] transition-all"
          aria-label="Next"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
