import LinkItem from "../LinkItem";

export default function Page() {
  // Update paths as needed
  const navigation = [
    { title: "Customers", path: "#" },
    { title: "Careers", path: "#" },
  ];

  return (
    <div style={{ backgroundColor: "#09090B" }}>
      {/* Main Section */}
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Ready to Transform Your Workflows?
            <span className="text-indigo-400"> Let’s Automate!</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            We know how overwhelming it can be to juggle multiple tasks. That's why we're here to help you streamline your operations 
            and reclaim your time. Say goodbye to mundane tasks and hello to what really matters: your passion and creativity!
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="#"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Let's Get Started
            </a>
            <a
              href="#"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try It Out
            </a>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-automation-5-8.svg" // Updated image related to automation
            className="w-full mx-auto sm:w-10/12 lg:w-full"
            alt="Automation Illustration"
          />
        </div>
      </section>

      {/* Duplicate Section for Emphasis */}
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-automation-5-8.svg" // Updated image related to automation
            className="w-full mx-auto sm:w-10/12 lg:w-full"
            alt="Automation Illustration"
          />
        </div>
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Imagine Your Processes, Effortlessly Streamlined
            <span className="text-indigo-400"> with Our Automation Tools</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Picture this: You focus on your vision and creativity while our automation tools take care of the repetitive tasks. 
            Let us empower you to achieve more and worry less. We're here to support your journey every step of the way.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="#"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Let's Get Started
            </a>
            <a
              href="#"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try It Out
            </a>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="mt-32 custom-screen">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <h2 className="text-4xl heading">
            Unleash Your Potential with AI-Powered Automation
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Our solutions are designed to make your life easier. Imagine deploying powerful automation tools that fit seamlessly 
            into your workflow, allowing you to focus on what truly inspires you. Let's embark on this journey together!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LinkItem
              href="/solutions"
              variant="shiny"
              className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
            >
              Discover Automation Solutions
            </LinkItem>
            <LinkItem
              href="https://yourcompany.dev/?ref=automation"
              target="_blank"
              className="inline-block w-full sm:w-auto"
            >
              Watch Our Tools in Action
            </LinkItem>
          </div>
        </div>
      </section>
    </div>
  );
}
