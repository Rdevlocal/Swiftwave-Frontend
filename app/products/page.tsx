"use client"; // Markeer dit bestand als Client Component

import React, { useState } from 'react';

const StatsSection = () => {
  const stats = [
    { data: "35K", title: "Customers" },
    { data: "10K+", title: "Downloads" },
    { data: "40+", title: "Countries" },
    { data: "30M+", title: "Total revenue" },
  ];

  return (
    <section className="py-14" style={{ backgroundColor: '#09090b' }}>
      <div className="max-w-screen-xl mx-auto px-4 text-white gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="rounded-lg"
            alt="Customer Satisfaction"
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              We do our best to make customers always happy
            </h3>
            <p className="mt-3 max-w-xl text-gray-300">
              Our commitment to excellence and innovation ensures that our customers receive the very best service and support.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx}>
                  <h4 className="text-4xl text-indigo-400 font-semibold">{item.data}</h4>
                  <p className="mt-3 font-medium text-gray-300">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const products = [
    {
      image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "AI Assistant Pro",
      description: "Your ultimate AI-powered assistant for productivity and seamless task management.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "VisionAI",
      description: "Revolutionize image recognition with VisionAI’s advanced detection and analysis.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "DataAnalyzer 360",
      description: "Empower your data with insights and predictive analytics using DataAnalyzer 360.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "ChatBot Pro",
      description: "Engage with your customers 24/7 with ChatBot Pro, your AI-driven conversation partner.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "VoiceSynth AI",
      description: "Generate realistic, human-like voices for various applications with VoiceSynth AI.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Predictify",
      description: "Make informed business decisions with Predictify’s powerful forecasting engine.",
      link: "#"
    },
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-14" style={{ backgroundColor: '#09090b' }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-white">
        <div className="max-w-xl mx-auto sm:text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">Our AI Products</h3>
          <p className="mt-3 text-gray-300">
            Explore our cutting-edge AI products, designed to innovate and enhance every aspect of your business.
          </p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search for a product..."
              className="w-full px-4 py-2 rounded-full text-gray-900 bg-gray-100 outline-none focus:ring-2 focus:ring-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {filteredProducts.map((product, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <img
                    src={product.image}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt={product.name}
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="mt-2 text-gray-300">{product.description}</p>
                  <a
                    href={product.link}
                    className="inline-block mt-3 py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
                  >
                    Start Now
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-400 mt-8">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="py-28 relative bg-blue-600">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Build the future with us
          </p>
          <p className="text-blue-100 mt-3">
            Join us in driving innovation and excellence with cutting-edge AI solutions.
          </p>
        </div>
        <div className="mt-4">
          <a href="#" className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full">
            Get started
          </a>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg3NzN8MHwxfGFsbHwxfHx8fHx8fHwxNjE3NTY1MjA0&ixlib=rb-1.2.1&q=80&w=1080')`,
        }}
      ></div>
    </section>
  );
};

const Page = () => {
  return (
    <>
      <StatsSection />
      <ProductsSection />
      <CallToActionSection />
    </>
  );
};

export default Page;
