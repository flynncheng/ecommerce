import React from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { HttpTypes } from "@medusajs/types";

export default function MenusTemplate({
  data,
}: {
  data: HttpTypes.StoreProductCategory[];
}) {
  return (
    <>
      <div className="hidden h-full space-x-8 lg:ml-8 lg:flex lg:self-stretch">
        <MenuDesktop categories={data} />
      </div>
      <div className="w-20 lg:hidden">
        <MenuMobile categories={data} />
      </div>
    </>
  );
}
