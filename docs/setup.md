# 🚖 Ride-Booking App – Initial Project Setup

This document summarizes the step-by-step setup of the project with **Next.js + TypeScript**, done from scratch with minimal boilerplate.  
It helps in **revision** as well as explaining the setup process during **interviews**.

---

## 1. Project Initialization
- Created a `rideWave/` folder for the app.
- Initialized **package.json**:
  ```bash
  npm init -y

## 2. installed core dependencies
   npm install next react react-dom

## 3. installed dev dependencies
   npm install --save-dev typescript @types/react @types/react-dom @types/node

## 4. project structure
    ride-wave/
    ├── app/ 
    │ ├── layout.tsx # Root layout 
    │ └── page.tsx # Home page route (/)
    │
    ├── components/
    ├── containers/ # Page-level containers (feature-specific views)
    ├── hooks/ # Custom React hooks
    ├── lib/ # Utility functions, helpers,configs
    ├── services/ # API call flow hierarchy (fetchers, API handlers)
    ├── shared/ # Shared constants, types
    ├── docs/ # Project documentation
    │
    ├── package.json # Project manifest
    └── tsconfig.json # TypeScript configuration


  