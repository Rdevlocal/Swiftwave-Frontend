"use client";

import { useEffect, useState } from "react";
import LinkItem from "../LinkItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NewsletterModal from "../NewsletterModal";

const Navigation = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNewsletterModalActive, setNewsletterModalActive] = useState(false);

  // Main navigation items
  const navigationItems = [
    { title: "Integrations", path: "/integrations" },
    { title: "Products", path: "/products" },
    { title: "Pricing", path: "/pricing" },
    { title: "Resources", path: "/resources" },
    { title: "Contact", path: "/contact" },
  ];

  // Resources dropdown items
  const resources = [
    { title: "Partners", path: "/partners" },
    { title: "Advantages", path: "/advantages" },
    { title: "Blog", path: "/blog" },
    { title: "Help Center", path: "/helpcenter" },
  ];

  // Close dropdown on document click
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn") && !target.closest(".relative")) {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <header className="h-[4rem] relative z-20 mt-4"> {/* Added margin-top for spacing */}
        <nav
          className={`${
            isMobileMenuOpen
              ? "absolute inset-x-0 shadow-lg rounded-xl bg-zinc-900 border border-zinc-800 mx-2 pb-5 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 md:bg-transparent md:pb-0"
              : ""
          }`}
        >
          <div className="custom-screen-lg gap-x-14 items-center md:flex">
            <div className="flex items-center justify-between py-1 md:block">
              <div className="flex md:hidden">
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
              </div>
            </div>
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigationItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative font-medium text-sm text-zinc-400 hover:text-zinc-200 duration-200"
                    onMouseEnter={item.title === "Resources" ? openDropdown : undefined}
                    onMouseLeave={item.title === "Resources" ? closeDropdown : undefined}
                  >
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                    {item.title === "Resources" && isDropdownOpen && (
                      <ul className="absolute left-0 mt-2 w-40 bg-zinc-800 rounded-md shadow-lg z-10">
                        {resources.map((resource, resourceIdx) => (
                          <li key={resourceIdx} className="py-2 px-4 text-zinc-400 hover:text-zinc-200">
                            <Link href={resource.path}>{resource.title}</Link>
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
                  href="/components"
                  className="w-full block bg-zinc-800 hover:bg-zinc-700 md:bg-shiny"
                >
                  Get started
                </LinkItem>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <NewsletterModal
        isActive={isNewsletterModalActive}
        closeModal={() => setNewsletterModalActive(false)}
      />
    </>
  );
};

export default Navigation;
