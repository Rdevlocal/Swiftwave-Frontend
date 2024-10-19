const title = "Swiftwave - License Agreement";

export const metadata = {
  metadataBase: new URL("https://Swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://Swiftwave.io/license",
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
            License Agreement
          </h1>
          <p className="text-zinc-400 mt-3">
            Understand your rights and responsibilities.
          </p>
        </div>
        <div className="prose prose-invert mt-12 mx-4 sm:mx-auto">
          <h2>License Grant</h2>
          <p>
            Subject to your compliance with these terms, Swiftwave grants you a non-exclusive, non-transferable license to use the software and services provided through our platform (the "Services"). This license allows you to access and use the Services for your personal or business purposes.
          </p>
          
          <h2>Restrictions</h2>
          <p>
            You may not copy, modify, distribute, sell, or lease any part of the Services, nor may you reverse engineer or attempt to extract the source code of the software, unless permitted by law. You also agree not to use the Services for any illegal or unauthorized purpose.
          </p>
          
          <h2>Termination</h2>
          <p>
            Swiftwave reserves the right to terminate your access to the Services if you fail to comply with the terms of this license agreement. Upon termination, all rights granted to you will cease, and you must stop using the Services immediately.
          </p>
          
          <h2>Disclaimer of Warranty</h2>
          <p>
            The Services are provided on an "as-is" basis without any warranties of any kind. Swiftwave does not guarantee the accuracy, reliability, or completeness of the Services. Your use of the Services is at your own risk.
          </p>
          
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, Swiftwave shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses, arising from your use of or inability to use the Services.
          </p>
          
          <h2>Governing Law</h2>
          <p>
            This license agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which Swiftwave is established, without regard to its conflict of law principles.
          </p>
          
          <h2>Changes to the License Agreement</h2>
          <p>
            Swiftwave reserves the right to update or modify this license agreement at any time. Any changes will be effective immediately upon posting the revised agreement on our website. Your continued use of the Services after any such changes constitutes your acceptance of the new terms.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            If you have any questions about this license agreement, please contact us using the information provided on our website.
          </p>
        </div>
      </section>
    </>
  );
};
