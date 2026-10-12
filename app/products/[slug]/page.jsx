import { notFound } from "next/navigation";
import { ProductDetail, CtaBand } from "../../components/site";
import { ALL_PRODUCTS, CATEGORY_INFO, getProduct } from "../../components/catalog-data";

// Pre-build one page per catalogue product (needed for the static export).
export function generateStaticParams() {
  return ALL_PRODUCTS.map(({ item }) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const { item, cat } = p;
  const name = item.code ? `${item.name} (${item.code})` : item.name;
  return {
    title: `${name} – Manufacturer & Supplier`,
    description: `${name} by Asmi Enterprises, Delhi. Packs: ${item.packs.join(", ")}. ${CATEGORY_INFO[cat.id]} Bulk orders and best prices.`,
    openGraph: { images: [`/catalog/${item.img}.webp`] },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  if (!getProduct(slug)) notFound();
  return (
    <>
      <ProductDetail slug={slug} />
      <CtaBand />
    </>
  );
}
