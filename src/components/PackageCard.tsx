
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

interface PackageCardProps {
  tier: string;
  rate: number;
  features: string[];
  recommended?: boolean;
  type: 'build' | 'renovate';
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  tier, 
  rate, 
  features, 
  recommended = false,
  type
}) => {
  return (
    <Card className={`card-hover ${recommended ? 'border-primary border-2' : ''} relative overflow-hidden`}>
      {recommended && (
        <div className="absolute top-5 right-0 bg-primary text-white px-3 py-1 text-sm font-medium -mr-2">
          Most Popular
        </div>
      )}
      
      <CardHeader>
        <CardTitle>{tier}</CardTitle>
        <CardDescription>
          {type === 'build' 
            ? 'New Construction Package' 
            : 'Renovation Package'
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <p className="text-4xl font-display font-bold">
            ₹{rate}
            <span className="text-base font-normal text-muted-foreground"> / sq ft</span>
          </p>
        </div>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant={recommended ? "default" : "outline"} 
          className={`w-full ${recommended ? 'bg-accent hover:bg-accent/90' : 'border-primary text-primary hover:bg-primary/10'}`}
          onClick={() => window.location.href = "/contact"}
        >
          Get Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
