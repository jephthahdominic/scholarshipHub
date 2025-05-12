
import React from 'react';
import { Heart, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Photo {
  id: number;
  imageUrl: string;
  title: string;
  photographer: string;
  likes: number;
}

interface PhotoGridProps {
  photos: Photo[];
  title: string;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, title }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-outfit font-bold">{title}</h2>
          <Link to="/photos" className="text-gray-600 font-outfit hover:text-black">
            View all →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg">
              <Link to={`/photos/${photo.id}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <Link to={`/photos/${photo.id}`}>
                  <h3 className="text-white font-outfit font-medium mb-1">{photo.title}</h3>
                </Link>
                <p className="text-gray-300 text-sm font-outfit mb-4">by {photo.photographer}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                      <Heart size={18} />
                    </Button>
                    <span className="text-white text-sm">{photo.likes}</span>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                    <Download size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
