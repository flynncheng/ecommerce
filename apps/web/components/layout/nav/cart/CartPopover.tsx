"use client";

import { useEffect, useRef } from "react";
import {
  Popover,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
} from "@workspace/ui/components/popover";
import { Button } from "@workspace/ui/components/button";
import CartItemList from "./CartItemList";
import { X } from "lucide-react";
import { HttpTypes } from "@medusajs/types";

export default function CartPopover({
  cart,
  open,
  setOpen,
  switchToCartSheet,
}: {
  cart: HttpTypes.StoreCart | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  switchToCartSheet: () => void;
}) {
  // newly added item
  const addedItem = cart?.items?.filter(
    (item) => item.variant_id === cart?.metadata?.variant_id_added,
  );

  const totalItems =
    cart?.items?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0) || 0;

  const itemRef = useRef<number>(totalItems || 0);

  useEffect(() => {
    // Open cart popover when adding item
    if (totalItems !== itemRef.current) {
      setOpen(true);
    }
    // Close cart popover when removing the newly added item
    if (addedItem?.length === 0) {
      setOpen(false);
    }
  }, [totalItems, addedItem?.length, setOpen]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverAnchor />
      <PopoverContent className="w-screen pl-6 sm:w-full sm:pl-4" align="end">
        <PopoverClose className="absolute right-6 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </PopoverClose>
        <h2 className="text-lg font-semibold text-foreground">Added to cart</h2>
        <div className="flex max-h-[75vh] flex-col">
          <CartItemList
            cartItems={addedItem || []}
            currency_code={cart?.currency_code || ""}
            setOpen={setOpen}
          />
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <Button className="w-full" onClick={switchToCartSheet}>
              View my Cart
            </Button>
          </div>
          <div className="mb-2 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <PopoverClose className="ml-1 font-medium text-gray-700 hover:text-gray-500">
                Continue Shopping
                <span aria-hidden="true" className="ml-1">
                  {" "}
                  &rarr;
                </span>
              </PopoverClose>
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
