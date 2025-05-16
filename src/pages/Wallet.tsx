import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { ArrowUp, CoinsIcon, Copy} from "lucide-react";
import { useState } from "react";

export function Wallet(){
    const useBalance = () => {
        const [balance, setBalance] = useState<number>();
        // The Solana Wallet Adapter hooks
        const { connection } = useConnection();
        const { publicKey } = useWallet();

        if (publicKey) {
            connection.getBalance(publicKey).then(setBalance);
        }

        return balance;
    };

    const balance = useBalance();
    const {publicKey} = useWallet();

    return (
        <div className="fixed top-0 w-full h-screen flex justify-end hidden">
            <div className=" p-8 w-[40%] bg-white">
                <header className="border-gray-300 border-b-2 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <h3 className="font-outfit text-xl font-semibold">Jephthah's Wallet</h3>
                            <p className="flex items-center gap-2 text-gray-400">{publicKey?.toString()} <Copy /></p>
                        </div>
                        {/* <button className="text-blue-400"><ArrowLeftRight /></button> */}
                        <span className="border rounded-full p-2 px-5 border-blue-400 text-blue-400">Solana</span>
                    </div>
                    <p className="font-outfit text-gray-400 mt-6">With this wallet you can easily recieve and transfer cryptocurrencies whenever you need.</p>
                </header>
                <main className="mt-8">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <span className="flex items-center gap-1 text-xl">
                                {balance ? `${balance / 1e9} SOL` : "Loading..."}<span className="text-sm text-gray-400"> USD</span>
                            </span>
                            <span className="text-gray-400 text-sm">BALANCE</span>
                        </div>
                        <button className="bg-blue-600 text-white font-outfit p-3 flex items-center gap-3 rounded-full">
                            Withdraw <ArrowUp className=" rotate-45" />
                        </button>
                    </div>

                    <div className="mt-10">
                        <p className="text-gray-400 font-outfit">Tokens</p>
                        <div>
                            <div>
                                <CoinsIcon />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}