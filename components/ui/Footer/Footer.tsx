import Link from "next/link";
import BorderGradient from "./BorderGradient";
import BgGradient from "./BgGradient";

// Navigation items organized by category
const navigation = {
  "Why Swiftwave": [
    { name: "For Developers", href: "/dev" },
    { name: "For Affiliates", href: "/affiliates" },
    { name: "For Agencies", href: "/agencies" },
    { name: "For Ecosystems", href: "/ecosystems" },
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
    { name: "About Us", href: "/about" },
    { name: "Advantages", href: "/advantages" },
    // { name: "Status Products", href: "/status" },
  ],
  Legal: [
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Data Security", href: "/security" },
    { name: "Bug Bounty", href: "/bugbounty" },
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
                <div className="text-zinc-100 font-semibold text-lg">{category}</div> {/* Category name made larger */}
                <div className="space-y-2">
                  {items.map((item, idx) => (
                    <div key={idx} className="text-base text-zinc-400 hover:text-zinc-100 duration-200"> {/* Links made larger */}
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
        <div className="text-base custom-screen text-center border-t border-zinc-800"> {/* Bottom text size increased */}
          <div className="text-zinc-300 py-8">
            &copy; 2024 Swiftwave.io All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
