import { Container, Wrapper } from "@/components";

const PrivacyPage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <Wrapper>
                <Container>
                    <div className="py-20 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-semibold text-center text-gray-50">
                            Privacy Policy
                        </h1>
                        <p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
                            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our platform.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
                        <p className="mt-4 text-justify">
                            We collect personal information that you provide directly, such as your name, email address, and payment details. We may also collect technical data, including IP addresses, browser types, and usage statistics to enhance our services.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Information</h2>
                        <p className="mt-4 text-justify">
                            We use the information we collect to provide, improve, and personalize our services. This includes processing transactions, responding to inquiries, sending updates, and enhancing user experience through analytics.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">3. Sharing of Information</h2>
                        <p className="mt-4 text-justify">
                            We do not sell your personal information. However, we may share your data with trusted third-party service providers to facilitate payments, analytics, and customer support. We ensure these parties comply with strict data protection measures.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">4. Data Security</h2>
                        <p className="mt-4 text-justify">
                            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. Despite our efforts, no online service is completely secure, and we cannot guarantee absolute protection.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">5. Cookies and Tracking Technologies</h2>
                        <p className="mt-4 text-justify">
                            Our platform uses cookies and similar tracking technologies to enhance user experience, analyze trends, and monitor website traffic. You can manage cookie preferences through your browser settings.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">6. Your Rights</h2>
                        <p className="mt-4 text-justify">
                            You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights, please contact us. We will respond to your request in accordance with applicable data protection laws.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">7. Changes to This Policy</h2>
                        <p className="mt-4 text-justify">
                            We may update this Privacy Policy from time to time to reflect changes in our practices. If we make significant modifications, we will notify you via email or through our website.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
                        <p className="mt-4 text-justify">
                            If you have any questions about this Privacy Policy, please contact us at support@example.com. We value your privacy and are committed to safeguarding your personal data.
                        </p>
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default PrivacyPage;
