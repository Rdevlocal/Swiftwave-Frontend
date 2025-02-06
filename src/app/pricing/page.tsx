import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PricingPage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      {/* Hero Section */}
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center py-20 h-full">
            <h1 className="text-4xl md:text-6xl lg:text-xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
              Choose the Right Plan for Your Business
            </h1>
            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
              Select the pricing plan that best fits your enterprise's needs and start growing today.
            </p>
          </div>
        </Container>
      </Wrapper>

      {/* Pricing Plans Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md mx-auto text-start md:text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Our Pricing Plans
            </h2>
            <p className="text-muted-foreground mt-6">
              Affordable plans to scale your business with the right tools and features.
            </p>
          </div>
        </Container>

        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
              {/* Pricing Card 1 */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold">Basic Plan</h3>
                <p className="text-2xl font-bold mt-4">$19.99/month</p>
                <ul className="list-disc list-inside mt-4">
                  <li className="text-muted-foreground">Feature 1</li>
                  <li className="text-muted-foreground">Feature 2</li>
                  <li className="text-muted-foreground">Feature 3</li>
                </ul>
                <Button size="sm" className="mt-6 rounded-full border border-foreground/20">
                  Choose Plan
                </Button>
              </div>

              {/* Pricing Card 2 */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold">Pro Plan</h3>
                <p className="text-2xl font-bold mt-4">$49.99/month</p>
                <ul className="list-disc list-inside mt-4">
                  <li className="text-muted-foreground">Feature 1</li>
                  <li className="text-muted-foreground">Feature 2</li>
                  <li className="text-muted-foreground">Feature 3</li>
                  <li className="text-muted-foreground">Feature 4</li>
                </ul>
                <Button size="sm" className="mt-6 rounded-full border border-foreground/20">
                  Choose Plan
                </Button>
              </div>

              {/* Pricing Card 3 */}
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold">Enterprise Plan</h3>
                <p className="text-2xl font-bold mt-4">$99.99/month</p>
                <ul className="list-disc list-inside mt-4">
                  <li className="text-muted-foreground">All Features</li>
                  <li className="text-muted-foreground">24/7 Support</li>
                  <li className="text-muted-foreground">Advanced Analytics</li>
                </ul>
                <Button size="sm" className="mt-6 rounded-full border border-foreground/20">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>

      {/* Call to Action Section */}
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="w-full text-center">
          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white">
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};

export default PricingPage;
