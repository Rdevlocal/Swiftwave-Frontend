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
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-16">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-24 h-full">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text bg-gradient-to-b from-gray-100 to-gray-600 text-transparent">
                            About Us
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/90 mt-8 text-center max-w-4xl">
                            At Swiftwave, we are redefining the future of work by transforming inefficiency into intelligence. Our mission is to empower businesses with zero-code, high-speed solutions that enhance workflows and make work not just productive but enjoyable, without ever sacrificing performance. Through innovation and a relentless pursuit of excellence, we provide businesses the tools to stay ahead in a rapidly changing world.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-16 relative">
                <Container>
                    <div className="max-w-xl mx-auto text-start md:text-center">
                        <SectionBadge title="Our Mission" />
                        <h2 className="text-4xl lg:text-5xl font-bold mt-8">
                            Innovation at the Core of Everything We Do
                        </h2>
                        <p className="text-muted-foreground mt-8 text-xl">
                            At Swiftwave, we strive to simplify complex workflows and enhance productivity through cutting-edge automation technologies. By seamlessly integrating intelligent solutions, we empower businesses to operate at peak efficiency, saving valuable time and resources. Our vision is clear: to equip organizations with transformative tools that enable them to unlock growth potential and lead in their industries.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-16 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                    <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    We envision a world where businesses can operate smarter and faster, without the need for complex coding or technical expertise. Through the power of automation and AI-driven solutions, we aim to eliminate inefficiencies, reduce human error, and unlock new opportunities for growth. Our vision is to help organizations not just keep up with industry demands but lead the way in innovation and progress.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Our Values</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Integrity, innovation, and excellence are the cornerstones of Swiftwave. We believe in a strong ethical foundation that drives everything we do. By continuously innovating and improving, we ensure that our solutions are always aligned with the evolving needs of the global market. Our unwavering commitment to excellence is reflected in the quality of our products and the success of our clients.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Join Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Join us in shaping the future of work. Whether you're a business seeking smarter, more efficient solutions or an innovator looking for a platform to push boundaries, Swiftwave offers a collaborative environment where growth and opportunity meet. We invite passionate individuals and organizations to partner with us and experience the power of transformative technology.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-16 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold mt-10">
                                Ready to Transform Your Workflow?
                            </h2>
                            <p className="text-muted-foreground mt-8 text-xl max-w-2xl mx-auto">
                                Discover how Swiftwave’s tailored solutions can revolutionize your business operations. We optimize efficiency, reduce costs, and empower teams to focus on what truly matters: driving innovation, delivering value, and achieving success. Experience the future of work, today.
                            </p>
                            <Button variant="white" className="mt-8 py-4 px-8 text-lg" asChild>
                                <Link href="/contact">
                                    Get started
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
