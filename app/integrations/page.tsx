import React from 'react';

// List of integrations
const integrations = [
  {
    title: "Shopify",
    desc: "Connect your Shopify store and automate inventory updates.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#96C93D" />
        <path d="M25 8l8 14h-16l8-14z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Amazon",
    desc: "Integrate with Amazon to automate order fulfillment.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#FF9900" />
        <path d="M25 8l8 14h-16l8-14z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "WooCommerce",
    desc: "Automate sales tracking and inventory management with WooCommerce.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#96588A" />
        <path d="M25 8l8 14h-16l8-14z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Magento",
    desc: "Leverage Magento for automated marketing campaigns.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#007CBA" />
        <path d="M25 8l8 14h-16l8-14z" fill="#fff" />
      </svg>
    ),
  },
  // Add other integrations here...
];

// Function to render integration cards


// Main component
const IntegrationList = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl w-full">
        {integrations.map(renderIntegrationCard)}
      </div>
    </div>
  );
};

export default IntegrationList;
