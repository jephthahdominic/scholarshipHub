
import React from 'react';
import { Link } from 'react-router-dom';
import ScholarshipNavbar from '@/components/ScholarshipNavbar';
import ScholarshipFooter from '@/components/ScholarshipFooter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { scholarships } from '@/data/scholarshipData';
import { CalendarCheck, Book, FileText, Award, CheckCircle, Clock } from 'lucide-react';

const mockApplications = [
  {
    id: "app-001",
    scholarshipId: "sch-001",
    status: "submitted",
    submittedDate: "2023-07-01"
  },
  {
    id: "app-002",
    scholarshipId: "sch-003",
    status: "under_review",
    submittedDate: "2023-07-10"
  },
];

const Dashboard = () => {
  const { currentUser } = useAuth();
  
  // Match applications with their scholarships
  const userApplications = mockApplications.map(app => {
    const scholarship = scholarships.find(s => s.id === app.scholarshipId);
    return {
      ...app,
      scholarship
    };
  });
  
  // Get recommended scholarships (excluding those already applied for)
  const appliedScholarshipIds = mockApplications.map(app => app.scholarshipId);
  const recommendedScholarships = scholarships
    .filter(s => !appliedScholarshipIds.includes(s.id))
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col font-outfit">
      <ScholarshipNavbar />
      
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Welcome back, {currentUser?.name}
          </h1>
          <p className="text-blue-100 mt-2">
            Manage your scholarship applications and discover new opportunities
          </p>
        </div>
      </div>
      
      <div className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Applications Section */}
              <section>
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-xl font-semibold">Your Applications</h2>
                  <Link to="/scholarships">
                    <Button variant="outline" size="sm">Find More Scholarships</Button>
                  </Link>
                </div>
                
                {userApplications.length > 0 ? (
                  <div className="space-y-4">
                    {userApplications.map(application => (
                      <Card key={application.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <CardTitle>{application.scholarship?.title}</CardTitle>
                            <StatusBadge status={application.status} />
                          </div>
                          <CardDescription>Submitted on {new Date(application.submittedDate).toLocaleDateString()}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between">
                            <div className="text-gray-600">Provider: {application.scholarship?.provider}</div>
                            <div className="font-semibold">{application.scholarship?.amount}</div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="mr-2" size="sm">View Application</Button>
                          <Button variant="ghost" size="sm">Contact Support</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="bg-blue-50">
                    <CardContent className="flex items-center justify-center py-12 text-center">
                      <div>
                        <FileText className="mx-auto text-blue-600 mb-4" size={48} />
                        <h3 className="text-lg font-semibold mb-2">No applications yet</h3>
                        <p className="text-gray-600 mb-4">You haven't applied to any scholarships yet.</p>
                        <Link to="/scholarships">
                          <Button>Browse Scholarships</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </section>
              
              {/* Recommended Scholarships Section */}
              <section>
                <h2 className="text-xl font-semibold mb-5">Recommended For You</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recommendedScholarships.map(scholarship => (
                    <Card key={scholarship.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="mb-4 flex justify-between items-center">
                          <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {scholarship.category}
                          </span>
                          <span className="font-semibold text-blue-700 text-sm">{scholarship.amount}</span>
                        </div>
                        <h3 className="text-base font-medium mb-2 line-clamp-2">
                          {scholarship.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          <CalendarCheck size={14} className="mr-1" />
                          <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Link to={`/scholarships/${scholarship.id}`} className="w-full">
                          <Button variant="outline" className="w-full" size="sm">View Details</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="font-semibold text-blue-700">{currentUser?.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium">{currentUser?.name}</div>
                      <div className="text-sm text-gray-500">{currentUser?.email}</div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">Complete Your Profile</Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Stats Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Application Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="font-semibold text-2xl text-blue-600">{userApplications.length}</div>
                      <div className="text-sm text-gray-600">Total Applications</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <div className="font-semibold text-2xl text-blue-600">
                        {userApplications.filter(a => a.status === "under_review").length}
                      </div>
                      <div className="text-sm text-gray-600">Under Review</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Resources Card */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                        <Book size={16} className="mr-2" />
                        Application Writing Guide
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                        <FileText size={16} className="mr-2" />
                        Scholarship Essay Tips
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                        <Award size={16} className="mr-2" />
                        Financial Aid Basics
                      </a>
                    </li>
                  </ul>
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

const StatusBadge = ({ status }: { status: string }) => {
  let color, icon, text;
  
  switch (status) {
    case 'submitted':
      color = "bg-green-100 text-green-800";
      icon = <CheckCircle size={14} className="mr-1" />;
      text = "Submitted";
      break;
    case 'under_review':
      color = "bg-yellow-100 text-yellow-800";
      icon = <Clock size={14} className="mr-1" />;
      text = "Under Review";
      break;
    case 'rejected':
      color = "bg-red-100 text-red-800";
      icon = null;
      text = "Not Selected";
      break;
    case 'accepted':
      color = "bg-blue-100 text-blue-800";
      icon = <Award size={14} className="mr-1" />;
      text = "Accepted";
      break;
    default:
      color = "bg-gray-100 text-gray-800";
      text = "Unknown";
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
      {icon}{text}
    </span>
  );
};

export default Dashboard;
