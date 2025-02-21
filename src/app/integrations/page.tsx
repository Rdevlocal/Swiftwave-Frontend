import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import SectionBadge from "@/components/ui/section-badge";
import Image from "next/image";
import Link from "next/link";

const IntegrationsPage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <h1 className="text-4xl md:text-6xl lg:text-xl font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                            Our Integrations
                        </h1>
                        <p className="text-base md:text-lg text-foreground/80 mt-6 text-center max-w-3xl">
                            Productlinq seamlessly integrates with a variety of popular tools to streamline your productflow. Connect your systems and accelerate productivity with our effortless integrations.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="max-w-md mx-auto text-start md:text-center">
                        <SectionBadge title="Popular Integrations" />
                        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                            Power Up Your Business with Seamless Connections
                        </h2>
                        <p className="text-muted-foreground mt-6">
                            Easily connect the tools you already use with Productlinq. From eCommerce to marketing automation, we’ve got you covered.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                        {/* Shopify Integration Card */}
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Shopify</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-center mb-4">
                                    <Image src="/images/shopify-logo.png" alt="Shopify logo" width={50} height={50} />
                                </div>
                                <p>Integrate Productlinq with Shopify to automate order management, inventory updates, and more for your eCommerce store.</p>
                            </CardContent>
                        </Card>

                        {/* HubSpot Integration Card */}
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>HubSpot</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-center mb-4">
                                    <Image src="/images/hubspot-logo.png" alt="HubSpot logo" width={50} height={50} />
                                </div>
                                <p>Sync contacts, track sales, and automate marketing campaigns with our HubSpot integration for seamless CRM management.</p>
                            </CardContent>
                        </Card>

                        {/* Zapier Integration Card */}
                        <Card className="flex flex-col w-full border-neutral-700">
                            <CardHeader>
                                <CardTitle>Zapier</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-center mb-4">
                                    <Image src="/images/zapier-logo.png" alt="Zapier logo" width={50} height={50} />
                                </div>
                                <p>Automate productflows by connecting Productlinq with thousands of apps through Zapier. Save time with no-code automation.</p>
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
                                Ready to Supercharge Your productflow?
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Discover how our integrations can transform your business processes and productflows.
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

export default IntegrationsPage;
