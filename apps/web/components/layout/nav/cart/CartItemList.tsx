"use client";

import { convertToLocale } from "@/utils/money";
import { HttpTypes } from "@medusajs/types";
import Image from "next/image";
import Link from "next/link";
import CartItemQuantity from "./CartItemQuantity";
import CartItemRemove from "./CartItemRemove";

export default function CartItemList({
  cartItems,
  currency_code,
  setOpen,
}: {
  cartItems: HttpTypes.StoreCartLineItem[];
  currency_code: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="mt-6 flex-1 overflow-y-auto pr-4 sm:pr-6">
      <div className="flow-root">
        <ul className="-mt-6 divide-y divide-gray-200">
          {cartItems?.map((cartItem) => (
            <li key={cartItem.id} className="flex py-6">
              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Link
                  href={`/products/${cartItem.product_handle}`}
                  onClick={() => setOpen(false)}
                >
                  <Image
                    alt={cartItem.product_title!}
                    src={cartItem.thumbnail || ""}
                    width={500}
                    height={500}
                    className="size-full object-cover object-center"
                  />
                </Link>
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base text-gray-900">
                    <h3>
                      <Link
                        href={`/products/${cartItem.product_handle}`}
                        onClick={() => setOpen(false)}
                      >
                        {cartItem.product_title}
                      </Link>
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {cartItem.variant_title}
                  </p>
                </div>
                <div className="mt-1 flex flex-1 items-end justify-between text-sm">
                  <CartItemQuantity cartItem={cartItem} />
                  <CartItemRemove cartItem={cartItem} />
                  <p className="ml-4 text-base leading-5">
                    {convertToLocale({
                      amount: cartItem.unit_price * cartItem.quantity,
                      currency_code,
                    })}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
