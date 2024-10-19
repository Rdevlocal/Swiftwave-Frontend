const title = "Swiftwave - Privacy Policy";

export const metadata = {
  metadataBase: new URL("https://Swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://Swiftwave.io/privacy",
  },
  twitter: {
    title,
  },
};

export default () => {
  return (
    <>
      <section className="mt-20">
        <div className="text-center mx-4">
          <h1 className="text-3xl heading font-extrabold tracking-tight mb-4 sm:text-4.5xl">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 mt-3">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
        <div className="prose prose-invert mt-12 mx-4 sm:mx-auto">
          <h2>Information We Collect</h2>
          <p>
            We collect both personal and non-personal information when you use our website or services. Personal information may include your name, email address, and other data you provide voluntarily. Non-personal information, such as device type, browser version, and site usage data, is collected automatically to enhance your experience.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            We use the data collected to operate and improve our website, provide customer support, personalize your experience, and communicate with you about updates or marketing offers. We will not sell, rent, or share your personal data with third parties without your consent, except as required by law.
          </p>
          <h2>Third-Party Services and Data Sharing</h2>
          <p>
            We may work with third-party services to help us run our website and services, such as hosting providers or analytics platforms. These third parties may have access to your data but are required to handle it securely and in accordance with this privacy policy.
          </p>
          <h2>International Data Transfers</h2>
          <p>
            If you are located outside of the country where our servers are based, your information may be transferred and stored internationally. We take appropriate safeguards to ensure that your data is protected in accordance with applicable privacy laws.
          </p>
          <h2>Your Rights and Choices</h2>
          <p>
            You have the right to access, update, or delete your personal information at any time. You can also choose to opt-out of receiving marketing communications from us by following the unsubscribe link in our emails. If you have any concerns about your data, you can contact us for further assistance.
          </p>
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies to personalize your experience on our website. Cookies help us remember your preferences and improve your browsing experience. You can choose to accept or decline cookies through your browser settings. We may also use third-party tracking technologies to analyze website traffic and user behavior for improvement purposes.
          </p>
          <h2>Updates to This Policy</h2>
          <p>
            We may update our privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and significant updates will be communicated to you directly if applicable.
          </p>
        </div>
      </section>
    </>
  );
};
