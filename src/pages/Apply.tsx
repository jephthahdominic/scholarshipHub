
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ScholarshipNavbar from '@/components/ScholarshipNavbar';
import ScholarshipFooter from '@/components/ScholarshipFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { scholarships } from '@/data/scholarshipData';
import { toast } from 'sonner';
import { Award, FileText, Upload, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ApplyFormValues {
  fullName: string;
  email: string;
  phone: string;
  institution: string;
  fieldOfStudy: string;
  gpa: string;
  personalStatement: string;
}

const Apply = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  
  const scholarship = scholarships.find(s => s.id === id);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ApplyFormValues>();
  
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
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      // In a real application, you would upload files to a server
      // Here we're just storing the file names
      const newFiles = Array.from(e.target.files).map(file => file.name);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
      toast.success(`${newFiles.length} file(s) uploaded successfully`);
    }
  };
  
  const onSubmit = async (data: ApplyFormValues) => {
    if (uploadedFiles.length === 0) {
      toast.error("Please upload required documents");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Application submitted successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Application error:", error);
      toast.error("There was an error submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <ScholarshipNavbar />
      
      <div className="bg-blue-600 py-6">
        <div className="container mx-auto px-4">
          <Link to={`/scholarships/${scholarship.id}`} className="text-blue-200 hover:text-white mb-2 inline-block">
            &larr; Back to scholarship details
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Apply: {scholarship.title}
          </h1>
          <div className="flex items-center mt-2">
            <Award className="text-blue-200 mr-2" size={18} />
            <span className="text-blue-100">{scholarship.provider}</span>
            <span className="mx-2 text-blue-300">•</span>
            <span className="text-blue-100">{scholarship.amount}</span>
          </div>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Scholarship Application</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium border-b pb-2">Personal Information</h2>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <Input
                            {...register("fullName", {
                              required: "Full name is required"
                            })}
                            className={errors.fullName ? "border-red-300" : ""}
                          />
                          {errors.fullName && (
                            <p className="text-sm text-red-500 mt-1">{errors.fullName.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <Input
                            type="email"
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
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            {...register("phone", {
                              required: "Phone number is required"
                            })}
                            className={errors.phone ? "border-red-300" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium border-b pb-2">Academic Information</h2>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Institution Name
                          </label>
                          <Input
                            {...register("institution", {
                              required: "Institution name is required"
                            })}
                            className={errors.institution ? "border-red-300" : ""}
                          />
                          {errors.institution && (
                            <p className="text-sm text-red-500 mt-1">{errors.institution.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Field of Study
                          </label>
                          <Input
                            {...register("fieldOfStudy", {
                              required: "Field of study is required"
                            })}
                            className={errors.fieldOfStudy ? "border-red-300" : ""}
                          />
                          {errors.fieldOfStudy && (
                            <p className="text-sm text-red-500 mt-1">{errors.fieldOfStudy.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            GPA (out of 4.0)
                          </label>
                          <Input
                            {...register("gpa", {
                              required: "GPA is required",
                              pattern: {
                                value: /^[0-4](\.\d{1,2})?$/,
                                message: "GPA must be between 0.0 and 4.0"
                              }
                            })}
                            className={errors.gpa ? "border-red-300" : ""}
                          />
                          {errors.gpa && (
                            <p className="text-sm text-red-500 mt-1">{errors.gpa.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium border-b pb-2">Supporting Documents</h2>
                      
                      <div className="space-y-4">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <input
                            type="file"
                            id="fileUpload"
                            multiple
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <label htmlFor="fileUpload" className="cursor-pointer">
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <p className="mt-2 text-sm text-gray-600">Click to upload or drag and drop</p>
                            <p className="text-xs text-gray-500">PDF, DOC, DOCX, JPG (max 5MB each)</p>
                          </label>
                        </div>
                        
                        {uploadedFiles.length > 0 && (
                          <div className="mt-4">
                            <h3 className="font-medium text-sm mb-2">Uploaded Files:</h3>
                            <ul className="space-y-2">
                              {uploadedFiles.map((file, index) => (
                                <li key={index} className="flex items-center text-sm text-gray-600">
                                  <CheckCircle size={16} className="text-green-500 mr-2" />
                                  <FileText size={16} className="text-gray-400 mr-2" />
                                  <span>{file}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-lg font-medium border-b pb-2">Personal Statement</h2>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Why do you deserve this scholarship? (250-500 words)
                        </label>
                        <Textarea
                          rows={6}
                          {...register("personalStatement", {
                            required: "Personal statement is required",
                            minLength: {
                              value: 250,
                              message: "Personal statement must be at least 250 words"
                            },
                            maxLength: {
                              value: 1000,
                              message: "Personal statement must be less than 1000 words"
                            }
                          })}
                          className={errors.personalStatement ? "border-red-300" : ""}
                        />
                        {errors.personalStatement && (
                          <p className="text-sm text-red-500 mt-1">{errors.personalStatement.message}</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          Explain your academic achievements, career goals, and why you are a good fit for this scholarship.
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <div className="sticky top-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Guide</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-semibold mb-1">Eligibility Requirements:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {scholarship.eligibility.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">Required Documents:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {scholarship.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">Tips for Success:</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Be specific about your achievements and goals</li>
                        <li>Proofread your application carefully</li>
                        <li>Submit before the deadline</li>
                        <li>Follow all instructions exactly</li>
                      </ul>
                    </div>
                    
                    <div className="pt-2">
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                        <FileText size={14} className="mr-1" />
                        Download Application Guide PDF
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ScholarshipFooter />
    </div>
  );
};

export default Apply;
