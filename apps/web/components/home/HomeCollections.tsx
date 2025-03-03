import Image from "next/image";
import React from "react";

import { AspectRatio } from "@workspace/ui/components/aspect-ratio";
import { HttpTypes } from "@medusajs/types";

export default function HomeCollections({
  collections,
}: {
  collections: HttpTypes.StoreCollection[];
}) {
  console.log(collections, "collections");

  return (
    <section className="mx-auto space-y-8 px-6 lg:space-y-14 lg:px-[8vw]">
      <h2 className="text-center text-2xl tracking-tight text-gray-900 lg:text-3xl">
        Explore a Selection of the Our Creations
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 xl:grid-cols-4">
        {collections.map((collection) => (
          <a
            key={collection.id}
            href={`/collections/${collection.handle}`}
            className="group"
          >
            <div className="w-full overflow-hidden bg-gray-200">
              <AspectRatio ratio={4 / 5}>
                <Image
                  src={
                    collection.products?.[0]?.thumbnail || "/fallback-image.jpg"
                  }
                  alt={collection.title}
                  width={400}
                  height={500}
                  className="size-full object-cover object-center group-hover:opacity-75"
                />
              </AspectRatio>
            </div>
            <h3 className="mt-4 text-center text-gray-700">
              {collection.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}
