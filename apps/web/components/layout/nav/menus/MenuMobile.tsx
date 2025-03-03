import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { HttpTypes } from "@medusajs/types";

export default function MenuMobile({
  categories,
}: {
  categories: HttpTypes.StoreProductCategory[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="relative rounded-md bg-white p-2 text-gray-400 [&_svg]:size-5"
        >
          <Menu />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible className="mt-4 w-full">
          {categories.map((category, index) =>
            category.category_children.length > 0 ? (
              <AccordionItem value={`item-${index}`} key={category.id}>
                <AccordionTrigger>{category.name}</AccordionTrigger>
                <AccordionContent className="pb-0">
                  {category.category_children.map((categoryChild) => (
                    <SheetClose asChild key={categoryChild.id}>
                      <Link
                        href={`/categories/${categoryChild.handle}`}
                        className="block pb-4"
                      >
                        {categoryChild.name}
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div
                className="border-b font-medium transition-all hover:underline"
                key={category.id}
              >
                <SheetClose asChild>
                  <Link
                    href={`/categories/${category.handle}`}
                    className="block py-4"
                  >
                    {category.name}
                  </Link>
                </SheetClose>
              </div>
            ),
          )}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
