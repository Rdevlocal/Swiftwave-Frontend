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

  // Updated softwareProducts array with new product descriptions focused on workflow automation
  const softwareProducts = [
    {
      avatar: "https://images.unsplash.com/photo-1521737604893-1b0069b2f09e?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "FlowGenie",
      desc: "An AI-powered platform that designs and automates custom workflows tailored to your team's needs.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1534080561715-2c11365869a8?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "AutoPilot",
      desc: "A smart assistant that automates repetitive tasks, allowing teams to focus on strategic initiatives.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1573164574572-57e1512009d7?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "TaskMaster AI",
      desc: "Effortlessly manage projects with automated task assignments and real-time progress tracking.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "DataSync Pro",
      desc: "Integrate and synchronize data workflows with powerful AI, ensuring accuracy and reducing bottlenecks.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1543269865-4e9b308a0b6c?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "InsightIQ",
      desc: "Generate insightful reports automatically from your data, empowering quick and informed decision-making.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1529676407715-44c0636e3ac2?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "EngageBot",
      desc: "An AI chatbot that enhances customer interaction by automating responses and gathering real-time feedback.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1523052003464-4cdd9c9a2501?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "ResourceMaster",
      desc: "Optimize resource allocation across projects using AI to ensure deadlines are met efficiently.",
    },
    {
      avatar: "https://images.unsplash.com/photo-1528102250526-63f2de75b041?crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ", // Colored image
      name: "Workflow Insights Pro",
      desc: "Utilize AI analytics to gain insights into your workflows, identifying automation opportunities and boosting efficiency.",
    },
  ];
  

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
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div className="max-w-xl mx-auto">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Our AI Automation Solutions
            </h3>
            <p className="text-white mt-3">
              Discover innovative tools designed to revolutionize your workflow and automate repetitive tasks.
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
