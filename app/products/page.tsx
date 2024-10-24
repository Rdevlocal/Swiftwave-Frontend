"use client"; // Mark the component as a Client Component

import React, { useState } from 'react';

// Define a type for the products
interface Product {
  title: string;
  desc: string;
  icon: JSX.Element; // Use JSX.Element for the icon
}

// List of imaginary AI products
const products: Product[] = [
  {
    title: "AI Chatbot",
    desc: "Enhance customer service with our AI Chatbot.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#F39C12" />
        <path d="M15 20h20v10H15V20z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "AI Content Generator",
    desc: "Create unique content effortlessly with AI.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#8E44AD" />
        <path d="M15 20h20v10H15V20z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "AI Social Media Manager",
    desc: "Automate your social media posts with AI insights.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#C0392B" />
        <path d="M15 20h20v10H15V20z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "AI Health Tracker",
    desc: "Monitor your health metrics with our AI Health Tracker.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#8E44AD" />
        <path d="M15 20h20v10H15V20z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "AI Virtual Stylist",
    desc: "Get personalized fashion advice with our AI Virtual Stylist.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="25" cy="25" r="25" fill="#27AE60" />
        <path d="M15 20h20v10H15V20z" fill="#fff" />
      </svg>
    ),
  },
  // Add more products here...
];

// Main component
const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on the search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render product cards
  const renderProductCard = (product: Product) => { // Explicitly typing product
    return (
      <div
        className="relative p-6 text-center bg-[#09090B] rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
        key={product.title}
      >
        <div className="relative z-10">
          {product.icon}
          <h3 className="text-xl font-bold mb-2">{product.title}</h3>
          <p className="mb-4">{product.desc}</p>
          <button className="px-6 py-2 font-semibold text-lg bg-[#2663EB] text-white rounded-full shadow-md transition duration-300 transform hover:bg-blue-600 hover:shadow-lg hover:scale-105">
            Get Started!
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Title above the search bar */}
      <h2 className="text-2xl font-bold text-white mb-4">Discover AI Products</h2>

      {/* Search bar */}
      <div className="mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a product..."
          className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl w-full">
        {filteredProducts.map(renderProductCard)}
      </div>
    </div>
  );
};

export default ProductList;
