
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ScholarshipNavbar from "@/components/ScholarshipNavbar";
import ScholarshipFooter from "@/components/ScholarshipFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <ScholarshipNavbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold mb-4">404</h1>
          <p className="text-2xl font-medium mb-6">Oops! Page not found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      
      <ScholarshipFooter />
    </div>
  );
};

export default NotFound;
