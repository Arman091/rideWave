"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navlinks from "./Navlinks";

import { HOME_PAGE_LOGO } from "@/lib/config";
interface HeaderProps {
  showNavbar: boolean;
  isHomepage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNavbar, isHomepage }) => {
  const [isLoginSignupModalOpen, setIsLoginSignupModalOpen] = useState(false);
 

  return (
    <header
      className={`header-section flex justify-center w-full py-[8px] top-0 z-[1000] bg-custom-white dark:bg-custom-darkblue  items-center h-[74px] px-[20px] ${
        isHomepage ? "absolute" : ""
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src={HOME_PAGE_LOGO}
          width={180}
          height={34}
          alt="logo"
          title="logo"
          className="cursor-pointer"
        />
      </Link>

      {/* Navlinks */}
      {showNavbar && (
        <div className="flex items-center gap-6 w-[60%] justify-end ">
          <Navlinks
            isHomepage={isHomepage}
            isMobileview={false}
            changeHeaderColor={false}
            setIsModalOpen={setIsLoginSignupModalOpen}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
