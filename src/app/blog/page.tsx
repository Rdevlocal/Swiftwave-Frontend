import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import SectionBadge from "@/components/ui/section-badge";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <h1 className="text-4xl md:text-6xl lg:textxl font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                            Our Blog
                        </h1>
                        <p className="text-base md:text-lg text-foreground/80 mt-6 text-center max-w-3xl">
                            Welcome to our blog! Here, we share insights, innovations, and stories from the world of Swiftwave and beyond. Stay up-to-date with the latest trends and news.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Post 1: Streamlining Workflow with Swiftwave</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Discover how Swiftwave is transforming businesses with innovative zero-code solutions that simplify complex workflows.
                                </p>
                                <Button variant="link" className="mt-4" asChild>
                                    <Link href="/blog/post1">
                                        Read More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Post 2: The Future of Automation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Learn about the future of automation and how businesses can harness the power of seamless integrations for enhanced productivity.
                                </p>
                                <Button variant="link" className="mt-4" asChild>
                                    <Link href="/blog/post2">
                                        Read More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Post 3: Our Journey to Innovation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Get to know the story behind Swiftwave and our mission to make complex systems simple, fast, and efficient.
                                </p>
                                <Button variant="link" className="mt-4" asChild>
                                    <Link href="/blog/post3">
                                        Read More
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                Ready to Dive Deeper?
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Explore more articles and stay ahead of the curve in business automation and workflow innovation.
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="/contact">
                                    Contact Us for More Insights
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
            </Wrapper>
        </section>
    );
};

export default BlogPage;
