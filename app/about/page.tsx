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

    const [isVideoPoppedUp, setVideoPopUp] = useState(false);

    return (
        <>
            {/* Section 1 */}
            <section className="text-white" style={{ backgroundColor: "#09090B" }}>
                <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 xl:flex">
                    <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
                        <h1 className="text-4xl font-extrabold mx-auto md:text-5xl">
                        Our Story
                        </h1>
                        <p className="max-w-xl mx-auto xl:mx-0">
                        Our journey began with a simple frustration: repetitive tasks that drained our time and creativity. What started as a small project to automate these mundane processes for ourselves quickly turned into something much larger. We realized that many others were facing the same challenges, and from that moment on, we were driven to create a solution that would help businesses and individuals alike. From a modest tool built for personal use, we have evolved into a full-fledged platform that now empowers countless users around the globe.
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
                            <a
                                href="javascript:void(0)"
                                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-900 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg md:inline-flex"
                            >
                                Join us Today
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
                                alt="Engaging with new skills"
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
                        <h2 className="text-3xl font-extrabold">Our Core Values</h2>

                    </div>
                    <div className="mt-10 sm:mt-0 lg:w-1/2">
                        <h2 className="text-3xl font-extrabold">Innovation</h2>
                        <p className="mt-3 text-gray-400">
                        We are constantly looking for new ways to push the boundaries of what’s possible with automation.
                        </p>
                        <h2 className="mt-10 text-3xl font-extrabold">Customer Success</h2>
                        <p className="mt-3 text-gray-400">
                        Your success is our success. We are committed to helping you achieve your goals, no matter how big or small.
                        </p>
                        <h2 className="mt-10 text-3xl font-extrabold">Simplicity</h2>
                        <p className="mt-3 text-gray-400">
                        While we offer advanced technology, we make sure that it remains easy to use and accessible to all.
                        </p>
                    </div>
                </div>
            </section>


                        {/* Section 1 */}
                        <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://imagizer.imageshack.com/img922/7901/262K15.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">
                            Our Mission
                            </p>
                            <p className="mt-3">
                            Our mission is to empower people to work smarter, not harder. We believe that technology should serve humanity, not complicate it. By creating intuitive, powerful automation tools, we aim to free up time for more meaningful work. Our focus is on simplifying the complex, enabling businesses of all sizes to automate processes that were once tedious and time-consuming. Ultimately, we want to make automation accessible, affordable, and impactful for everyone.
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
                            What We Do
                            </p>
                            <p className="mt-3">
                            We provide cutting-edge automation solutions that enable businesses to streamline their operations, save time, and reduce errors. Our platform automates everything from data entry to complex workflows, helping teams focus on what truly matters: growing their business. We integrate with the tools you're already using, ensuring that our technology fits seamlessly into your existing ecosystem. Whether you're a startup looking for a simple way to automate tasks or a large organization needing more advanced workflows, we’ve got you covered.
                            </p>
                            <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://imagizer.imageshack.com/img924/3868/MyF0yG.jpg " className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
                        {/* Section 1 */}
                        <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://imagizer.imageshack.com/img922/7356/yTeaZD.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <h3 className="text-indigo-600 font-semibold">Vision</h3>
                            <p className="text-3xl font-semibold sm:text-4xl">
                            Our Vision
                            </p>
                            <p className="mt-3">
                            We envision a future where technology seamlessly integrates into daily workflows, allowing people to focus on innovation and creativity. In this future, AI-driven automation won’t just be for large enterprises but will be accessible to every business, no matter its size. We are committed to constantly pushing the boundaries of what’s possible, making sure our solutions remain at the forefront of innovation, while always keeping ease of use at the heart of our design. We believe that by simplifying the way people work, we can help unlock their full potential.
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
                            <h3 className="text-indigo-600 font-semibold">Be a part of something bigger</h3>
                            <p className="text-3xl font-semibold sm:text-4xl">
                            Join Us today!

                            </p>
                            <p className="mt-3">
                            We’re not just building software; we’re building a movement. A movement towards smarter, more efficient work, where technology takes care of the repetitive, allowing humans to focus on creativity, strategy, and growth. Whether you're a small business owner, a freelancer, or part of a large corporation, we invite you to join us on this journey. Together, we can unlock new possibilities and redefine what’s possible in the workplace.</p>
                            <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://imagizer.imageshack.com/img922/2725/4hu76i.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
