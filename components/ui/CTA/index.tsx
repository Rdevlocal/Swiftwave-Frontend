import LinkItem from "../LinkItem";

const PartnerSection = () => (
  <section className="mt-32 custom-screen">
    <div className="max-w-3xl mx-auto space-y-4 text-center">
      <h2 className="text-4xl heading">A partner that never sleeps</h2>
      <p className="text-zinc-400 max-w-xl mx-auto">
        Use AI agents to empower your team. Don't limit your company—make the most of it.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <LinkItem
          href="/components"
          variant="shiny"
          className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
        >
          Get started
        </LinkItem>
        <LinkItem
          href="https://signup.swiftwave.io/"
          target="_blank"
          className="inline-block w-full sm:w-auto"
        >
          Learn more
        </LinkItem>
      </div>
    </div>
  </section>
);

export default PartnerSection;
