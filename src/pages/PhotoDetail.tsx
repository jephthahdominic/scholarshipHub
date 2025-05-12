
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Download, Share, Info, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { featuredPhotos, popularPhotos } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

const PhotoDetail = () => {
  const { id } = useParams();
  
  // Find the photo from our mock data
  const allPhotos = [...featuredPhotos, ...popularPhotos];
  const photo = allPhotos.find(photo => photo.id === Number(id));
  
  // If photo doesn't exist, show error
  if (!photo) {
    return (
      <div className="min-h-screen flex flex-col font-outfit">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Photo not found</h1>
            <p className="mb-8">The photo you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
              Return to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Related photos (just reuse some of our mock data)
  const relatedPhotos = allPhotos.filter(p => p.id !== photo.id).slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image section */}
          <div className="lg:w-3/4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={photo.imageUrl} 
                alt={photo.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Info section */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <h1 className="text-2xl font-bold mb-2">{photo.title}</h1>
              
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg" 
                  alt="Photographer" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{photo.photographer}</p>
                  <p className="text-sm text-gray-500">Pro Photographer</p>
                </div>
              </div>
              
              <div className="flex gap-2 mb-6">
                <Button className="flex-grow bg-black text-white hover:bg-gray-800">
                  Download
                </Button>
                <Button variant="outline" size="icon" className="border-gray-300">
                  <Plus size={18} />
                </Button>
                <Button variant="outline" size="icon" className="border-gray-300">
                  <Heart size={18} />
                </Button>
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <h3 className="font-semibold mb-2">Information</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-gray-500">Published</span>
                  <span>May 15, 2025</span>
                  <span className="text-gray-500">Resolution</span>
                  <span>5600 x 3700</span>
                  <span className="text-gray-500">Format</span>
                  <span>JPEG</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-gray-100">nature</Badge>
                  <Badge variant="outline" className="bg-gray-100">landscape</Badge>
                  <Badge variant="outline" className="bg-gray-100">mountain</Badge>
                  <Badge variant="outline" className="bg-gray-100">outdoor</Badge>
                  <Badge variant="outline" className="bg-gray-100">travel</Badge>
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <h3 className="font-semibold mb-2">License</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Standard License - All Extended Uses
                </p>
                <Link to="/license" className="text-sm text-black underline">
                  View license details
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related photos */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedPhotos.map((relPhoto) => (
              <div key={relPhoto.id} className="group relative overflow-hidden rounded-lg">
                <Link to={`/photos/${relPhoto.id}`}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={relPhoto.imageUrl} 
                      alt={relPhoto.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Link to={`/photos/${relPhoto.id}`}>
                    <h3 className="text-white font-medium mb-1">{relPhoto.title}</h3>
                  </Link>
                  <p className="text-gray-300 text-sm mb-4">by {relPhoto.photographer}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full">
                        <Heart size={18} />
                      </Button>
                      <span className="text-white text-sm">{relPhoto.likes}</span>
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
      
      <Footer />
    </div>
  );
};

export default PhotoDetail;
