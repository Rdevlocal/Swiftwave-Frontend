import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { features } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturesPage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">

            {/* hero */}
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <h1 className="text-4xl md:text-6xl lg:text-xl md:!leading-snug font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                            Unlock Powerful Features for Your Business
                        </h1>
                        <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
                            Explore the advanced features of our platform designed to take your enterprise to the next level.
                        </p>
                        <div className="flex relative items-center justify-center mt-8 md:mt-12 w-full">
                            <Link href="#" className="flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none">
                                <p className="text-foreground text-sm text-center md:text-base font-medium pl-4 pr-4 lg:pr-0">
                                    {"  "} See How These Features Can Transform Your Business
                                </p>
                                <Button size="sm" className="rounded-full hidden lg:flex border border-foreground/20">
                                    Get Started
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Wrapper>

            {/* features */}
            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Advanced Features for Enterprise Efficiency
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Explore the cutting-edge features designed to improve enterprise productivity.
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
                            {features.map((feature) => (
                                <div key={feature.title} className="flex flex-col items-start lg:items-start px-0 md:px-0">
                                    <div className="flex items-center justify-center">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-medium mt-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-start lg:text-start">
                                        {feature.info}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Wrapper>

        </section>
    );
};

export default FeaturesPage;
