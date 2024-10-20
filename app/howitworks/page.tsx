// HighPerformanceSection.js
const HighPerformanceSection = () => {
  return (
    <section className="py-14" style={{ backgroundColor: '#09090B' }}>
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">High Performance</h3>
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Build your websites with high performance
            </p>
            <p className="mt-3 text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a 
              href="javascript:void(0)" 
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
              className="md:max-w-lg sm:rounded-lg" 
              alt="" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ProfessionalServicesSection.js
const ProfessionalServicesSection = () => {
  return (
    <section className="py-14" style={{ backgroundColor: '#09090B' }}>
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
              className="md:max-w-lg sm:rounded-lg" 
              alt="" 
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-indigo-600 font-semibold">Professional services</h3>
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Build your SaaS solution with help from our experts
            </p>
            <p className="mt-3 text-gray-400">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <a 
              href="javascript:void(0)" 
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// BuildFutureSection
const BuildFutureSection = () => {
  return (
    <section className="py-28 relative bg-blue-600">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Build the future with us
          </p>
          <p className="text-blue-100 mt-3">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
          </p>
        </div>
        <div className="mt-4">
          <a href="javascript:void(0)" className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full">
            Get started
          </a>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
    </section>
  );
};

// Main Page Component
const HowItWorksPage = () => {
  return (
    <>
      <HighPerformanceSection />
      <ProfessionalServicesSection />
      <BuildFutureSection />
      <HighPerformanceSection /> {/* Repeated section */}
      <ProfessionalServicesSection /> {/* Repeated section */}
    </>
  );
};

export default HowItWorksPage; // Default export of the page
