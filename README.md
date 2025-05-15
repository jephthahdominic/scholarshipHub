# README

## 🎓 Decentralized Scholarship Hunter
A decentralized web application that helps users discover and apply for global scholarship opportunities, integrated with Web3 wallet connectivity and Civic authentication for secure, privacy-respecting identity verification.

## 🔗 Live Demo
👉 https:https://scholarshiphub.vercel.app

## 🛠️ Tech Stack
Frontend: React

UI Components: shadcn/ui + Tailwind CSS

Web3 Integration: wagmi

Authentication: Civic Pass

## ✨ Features
🔍 Scholarship Discovery – Browse and filter verified scholarship listings.

🦾 Decentralized Identity Verification – Authenticate with Civic to ensure eligibility without compromising privacy.

🔐 Secure Wallet Login – Connect with your Ethereum wallet using wagmi.

📚 User Dashboard – Track and manage your scholarship applications.

🧠 Personalized Recommendations – Get tailored opportunities based on user profile and eligibility.

## 📦 Getting Started
Prerequisites
Node.js v18+
npm or yarn
MetaMask (or any EVM-compatible wallet extension)

**Installation**

bash

git clone https://https://github.com/jephthahdominic/scholarshipHub.git

cd scholarshipHub

npm install

**Running the App**

npm run dev

## 🔐 Civic Integration

This app uses Civic for decentralized identity verification. To test this locally:

Go to Civic's Developer Portal - https://www.civic.com/
Read civic docs - https://docs.civic.com/

## 🧩 Project Structure 
bash

src/
├── components/        # Reusable UI components (shadcn/ui)
├── pages/             # Page-level components
├── hooks/             # Custom React hooks (e.g. for wagmi, civic)
├── context/           # Global context (user auth, wallet state)
├── lib/               # Utility functions
├── data/              # Static data or mocks
└── App.tsx            # Main App component
