import React from 'react';

const title = "Swiftwave.io - A Plug-and-Play Automation Company";

export const metadata = {
  metadataBase: new URL("https://swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://swiftwave.io",
  },
  twitter: {
    title,
  },
};

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative max-w-screen-xl mx-auto py-12 px-4 md:px-8">
        <div className="relative z-10 gap-5 items-center lg:flex">
          <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Transform Your Business with <span className="text-indigo-600">Automation</span>
            </h1>
            <p className="text-gray-600 mt-4">
              At Swiftwave.io, we specialize in plug-and-play automation solutions across industries, empowering businesses to optimize operations and scale seamlessly.
            </p>
            <a
              className="mt-6 inline-block px-6 py-3 text-white bg-indigo-600 font-medium rounded-full hover:bg-indigo-700"
              href="#services"
            >
              Explore Our Solutions
            </a>
          </div>
          <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
            <img
              src="https://images.unsplash.com/photo-1591696333279-0a95f7dbad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Automation technology"
              className="rounded-lg w-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="max-w-xl px-4 space-y-4 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h2 className="text-indigo-600 font-semibold text-3xl">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Swiftwave.io is an industry leader in automation technology, providing innovative solutions for businesses looking to streamline their operations. From manufacturing to retail, healthcare to fintech, we build custom automation software that adapts to your business needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: to eliminate inefficiencies, improve productivity, and help companies thrive in the digital age. Whether you're automating workflows, managing data pipelines, or enhancing customer experience, Swiftwave.io has the tools you need to succeed.
              </p>
            </div>
            <div className="flex-1 mt-6 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1515444744559-7be63e1600de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h2 className="text-indigo-600 font-semibold text-3xl">
                Our Services
              </h2>
              <p className="text-gray-800 text-xl font-semibold">
                Custom Automation Solutions
              </p>
              <p className="mt-3 text-gray-600">
                We deliver customized automation solutions tailored to your specific industry needs. From AI-driven software to robotic process automation (RPA), we enable your business to stay ahead of the curve.
              </p>
              <a
                href="#contact"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Contact us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex-1 mt-5 mx-auto lg:mt-0 lg:w-auto">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Automation software"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-28 bg-blue-600 text-white relative">
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl md:mx-auto">
            <h2 className="text-4xl font-bold">
              Our Vision for the Future
            </h2>
            <p className="text-blue-100 mt-4">
              At Swiftwave.io, we're committed to shaping the future of automation. We aim to lead the way with groundbreaking technology that redefines how businesses operate. Our team of experts is dedicated to creating solutions that bring lasting impact.
            </p>
          </div>
          <div className="mt-6">
            <a href="#contact" className="inline-block py-2 px-4 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-100 duration-150">
              Partner with Us
            </a>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
      </section>
    </>
  );
};

export default Page;
