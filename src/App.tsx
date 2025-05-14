
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner, toast } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {WagmiProvider, createConfig, useAccount, useConnect, useBalance, http} from "wagmi"

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetail from "./pages/ScholarshipDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Apply from "./pages/Apply";
import { CivicAuthProvider, useWallet } from "@civic/auth-web3/react";
import {config, WalletProvider} from "./contexts/WalletContext"
import { mainnet } from "viem/chains";
import { useEffect } from "react";


const queryClient = new QueryClient();



const App = () => {  

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <CivicAuthProvider clientId="629db8bd-68fc-4919-8563-4901b766e6e1" initialChain={mainnet}>
          <AuthProvider>
            <WalletProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/scholarships" element={<Scholarships />} />
                    <Route path="/scholarships/:id" element={<ScholarshipDetail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/apply/:id" element={<ProtectedRoute><Apply /></ProtectedRoute>} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </TooltipProvider>
            </WalletProvider>
          </AuthProvider>
        </CivicAuthProvider>
      </QueryClientProvider>
    </WagmiProvider>
)
};

export default App;
