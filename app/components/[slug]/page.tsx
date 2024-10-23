import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { useRouter } from "next/navigation";

type Params = {
  slug: string;
};

type PageDetails = {
  description: string;
  section_name: string;
};
