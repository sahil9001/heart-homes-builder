
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { testimonials } from '@/data/testimonials';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Update position when active index changes
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
      
      // Limit the drag to one slide in either direction
      if (Math.abs(diff) < slideWidth) {
        setCurrentTranslate(basePosition + diff);
      }
    }
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    
    const currentPosition = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = currentPosition - startPosition;
    
    // Determine if the drag was significant enough to change slides
    if (Math.abs(diff) > 100) {
      if (diff > 0 && activeIndex > 0) {
        // Dragged right -> previous slide
        setActiveIndex(activeIndex - 1);
      } else if (diff < 0 && activeIndex < testimonials.length - 1) {
        // Dragged left -> next slide
        setActiveIndex(activeIndex + 1);
      } else {
        // Snap back to current slide
        if (carouselRef.current) {
          const slideWidth = carouselRef.current.clientWidth / 3;
          setCurrentTranslate(-activeIndex * slideWidth);
        }
      }
    } else {
      // Snap back to current slide for small drags
      if (carouselRef.current) {
        const slideWidth = carouselRef.current.clientWidth / 3;
        setCurrentTranslate(-activeIndex * slideWidth);
      }
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return <div className="flex space-x-1">{stars}</div>;
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
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className="min-w-[100%] md:min-w-[50%] lg:min-w-[33.333%] px-4"
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                  <div className="text-right">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Project: {testimonial.project}
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
