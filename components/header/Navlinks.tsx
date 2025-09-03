"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/shared/hooks/language";
interface NavLinkProps {
  isMobileview: boolean;
  isHomepage?: boolean;
  setIsModalOpen: (open: boolean) => void;
  changeHeaderColor?: boolean;
}

const Navlinks: React.FC<NavLinkProps> = ({
  isMobileview,
  isHomepage,
  setIsModalOpen,
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
    <ul className="flex flex-col sm:flex-row gap-x-12 items-center">
      {routes.map((route) => (
        <li key={route.path}>
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

      {/* Mobile-only Login Button (example) */}
      <li className="block sm:hidden">
        <button onClick={() => setIsModalOpen(true)}>Login</button>
      </li>
    </ul>
  );
};

export default Navlinks;
