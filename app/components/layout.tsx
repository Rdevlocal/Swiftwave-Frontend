import { ReactNode } from "react";

const title = "Swiftwave.io a plug and play data company";

export const metadata = {
  metadataBase: new URL("https://Swiftwave.io"),
  title,
  openGraph: {
    title,
    url: "https://Swiftwave.io",
  },
  twitter: {
    title,
  },
};

type Props = {
  children: ReactNode;
};

export default (props: Props) => {
  const { children } = props;
  return (
    <main className="relative custom-screen-lg">
      <div className="lg:flex">
        <div className="flex-1 overflow-hidden mt-20 mb-12 xl:px-8 xl:mt-10">
          {children}
        </div>
      </div>
    </main>
  );
};
