const title = "Swiftwave.io - Help Center";

export const metadata = {
  metadataBase: new URL("https://swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://swiftwave.io",
  },
  twitter: {
    title,
  },
};

import { useEffect, useState } from "react";

// NavLink component
const NavLink = ({ ...props }) => {
  const {
    children,
    href = "",
    className = "",
    active = "",
  } = props;

  const [pathname, setPathname] = useState("/");

  const isActive = pathname == href;
  const activeClass = isActive ? active : "";

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [props]);

  return (
    <a href={href} {...props} className={`${activeClass} ${className}`}>
      {children}
    </a>
  );
};

// Title component
const Title = ({ children }) => (
  <h3 className='pb-3 px-4 font-medium text-gray-800 md:px-8'>
    {children}
  </h3>
);

// Sections List
const SectionsList = ({ items }) => (
  <div className='text-gray-600 px-4 md:px-8'>
    <ul>
      {items?.map((item, idx) => (
        <li key={idx}>
          <NavLink
            href={item?.href}
            active='text-gray-900 border-indigo-600'
            className='block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
            {item?.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

// Search Box component
const SearchBox = ({ ...props }) => (
  <div className='relative w-full'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto'>
      <path
        fillRule='evenodd'
        d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
        clipRule='evenodd'
      />
    </svg>

    <input
      {...props}
      type='search'
      className='w-full pl-12 pr-3 py-2 bg-white text-sm text-gray-500 bg-transparent outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
    />
  </div>
);

const Sidebar = () => {
  // List of common problems and their solutions
  const helpTopics = {
    accountIssues: [
      { name: "How do I reset my password?", href: "javascript:void(0)", solution: "Go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email." },
      { name: "How can I change my email address?", href: "javascript:void(0)", solution: "You can change your email address in your account settings under the 'Profile' section." },
      { name: "Why am I not receiving verification emails?", href: "javascript:void(0)", solution: "Check your spam folder or ensure that you've entered the correct email. You can also request a new verification email from the login page." },
    ],
    billingIssues: [
      { name: "How do I update my payment method?", href: "javascript:void(0)", solution: "Navigate to 'Billing' in your account settings and select 'Update Payment Method'." },
      { name: "Why was my payment declined?", href: "javascript:void(0)", solution: "Ensure that your card details are correct and that you have sufficient funds. Contact your bank for more details." },
      { name: "How do I view my invoices?", href: "javascript:void(0)", solution: "Invoices can be found under 'Billing' in your account settings. You can download and print them as needed." },
    ],
    technicalIssues: [
      { name: "Why is my data not syncing?", href: "javascript:void(0)", solution: "Check your internet connection and ensure you're logged in. If the problem persists, try restarting the app or contact support." },
      { name: "How do I fix login errors?", href: "javascript:void(0)", solution: "Clear your browser cache, ensure your login details are correct, and try again. If the issue persists, reset your password." },
      { name: "How can I report a bug?", href: "javascript:void(0)", solution: "You can report bugs through the 'Help' section in your account or by emailing our support team at support@swiftwave.io." },
    ],
  };

  return (
    <>
      <nav className="fixed z-40 top-0 left-0 w-full h-full border-r bg-white space-y-8 overflow-auto sm:w-80">
        <div className="sticky top-0 space-y-8 bg-white">
          <div className='h-20 flex items-center px-4 border-b md:px-8'>
            <a href='javascript:void(0)' className='flex-none'>
              <img src="https://floatui.com/logo.svg" width={140} className="mx-auto" />
            </a>
          </div>
          <div className='px-4 md:px-8'>
            <SearchBox placeholder='Search for help topics...' />
          </div>
        </div>
        <div className='text-[0.9rem] space-y-6'>
          <>
            <div>
              <Title>Account Issues</Title>
              <SectionsList items={helpTopics.accountIssues} />
            </div>
            <div>
              <Title>Billing Issues</Title>
              <SectionsList items={helpTopics.billingIssues} />
            </div>
            <div>
              <Title>Technical Issues</Title>
              <SectionsList items={helpTopics.technicalIssues} />
            </div>
          </>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
