"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";

import { Form } from "@workspace/ui/components/form";
import { placeOrder } from "@/lib/data/cart";
import { convertToLocale } from "@/utils/money";

import { Button } from "@workspace/ui/components/button";
import CheckoutFormContact from "./CheckoutFormContact";
import CheckoutFormShipping from "./CheckoutFormShipping";
import CheckoutFormPayment from "./CheckoutFormPayment";
import CheckoutFormAddress from "./CheckoutFormAddress";
import { CheckoutFromSchema as FormSchema } from "@/validations/checkoutValidation";
import { HttpTypes } from "@medusajs/types";

export type CheckoutForm = UseFormReturn<z.infer<typeof FormSchema>>;

export default function CheckoutForm({
  cart,
  shippingMethods,
  paymentMethods,
}: {
  cart: HttpTypes.StoreCart;
  shippingMethods: HttpTypes.StoreCartShippingOption[];
  paymentMethods: any[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { currency_code } = cart;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address1: "",
      // address2: "",
      city: "",
      country: "ca",
      province: "bc",
      postalCode: "",
      phone: "",
      delivery: shippingMethods[0]?.id,
      payment: paymentMethods[0].id,
      cardNumber: "",
      nameOnCard: "",
      expirationDate: "",
      cvc: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      await placeOrder(cart.id);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section>
      <Form {...form}>
        <form className="space-y-10" onSubmit={form.handleSubmit(onSubmit)}>
          <CheckoutFormContact form={form} />
          <CheckoutFormAddress form={form} />
          <CheckoutFormShipping
            form={form}
            cart={cart}
            shippingMethods={shippingMethods}
          />
          <CheckoutFormPayment form={form} paymentMethods={paymentMethods} />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              `Pay ${convertToLocale({ amount: cart.total ?? 0, currency_code })}`
            )}
          </Button>
          <div className="pt-2 text-rose-500">
            <span>{error}</span>
          </div>
        </form>
      </Form>
    </section>
  );
}
