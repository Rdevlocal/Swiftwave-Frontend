export default () => {
    return (
        <>
            {/* Section 1 - Our Partners */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <img 
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                                className="md:max-w-lg sm:rounded-lg" 
                                alt="Partnership Opportunities" 
                            />
                        </div>
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">
                                Our Partners
                            </p>
                            <p className="mt-3">
                                We collaborate with a diverse range of partners, including affiliates, marketplaces, and agencies. Together, we create innovative solutions that empower businesses to leverage the power of AI. Our partnerships are built on shared goals and a commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 - Why Partner With Us */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto md:px-8">
                    <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl text-white">
                            <p className="text-3xl font-semibold sm:text-4xl">
                                Why Partner With Us
                            </p>
                            <p className="mt-3">
                                By partnering with us, you gain access to cutting-edge AI solutions tailored to your needs. Our expertise in data analysis, automation, and operational efficiency allows us to help you drive growth and achieve your goals effectively. Let's collaborate to transform the future.
                            </p>
                            <a 
                                href="javascript:void(0)" 
                                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <img 
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                                className="md:max-w-lg sm:rounded-lg" 
                                alt="Collaborative Partnerships" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 - Our Offerings */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-white text-3xl font-semibold sm:text-4xl">Empower Your Business</h3>
                        <p className="mt-3 text-white">
                            Partnering with us means access to advanced AI automation solutions. Accelerate your product offerings with precision and efficiency.
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
                                    title: "Rapid Deployment",
                                    desc: "Utilize AI to quickly launch and iterate on your products."
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM15.375 12c0-1.147.926-2.063 2.063-2.063h2.25C21.074 9.937 22 10.853 22 12s-.926 2.063-2.063 2.063h-2.25C16.301 14.063 15.375 13.147 15.375 12z" />
                                        </svg>
                                    ),
                                    title: "Global Collaboration",
                                    desc: "Easily connect and collaborate with partners worldwide."
                                },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v3m0 0v3m0-3h3m15 12v3m0 0v3m0-3h-3M3 21v-3m0 0v-3m0 3h3M21 3v3m0 0v3m0-3h-3" />
                                        </svg>
                                    ),
                                    title: "Integrated Solutions",
                                    desc: "Seamlessly implement automation across various platforms."
                                },
                            ].map((item, idx) => (
                                <li key={idx} className="bg-black space-y-3 p-4 border rounded-lg duration-300 hover:shadow-lg text-white">
                                    <div className="text-white">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                    <p>{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Section 4 - Join Us */}
            <section className="py-28 relative bg-blue-600">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                    <div className="max-w-xl md:mx-auto">
                        <p className="text-white text-3xl font-semibold sm:text-4xl">Partner with Us</p>
                        <p className="text-blue-100 mt-3">
                            Join us in transforming industries and driving innovation. Become part of our partner ecosystem today!
                        </p>
                    </div>
                    <div className="mt-8">
                        <a 
                            href="javascript:void(0)" 
                            className="inline-block px-6 py-3 text-center text-white bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md duration-150"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full opacity-40 bg-blue-500"></div>
            </section>
        </>
    )
}
