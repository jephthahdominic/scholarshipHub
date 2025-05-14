import {createContext, useContext, useEffect, useState } from "react";
import { userHasWallet } from '@civic/auth-web3';
import { UserContextType } from "@civic/auth/react";
import { useUser } from "@civic/auth/react";
import { WalletClient } from "viem";
import { http, createConfig, useConnect, useAccount } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { embeddedWallet } from "@civic/auth-web3/wagmi";

const WalletContext = createContext(undefined);

type ExistingWeb3UserContext = UserContextType & {
  ethereum: string,
  wallet: WalletClient
}


export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors:[
    embeddedWallet()
  ]
})


export function WalletProvider({ children }: { children: React.ReactNode }){
  const userContext = useUser();
  const {connectors, connect} = useConnect();
  const [isConnecting, setIsConnecting] = useState(false)
  
  function connectWallet(){
    setIsConnecting(true)
    if(userHasWallet) {
      connect({
        connector: connectors[0]
      })
    }
  }

  const { address, isConnected } = useAccount();
  
  // Sync to sessionStorage when connected
  useEffect(() => {
    if (isConnected && address) {
      sessionStorage.setItem("walletAddress", address);
      console.log("Wallet stored in session:", address);
    }
  }, [isConnected, address]);

  const storedAddress = sessionStorage.getItem("walletAddress");
  console.log(storedAddress)

    return(
        <WalletContext.Provider value={{userContext, connectWallet, isConnecting, storedAddress}}>
          {children}
        </WalletContext.Provider>
    )
          
}

export function useWallet(){
  const context = useContext(WalletContext);
  if(!context) console.log("context cannot be used outside its provider")
  return context
}