import LinkItem from "../LinkItem";
import { IconGithub } from "components/icons";
import HeroBgGradientClient from "./HeroBgGradient.Client";

export default () => {
  return (
    <section className="custom-screen mt-20">
      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <h1 className="text-5xl heading">
          Automate your business with Swiftwave
        </h1>
        <p className="text-zinc-400">
          Streamline your operations and increase efficiency with our powerful automation software. 
          Swiftwave helps you save time and scale effortlessly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LinkItem
            href="/get-started"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Get Started
          </LinkItem>
          <LinkItem
            href="/get-started"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Learn more
          </LinkItem>
        </div>
      </div>
      <HeroBgGradientClient />
    </section>
  );
};
