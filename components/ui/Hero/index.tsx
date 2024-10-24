import LinkItem from "../LinkItem";
import HeroBgGradientClient from "./HeroBgGradient.Client";

export default () => {
  return (
    <section className="custom-screen mt-20">
      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <h1 className="text-5xl heading">
        Build the Future, Today
        </h1>
        <p className="text-zinc-400">
          Accelerate innovation with cutting-edge AI-powered automation solutions.
          Seamlessly integrate and scale your processes 24/7 with intelligent automation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LinkItem
            href="/products"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Get started today
          </LinkItem>
          <LinkItem
            href="/advantages"
            variant="shiny"
            className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto"
            target="_blank"
          >
            Learn more
          </LinkItem>
        </div>
      </div>
      <HeroBgGradientClient />
    </section>
  );
};
