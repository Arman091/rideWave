"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/button";
import { useLang } from "@/shared/hooks/language";
interface NavLinkProps {
  isMobileview: boolean;
  isHomepage?: boolean;
  changeHeaderColor?: boolean;
}

const Navlinks: React.FC<NavLinkProps> = ({
  isMobileview,
  isHomepage,
  changeHeaderColor,
}) => {
  const pathname = usePathname();
  const [locale, currentLanguage] = useLang();
  const routes = [
    { path: "/", label: "Home" },
    { path: "/drivers", label: locale?.drivers },
    { path: "/riders", label: locale?.riders },
    { path: "/pricing", label: locale?.pricing },
    { path: "/about-us", label: locale?.about },
  ];

  return (
    <>
    <ul className="flex flex-col sm:flex-row gap-x-12 items-center ">
      <div className="hidden sm:flex gap-x-12">
      {routes.map((route) => (
        <li key={route.path} className="nav-link  primaryFontBold">
          <Link
            href={route.path}
            className={`nav-link ${
              pathname === route.path ? "activeLink" : ""
            } ${
              isHomepage
                ? changeHeaderColor
                  ? "text-gray-300 dark:text-white"
                  : "text-white"
                : "text-custom-continue-color dark:text-white"
            } ${isMobileview ? "text-white" : ""}`}
          >
            {route.label}
          </Link>
        </li>
      ))}
      </div>
      <div className="flex gap-2">
        <Button 
        variant="default"
        className="py-0 h-[40px]"
        >
          <Link href="/login">
            {locale?.login}
          </Link>
        </Button>
      </div>
    </ul>
    <style jsx>
      {
      `
        .nav-link:hover {
          animation: displace 0.5s ease;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          animation-delay: 0.2s;
          color:var(--button-primary-bg);
        }
       .nav-link{
          text-align: left;
          font-size: 15px;
          line-height: 31px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          opacity: 1;
       }
       .activeLink{
        color:var(--button-primary-bg)
       }   
      `
      }
    </style>
    </>
  );
};

export default Navlinks;
