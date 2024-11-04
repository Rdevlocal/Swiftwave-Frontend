"use client"; // This line allows the use of React hooks in this component

import React, { useState } from 'react';

const SignUpForm: React.FC = () => {
    // State management for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        businessName: '',
        businessType: '',
        businessWebsite: ''
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you can handle the form submission logic (e.g., send data to an API)
        console.log('Form submitted:', formData);
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-[#09090B]">
            <div className="relative w-full max-w-md space-y-8 p-4 bg-transparent text-white">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-3xl font-bold">Start growing your business quickly</h3>
                        <p className="text-gray-300">
                            Create an account and get access to all features for 30 days, no credit card required.
                        </p>
                        <div className="flex items-center justify-center -space-x-2 overflow-hidden mt-3">
                            <img src="https://randomuser.me/api/portraits/women/79.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User 1" />
                            <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User 2" />
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=faces&fit=crop&h=200&w=200" className="w-10 h-10 rounded-full border-2 border-white" alt="User 3" />
                            <img src="https://randomuser.me/api/portraits/men/86.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="User 4" />
                            <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?crop=faces&fit=crop&h=200&w=200" className="w-10 h-10 rounded-full border-2 border-white" alt="User 5" />
                            <p className="text-sm text-gray-400 font-medium translate-x-5">
                                Join 5,000+ users
                            </p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-900 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-900 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-900 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Business Name</label>
                        <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-900 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Business Type</label>
                        <input
                            type="text"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-900 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Business Website (optional)</label>
                        <input
                            type="url"
                            name="businessWebsite"
                            value={formData.businessWebsite}
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-900 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Create account
                    </button>
                </form>
            </div>
        </main>
    );
};

export default SignUpForm;
