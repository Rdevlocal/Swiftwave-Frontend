import Link from "next/link";
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
    <footer className="relative w-full mt-20 pt-12 overflow-hidden"> {/* Reduced top margin and padding */}
      <div className="text-center"> {/* Center all text content */}
        <BorderGradient className="absolute inset-x-0 top-0 mx-auto" />
        <BgGradient className="absolute inset-x-0 top-0 mx-auto" />
        
        <div className="custom-screen-lg pb-6 gap-x-8 items-center justify-center flex-wrap relative sm:flex"> {/* Centered alignment */}

          {/* Navigation Links */}
          <div className="flex-1 mt-4 pb-8 flex flex-wrap gap-6 font-medium sm:justify-center"> {/* Increased gap between links for better spreading */}
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
