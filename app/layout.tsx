import { Inter } from "next/font/google";
import "./tailwind.css";
import "./customize.css";
import "./prismjs-theme.css";
import Navbar from "components/ui/Navbar";
import Footer from "components/ui/Footer";
import UsermavenSetup from "components/UsermavenSetup";
import metatag from "metatag";

const { title, desc, ogImage } = metatag;

export const metadata = {
  metadataBase: new URL("https://swiftwave.io"),
  title,
  description: desc,
  openGraph: {
    title,
    description: desc,
    images: ogImage,
    url: "https://swiftwave.io",
  },
  twitter: {
    title,
    description: desc,
    images: [ogImage],
  },
};

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // Zorg ervoor dat de prefix 'NEXT_PUBLIC_' correct is
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION; // Ook hier

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-950">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=3"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@float_ui" />
        <meta name="twitter:creator" content="@float_ui" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERIFICATION}
        />
        <meta name="msvalidate.01" content="D00EDAC78FB47DDD869F2C18FD8A6572" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={inter.className}>
        <UsermavenSetup />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
