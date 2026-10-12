import { notFound } from "next/navigation";
import { BlogPost, CtaBand } from "../../components/site";
import { POSTS, getPost } from "../../components/blog-data";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date, images: [`/catalog/${post.cover}.webp`] },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  if (!getPost(slug)) notFound();
  return (
    <>
      <BlogPost slug={slug} />
      <CtaBand />
    </>
  );
}
