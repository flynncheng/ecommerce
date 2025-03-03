import React, { useState } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group";
import { setShippingMethod } from "@/lib/data/cart";
import { cn } from "@workspace/ui/lib/utils";
import { convertToLocale } from "@/utils/money";
import { HttpTypes } from "@medusajs/types";
import { CheckoutForm } from "./CheckoutForm";

export default function CheckoutFormShipping({
  form,
  cart,
  shippingMethods,
}: {
  form: CheckoutForm;
  cart: HttpTypes.StoreCart;
  shippingMethods: HttpTypes.StoreCartShippingOption[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { currency_code } = cart;

  const setDelivery = async (id: string) => {
    setIsLoading(true);
    await setShippingMethod({ cartId: cart?.id, shippingMethodId: id })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (field, value) => {
    field.onChange(value);
    setDelivery(value);
  };

  return (
    <div className="border-t border-gray-200 pt-10">
      <h2 className="text-xl font-medium tracking-tight">Delivery</h2>
      <div className="mt-4 w-full">
        <FormField
          control={form.control}
          name="delivery"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => handleChange(field, value)}
                  defaultValue={field.value}
                  className="gap-x-4 gap-y-6 sm:grid-cols-2"
                >
                  {shippingMethods.map((shippingMethod) => (
                    <FormItem
                      className="relative space-y-0"
                      key={shippingMethod.id}
                    >
                      <FormControl className="absolute right-4 top-4 duration-200">
                        <RadioGroupItem value={shippingMethod.id} />
                      </FormControl>
                      <FormLabel
                        className={cn(
                          "block cursor-pointer rounded-md border p-4 font-normal",
                          form.getValues("delivery") === shippingMethod.id &&
                          "shadow",
                        )}
                      >
                        <p className="text-black">{shippingMethod.name}</p>
                        <p className="mt-2 text-gray-500">
                          {shippingMethod.name.includes("Express")
                            ? "2–5 business days"
                            : "4–10 business days"}
                        </p>
                        <p className="mt-6 text-black">
                          {convertToLocale({
                            amount: shippingMethod.amount!,
                            currency_code,
                          })}
                        </p>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
