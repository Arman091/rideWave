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
 

  return (
    <header
      className={`header-section flex justify-center w-full sm:w-11/12 mx-auto py-[8px] top-0 z-[99] bg-custom-white dark:bg-custom-darkblue  items-center h-[74px] px-[20px] ${
        isHomepage ? "absolute" : ""
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center ">
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
      <div className="flex items-center w-3/4 justify-end ">
       {showNavbar && (
          <Navlinks
            isHomepage={isHomepage}
            isMobileview={false}
            changeHeaderColor={false}
          />
        )}  
       </div> 
    </header>
  );
};

export default Header;
