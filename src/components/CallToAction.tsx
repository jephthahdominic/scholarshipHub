
import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
          Are you a photographer?
        </h2>
        <p className="text-xl font-outfit font-light mb-8 max-w-2xl mx-auto">
          Join our community of photographers and start earning from your creative work
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button className="bg-white text-black hover:bg-gray-200 transition-colors h-12 px-6 text-lg font-outfit flex items-center">
            <Upload size={20} className="mr-2" />
            Upload Your Photos
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors h-12 px-6 text-lg font-outfit">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
