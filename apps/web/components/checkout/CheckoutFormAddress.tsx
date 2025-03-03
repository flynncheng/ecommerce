import React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

import { CheckoutForm } from "./CheckoutForm";

export default function FormAddress({ form }: { form: CheckoutForm }) {
  return (
    <div className="border-t border-gray-200 pt-10">
      <h2 className="text-xl font-medium tracking-tight">Shipping Address</h2>
      <div className="mt-4 grid gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div className="w-full max-w-sm ">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full max-w-sm">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Last name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <div className="w-full max-w-sm sm:col-span-2"> */}
        {/*   <FormField */}
        {/*     control={form.control} */}
        {/*     name="company" */}
        {/*     render={({ field }) => ( */}
        {/*       <FormItem> */}
        {/*         <FormLabel className="text-gray-600">Company</FormLabel> */}
        {/*         <FormControl> */}
        {/*           <Input {...field} /> */}
        {/*         </FormControl> */}
        {/*         <FormMessage /> */}
        {/*       </FormItem> */}
        {/*     )} */}
        {/*   /> */}
        {/* </div> */}
        <div className="w-full max-w-sm sm:col-span-2">
          <FormField
            control={form.control}
            name="address1"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* <div className="w-full max-w-sm sm:col-span-2"> */}
        {/*   <FormField */}
        {/*     control={form.control} */}
        {/*     name="address2" */}
        {/*     render={({ field }) => ( */}
        {/*       <FormItem> */}
        {/*         <FormLabel className="text-gray-600"> */}
        {/*           Apartment, suite, etc. */}
        {/*         </FormLabel> */}
        {/*         <FormControl> */}
        {/*           <Input {...field} /> */}
        {/*         </FormControl> */}
        {/*         <FormMessage /> */}
        {/*       </FormItem> */}
        {/*     )} */}
        {/*   /> */}
        {/* </div> */}
        <div className="w-full max-w-sm">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">City</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full max-w-sm">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="ca">Canada</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full max-w-sm">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Province</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a province" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bc">British Columnbia</SelectItem>
                    <SelectItem value="ab">Albetra</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full max-w-sm">
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-600">Postal code</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
