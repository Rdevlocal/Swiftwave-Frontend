import { useEffect, useState } from "react";
import LinkItem from "../LinkItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTimer, setDropdownTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  // Main navigation items
  const navigationItems = [
    { title: "Integrations", path: "/integrations" },
    { title: "Products", path: "/products" },
    { title: "Pricing", path: "/pricing" },
    { title: "Resources", path: "#" }, // Use '#' to prevent navigation
    { title: "Contact", path: "/contact" },
  ];

  // Resources dropdown items
  const resources = [
    { title: "Partners", path: "/partners" },
    { title: "Blog", path: "/blog" },
    { title: "Help Center", path: "/helpcenter" },
  ];

  // Close dropdown on document click
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".relative")) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
      if (dropdownTimer) {
        clearTimeout(dropdownTimer); // Clear timer on cleanup
      }
    };
  }, [dropdownTimer]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownOpen(true); // Open the dropdown immediately
    if (dropdownTimer) {
      clearTimeout(dropdownTimer); // Clear existing timer
    }
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
    }
  };

  const handleMouseLeave = () => {
    // Set a timer to close the dropdown after 1.5 seconds
    const timer = setTimeout(() => {
      setDropdownOpen(false);
    }, 1500);
    setDropdownTimer(timer); // Store the timer ID
  };

  return (
    <>
      <header className="h-[4rem] relative z-20 mt-4">
        <nav
          className={`${
            isMobileMenuOpen
              ? "absolute inset-x-0 shadow-lg rounded-xl bg-zinc-900 border border-zinc-800 mx-2 pb-5 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 md:bg-transparent md:pb-0"
              : ""
          }`}
        >
          <div className="custom-screen-lg gap-x-14 items-center md:flex">
            <div className="flex items-center justify-between py-1 md:hidden">
              <button
                aria-label="menu button"
                className="menu-btn group"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-5 h-5 text-zinc-500 group-hover:text-zinc-400" />
                ) : (
                  <Bars3Icon className="w-5 h-5 text-zinc-500 group-hover:text-zinc-400" />
                )}
              </button>
              <div className="flex-1 text-center">
                <Link href="/" className="text-2xl font-bold text-zinc-200 font-inter">swiftwave.io</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link href="/" className="text-2xl font-bold text-zinc-200 font-inter">swiftwave.io</Link>
            </div>
            <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${isMobileMenuOpen ? "block" : "hidden"}`}>
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigationItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative font-medium text-sm text-zinc-400 hover:text-zinc-200 duration-200"
                    onMouseEnter={item.title === "Resources" ? openDropdown : undefined}
                    onMouseLeave={item.title === "Resources" ? handleMouseLeave : undefined}
                  >
                    {item.title === "Resources" ? (
                      <button
                        className="flex items-center justify-between block w-full text-left"
                        onClick={openDropdown}
                      >
                        <span>{item.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    ) : (
                      <Link href={item.path} className="block" onClick={closeMobileMenu}>
                        {item.title}
                      </Link>
                    )}
                    {item.title === "Resources" && isDropdownOpen && (
                      <ul className="absolute left-0 mt-2 w-40 bg-zinc-800 rounded-md shadow-lg z-10">
                        {resources.map((resource, resourceIdx) => (
                          <li key={resourceIdx} className="py-2 px-4 text-zinc-400 hover:text-zinc-200">
                            <Link href={resource.path} onClick={closeMobileMenu}>{resource.title}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 md:mt-0">
                <LinkItem
                  variant="shiny"
                  href="/login"
                  className="w-full block bg-zinc-800 hover:bg-zinc-700 md:bg-shiny"
                  onClick={closeMobileMenu}
                >
                  Get started
                </LinkItem>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
