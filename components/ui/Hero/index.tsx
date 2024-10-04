import LinkItem from "../LinkItem";
import HeroBgGradientClient from "./HeroBgGradient.Client";

export default () => {
  return (
    <section className="custom-screen mt-20">
      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <h1 className="text-5xl heading">
          Supercharge your workflow with AI-Powered Automation
        </h1>
        <p className="text-zinc-400">
          Swiftwave provides cutting-edge automation tools, launching new AI-powered products weekly to keep you ahead. Scale your business effortlessly with seamless, customizable solutions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LinkItem
            href="/automations"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Explore Automations
          </LinkItem>
          <LinkItem
            href="/automations"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Explore Automations
          </LinkItem>
        </div>
      </div>
      <HeroBgGradientClient />
    </section>
  );
};
