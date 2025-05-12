
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 h-[70vh] overflow-hidden">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&q=80)',
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6 max-w-3xl">
          Discover the perfect photos for your creative projects
        </h1>
        
        <p className="text-xl md:text-2xl font-outfit font-light mb-8 max-w-2xl">
          Access millions of high-quality royalty-free stock photos, ready to download
        </p>
        
        <div className="flex flex-col md:flex-row w-full max-w-3xl gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search for high-quality stock images..." 
              className="w-full h-14 pl-12 pr-4 rounded-full font-outfit bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <Button className="h-14 px-8 bg-black text-white border border-white hover:bg-white hover:text-black transition-colors font-outfit font-medium text-lg rounded-full">
            Search
          </Button>
        </div>
        
        <div className="mt-6 font-outfit text-gray-300">
          Popular: 
          <button className="ml-2 mr-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm hover:bg-opacity-30">
            Nature
          </button>
          <button className="mr-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm hover:bg-opacity-30">
            Business
          </button>
          <button className="mr-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm hover:bg-opacity-30">
            Technology
          </button>
          <button className="mr-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm hover:bg-opacity-30">
            Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
