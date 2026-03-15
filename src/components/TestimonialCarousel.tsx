
import React, { useState, useRef, useEffect } from 'react';
import { testimonials } from '@/data/testimonials';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const newPosition = -activeIndex * (carouselRef.current.clientWidth / 3);
      setCurrentTranslate(newPosition);
    }
  }, [activeIndex]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartPosition(e.touches[0].clientX);
    } else {
      setStartPosition(e.clientX);
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentPosition = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = currentPosition - startPosition;
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth / 3;
      const basePosition = -activeIndex * slideWidth;
      if (Math.abs(diff) < slideWidth) {
        setCurrentTranslate(basePosition + diff);
      }
    }
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    const currentPosition = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = currentPosition - startPosition;
    if (Math.abs(diff) > 100) {
      if (diff > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      } else if (diff < 0 && activeIndex < testimonials.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (carouselRef.current) {
        setCurrentTranslate(-activeIndex * (carouselRef.current.clientWidth / 3));
      }
    } else if (carouselRef.current) {
      setCurrentTranslate(-activeIndex * (carouselRef.current.clientWidth / 3));
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-[#5B8DEF]' : 'text-[#333333]'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={carouselRef}
        className={`flex transition-transform duration-300 ease-out ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ transform: `translateX(${currentTranslate}px)` }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%] px-4"
          >
            <div className="h-full bg-[#111111] border border-[#222222] rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-medium text-[#FAFAFA]">{testimonial.name}</h4>
                  <p className="text-[#888888] text-sm">{testimonial.location}</p>
                </div>
                <div>{renderStars(testimonial.rating)}</div>
              </div>
              <p className="italic text-[#FAFAFA]/80 mb-4">"{testimonial.quote}"</p>
              <p className="text-sm text-[#888888]">Project: {testimonial.project}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? 'bg-[#5B8DEF] w-8' : 'bg-[#333333] hover:bg-[#555555] w-2.5'
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
