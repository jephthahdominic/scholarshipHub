import React, { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";
import {userHasWallet} from "@civic/auth-web3"
import { useUser, useWallet } from "@civic/auth-web3/react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const {user} = useUser();
  const userContext = useUser()
  console.log(user)
  console.log(userContext)

  useEffect(() => {
    // Check if user is stored in localStorage
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) {
    //   setCurrentUser(JSON.parse(storedUser));
    // }
    if(user) {
      setCurrentUser(user)
      setIsLoading(false);
    }
  }, [user]);

  const login = async (email: string, password: string) => {
    // Mock login for now - in a real app, this would call your backend
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data for demonstration
      const user = { 
        id: "user-1",
        name: "Test User",
        email 
      };
      
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user creation
      const user = { 
        id: `user-${Math.random().toString(36).substring(2, 9)}`,
        name,
        email 
      };
      
      setCurrentUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    currentUser,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: currentUser !== null
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
