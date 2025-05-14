import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { toast } from "sonner";
import {SignInButton, SignOutButton , UserButton, useUser } from "@civic/auth/react";
import { useWallet } from "@/contexts/WalletContext";
import { useAccount } from "wagmi";

const ScholarshipNavbar = () => {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const {authStatus, signIn} = useUser()
  const walletContext = useWallet();
  const {connectWallet, storedAddress} = walletContext;
  const {isConnected, address} = useAccount(); 

  const navigate = useNavigate();
  

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  async function handleSignIn(){
    await signIn();
    toast.success("Sign in successful");
    navigate("/scholarships")
  }

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm" id="navbar">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap size={32} className="text-blue-600" />
          <Link to="/" className="text-2xl font-outfit font-bold text-blue-600">ScholarHub</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 font-outfit">
          <NavLink to="/" className={({isActive})=> isActive ? "text-gray-700":"text-gray-400 hover:text-blue-600 transition-colors"}>Home</NavLink>
          <NavLink to="/scholarships" className={({isActive})=> isActive ? "text-gray-700":"text-gray-400 hover:text-blue-600 transition-colors"}>Scholarships</NavLink>
          {authStatus == "authenticated" && <NavLink to="/dashboard" className={({isActive})=> isActive ? "text-gray-700":"text-gray-400 hover:text-blue-600 transition-colors"}>Dashboard</NavLink>}
          {isConnected || storedAddress && <NavLink to={'/wallet'} className={({isActive})=> isActive ? "text-gray-700":"text-gray-400 hover:text-blue-600 transition-colors"}>Wallet</NavLink>}
          
        </div>
          <div className="flex items-center space-x-4">
            {/* <UserButton /> */}
            {authStatus == "authenticated" ? (
              <div className="flex items-center gap-3">
                {!isConnected && !storedAddress && <button onClick={()=>connectWallet()} className="rounded-full px-3 py-3 border border-purple-600 text-purple-600 hover:cursor-pointer">Connect Wallet</button>}
                <UserButton
                  style={{
                    border: "1px solid #1259ff ",
                    color: "#1259ff"
                  }}
                  dropdownButtonStyle={{
                    background: "red",
                    color:"white"
                  }}
                />
              </div>
            ):(
              <button
                className="border border-blue-600 p-2 px-8 rounded-[20px]"
                onClick={()=>{
                  handleSignIn()
                }}
              >
                Sign In
              </button>
            )}
            
          </div>
      </div>
    </nav>
  );
};

export default ScholarshipNavbar;
