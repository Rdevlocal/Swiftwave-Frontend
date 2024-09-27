const title = "Swiftwave.io a plug and play data company";

export const metadata = {
  metadataBase: new URL("https://swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://swiftwave.io",
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
            Your data is protected and respected.
          </p>
        </div>
        <div className="prose prose-invert mt-12 mx-4 sm:mx-auto">
          <h2>Introduction</h2>
          <p>
            At Swiftwave.io, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services. By accessing or using our services, you agree to the terms of this policy.
          </p>

          <h2>Collection of Non-Personal Information</h2>
          <p>
            When you visit our website, our servers automatically record information that your browser sends. This data may include your device's IP address, browser type and version, operating system type and version, language preferences, the webpage you were visiting before you came to our website, pages of our website that you visit, the time spent on those pages, information you search for on our website, access times and dates, and other statistics.
          </p>

          <h2>Collection of Personal Information</h2>
          <p>
            We may collect personal information that you provide directly to us, such as your name, email address, phone number, and payment information when you create an account, subscribe to our services, or contact us. We will only collect personal information that you provide voluntarily.
          </p>

          <h2>Use of Information</h2>
          <p>
            Swiftwave.io may use the information we collect for the following purposes:
          </p>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To process transactions and send you related information.</li>
            <li>To communicate with you about your account, including sending you service-related updates and announcements.</li>
            <li>To improve our website and services by analyzing user behavior and preferences.</li>
            <li>To send you marketing communications, with your consent.</li>
            <li>To comply with legal obligations and protect our rights.</li>
          </ul>

          <h2>Information Transfer and Storage</h2>
          <p>
            Depending on your location, data transfers may involve transferring and storing your information in a country other than your own. We take appropriate security measures to protect your information during such transfers. You are entitled to learn about the legal basis of information transfers to a country outside the European Union or to any international organization governed by public international law. If any such transfer takes place, you can find out more by checking the relevant sections of this document or inquire with us using the information provided in the Contact section.
          </p>

          <h2>Newsletters</h2>
          <p>
            We offer electronic newsletters which you may voluntarily subscribe to. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us. However, you will continue to receive essential transactional emails.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website uses "cookies" to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. We may use cookies to collect, store, and track information for statistical purposes to operate our website. You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer.
          </p>
          <p>
            In addition to using cookies and related technologies, we may permit certain third-party companies to help us tailor advertising that we think may be of interest to users and to collect and use other data about user activities on the website. These companies may deliver ads that might also place cookies and otherwise track user behavior.
          </p>

          <h2>Data Security</h2>
          <p>
            We take the security of your personal information seriously and implement reasonable measures to protect it. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by Swiftwave.io. We are not responsible for the privacy practices of these third-party websites. We encourage you to review the privacy policies of any third-party services you use.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information from our records.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal information. If you wish to exercise any of these rights, please contact us using the information provided in the Contact section below.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>Email: support@swiftwave.io</p>
          <p>Address: 1234 Swiftwave St, Data City, DC 12345</p>
        </div>
      </section>
    </>
  );
};
