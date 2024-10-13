import Link from "next/link";
import Image from "next/image";
import Brand from "components/ui/Brand";
import BorderGradient from "./BorderGradient";
import BgGradient from "./BgGradient";
import { IconGithub } from "components/icons";

// Navigation items for the footer
const navigation = [
  { name: "Demo", href: "/demo" },
  { name: "License", href: "/license" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Blog", href: "/blog" },
];

// Mars navigation items (you can define this if it's needed)
const marsNavigation = [
  // Example structure, replace with actual items if needed
  { name: "Item 1", href: "https://example.com" },
  { name: "Item 2", href: "https://example.com" },
];

const Footer = () => {
  return (
    <footer className="relative mt-40 pt-24 overflow-hidden">
      <div>
        <BorderGradient className="absolute inset-x-0 top-0 mx-auto" />
        <BgGradient className="absolute inset-x-0 top-0 mx-auto" />
        
        <div className="custom-screen-lg pb-6 gap-x-8 items-start justify-between flex-wrap relative sm:flex">
          {/* Brand and Social Links */}
          <div className="max-w-xs space-y-3">
            <Brand />
            <p className="text-sm text-zinc-300">
              We are on a mission to make the process of building UI components easier.
            </p>
            <div className="flex items-center gap-3">
              <a
                aria-label="GitHub account"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/MarsX-dev/floatui"
              >
                <IconGithub className="w-6 h-6 text-zinc-400" />
              </a>
              <a
                aria-label="Twitter account"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/float_ui?s=09"
              >
                <Image
                  src="/images/tw-icon.svg"
                  width="40"
                  height="40"
                  alt="Twitter icon"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 mt-4 pb-8 flex flex-wrap gap-4 font-medium sm:justify-end sm:mt-0">
            <ul className="flex-grow max-w-[15rem] space-y-2">
              <li className="text-zinc-100 font-medium">Resources</li>
              {navigation.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-400 hover:text-zinc-100 duration-200">
                  <Link href={item.href} className="block sm:inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2">
              <li className="text-zinc-100 font-medium">Mars Verse</li>
              {marsNavigation.map((item, idx) => (
                <li key={idx} className="text-sm text-zinc-400 hover:text-zinc-100 duration-200">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-sm custom-screen text-center border-t border-zinc-800">
          <div className="text-zinc-300 py-8">
            &copy; 2023 Float UI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
