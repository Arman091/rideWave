"use client";

import LoginForm from "@/components/login-form";
import { FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginModal() {
  const router = useRouter();
  const [isLogin,setIsLogin]=useState<boolean>(true)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative">
        <LoginForm />
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
