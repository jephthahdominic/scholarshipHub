
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useUser } from "@civic/auth/react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // const { isAuthenticated, isLoading } = useAuth();
  const {authStatus} = useUser()

  // if (isLoading) {
  //   return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  // }

  if (authStatus != "authenticated") {
    toast.error("You need to be logged in to access this page.");
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
