import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRemoteClient from "components/MDXRemoteClient";

const title = "Swiftwave.io";
const description =
  "A plug and play data company";

export const metadata = {
  metadataBase: new URL("https://swiftwave.io"),
  title,
  description,
  openGraph: {
    title,
    url: "https://swiftwave.io",
    description,
  },
  twitter: {
    title,
    description,
  },
};

export default async () => {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "content/intro.mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return (
    <>
      <article className="prose prose-invert max-w-7xl">
        <MDXRemoteClient
          mdxSource={{ ...mdxSource }}
        />
      </article>
    </>
  );
};
