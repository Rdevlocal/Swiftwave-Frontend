import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import SectionBadge from "@/components/ui/section-badge";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <h1 className="text-4xl md:text-6xl lg:textxl font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                            About Us
                        </h1>
                        <p className="text-base md:text-lg text-foreground/80 mt-6 text-center max-w-3xl">
                            At Productlinq, we believe in transforming inefficiency into intelligence. Our mission is to provide zero-code, high-speed solutions that make professional productflows seamless and fun, without compromising on performance.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Our Mission" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Innovation at the Core
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            We strive to simplify complex productflows and enhance productivity through intelligent automation and seamless integration. Our goal is to empower businesses and professionals with the tools they need to excel in their industries.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>We envision a world where businesses can operate smarter and faster without technical barriers. By leveraging automation and AI-driven solutions, we aim to eliminate inefficiencies and unlock new opportunities for growth.</p>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Our Values</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Integrity, innovation, and excellence drive everything we do. We are committed to continuous improvement, ensuring that our solutions evolve to meet the changing demands of businesses worldwide.</p>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Join Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Be part of our journey to redefine the future of work. Whether you re a business looking for smarter solutions or an innovator eager to push boundaries, Productlinq offers the platform and community to help you succeed.</p>
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
                                Ready to Transform Your productflow?
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Discover how Productlinq can revolutionize your business. Our tailored solutions are designed to optimize efficiency, reduce costs, and empower teams to focus on what truly matters.
                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="/contact">
                                    Get in Touch
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                </Container>
            </Wrapper>
        </section>
    );
};

export default AboutPage;
