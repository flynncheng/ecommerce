import { AspectRatio } from "@workspace/ui/components/aspect-ratio";
import Image from "next/image";

export default function HomeFeaturedCollection({
  imageSrc,
  imageSrcLg,
  info,
  products,
}) {
  return (
    <section className="space-y-6 lg:space-y-12">
      <a href={info.href} className="block px-6 text-center lg:px-8">
        <span className="text-[10px] uppercase tracking-wide">{info.sub}</span>
        <h2 className="mb-6 mt-3 text-3xl tracking-tight">{info.main}</h2>
        <span className="underline underline-offset-4">{info.link}</span>
      </a>
      <picture className="sticky top-14 z-[-1] block max-h-[85vh] overflow-hidden lg:top-16">
        <source srcSet={imageSrcLg} media="(min-width: 1024px)" />
        <Image
          src={imageSrc}
          alt="Picture of the hero"
          width={2400}
          height={2400}
          style={{ width: "100%" }}
          priority
        />
      </picture>
      <div className="mx-auto bg-white p-6 pb-0 lg:p-12 lg:pb-0 xl:px-[8vw]">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={400}
                    height={500}
                    className="size-full object-cover object-center group-hover:opacity-75"
                  />
                </AspectRatio>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 font-light text-gray-700">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
