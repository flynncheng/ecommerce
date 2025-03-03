import type { StoreProductCategory, StoreRegion } from "@medusajs/types";
import { startCase } from "lodash";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import CategoryFilter from "@/components/category/CategoryFilter";
import PaginatedProducts from "@/components/cagetory/PaginatedProducts";
import { getCategoryByHandle, listCategories } from "@/lib/data/categories";
import { listRegions } from "@/lib/data/regions";
import CategoryTemplate from "@/components/category";

type SortOptions = "price_asc" | "price_desc" | "created_at";

type Props = {
  params: Promise<{ locale: string; category: string[] }>;
  searchParams: Promise<{
    sortBy?: SortOptions;
    page?: string;
  }>;
};
// export async function generateStaticParams() {
//   const product_categories = await listCategories();
//
//   if (!product_categories) {
//     return [];
//   }
//
//   const countryCodes = await listRegions().then((regions: StoreRegion[]) =>
//     regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat(),
//   );
//
//   const categoryHandles = product_categories.map(
//     (category: any) => category.handle,
//   );
//
//   const staticParams = countryCodes
//     ?.map((countryCode: string | undefined) =>
//       categoryHandles.map((handle: any) => ({
//         countryCode,
//         category: [handle],
//       })),
//     )
//     .flat();
//
//   return staticParams;
// }

// export async function generateMetadata(props: Props): Promise<Metadata> {
//   const params = await props.params;
//   try {
//     const productCategory = await getCategoryByHandle(params.category);
//
//     const title = productCategory.name + " | Medusa Store";
//
//     const description = productCategory.description ?? `${title} category.`;
//
//     return {
//       title: `${title} | Medusa Store`,
//       description,
//       alternates: {
//         canonical: `${params.category.join("/")}`,
//       },
//     };
//   } catch (error) {
//     notFound();
//   }
// }

export default async function Category(props: Props) {
  // const { sortBy: sortByParam, page: pageParam } = searchParams;
  // const { locale: localeParam, category: categoryParam } = params;

  const params = await props.params;
  const searchParams = await props.searchParams;
  const { sortBy, page } = searchParams;

  const data = await getCategoryByHandle(params.category);
  console.log(params, "data..");

  if (!data) {
    notFound();
  }

  // const sortBy = sortByParam || "created_at";
  // const page = pageParam ? Number.parseInt(pageParam) : 1;
  // const category = product_categories[product_categories.length - 1];

  return (
    <CategoryTemplate category={data} sortby={sortBy} locale={params.locale} />
  );
}
