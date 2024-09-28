import {
  IconArrowsexpandLeft,
  IconBxCustomize,
  IconPennibLine,
} from "components/icons";
import { ReactNode } from "react";
import featureCover from "public/feature-cover.svg";
import Image from "next/image";
import Card from "./Card";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      title: "Automate Your Workflows",
      desc: "Swiftwave's automation tools streamline your operations, eliminating repetitive tasks and boosting productivity.",
      icon: <IconPennibLine />,
    },
    {
      title: "Scalable Solutions",
      desc: "Our automation products are built to scale with your business, ensuring seamless integration at any size.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Tailored Customization",
      desc: "Customize automation workflows to fit your unique business processes, enabling efficiency across all departments.",
      icon: <IconBxCustomize />,
    },
  ];

  return (
    <section className="custom-screen mt-32">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-4xl heading">Empower Your Business with Automation</h2>
        <p className="text-zinc-400">
          Swiftwave offers a range of automation tools designed to optimize your business processes, allowing you to focus on growth.
        </p>
      </div>
      <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {features.map((item: Feature, key: number) => (
          <Card key={key} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </ul>
    </section>
  );
};

export default FeaturesSection;
