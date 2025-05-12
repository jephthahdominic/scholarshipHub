
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScholarshipNavbar from '@/components/ScholarshipNavbar';
import ScholarshipFooter from '@/components/ScholarshipFooter';
import { scholarships } from '@/data/scholarshipData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CalendarCheck, Search } from 'lucide-react';
import { format, parseISO } from 'date-fns';

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...new Set(scholarships.map(item => item.category))];
  
  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || scholarship.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <ScholarshipNavbar />
      
      <div className="bg-blue-600 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Find Your Scholarship</h1>
          <p className="text-blue-100 mb-6 max-w-2xl">
            Browse through hundreds of scholarships and grants that match your academic profile and career goals.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search scholarships by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-12 rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {filteredScholarships.length} {filteredScholarships.length === 1 ? 'Scholarship' : 'Scholarships'} Available
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map(scholarship => (
              <Card key={scholarship.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] relative">
                  <img 
                    src={scholarship.coverImage} 
                    alt={scholarship.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {scholarship.category}
                    </span>
                    <span className="font-semibold text-blue-700">{scholarship.amount}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{scholarship.title}</h3>
                  <p className="text-gray-500 mb-3">Provider: {scholarship.provider}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <CalendarCheck size={16} className="mr-1" />
                    <span>Deadline: {format(parseISO(scholarship.deadline), 'MMMM d, yyyy')}</span>
                  </div>
                  
                  <p className="text-gray-700 line-clamp-3">
                    {scholarship.description}
                  </p>
                </CardContent>
                
                <CardFooter className="p-5 pt-0 flex gap-3">
                  <Link to={`/scholarships/${scholarship.id}`} className="flex-grow">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </Link>
                  <Link to={`/apply/${scholarship.id}`} className="flex-grow">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredScholarships.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-4">No scholarships found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                variant="outline"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <ScholarshipFooter />
    </div>
  );
};

export default Scholarships;
