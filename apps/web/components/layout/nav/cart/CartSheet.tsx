"use client";

import { ShoppingBag } from "lucide-react";
import { useParams, usePathname } from "next/navigation";

import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import { HttpTypes } from "@medusajs/types";

export default function CartSheet({
  cart,
  open,
  setOpen,
}: {
  cart: HttpTypes.StoreCart | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // Check if the current route is the checkout page
  const locale = useParams().locale as string;
  const pathname = usePathname();
  const isCheckoutPage = pathname === `/${locale}/checkout`;

  const totalItems =
    cart?.items?.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0) || 0;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full items-center justify-between px-2 [&_svg]:size-5"
        >
          <ShoppingBag
            aria-hidden="true"
            className="shrink-0 text-gray-400 group-hover:text-gray-500"
          />
          <span className="absolute top-1.5 ml-3 block size-3.5 rounded-full bg-black/80 text-center text-xs text-white">
            {totalItems}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-full sm:px-[8vw] sm:py-[3vw] lg:max-w-[50%]">
        <SheetHeader>
          <SheetTitle className="text-left">Shopping bag</SheetTitle>
        </SheetHeader>
        {totalItems === 0 ? (
          <div className="flex h-full flex-col items-center justify-center pb-[24vh] lg:min-h-screen lg:pb-[48vh]">
            <ShoppingBag size={50} strokeWidth={0.5} />
            <div className="mt-12 space-y-6">
              <p className="text-2xl font-light">Your shopping bag is empty</p>
              <Button className="w-full" onClick={() => setOpen(false)}>
                Start Shopping
                <span aria-hidden="true" className="ml-1">
                  {" "}
                  &rarr;
                </span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex max-h-full flex-col">
            <CartItemList
              cartItems={cart?.items ?? []}
              currency_code={cart?.currency_code ?? ""}
              setOpen={setOpen}
            />
            <CartSummary cart={cart} isCheckoutPage={isCheckoutPage} />
            <div className="mb-8 flex justify-center text-center text-sm text-gray-500">
              {isCheckoutPage ? (
                <Button className="w-full" asChild>
                  <SheetClose className="ml-1">
                    Continue checkout
                    <span aria-hidden="true" className="ml-1">
                      {" "}
                      &rarr;
                    </span>
                  </SheetClose>
                </Button>
              ) : (
                <p>
                  or
                  <SheetClose className="ml-1 font-medium text-gray-700 hover:text-gray-500">
                    Continue shopping
                    <span aria-hidden="true" className="ml-1">
                      {" "}
                      &rarr;
                    </span>
                  </SheetClose>
                </p>
              )}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
