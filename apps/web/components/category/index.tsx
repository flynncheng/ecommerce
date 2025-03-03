import React from "react";
import CategoryFilter from "./CategoryFilter";
import Image from "next/image";
import { HttpTypes } from "@medusajs/types";
import CategoryProducts from "./CategoryProducts";

type SortOptions = "price_asc" | "price_desc" | "created_at";

export default function CategoryTemplate({
  category,
  sortBy,
  locale,
}: {
  category: HttpTypes.StoreProductCategory;
  sortBy?: SortOptions;
  page?: string;
  locale: string;
}) {
  return (
    <div>
      <section className="sticky top-14 z-40 bg-white shadow-sm lg:top-16">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between pl-6 pr-4 sm:px-6 lg:max-w-screen-2xl lg:px-8">
          <h1 className="text-sm">{category.name}</h1>
          <CategoryFilter option="sortBy" />
        </div>
      </section>
      <section className="relative overflow-hidden lg:max-h-[80vh]">
        <picture className="after:inset-x-0 after:bottom-0 after:h-1/2 after:bg-gradient-to-t after:from-[rgba(0,0,0,0.5)] after:to-[rgba(0,0,0,0)] lg:after:absolute">
          <source
            srcSet="/banners/hero-large.webp"
            media="(min-width: 1024px)"
          />
          <Image
            src="/banners/hero.webp"
            alt="Picture of the hero"
            width={1440}
            height={1800}
            style={{ width: "100%" }}
            priority
          />
        </picture>
        <div className="p-6 pb-0 lg:absolute lg:bottom-12 lg:max-w-3xl lg:p-12 lg:pb-0 lg:text-white xl:px-[8vw]">
          <h2 className="mb-6 mt-3 text-3xl tracking-tight">{category.name}</h2>
          <p className="text-sm leading-6 lg:tracking-wider">
            {category.description}
          </p>
        </div>
      </section>
      <section className="space-y-6 lg:space-y-12">
        <div className="mx-auto bg-white p-6 pb-0 lg:p-12 lg:pb-0 xl:px-[8vw]">
          <CategoryProducts
            sortBy={sortBy}
            page={1}
            categoryId={category.id}
            countryCode={locale}
          />
        </div>
      </section>
    </div>
  );
}
