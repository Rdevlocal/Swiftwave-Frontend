import { Container, Wrapper } from "@/components";

const TermsPage = () => {
    return (
        <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
            <Wrapper>
                <Container>
                    <div className="py-20 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-semibold text-center text-gray-50">
                            Terms and Conditions
                        </h1>
                        <p className="text-base md:text-lg text-foreground/80 mt-6 text-justify">
                            Welcome to our platform. By accessing or using our services, you agree to be bound by the following terms and conditions. Please read them carefully before using our website.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
                        <p className="mt-4 text-justify">
                            By using our services, you confirm that you accept these terms and agree to comply with them. If you do not agree, please refrain from using our platform. Your continued use of our services signifies your acceptance of any updates to these terms.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">2. Changes to Terms</h2>
                        <p className="mt-4 text-justify">
                            We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting on our website. It is your responsibility to review them periodically. If significant changes are made, we may notify users via email or other communication channels.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">3. User Responsibilities</h2>
                        <p className="mt-4 text-justify">
                            Users must use our services lawfully and responsibly. Any form of misuse, including but not limited to fraudulent activities, unauthorized access, or distribution of harmful content, is strictly prohibited. Users are also responsible for keeping their account credentials secure and must notify us immediately in case of any unauthorized use.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">4. Privacy Policy</h2>
                        <p className="mt-4 text-justify">
                            Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, and protect your data. We take industry-standard security measures to safeguard your personal information, but we cannot guarantee absolute security due to the nature of online communications.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">5. Limitation of Liability</h2>
                        <p className="mt-4 text-justify">
                            To the fullest extent permitted by law, our platform and its affiliates will not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our services. This includes, but is not limited to, loss of profits, data, or business opportunities.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">6. Termination of Services</h2>
                        <p className="mt-4 text-justify">
                            We reserve the right to suspend or terminate your access to our services at any time, without notice, if you violate these terms. We also retain the right to discontinue any part of our services at our sole discretion.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">7. Governing Law</h2>
                        <p className="mt-4 text-justify">
                            These terms shall be governed and interpreted in accordance with the laws of the jurisdiction in which our company operates. Any disputes arising from these terms shall be resolved in the appropriate courts of that jurisdiction.
                        </p>
                        <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
                        <p className="mt-4 text-justify">
                            If you have any questions regarding these terms, please contact us at support@example.com. We appreciate your feedback and are happy to clarify any concerns you may have.
                        </p>
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default TermsPage;
