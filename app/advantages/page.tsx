"use client"; // Required for Client Components

import { useState } from "react";

// Component for Feature Icon
const FeatureIcon: React.FC<{ icon: JSX.Element; name: string }> = ({ icon, name }) => (
    <div className="flex items-center gap-x-2 text-gray-400 text-sm">
        {icon}
        {name}
    </div>
);

const AboutPage: React.FC = () => {
    const features = [
        {
            name: "Trusted",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                        fillRule="evenodd"
                        d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        // ... other features
    ];

    const [isVideoPoppedUp, setVideoPopUp] = useState(false);

    return (
        <>
            {/* Section 1 */}
            <section className="text-white" style={{ backgroundColor: "#09090B" }}>
                <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 xl:flex">
                    <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
                        <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
                            {features.map((item, idx) => (
                                <FeatureIcon key={idx} icon={item.icon} name={item.name} />
                            ))}
                        </div>
                        <h1 className="text-4xl font-extrabold mx-auto md:text-5xl">
                            Explore in-demand careers and develop cutting-edge skills
                        </h1>
                        <p className="max-w-xl mx-auto xl:mx-0">
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
                            <a
                                href="javascript:void(0)"
                                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-900 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg md:inline-flex"
                            >
                                Browse courses
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-900 hover:text-gray-600 font-medium duration-150 active:bg-gray-100 bg-white border rounded-lg md:inline-flex"
                            >
                                Get access
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                className="rounded-lg"
                                alt=""
                            />
                            <button
                                className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-gray-200 hover:bg-gray-300 ring-offset-2 focus:ring text-white"
                                onClick={() => setVideoPopUp(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isVideoPoppedUp && (
                    <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                        <div className="px-4 relative">
                            <button
                                className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-200 hover:bg-gray-300 text-gray-900"
                                onClick={() => setVideoPopUp(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button>
                            <video className="rounded-lg w-full max-w-2xl" controls autoPlay>
                                <source src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                )}
            </section>

            {/* Section 2 */}
            <section className="py-14" style={{ background: "#09090B" }}>
                <div className="max-w-screen-xl mx-auto px-4 text-gray-300 gap-x-12 items-start justify-between lg:flex md:px-8">
                    <div className="sm:hidden lg:block lg:w-1/2">
                        <h2 className="text-3xl font-extrabold">Education is the passport to the future</h2>
                        <p className="mt-3 text-gray-400">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:w-1/2">
                        <ul className="space-y-4 divide-y divide-gray-800 sm:space-y-5">
                            {/* Accordion Item */}
                            <li className="pt-5">
                                <details className="group relative duration-300 marker:content-['']">
                                    <summary className="flex items-center gap-x-1.5 py-3 pr-5 text-lg font-medium text-gray-200 duration-300 cursor-pointer">
                                        How do I get started with your services?
                                        <span className="absolute right-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 duration-300 group-open:rotate-180">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-gray-400">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </details>
                            </li>
                            {/* ... other accordion items */}
                        </ul>
                    </div>
                </div>
            </section>
                        {/* Section 1 */}
                        <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <h3 className="text-indigo-600 font-semibold">Professional services</h3>
                            <p className="text-3xl font-semibold sm:text-4xl">
                                Build your SaaS solution with help from our experts
                            </p>
                            <p className="mt-3">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Duplicated Section 1 */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <h3 className="text-indigo-600 font-semibold">Professional services</h3>
                            <p className="text-3xl font-semibold sm:text-4xl">
                                Build your SaaS solution with help from our experts
                            </p>
                            <p className="mt-3">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
                        {/* Section 1 */}
                        <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <h3 className="text-indigo-600 font-semibold">Professional services</h3>
                            <p className="text-3xl font-semibold sm:text-4xl">
                                Build your SaaS solution with help from our experts
                            </p>
                            <p className="mt-3">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Duplicated Section 1 */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <h3 className="text-indigo-600 font-semibold">Professional services</h3>
                            <p className="text-3xl font-semibold sm:text-4xl">
                                Build your SaaS solution with help from our experts
                            </p>
                            <p className="mt-3">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
