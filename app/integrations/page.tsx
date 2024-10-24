import React from 'react';

// Define a type for the integrations
interface Integration {
  title: string;
  desc: string;
  icon: JSX.Element; // Use JSX.Element for the icon
}

// List of integrations
const integrations: Integration[] = [
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
const renderIntegrationCard = (integration: Integration) => { // Explicitly typing integration
  return (
    <div
      className="relative p-6 text-center bg-[#09090B] rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
      key={integration.title}
    >
      <div className="relative z-10">
        {integration.icon}
        <h3 className="text-xl font-bold mb-2">{integration.title}</h3>
        <p className="mb-4">{integration.desc}</p>
        <button className="px-6 py-2 font-semibold text-lg bg-[#2663EB] text-white rounded-full shadow-md transition duration-300 transform hover:bg-blue-600 hover:shadow-lg hover:scale-105">
          Automate Now!
        </button>
      </div>
    </div>
  );
};

// Main component
const IntegrationList: React.FC = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl w-full">
        {integrations.map(renderIntegrationCard)}
      </div>
    </div>
  );
};

export default IntegrationList;
