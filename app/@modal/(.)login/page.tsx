"use client";

import LoginForm from "@/components/login-form";
import SignupForm from "@/components/signup-form";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLang } from "@/shared/hooks/language";

export default function LoginModal() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(true);
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
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] "
      onClick={handleBackdropClick}
    >
      <div className="bg-white max-h-[80%] overflow-y-auto overflow-x-hidden p-8 pt-4 min-w-[450px] relative  top-0 max-w-md w-full mx-4 rounded-lg shadow-lg ">
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
          className="absolute top-6 left-[30px] bg-white rounded-md  p-1 text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Close modal"
        >
         <FaArrowLeft />
        </button>
      </div>
    </div>
  );
}
