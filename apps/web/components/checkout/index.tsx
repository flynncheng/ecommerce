import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import { HttpTypes } from "@medusajs/types";

export default function CheckoutTemplate({
  cart,
  shippingMethods,
  paymentMethods,
}: {
  cart: HttpTypes.StoreCart;
  shippingMethods: HttpTypes.StoreCartShippingOption[];
  paymentMethods: any[];
}) {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-10 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8 lg:pb-96">
      <h2 className="sr-only">Checkout</h2>
      <CheckoutForm
        cart={cart}
        shippingMethods={shippingMethods}
        paymentMethods={paymentMethods}
      />
      <CheckoutSummary cart={cart} />
    </main>
  );
}
