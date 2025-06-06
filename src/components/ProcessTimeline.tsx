
import React from 'react';
import { processSteps } from '@/data/process';

const ProcessTimeline = () => {
  return (
    <div className="relative container mx-auto">
      {/* Vertical Line */}
      <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-primary/20 -translate-x-1/2"></div>

      {processSteps.map((step, index) => (
        <div key={step.id} className={`md:flex items-center relative mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
          {/* Timeline Circle */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center z-10">
            {step.id}
          </div>

          {/* Content Box */}
          <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
            <div className="bg-white p-6 rounded-lg shadow-soft h-full">
              {/* Mobile Circle */}
              <div className="md:hidden flex items-center mb-4">
                <div className="flex w-10 h-10 rounded-full bg-primary text-white items-center justify-center mr-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-display font-medium">{step.title}</h3>
              </div>

              {/* Desktop Title (hidden on mobile) */}
              <h3 className="hidden md:block text-xl font-display font-medium mb-3">{step.title}</h3>
              
              <p className="text-gray-600 mb-4">{step.description}</p>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                  <span className="font-medium">Duration:</span> {step.duration}
                </div>
                
                {step.paymentPercent > 0 && (
                  <div className="bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                    <span className="font-medium">Payment:</span> {step.paymentPercent}%
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Empty Space for Alignment */}
          <div className="hidden md:block md:w-5/12"></div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTimeline;
