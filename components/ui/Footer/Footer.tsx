import Link from "next/link";
import Image from "next/image";
import Brand from "components/ui/Brand";
import BorderGradient from "./BorderGradient";
import BgGradient from "./BgGradient";
import { IconGithub } from "components/icons";

const navigation = [
  { name: "Help center", href: "/helpcentrum" },
  { name: "Contact", href: "/contact" },
  { name: "Dev docs", href: "/docs" },
  { name: "Blog", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const marsNavigation = [
  { name: "Pricingr", href: "/pricing" },
  { name: "Products", href: "/productspage" },
  { name: "About us", href: "/aboutus" },
];  
const Nav = [
  { name: "Marsx", href: "https://www.marsx.dev/" },
  { name: "Unicorn Platform", href: "https://unicornplatform.com" },
  { name: "UI generator", href: "https://uigenerator.org/" },
  { name: "E-commerce store generator", href: "https://marketsy.ai/" },
  { name: "Dev Hunt", href: "https://devhunt.org" },
];

export default () => (
  <footer className="relative mt-40 pt-24 overflow-hidden">
    <div>
      <BorderGradient className=" absolute inset-x-0 top-0 mx-auto" />
      <BgGradient className="absolute inset-x-0 top-0 mx-auto" />
      <div className="custom-screen-lg pb-6 gap-x-8 items-start justify-between flex-wrap relative sm:flex">
        <div className="max-w-xs space-y-3">
          <Brand />
          <p className="text-sm text-zinc-300">
          Empowering Your Business, Seamlessly.
          </p>
          <div className="flex items-center gap-3">
            <a
              aria-label="Facebook account"
              target="_blank"
              href="https://facebook.com/swiftwave"
            >
              <IconGithub className="w-6 h-6 text-zinc-400" />
            </a>
            <a
              aria-label="Facebook account"
              target="_blank"
              href="https://twitter.com/swiftwave"
            >
              <Image
                src="/images/tw-icon.svg"
                width="40"
                height="40"
                alt="Twitter account"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 mt-4 pb-8 flex flex-wrap gap-4 font-medium sm:justify-end sm:mt-0">
          <ul className="flex-grow max-w-[15rem] space-y-2">
            <li className="text-zinc-100 font-medium">Resources</li>
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-zinc-400 hover:text-zinc-100 duration-200"
              >
                <Link href={item.href} className="block sm:inline-block">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex-grow max-w-[15rem] space-y-2">
          <li className="text-zinc-100 font-medium">Resources</li>
          {marsNavigation.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-zinc-400 hover:text-zinc-100 duration-200"
              >
                <Link href={item.href} target="_blank" className="block">
                  {item.name}
                </Link>
              </li>
              
            ))}
          </ul>
          <ul className="flex-grow max-w-[15rem] space-y-2">
            <li className="text-zinc-100 font-medium">Mars Verse</li>
            {Nav.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-zinc-400 hover:text-zinc-100 duration-200"
              >
                <Link href={item.href} target="_blank" className="block">
                  {item.name}
                </Link>
              </li>
              
            ))}
          </ul>
        </div>
      </div>
      <div className="text-sm custom-screen text-center border-t border-zinc-800">
        <div className="text-zinc-300 py-8">
          &copy; 2024 Swiftwave.io. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);
