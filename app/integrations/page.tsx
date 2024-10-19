import React from 'react';

// List of integrations
const integrations = [
  {
    title: "Shopify",
    desc: "Connect your Shopify store for seamless integration.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#96C93D"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Amazon",
    desc: "Integrate with Amazon for broader reach.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#FF9900"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "WooCommerce",
    desc: "Integrate WooCommerce for robust eCommerce.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#96588A"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  // Add other integrations here...
  {
    title: "Magento",
    desc: "Integrate Magento for powerful eCommerce solutions.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#007CBA"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "OpenCart",
    desc: "Integrate OpenCart for streamlined operations.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#007CBA"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Wix",
    desc: "Seamlessly connect your Wix site.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#000"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Weebly",
    desc: "Connect your Weebly site for better management.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#E5A214"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Site123",
    desc: "Integrate Site123 for easier website management.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#000"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Jimdo",
    desc: "Connect your Jimdo site for seamless operations.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#E0A02D"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Tilda",
    desc: "Easily connect with Tilda for better site management.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#F0B90A"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Strikingly",
    desc: "Integrate Strikingly for quick website creation.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#00B5D8"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Zyro",
    desc: "Connect Zyro for fast and easy site building.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#F24E1E"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "BigCommerce",
    desc: "Integrate BigCommerce for expanded eCommerce options.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#00A1E5"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Webflow",
    desc: "Integrate Webflow for design flexibility.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#8A2BE2"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Squarespace",
    desc: "Connect Squarespace for a polished website.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#7D7D7D"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "PrestaShop",
    desc: "Integrate PrestaShop for powerful eCommerce.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#E6A32E"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Duda",
    desc: "Connect Duda for streamlined website design.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#E5A623"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Yola",
    desc: "Integrate Yola for easy website creation.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#BBE7D7"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "SiteBuilder",
    desc: "Easily connect SiteBuilder for custom websites.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#FFD700"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
  {
    title: "Carrd",
    desc: "Connect Carrd for quick and easy landing pages.",
    icon: (
      <svg
        className="w-10 h-10 mx-auto mb-4"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M25 0C11.2 0 0 11.2 0 25c0 13.8 11.2 25 25 25s25-11.2 25-25C50 11.2 38.8 0 25 0z" fill="#38B6FF"/>
        <path d="M25 8l8 14h-16l8-14z" fill="#fff"/>
      </svg>
    ),
  },
];

// A function to render a card for each integration
const renderIntegrationCard = (integration) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-64 text-center flex flex-col justify-between">
      <div>
        <div className="flex justify-center mb-4">{integration.icon}</div>
        <h3 className="text-lg font-semibold">{integration.title}</h3>
        <p className="text-gray-600">{integration.desc}</p>
      </div>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Connect
      </button>
    </div>
  );
};

const Integrations = () => {
  return (
    <div className="bg-[#09090B] min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">Integrations</h1>
      <div className="flex flex-wrap justify-center">
        {integrations.map((integration) => renderIntegrationCard(integration))}
      </div>
    </div>
  );
};

export default Integrations;
