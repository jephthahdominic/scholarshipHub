
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ScholarshipNavbar from '@/components/ScholarshipNavbar';
import ScholarshipFooter from '@/components/ScholarshipFooter';
import { Button } from '@/components/ui/button';
import { scholarships } from '@/data/scholarshipData';
import { CalendarCheck, CheckCircle, Award, DollarSign } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import { format, parseISO } from 'date-fns';
import { useAuth } from '@/contexts/AuthContext';

const ScholarshipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const scholarship = scholarships.find(s => s.id === id);
  
  if (!scholarship) {
    return (
      <div className="min-h-screen flex flex-col font-outfit">
        <ScholarshipNavbar />
        <div className="flex-grow flex items-center justify-center flex-col p-6">
          <h1 className="text-2xl font-semibold mb-4">Scholarship not found</h1>
          <p className="text-gray-600 mb-6">The scholarship you're looking for doesn't exist or has been removed.</p>
          <Link to="/scholarships">
            <Button>Return to Scholarships</Button>
          </Link>
        </div>
        <ScholarshipFooter />
      </div>
    );
  }
  
  const handleApply = () => {
    if (!isAuthenticated) {
      toast.error("You need to be logged in to apply for scholarships");
      navigate("/login");
      return;
    }
    
    navigate(`/apply/${scholarship.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <ScholarshipNavbar />
      
      <div className="bg-blue-600 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm mb-4">
                {scholarship.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{scholarship.title}</h1>
              <p className="text-blue-100 text-lg">Provided by {scholarship.provider}</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button size="lg" onClick={handleApply} className="bg-white text-blue-700 hover:bg-gray-100">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">About This Scholarship</h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {scholarship.description}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Eligibility Requirements</h2>
                <ul className="space-y-3">
                  {scholarship.eligibility.map((item, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Application Requirements</h2>
                <ul className="space-y-3">
                  {scholarship.requirements.map((item, index) => (
                    <li key={index} className="flex">
                      <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start">
                    <Award className="text-blue-600 mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-500">Award Amount</h3>
                      <p className="text-2xl font-semibold">{scholarship.amount}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CalendarCheck className="text-blue-600 mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-500">Application Deadline</h3>
                      <p className="text-lg">{format(parseISO(scholarship.deadline), 'MMMM d, yyyy')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="text-blue-600 mr-3 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-gray-500">Provider</h3>
                      <p className="text-lg">{scholarship.provider}</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleApply} 
                    className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
                  >
                    Apply for this Scholarship
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Share this Scholarship</h3>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="flex-1">Facebook</Button>
                    <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                    <Button variant="outline" size="sm" className="flex-1">Email</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <ScholarshipFooter />
    </div>
  );
};

export default ScholarshipDetail;
