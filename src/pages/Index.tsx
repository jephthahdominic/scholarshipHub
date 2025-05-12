
import React from 'react';
import ScholarshipNavbar from '@/components/ScholarshipNavbar';
import ScholarshipFooter from '@/components/ScholarshipFooter';
import { Button } from '@/components/ui/button';
import { GraduationCap, Search, Award, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <ScholarshipNavbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Your Perfect Scholarship
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Connect with thousands of scholarships and grants to fund your education and achieve your academic dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/scholarships">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Search size={18} className="mr-2" />
                Browse Scholarships
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How ScholarHub Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-blue-50 rounded-lg p-8 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Opportunities</h3>
              <p className="text-gray-600">
                Search and filter through thousands of scholarships and grants tailored to your profile and academic goals.
              </p>
            </div>
            
            <div className="text-center bg-blue-50 rounded-lg p-8 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply with Ease</h3>
              <p className="text-gray-600">
                Create a single profile that can be used to apply for multiple scholarships, saving you time and effort.
              </p>
            </div>
            
            <div className="text-center bg-blue-50 rounded-lg p-8 shadow-sm">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Funded</h3>
              <p className="text-gray-600">
                Track your applications and receive notifications when you've been selected for a scholarship or grant.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Scholarship Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully funded their education through ScholarHub.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Create Free Account
            </Button>
          </Link>
        </div>
      </div>
      
      <ScholarshipFooter />
    </div>
  );
};

export default Index;
