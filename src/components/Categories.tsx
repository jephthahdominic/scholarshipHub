
import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: number;
  name: string;
  imageUrl: string;
  count: number;
}

interface CategoriesProps {
  categories: Category[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-2 text-center">Browse Categories</h2>
        <p className="text-gray-600 font-outfit text-center mb-12">Find the perfect image by browsing our curated categories</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <div className="aspect-square">
                  <img 
                    src={category.imageUrl} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-colors flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-white font-outfit font-medium text-lg">{category.name}</h3>
                    <p className="text-white text-sm font-outfit opacity-80">{category.count} photos</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
