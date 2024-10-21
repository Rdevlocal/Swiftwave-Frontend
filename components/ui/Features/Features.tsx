import {
  IconArrowsexpandLeft,
  IconBxCustomize,
  IconPennibLine,
} from "components/icons";
import { ReactNode } from "react";
import Card from "./Card";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const FeaturesAndTeam = () => {
  const features: Feature[] = [
    {
      title: "AI-Powered Efficiency",
      desc: "Utilize advanced AI technologies to enhance productivity and optimize business processes.",
      icon: <IconPennibLine />,
    },
    {
      title: "Dynamic System Compatibility",
      desc: "Easily integrate AI solutions into your current infrastructure, adapting as your business evolves.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Custom AI Applications",
      desc: "Our AI offerings are tailored to fit the specific requirements of your enterprise, ensuring optimal performance.",
      icon: <IconBxCustomize />,
    },
  ];

  // Updated softwareProducts array with imaginary products
  const softwareProducts = [
    {
      avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Predictive Insights",
      desc: "A robust analytics platform that leverages machine learning to forecast trends and drive strategic decisions.",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "AI Chatbot Pro",
      desc: "An intelligent chatbot that enhances customer engagement by providing real-time assistance and support.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Smart Document Automation",
      desc: "Automate document processing and management using advanced NLP technologies for better efficiency.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      name: "Image Recognition Suite",
      desc: "A powerful tool that utilizes deep learning for accurate image recognition and classification.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Voice Command Assistant",
      desc: "A voice-activated AI assistant designed to streamline tasks and improve workflow through voice recognition.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Fraud Detection System",
      desc: "An AI-driven solution for real-time detection and prevention of fraudulent activities across platforms.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
      name: "Customer Sentiment Analyzer",
      desc: "Analyze customer feedback and sentiment through AI to enhance user experience and satisfaction.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Personalized Marketing Engine",
      desc: "Create tailored marketing campaigns using AI algorithms that analyze consumer behavior and preferences.",
    },
  ];

  return (
    <>
      <section className="custom-screen mt-32">
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <h2 className="text-4xl heading text-white">AI-Powered Automation for Enhanced Performance</h2>
          <p className="text-white">
            Elevate your operations with AI solutions designed to maximize efficiency, improve workflows, and drive innovation.
          </p>
        </div>
        <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
          {features.map((item: Feature, key: number) => (
            <Card icon={item.icon} title={item.title} desc={item.desc} key={key} />
          ))}
        </ul>
      </section>

      {/* New Section for AI Software Products */}
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Our AI Software Products
            </h3>
            <p className="text-white mt-3">
              Explore our innovative AI solutions designed to transform your business processes.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {softwareProducts.map((item, idx) => (
                <li key={idx}>
                  <div className="w-20 h-20 mx-auto">
                    <img
                      src={item.avatar}
                      className="w-full h-full rounded-full"
                      alt={item.name}
                    />
                  </div>
                  <div className="mt-2">
                    <h4 className="text-white font-semibold sm:text-lg">{item.name}</h4>
                    <p className="text-white">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesAndTeam;
