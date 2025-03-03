"use client";

import { useState } from "react";
import CartSheet from "./CartSheet";
import CartPopover from "./CartPopover";
import { HttpTypes } from "@medusajs/types";

export default function CartTemplate({
  cart,
}: {
  cart: HttpTypes.StoreCart | null;
}) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const switchToCartSheet = () => {
    setPopoverOpen(false);
    setSheetOpen(true);
  };

  return (
    <div className="relative ml-2 flow-root lg:ml-4">
      <CartSheet cart={cart} open={sheetOpen} setOpen={setSheetOpen} />
      <CartPopover
        cart={cart}
        open={popoverOpen}
        setOpen={setPopoverOpen}
        switchToCartSheet={switchToCartSheet}
      />
    </div>
  );
}
