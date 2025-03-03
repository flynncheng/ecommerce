import { notFound } from "next/navigation";

import { listProducts } from "@/lib/data/products";
import { getRegion } from "@/lib/data/regions";
import ProductTemplate from "@/components/product";

type Props = {
  params: Promise<{ locale: string; handle: string }>;
};

// export async function generateStaticParams() {
//   try {
//     const countryCodes = await listRegions().then((regions) =>
//       regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat(),
//     );
//
//     if (!countryCodes) {
//       return [];
//     }
//
//     const products = await listProducts({
//       countryCode: "US",
//       queryParams: { fields: "handle" },
//     }).then(({ response }) => response.products);
//
//     return countryCodes
//       .map((countryCode) =>
//         products.map((product) => ({
//           countryCode,
//           handle: product.handle,
//         })),
//       )
//       .flat()
//       .filter((param) => param.handle);
//   } catch (error) {
//     console.error(
//       `Failed to generate static paths for product pages: ${error instanceof Error ? error.message : "Unknown error"
//       }.`,
//     );
//     return [];
//   }
// }

// export async function generateMetadata(props: Props): Promise<Metadata> {
//   const params = await props.params;
//   const { handle } = params;
//   const region = await getRegion(params.countryCode);
//
//   if (!region) {
//     notFound();
//   }
//
//   const product = await listProducts({
//     countryCode: params.countryCode,
//     queryParams: { handle },
//   }).then(({ response }) => response.products[0]);
//
//   if (!product) {
//     notFound();
//   }
//
//   return {
//     title: `${product.title} | Medusa Store`,
//     description: `${product.title}`,
//     openGraph: {
//       title: `${product.title} | Medusa Store`,
//       description: `${product.title}`,
//       images: product.thumbnail ? [product.thumbnail] : [],
//     },
//   };
// }
export default async function Product(props: Props) {
  const params = await props.params;
  const region = await getRegion(params.locale);

  if (!region) {
    notFound();
  }

  const data = await listProducts({
    countryCode: params.locale,
    queryParams: { handle: params.handle },
  }).then(({ response }) => response.products[0]);

  if (!data) {
    notFound();
  }

  return <ProductTemplate product={data} />;
}
