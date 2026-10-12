import { PageHeader, BlogIndex } from "../components/site";

export const metadata = {
  title: "Blog",
  description: "Guides on cleaning concentrates, cooling tower water treatment and RO plant chemicals from Asmi Enterprises.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader crumb="Blog" eyebrow="Guides & tips" title="Asmi blog" sub="Practical guides on using our cleaning concentrates and industrial chemicals." />
      <BlogIndex />
    </>
  );
}
