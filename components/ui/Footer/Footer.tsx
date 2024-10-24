import Link from "next/link";
import Image from "next/image";
import BorderGradient from "./BorderGradient";
import BgGradient from "./BgGradient";

// Navigation items organized by category
const navigation = {
  Products: [
    { name: "Homepage", href: "/" },
    { name: "Advantages", href: "/advantages" },
    { name: "Products", href: "/products" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Affiliates", href: "/affiliates" },
    { name: "Agencies", href: "/agencies" },
    { name: "Ecosystems", href: "/ecosystems" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Help Center", href: "/helpcenter", checked: true },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "License", href: "/license", checked: true },
    { name: "Privacy Policy", href: "/privacy-policy", checked: true },
    { name: "Security", href: "/security", checked: true },
    { name: "Bug Bounty", href: "/bugbounty" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative mt-40 pt-24 overflow-hidden">
      <div>
        <BorderGradient className="absolute inset-x-0 top-0 mx-auto" />
        <BgGradient className="absolute inset-x-0 top-0 mx-auto" />
        
        <div className="custom-screen-lg pb-6 gap-x-8 items-start justify-between flex-wrap relative sm:flex">
          {/* Brand and Social Links */}
          <div className="max-w-xs space-y-3">
            <p className="text-sm text-zinc-300">
            Build the Future, Today
            </p>
            <div className="flex items-center gap-3">
              <a
                aria-label="Twitter account"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/float_ui?s=09"
              >
                <Image
                  src="/images/tw-icon.svg"
                  width={40}
                  height={40}
                  alt="Twitter icon"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 mt-4 pb-8 flex flex-wrap gap-4 font-medium sm:justify-end sm:mt-0">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="flex-grow max-w-[15rem] space-y-2">
                <div className="text-zinc-100 font-medium">{category}</div>
                <div className="space-y-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="text-sm text-zinc-400 hover:text-zinc-100 duration-200">
                      <Link href={item.href} className="block sm:inline-block">
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-sm custom-screen text-center border-t border-zinc-800">
          <div className="text-zinc-300 py-8">
            &copy; 2024 Swiftwave.io All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
