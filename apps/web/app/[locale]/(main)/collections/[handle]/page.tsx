import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCollectionByHandle, listCollections } from "@/lib/data/collections";
import { listRegions } from "@lib/data/regions";
import { StoreCollection, StoreRegion } from "@medusajs/types";
import CollectionTemplate from "@/components/collection";
// import { SortOptions } from "@modules/store/components/refinement-list/sort-products";

type Props = {
  params: Promise<{ handle: string; locale: string }>;
  searchParams: Promise<{
    page?: string;
    sortBy?: SortOptions;
  }>;
};

export default async function Collection(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const { sortBy, page } = searchParams;

  const data = await getCollectionByHandle(params.handle).then(
    (collection: StoreCollection) => collection,
  );

  console.log(data, "data...");

  if (!data) {
    notFound();
  }

  if (!data) {
    notFound();
  }

  return (
    <CollectionTemplate
      collection={data}
      sortby={sortBy}
      locale={params.locale}
    />
  );
}
