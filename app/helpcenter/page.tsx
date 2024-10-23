"use client"; // Mark the component as a Client Component

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

    const isActive = pathname === href;
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
            type='text' // Type gewijzigd naar 'text' voor zoekfunctie
            className='w-full pl-12 pr-3 py-2 bg-transparent text-sm text-gray-500 outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
        />
    </div>
);

const Sidebar = () => {
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
            <div className="sticky top-0 space-y-8 bg-[#0A0707]"> {/* Achtergrondkleur veranderd naar #0A0707 */}

                <div className=''>
                    <SearchBox placeholder='Search...' />
                </div>
            </div>

        </nav>
    );
};

// Hoofdpagina component
const Page = () => {
    return (
        <div className="flex h-screen"> {/* Flexbox voor volledige hoogte */}
            <Sidebar />
            <main className="flex-grow bg-gray-100 p-4"> {/* Hoofdinformatie met padding */}
                {/* Hier kun je de inhoud van je hoofdpagina plaatsen */}
            </main>
            <footer className="bg-[#0A0707] text-white p-4"> {/* Footer met achtergrondkleur */}
                {/* Hier kun je eventuele footer-informatie toevoegen of laten zoals het is */}
            </footer>
        </div>
    );
};

export default Page;
