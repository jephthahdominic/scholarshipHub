
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const ScholarshipFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 font-outfit">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap size={24} className="text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-blue-600">ScholarHub</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Connecting ambitious students with scholarship and grant opportunities around the world.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to="/scholarships" className="hover:text-blue-600 transition-colors">Scholarships</Link></li>
              <li><Link to="/login" className="hover:text-blue-600 transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-blue-600 transition-colors">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Application Guide</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@scholarhub.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Education St, Academic City</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ScholarHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ScholarshipFooter;
