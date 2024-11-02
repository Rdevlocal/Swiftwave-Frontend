import Link from "next/link";
import BorderGradient from "./BorderGradient";
import BgGradient from "./BgGradient";

// Navigation items organized by category
const navigation = {
  "Why Swiftwave": [
    { name: "For Developers", href: "/dev" },
    { name: "For Affilates", href: "/affiliates" },
    { name: "For agencies", href: "/agencies" },
    { name: "For ecosystems", href: "/ecosystems" },
  ],
  Platform: [
    { name: "Products", href: "/products" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
  ],
  Resources: [
    { name: "Contact", href: "/contact" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Academy", href: "/academy" },
    { name: "Helpcenter", href: "/helpcenter" },
  ],
  Company: [
    { name: "About us", href: "/about" },
    { name: "Advantages", href: "/advantages" },
    { name: "Jobs", href: "/jobs" },
  //  { name: "Status Products", href: "/status" },
  ],
  Legal: [
    { name: "Terms and conditions", href: "/terms" },
    { name: "Privacy policy", href: "/privacy-policy" },
    { name: "Data security", href: "/security" },
    { name: "Bug bounty", href: "/bugbounty" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 pt-12 overflow-hidden">
      <div className="text-center">
        <BorderGradient className="absolute inset-x-0 top-0 mx-auto" />
        <BgGradient className="absolute inset-x-0 top-0 mx-auto" />
        
        <div className="custom-screen-lg pb-6 flex flex-col items-center justify-center relative">
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row mt-4 pb-8 font-medium gap-6 sm:gap-8">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="flex flex-col max-w-[15rem] space-y-2">
                <div className="text-zinc-100 font-medium">{category}</div>
                <div className="space-y-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="text-sm text-zinc-400 hover:text-zinc-100 duration-200">
                      <Link href={item.href} className="block">
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
