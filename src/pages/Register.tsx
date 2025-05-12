
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScholarshipNavbar from '@/components/ScholarshipNavbar';
import ScholarshipFooter from '@/components/ScholarshipFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { UserPlus } from 'lucide-react';

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const Register = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormValues>();
  const password = React.useRef({});
  password.current = watch("password", "");
  
  const onSubmit = async (data: RegisterFormValues) => {
    if (!data.acceptTerms) {
      toast.error("You must accept the terms and conditions");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await registerUser(data.name, data.email, data.password);
      toast.success("Account created successfully!");
      navigate("/scholarships");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <ScholarshipNavbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm mx-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
            <p className="text-gray-600 mt-2">Join ScholarHub to discover and apply for scholarships</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name", {
                  required: "Full name is required"
                })}
                className={errors.name ? "border-red-300" : ""}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className={errors.email ? "border-red-300" : ""}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                className={errors.password ? "border-red-300" : ""}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value => value === password.current || "Passwords do not match"
                })}
                className={errors.confirmPassword ? "border-red-300" : ""}
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
            
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Checkbox 
                  id="acceptTerms" 
                  {...register("acceptTerms", {
                    required: true
                  })} 
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="acceptTerms" className="text-gray-600">
                  I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                </label>
                {errors.acceptTerms && (
                  <p className="text-sm text-red-500 mt-1">You must agree to the terms</p>
                )}
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Creating account...</span>
              ) : (
                <>
                  <UserPlus className="mr-2" size={18} />
                  Create account
                </>
              )}
            </Button>
            
            <div className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      <ScholarshipFooter />
    </div>
  );
};

export default Register;
