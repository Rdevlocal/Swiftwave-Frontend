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

export default () => {
  const features: Feature[] = [
    {
      title: "AI-Powered Automation",
      desc: "Swiftwave brings cutting-edge AI to streamline your processes, delivering efficiency at scale.",
      icon: <IconPennibLine />,
    },
    {
      title: "Always Expanding",
      desc: "With new automation tools launched weekly, Swiftwave ensures you stay ahead with the latest innovations.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "Fully Customizable",
      desc: "Tailor each AI-driven automation to fit your unique business needs with our flexible components.",
      icon: <IconBxCustomize />,
    },
  ];

  return (
    <section className="custom-screen mt-32">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-4xl heading">Automate Smarter with Swiftwave AI</h2>
        <p className="text-zinc-400">
          Unlock endless possibilities with our ever-growing suite of automation products, designed to simplify your workflow and maximize productivity.
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
