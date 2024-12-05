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
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <h3 className="text-indigo-600 font-semibold">Who are we?</h3>
                            <p className="text-3xl font-semibold sm:text-4xl">
                            Our story
                            </p>
                            <p className="mt-3">
                            Our journey began with a simple frustration: repetitive tasks that drained our time and creativity. What started as a small project to automate these mundane processes for ourselves quickly turned into something much larger. We realized that many others were facing the same challenges, and from that moment on, we were driven to create a solution that would help businesses and individuals alike. From a modest tool built for personal use, we have evolved into a full-fledged platform that now empowers countless users around the globe.                            </p>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://imagizer.imageshack.com/img922/6184/fwHiWZ.png" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
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
                            <img src="https://imagizer.imageshack.com/img923/6671/1gGpTK.png" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">
                            Our Mission
                            </p>
                            <p className="mt-3">
                            Our mission is to empower people to work smarter, not harder. We believe that technology should serve humanity, not complicate it. By creating intuitive, powerful automation tools, we aim to free up time for more meaningful work. Our focus is on simplifying the complex, enabling businesses of all sizes to automate processes that were once tedious and time-consuming. Ultimately, we want to make automation accessible, affordable, and impactful for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Duplicated Section 1 */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">
                            What We Do
                            </p>
                            <p className="mt-3">
                            We provide cutting-edge automation solutions that enable businesses to streamline their operations, save time, and reduce errors. Our platform automates everything from data entry to complex workflows, helping teams focus on what truly matters: growing their business. We integrate with the tools you're already using, ensuring that our technology fits seamlessly into your existing ecosystem. Whether you're a startup looking for a simple way to automate tasks or a large organization needing more advanced workflows, we’ve got you covered.
                            </p>

                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://imagizer.imageshack.com/img924/4024/8sQlFj.png" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
                        {/* Section 1 */}
                        <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img src="https://imagizer.imageshack.com/img922/343/S0egA1.png" className="md:max-w-lg sm:rounded-lg" alt="" />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">
                            Our Vision
                            </p>
                            <p className="mt-3">
                            We envision a future where technology seamlessly integrates into daily workflows, allowing people to focus on innovation and creativity. In this future, AI-driven automation won’t just be for large enterprises but will be accessible to every business, no matter its size. We are committed to constantly pushing the boundaries of what’s possible, making sure our solutions remain at the forefront of innovation, while always keeping ease of use at the heart of our design. We believe that by simplifying the way people work, we can help unlock their full potential.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutPage;
