
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full border-b border-gray-100">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <h1 className="text-2xl font-outfit font-bold text-black">PhotoStock</h1>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/photos" className="font-outfit text-black hover:text-gray-700">Photos</Link>
            <Link to="/categories" className="font-outfit text-black hover:text-gray-700">Categories</Link>
            <Link to="/pricing" className="font-outfit text-black hover:text-gray-700">Pricing</Link>
          </div>
        </div>
        
        <div className="flex-1 max-w-xl mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search high-quality stock photos..." 
              className="pl-10 w-full h-10 bg-gray-100 border-none rounded-full focus:ring-1 focus:ring-black font-outfit"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart size={20} />
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800 hidden md:flex">
            Submit Photo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
