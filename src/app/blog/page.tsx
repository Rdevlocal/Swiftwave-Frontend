import { Container, Icons, Wrapper } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import SectionBadge from "@/components/ui/section-badge";
import Image from "next/image";
import Link from "next/link";

const BlogPage = () => {
    const blogPosts = [
        { title: "AI-Powered Automation: The Future of Work", link: "/blog/ai-automation" },
        { title: "How AI is Revolutionizing Business Operations", link: "/blog/ai-business" },
        { title: "Machine Learning and Workflow Optimization", link: "/blog/ml-workflow" },
        { title: "The Role of AI in Enhancing Customer Experience", link: "/blog/ai-customer" },
        { title: "Automating Repetitive Tasks with AI", link: "/blog/ai-repetitive" },
        { title: "AI-Driven Decision Making: Opportunities and Challenges", link: "/blog/ai-decision" }
    ];

    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center py-20 h-full text-center">
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text bg-gradient-to-b from-white to-gray-400 text-transparent">
                            Our Blog
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/80 mt-6 max-w-3xl">
                            Explore the latest advancements in AI and automation. Stay informed about how artificial intelligence is shaping the future.
                        </p>
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {blogPosts.map((post, index) => (
                            <Card key={index} className="flex flex-col w-full border-neutral-700 hover:shadow-lg transition-all duration-300">
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-400">
                                        Learn how AI and automation are transforming industries and improving efficiency.
                                    </p>
                                    <Button variant="link" className="mt-4" asChild>
                                        <Link href={post.link}>Read More</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Wrapper>

            <Wrapper className="flex flex-col items-center justify-center py-12 relative">
                <Container>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center w-full text-center">
                            <h2 className="text-5xl font-bold mt-8">
                                Want More Insights?
                            </h2>
                            <p className="text-muted-foreground mt-4 max-w-md">
                                Subscribe to our newsletter for the latest updates and exclusive content straight to your inbox.
                            </p>

                        </div>
                    </LampContainer>
                </Container>
            </Wrapper>
        </section>
    );
};

export default BlogPage;
