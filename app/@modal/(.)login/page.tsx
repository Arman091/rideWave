"use client";

import LoginForm from "@/components/login-form";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/shared/hooks/language";

export default function LoginModal() {
  const router = useRouter();
  const [isLogin,setIsLogin]=useState<boolean>(true)
  const [locale, currentLanguage] = useLang();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 pt-4 min-w-[450px] rounded-lg shadow-lg relative">
        <h1 className=" px-4 mb-4 rounded-md mx-auto  w-fit text-[34px] text-center font-bold text-custom-button-primary-bg tracking-wider secondaryBoldWeight capitalize">
          {isLogin ? locale?.login :locale?.signup}
        </h1>
        <LoginForm setIsLogin={setIsLogin} isLogin={isLogin} />
        <button
          onClick={() => router.back()}
          className="absolute mdl_cls_btn text-gray-600 hover:text-gray-900"
        >
          <FaTimes size={24} />
        </button>
      </div>
    </div>
  );
}
