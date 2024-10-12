import LinkItem from "../LinkItem";

export default () => (
  <section className="mt-32 custom-screen">
    <div className="max-w-3xl mx-auto space-y-4 text-center">
      <h2 className="text-4xl heading">
        Accelerate Innovation with AI-Powered Automation
      </h2>
      <p className="text-zinc-400 max-w-xl mx-auto">
        Deploy cutting-edge AI automation solutions in minutes. Streamline your workflows, eliminate repetitive tasks, and focus on what truly matters.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <LinkItem
          href="/solutions"
          variant="shiny"
          className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
        >
          Get Started with AI
        </LinkItem>
        <LinkItem
          href="https://yourcompany.dev/?ref=ai-automation"
          target="_blank"
          className="inline-block w-full sm:w-auto"
        >
          See Our AI in Action
        </LinkItem>
      </div>
    </div>
  </section>
);
