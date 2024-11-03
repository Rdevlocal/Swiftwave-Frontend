export default () => {
    return (
        <>
            <div style={{ backgroundColor: '#09090B' }}>
                {/* Section 1 - AI Automation at Swiftwave */}
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div className="flex-1 sm:hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="AI Automation Technology" />
                            </div>
                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                                <h3 className="text-3xl font-semibold sm:text-4xl">AI Automation at Swiftwave</h3>
                                <p className="mt-3">
                                    Swiftwave is transforming industries by integrating cutting-edge AI automation into everyday business operations. With our advanced AI technology, we streamline workflows, increase efficiency, and help organizations achieve unparalleled results.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 - Our AI Automation Solutions */}
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                                <h3 className="text-3xl font-semibold sm:text-4xl">Our AI Automation Solutions</h3>
                                <p className="mt-3">
                                    At Swiftwave, we leverage AI to automate repetitive tasks, optimize decision-making, and streamline processes. From AI-powered data analysis to end-to-end automation, our tailored solutions ensure your business stays competitive and agile.
                                </p>
                                <a href="/services" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                                    Discover More
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex-1 sm:hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="AI Automation Solutions" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 - Accelerate Product Launch with AI */}
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-white text-3xl font-semibold sm:text-4xl">Accelerate Product Launch with AI</h3>
                            <p className="mt-3 text-white">
                                Swiftwave’s AI automation reduces product development time by automating key stages like prototyping, testing, and deployment. Launch faster, with greater accuracy and fewer errors, using our powerful AI-driven automation.
                            </p>
                        </div>
                        <div className="mt-12">
                            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                            </svg>
                                        ),
                                        title: "Rapid Prototyping",
                                        desc: "Use AI to build and refine prototypes faster, accelerating the product development cycle."
                                    },
                                    {
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM15.375 12c0-1.147.926-2.063 2.063-2.063h2.25C21.074 9.937 22 10.853 22 12s-.926 2.063-2.063 2.063h-2.25C16.301 14.063 15.375 13.147 15.375 12z" />
                                            </svg>
                                        ),
                                        title: "Global Scale with AI",
                                        desc: "Automate and scale your business operations seamlessly across different regions."
                                    },
                                    {
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v3m0 0v3m0-3h3m15 12v3m0 0v3m0-3h-3M3 21v-3m0 0v-3m0 3h3m6-3V3" />
                                            </svg>
                                        ),
                                        title: "End-to-End AI Automation",
                                        desc: "From production to delivery, streamline your entire process with Swiftwave's AI automation."
                                    }
                                ].map(({ icon, title, desc }) => (
                                    <li key={title} className="relative p-6 rounded-lg bg-gradient-to-r from-[#2663EB] to-[#1E50B5] shadow-lg">
                                        <div className="flex gap-4">
                                            <div className="flex items-center justify-center w-10 h-10 text-[#2663EB] rounded-full bg-white">
                                                {icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-white">{title}</h4>
                                                <p className="mt-2 text-white">{desc}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 4 - Innovative Technology */}
                <section className="py-14">
                    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                        <h3 className="text-3xl font-semibold text-white">Innovative Technology</h3>
                        <p className="mt-3 text-white">
                            At Swiftwave, we are dedicated to using the latest technology to deliver unparalleled AI solutions. Our team continuously explores new tools and techniques to ensure that your business benefits from the best resources available.
                        </p>
                        <div className="mt-12 flex justify-center">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Innovative Technology" className="rounded-lg w-full md:w-3/4" />
                        </div>

                        {/* Buttons for Affiliates, Agencies, and Ecosystems */}
                        <div className="mt-12 flex justify-center space-x-4">
                            <a href="/affiliates" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-150">Affiliates</a>
                            <a href="/agencies" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-150">Agencies</a>
                            <a href="/ecosystems" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-150">Ecosystems</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
