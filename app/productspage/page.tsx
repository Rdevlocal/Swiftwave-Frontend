import React from 'react';

const HeroSection = () => {
    return (
        <section className="py-14 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center gap-12 md:px-8">
                <div className="flex-1 max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Revolutionizing Your Automation Needs
                    </h3>
                    <p className="mt-3 max-w-xl">
                        Discover our innovative automation solutions that streamline your processes and boost productivity. Stay ahead of the competition with our cutting-edge products.
                    </p>
                </div>
                <div className="hidden lg:block lg:max-w-xl">
                    <img 
                        src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                        className="rounded-lg" 
                        alt="Automation Solutions" 
                    />
                </div>
            </div>
        </section>
    );
};

const ProductsSection = () => {
    const products = [
        {
            name: "Smart Home Hub",
            price: "$199.99",
            description: "Control all your smart devices from a single hub.",
        },
        {
            name: "Automated Garden System",
            price: "$299.99",
            description: "Automatically water and monitor your plants.",
        },
        {
            name: "AI-Powered Assistant",
            price: "$499.99",
            description: "Your personal assistant powered by artificial intelligence.",
        },
        {
            name: "Robotic Vacuum Cleaner",
            price: "$249.99",
            description: "Keep your floors clean with minimal effort.",
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-6">
                    Our Automation Products
                </h3>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product, idx) => (
                        <div key={idx} className="bg-white shadow-md rounded-lg p-4">
                            <h4 className="text-xl font-bold">{product.name}</h4>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-indigo-600 font-semibold mt-2">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const NewsletterSection = () => {
    return (
        <section className="py-14 bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
                <div className="flex-1 max-w-xl">
                    <h3 className="text-3xl font-bold">
                        Get all of our updates directly to your inbox.
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="mt-6 md:mt-0">
                    <form onSubmit={(e) => e.preventDefault()} className="items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block">
                        <div className="relative">
                            <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg sm:max-w-xs"
                            />
                        </div>
                        <button className="block w-full py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow sm:w-auto md:w-full">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const App = () => {
    return (
        <>
            <HeroSection />
            <ProductsSection />
            <NewsletterSection />
        </>
    );
};

export default App;
