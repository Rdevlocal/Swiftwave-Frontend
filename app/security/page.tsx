const title = "Swiftwave - Security Policy";

export const metadata = {
  metadataBase: new URL("https://Swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://Swiftwave.io/security",
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
            Security Policy
          </h1>
          <p className="text-zinc-400 mt-3">
            Your security is our top priority.
          </p>
        </div>
        <div className="prose prose-invert mt-12 mx-4 sm:mx-auto">
          <h2>Data Protection</h2>
          <p>
            At Swiftwave, we are committed to protecting your data by employing industry-standard encryption, secure servers, and strict access control protocols. We continually assess and improve our security measures to guard against unauthorized access, modification, or destruction of your data.
          </p>
          <h2>System Monitoring and Incident Response</h2>
          <p>
            Our systems are monitored 24/7 to detect and respond to any security threats. In the event of a security incident, we have protocols in place to contain, assess, and mitigate the issue. We also ensure transparent communication with affected users as per regulatory requirements.
          </p>
          <h2>Access Control</h2>
          <p>
            Access to your data is restricted to authorized personnel only, and we maintain strict role-based access control (RBAC) mechanisms. Employees undergo regular training to ensure compliance with security best practices.
          </p>
          <h2>Data Encryption</h2>
          <p>
            All sensitive data transmitted between your device and our servers is encrypted using secure protocols, such as TLS (Transport Layer Security). Data at rest is also encrypted to prevent unauthorized access in the event of a breach.
          </p>
          <h2>Security Audits and Compliance</h2>
          <p>
            We regularly perform internal and external security audits to ensure that our systems and processes meet the highest security standards. Our security practices are aligned with industry standards and regulatory requirements to ensure compliance.
          </p>
          <h2>Third-Party Risk Management</h2>
          <p>
            Any third-party service providers we work with must meet our strict security standards. We perform due diligence before engaging with any vendor and ensure ongoing monitoring of their security practices.
          </p>
        </div>
      </section>
    </>
  );
};
