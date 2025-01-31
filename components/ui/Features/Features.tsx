"use client"; // Declare this file as a client component

import {
  IconArrowsexpandLeft,
  IconBxCustomize,
  IconPennibLine,
} from "components/icons";
import { ReactNode, useState, useEffect } from "react";
import Card from "./Card";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const FeaturesAndTeam = () => {
  const features: Feature[] = [
    {
      title: "Automated Workflow Management",
      desc: "Streamline your processes with intelligent automation, reducing manual tasks and enhancing productivity.",
      icon: <IconPennibLine />,
    },
    {
      title: "Seamless Integration",
      desc: "Effortlessly connect our automation tools with your existing systems for a smooth transition and maximum efficiency.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Tailored Automation Solutions",
      desc: "Customize our AI solutions to meet the specific needs of your organization, ensuring seamless performance across all operations.",
      icon: <IconBxCustomize />,
    },
  ];

  const softwareProducts = [
    {
      avatar: "https://images.unsplash.com/photo-1521737604893-1b0069b2f09e?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "FlowGenie",
      desc: "An AI-powered platform that designs and automates custom workflows tailored to your team's needs.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1534080561715-2c11365869a8?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "AutoPilot",
      desc: "A smart assistant that automates repetitive tasks, allowing teams to focus on strategic initiatives.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1573164574572-57e1512009d7?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "TaskMaster AI",
      desc: "Effortlessly manage projects with automated task assignments and real-time progress tracking.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "DataSync Pro",
      desc: "Integrate and synchronize data workflows with powerful AI, ensuring accuracy and reducing bottlenecks.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1543269865-4e9b308a0b6c?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "InsightIQ",
      desc: "Generate insightful reports automatically from your data, empowering quick and informed decision-making.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1529676407715-44c0636e3ac2?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "EngageBot",
      desc: "An AI chatbot that enhances customer interaction by automating responses and gathering real-time feedback.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1523052003464-4cdd9c9a2501?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "ResourceMaster",
      desc: "Optimize resource allocation across projects using AI to ensure deadlines are met efficiently.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1528102250526-63f2de75b041?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Workflow Insights Pro",
      desc: "Utilize AI analytics to gain insights into your workflows, identifying automation opportunities and boosting efficiency.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
    {
      avatar: "https://images.unsplash.com/photo-1528102250526-63f2de75b041?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "ReportGenie",
      desc: "Generate automatic reports based on real-time data to help businesses make informed decisions.",
      animationClass: "transition-shadow duration-200 transform hover:scale-105 hover:shadow-lg",
    },
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const totalSlides = Math.ceil(softwareProducts.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update items per slide based on screen size
  const updateItemsPerSlide = () => {
    if (window.innerWidth < 640) {
      setItemsPerSlide(1); // Mobile
    } else {
      setItemsPerSlide(3); // Desktop and larger devices
    }
  };

  useEffect(() => {
    // Set initial items per slide
    updateItemsPerSlide();

    // Set up event listener for window resize
    window.addEventListener("resize", updateItemsPerSlide);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleSeeAll = () => {
    // Define the action for "See All" button here
    // For example, navigate to another page or scroll to a section
    console.log('See All products clicked'); // Replace this with your navigation logic
  };

  return (
    <>
      <section className="custom-screen mt-32">
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <h2 className="text-4xl heading text-white">AI Automation for Streamlined Workflows</h2>
          <p className="text-white">
            Transform your business with cutting-edge automation solutions designed to enhance efficiency and drive innovation.
          </p>
        </div>
        <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
          {features.map((item: Feature, key: number) => (
            <Card icon={item.icon} title={item.title} desc={item.desc} key={key} />
          ))}
        </ul>
      </section>

      {/* New Section for AI Software Products */}
      <section className="py-14" style={{ backgroundColor: '#09090B' }}>
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Our AI Automation Solutions
            </h3>
            <p className="text-white mt-3">
              Discover innovative tools designed to revolutionize your workflow and automate repetitive tasks.
            </p>
          </div>
          <div className="mt-12 relative overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }}>
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="flex justify-center items-center space-x-4 w-full min-w-full">
                  {softwareProducts
                    .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                    .map((item, idx) => (
                      <div key={idx} className={`bg-[#09090B] rounded-lg shadow-lg p-6 ${item.animationClass} transition duration-300 w-full min-w-[300px] flex flex-col items-center`}>
                        <div className="w-24 h-24 flex items-center justify-center mb-4">
                          <img
                            src={item.avatar}
                            className="w-full h-full rounded-full border-4 border-gray-300 transition-all duration-200"
                            alt={item.name}
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-white font-semibold text-lg">{item.name}</h4>
                          <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
                        </div>
                      </div>
                    ))} 
                </div>
              ))} 
            </div>
            <button 
              onClick={handlePrev} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-700 rounded-l"
            >
              &larr; {/* This is the left arrow */}
            </button>
            <button 
              onClick={handleNext} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-gray-700 rounded-r"
            >
              &rarr; {/* This is the right arrow */}
            </button>
          </div>
          <div className="mt-8">
            <button
              onClick={handleSeeAll}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
            >
              See All
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesAndTeam;
