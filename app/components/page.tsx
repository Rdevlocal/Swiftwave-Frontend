import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MDXRemoteClient from "components/MDXRemoteClient";

const title = "Float UI - Introduction";
const description =
  "Beautiful and responsive UI components and templates for React and Vue with Tailwind CSS.";

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
