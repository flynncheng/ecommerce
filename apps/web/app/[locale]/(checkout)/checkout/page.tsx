import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { retrieveCart } from "@/lib/data/cart";
import { listCartShippingMethods } from "@/lib/data/fulfillment";
import { listCartPaymentMethods } from "@/lib/data/payment";
import CheckoutTemplate from "@/components/checkout";

export const metadata: Metadata = {
  title: "Checkout - Oneosoft.com",
};

// const fetchCart = async () => {
//   const cart = await retrieveCart();
//   if (!cart) {
//     return notFound();
//   }
//
//   if (cart?.items?.length) {
//     const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id!);
//     cart.items = enrichedItems as HttpTypes.StoreCartLineItem[];
//   }
//
//   return cart;
// };

export default async function Checkout() {
  const cart = await retrieveCart();

  if (!cart || cart.items?.length === 0) redirect("/home");

  const shippingMethods = await listCartShippingMethods(cart.id);
  const paymentMethods = await listCartPaymentMethods(cart.region?.id ?? "");

  if (!shippingMethods || !paymentMethods) return null;

  return (
    <CheckoutTemplate
      cart={cart}
      shippingMethods={shippingMethods}
      paymentMethods={paymentMethods}
    />
  );
}
