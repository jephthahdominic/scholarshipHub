
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, UserRound, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const ScholarshipNavbar = () => {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap size={32} className="text-blue-600" />
          <Link to="/" className="text-2xl font-outfit font-bold text-blue-600">ScholarHub</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 font-outfit">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/scholarships" className="text-gray-700 hover:text-blue-600 transition-colors">Scholarships</Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Link>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="hidden md:block text-sm text-gray-600">
                Welcome, <span className="font-semibold">{currentUser?.name}</span>
              </div>
              <Button 
                variant="outline" 
                className="flex items-center" 
                onClick={handleLogout}
              >
                <LogOut size={18} className="mr-2" />
                <span className="hidden md:inline">Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="flex items-center">
                  <LogIn size={18} className="mr-2" />
                  <span className="hidden md:inline">Login</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 flex items-center">
                  <UserRound size={18} className="mr-2" />
                  <span className="hidden md:inline">Register</span>
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ScholarshipNavbar;
