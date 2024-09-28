"use client";

import { useEffect, useState } from "react";
import LinkItem from "../LinkItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Brand from "../Brand";
import Link from "next/link";
import NewsletterModal from "../NewsletterModal";
import { SparklesIcon } from "@heroicons/react/24/outline";

const NavigationBar = () => {
  const [state, setState] = useState(false);
  const [isNewsletterModalActive, setNewsletterModalActive] = useState(false);

  const navigation = [
    { title: "Pricing", path: "/pricing" },
    { title: "Products", path: "/productspage" },
    { title: "About", path: "/aboutus" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target as HTMLElement;
      if (target && !target.closest(".menu-btn")) {
        setState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="h-[4rem] relative z-20">
        <nav
          className={`${
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
                {navigation.map((item, idx) => (
                  <li
                    key={idx}
                    className="font-medium text-sm text-zinc-400 hover:text-zinc-200 duration-200"
                  >
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
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
        closeModal={setNewsletterModalActive}
      />
    </>
  );
};

export default NavigationBar;
