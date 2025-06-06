
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  location: string;
  area: string;
  slug: string;
  thumbnail: string;
  package: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  location,
  area,
  slug,
  thumbnail,
  package: packageType
}) => {
  return (
    <Card className="overflow-hidden h-full card-hover group">
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Link 
              to={`/projects/${slug}`}
              className="inline-block bg-primary text-white px-4 py-2 rounded-md"
            >
              View Story
            </Link>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-medium text-lg">{title}</h3>
          <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
            {packageType}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {location}
        </div>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"></path>
          </svg>
          {area}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
