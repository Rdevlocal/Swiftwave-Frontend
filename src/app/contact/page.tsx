import { Container, Wrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LampContainer } from "@/components/ui/lamp";
import SectionBadge from "@/components/ui/section-badge";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full">
                        <h1 className="text-5xl md:text-7xl font-semibold text-center bg-clip-text bg-gradient-to-b from-gray-50 to-gray-50 text-transparent">
                            Contact Us
                        </h1>
                        <p className="text-base md:text-lg text-foreground/80 mt-6 text-center max-w-3xl">
                            Were here to help! Fill out the form below, and our team will get back to you as soon as possible.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <form className="w-full max-w-lg mx-auto">
                        <div className="flex flex-col space-y-6">
                            <Input 
                                type="text" 
                                placeholder="Your Name" 
                                required
                                className="px-4 py-2 border rounded-md border-neutral-700"
                            />
                            <Input 
                                type="email" 
                                placeholder="Your Email" 
                                required
                                className="px-4 py-2 border rounded-md border-neutral-700"
                            />
                            <Textarea 
                                placeholder="Your Message" 
                                required 
                                rows={6}
                                className="px-4 py-2 border rounded-md border-neutral-700"
                            />
                            <Button variant="white" type="submit" className="mt-4 w-full py-3">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                                We’re excited to connect with you!
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Whether you have a question or want to discuss a project, we’re here to help. Reach out anytime!
                            </p>
                        </div>
                    </LampContainer>
                </Container>
            </Wrapper>
        </section>
    );
};

export default ContactPage;
