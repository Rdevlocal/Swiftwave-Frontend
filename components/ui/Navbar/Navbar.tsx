"use client";

import { useEffect, useState } from "react";
import LinkItem from "../LinkItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Brand from "../Brand";
import Link from "next/link";
import NewsletterModal from "../NewsletterModal";

export default () => {
  const [state, setState] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State for Resources dropdown visibility
  const [dropdownTimeout, setDropdownTimeout] = useState(null); // State for dropdown timeout
  const [isNewsletterModalActive, setNewsletterModalActive] = useState(false);

  // Main navigation items
  const navigation = [
    { title: "Integrations", path: "/integrations" },
    { title: "Products", path: "/products" },
    { title: "Pricing", path: "/pricing" },
    { title: "Resources", path: "/resources" }, // Keeping this for reference
    { title: "Contact", path: "/contact" },
  ];

  // Resources dropdown items
  const resources = [
    { title: "Partners", path: "/partners" },
    { title: "Advantages", path: "/advantages" },
    { title: "Blog", path: "/blog" },
    { title: "Help Center", path: "/helpcenter" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as HTMLElement;
      if (target && !target.closest(".menu-btn")) {
        setState(false);
        closeDropdown();
      }
    };
  }, []);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    if (dropdownTimeout) return; // Prevent setting another timeout if one already exists
    const timeoutId = setTimeout(() => {
      setDropdownOpen(false);
      setDropdownTimeout(null); // Clear the timeout reference
    }, 1000); // Keep dropdown open for 1 second

  };

  return (
    <>
      <header className="h-[4rem] relative z-20">
        <nav
          className={` ${
            state
              ? "absolute inset-x-0 shadow-lg rounded-xl bg-zinc-900 border border-zinc-800 mx-2 pb-5 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0 md:bg-transparent md:pb-0"
              : ""
          }`}
        >
          <div className="custom-screen-lg gap-x-14 items-center md:flex">
            <div className="flex items-center justify-between py-1 md:block">
              <Link href="/">
                <Brand />
              </Link>
              <div className="flex md:hidden">
                <div className="mr-3"></div>
                <button
                  aria-label="menu button"
                  className="menu-btn group"
                  onClick={() => setState(!state)}
                >
                  {state ? (
                    <XMarkIcon className="w-5 h-5 pointer-events-none text-zinc-500 group-hover:text-zinc-400" />
                  ) : (
                    <Bars3Icon className="w-5 h-5 pointer-events-none text-zinc-500 group-hover:text-zinc-400" />
                  )}
                </button>
              </div>
            </div>
            <div
              className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                state ? "block" : "hidden"
              } `}
            >
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => {
                  if (item.title === "Resources") {
                    return (
                      <li
                        key={idx}
                        className="relative font-medium text-sm text-zinc-400 hover:text-zinc-200 duration-200"
                        onMouseEnter={openDropdown} // Open dropdown on hover
                        onMouseLeave={closeDropdown} // Close dropdown after timeout
                      >
                        <Link href={item.path} className="block">
                          {item.title}
                        </Link>
                        {isDropdownOpen && (
                          <ul className="absolute left-0 mt-2 w-40 bg-zinc-800 rounded-md shadow-lg z-10">
                            {/* Dropdown items for Resources */}
                            {resources.map((resource, resourceIdx) => (
                              <li
                                key={resourceIdx}
                                className="py-2 px-4 text-zinc-400 hover:text-zinc-200"
                              >
                                <Link href={resource.path}>{resource.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={idx}
                        className="font-medium text-sm text-zinc-400 hover:text-zinc-200 duration-200"
                      >
                      </li>
                    );
                  }
                })}
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
        closeModal={setNewsletterModalActive}
      />
    </>
  );
};
