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

export default () => {
  const features: Feature[] = [
    {
      title: "Intelligent Automation",
      desc: "Leverage AI to automate complex tasks, boosting efficiency and reducing human error across all operations.",
      icon: <IconPennibLine />,
    },
    {
      title: "Seamless Integration",
      desc: "Integrate AI-driven automation into your existing systems effortlessly, scaling with your business in real-time.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Tailored AI Solutions",
      desc: "Our AI tools are fully customizable to meet the unique needs of your business, offering flexibility without limits.",
      icon: <IconBxCustomize />,
    },
  ];

  return (
    <section className="custom-screen mt-32">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-4xl heading">AI-Driven Automation for a Smarter Future</h2>
        <p className="text-zinc-400">
          Transform your business with scalable AI solutions that enhance productivity, streamline workflows, and empower innovation.
        </p>
      </div>
      <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {features.map((item: Feature, key: number) => (
          <Card icon={item.icon} title={item.title} desc={item.desc} key={key} />
        ))}
      </ul>
    </section>
  );
};
