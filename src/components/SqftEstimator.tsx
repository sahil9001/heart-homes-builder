
import React, { useState, useEffect } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { buildPackages } from '@/data/packages';

const SqftEstimator = () => {
  const [sqft, setSqft] = useState(1500);
  const [selectedPackage, setSelectedPackage] = useState(buildPackages[1]); // Classic package by default
  const [totalCost, setTotalCost] = useState(0);
  
  // Update cost when sqft or package changes
  useEffect(() => {
    const cost = sqft * selectedPackage.rate;
    setTotalCost(cost);
  }, [sqft, selectedPackage]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSliderChange = (value: number[]) => {
    setSqft(value[0]);
  };

  const handlePackageChange = (pkg: any) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
      <h3 className="text-2xl font-display font-medium mb-2">Get an Estimate</h3>
      <p className="text-gray-600 mb-6">Adjust the slider to get an instant cost estimate for your dream home.</p>
      
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Built-up Area</span>
          <span className="font-medium">{sqft} sq ft</span>
        </div>
        <Slider 
          defaultValue={[1500]} 
          min={500} 
          max={5000} 
          step={100} 
          onValueChange={handleSliderChange} 
          className="mb-6"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>500 sq ft</span>
          <span>5,000 sq ft</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-600 mb-3">Select Package:</p>
        <div className="flex flex-wrap gap-2">
          {buildPackages.map((pkg) => (
            <button
              key={pkg.tier}
              onClick={() => handlePackageChange(pkg)}
              className={`py-2 px-4 rounded-md text-sm transition-all ${
                selectedPackage.tier === pkg.tier
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {pkg.tier} (₹{pkg.rate}/sq ft)
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">Estimated Cost:</p>
            <p className="text-3xl font-display font-bold text-primary">{formatPrice(totalCost)}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">@ ₹{selectedPackage.rate}/sq ft</p>
            <p className="text-gray-500 text-sm">({selectedPackage.tier} Package)</p>
          </div>
        </div>
      </div>

      <Button className="w-full bg-accent hover:bg-accent/90 py-6" size="lg" onClick={() => window.location.href = "/contact"}>
        Get Free Quote
      </Button>
      
      <p className="mt-4 text-center text-sm text-gray-500">
        No obligations. Our team will contact you within 24 hours.
      </p>
    </div>
  );
};

export default SqftEstimator;
