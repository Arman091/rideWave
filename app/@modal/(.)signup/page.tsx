"use client";

import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLang } from "@/shared/hooks/language";

export default function SignupModal() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [locale] = useLang();

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [router]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      router.back();
    }
  };

  return (
    <div 
      className=" bg-black/50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white  p-8 pt-4 min-w-[450px] max-w-md w-full mx-4 rounded-lg shadow-lg relative">
        <h1 className="px-4 mb-4 rounded-md mx-auto w-fit text-[34px] text-center font-bold text-custom-button-primary-bg tracking-wider secondaryBoldWeight capitalize">
          {isLogin ? locale?.login : locale?.signup}
        </h1>
        
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
        
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Close modal"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </div>
  );
}
