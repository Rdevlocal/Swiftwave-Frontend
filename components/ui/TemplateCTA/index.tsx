import BgGradient from "./BgGradient";
import TemplateScoresCard from "./TemplateScoresCard";
import TemplatesOverview from "./TemplatesOverview";

export default () => (
  <section className="mt-32 border-t border-zinc-800 pt-24 relative">
    <BgGradient className="absolute inset-x-0 mx-auto duration-500 top-0" />
    <div className="custom-screen relative z-10">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-4xl heading">Automation proudcts for Every Industry</h2>
        <p className="text-zinc-400">
          Explore a growing collection of customizable automation products designed to streamline your processes. Built on AI-driven tools, tailored to your needs, and easy to implement.
        </p>
      </div>

      <div className="gap-x-6 mt-10 space-y-6 md:flex md:space-y-0">
        <TemplatesOverview />
        <TemplateScoresCard />
      </div>
    </div>
  </section>
);
