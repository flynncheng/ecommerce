import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AspectRatio } from "@workspace/ui/components/aspect-ratio";
import { listProductsWithSort } from "@/lib/data/products";
import { getProductPrice } from "@/lib/data/utils/get-product-price";

type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
  order?: string;
};

export default async function CategoryProducts({
  sortBy,
  page,
  categoryId,
  collectionId,
  countryCode,
}) {
  const queryParams: PaginatedProductsParams = {
    limit: 12,
  };
  if (categoryId) {
    queryParams.category_id = [categoryId];
  }
  if (collectionId) {
    queryParams.collection_id = [collectionId];
  }
  if (sortBy === "created_at") {
    queryParams.order = "created_at";
  }

  const {
    response: { products, count },
  } = await listProductsWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  });

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.handle}`}
          className="group"
        >
          <div className="w-full overflow-hidden bg-gray-200">
            <AspectRatio ratio={4 / 5}>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={400}
                height={500}
                className="size-full object-cover object-center group-hover:opacity-75"
              />
            </AspectRatio>
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
          <p className="mt-1 font-light text-gray-700">
            {getProductPrice({ product }).cheapestPrice?.original_price}
          </p>
        </Link>
      ))}
    </div>
  );
}
