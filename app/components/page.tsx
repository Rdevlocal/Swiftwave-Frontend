
const title = "Swiftwave.io";
const description =
  "Build the Future, Today";

export const metadata = {
  metadataBase: new URL("https://Swiftwave.io"),
  title,
  description,
  openGraph: {
    title,
    url: "https://Swiftwave.io",
    description,
  },
  twitter: {
    title,
    description,
  },
};

// This is the required part
const Page = () => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* Your page content here */}
    </div>
  );
};

export default Page;
