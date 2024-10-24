"use client"; // Mark the component as a Client Component

import { useEffect, useState } from "react";

// NavLink component
interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    active?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, className = "", active = "", ...props }) => {
    const [pathname, setPathname] = useState("/");

    const isActive = pathname === href;
    const activeClass = isActive ? active : "";

    useEffect(() => {
        setPathname(window.location.pathname);
    }, []);

    return (
        <a href={href} {...props} className={`${activeClass} ${className}`}>
            {children}
        </a>
    );
};

// Title component
const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className='pb-3 px-4 font-medium text-gray-200 md:px-8'>
        {children}
    </h3>
);

// Sections List
const SectionsList: React.FC<{ items: { name: string; href: string; }[] }> = ({ items }) => (
    <div className='text-gray-300 px-4 md:px-8'>
        <ul>
            {items?.map((item, idx) => (
                <li key={idx}>
                    <NavLink
                        href={item.href}
                        active='text-gray-900 border-indigo-600'
                        className='block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150'>
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

// Search Box component
const SearchBox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
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
            type='text'
            className='w-full pl-12 pr-3 py-2 bg-transparent text-sm text-gray-500 outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
        />
    </div>
);

const Sidebar: React.FC = () => {
    const lessons = {
        rustLessons: [
            { name: "Introduction to Rust", href: "javascript:void(0)" },
            { name: "Installing and Setting up Rust", href: "javascript:void(0)" },
            { name: "Basic Syntax and Data Types", href: "javascript:void(0)" },
            { name: "Control Flow Statements", href: "javascript:void(0)" },
            { name: "Functions and Modules", href: "javascript:void(0)" },
            { name: "Ownership and Borrowing", href: "javascript:void(0)" },
            { name: "Structs and Enums", href: "javascript:void(0)" },
            { name: "Traits and Generics", href: "javascript:void(0)" }
        ],
        cargoLessons: [
            { name: "Introduction to Cargo", href: "javascript:void(0)" },
            { name: "Installing and Configuring Cargo", href: "javascript:void(0)" },
            { name: "Basic Cargo Commands", href: "javascript:void(0)" },
            { name: "Working with Dependencies", href: "javascript:void(0)" },
            { name: "Rust Workspaces with Cargo", href: "javascript:void(0)" },
            { name: "Ownership and Borrowing", href: "javascript:void(0)" },
            { name: "Structs and Enums", href: "javascript:void(0)" },
            { name: "Traits and Generics", href: "javascript:void(0)" }
        ]
    };

    return (
        <nav className="w-80 bg-[#0A0707] p-4 h-full">
            <div className="sticky top-0 space-y-8 bg-[#0A0707]">
                <div>
                    <SearchBox placeholder='Search...' />
                </div>
            </div>
            <div className='text-[0.9rem] space-y-6'>
                <div>
                    <Title>Rust Basics</Title>
                    <SectionsList items={lessons.rustLessons} />
                </div>
                <div>
                    <Title>Cargo Basics</Title>
                    <SectionsList items={lessons.cargoLessons} />
                </div>
            </div>
        </nav>
    );
};

// Main Page component
const Page: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <main className="flex-grow bg-gray-100 p-4">
                {/* Here you can place the content of your main page */}
            </main>
            <footer className="bg-[#0A0707] text-white p-4">
                {/* Here you can add any footer information or leave it as is */}
            </footer>
        </div>
    );
};

export default Page;
