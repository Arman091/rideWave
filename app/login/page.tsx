"use client";

import LoginForm from "@/components/login-form";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Close button */}
      <div className="relative">
      <Link
        href="/"
        className="absolute mdl_cls_btn  text-gray-600 hover:text-gray-900"
      >
        <FaTimes size={24} />
      </Link>

      {/* Login form */}
      <LoginForm setIsLogin={()=>{}} />
      </div>
    </main>
  );
}
