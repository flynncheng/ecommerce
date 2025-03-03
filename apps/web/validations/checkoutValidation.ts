import { z } from "zod";

export const CheckoutFromSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email address." }),
  firstName: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^[a-zA-Z' -]+$/, { message: "First Name is not valid." }),
  lastName: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^[a-zA-Z' -]+$/, { message: "Last Name is not valid." }),
  address1: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^[a-zA-Z0-9\s,'.#-]+$/, {
      message: "Address is not valid.",
    }),
  city: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "City is not valid.",
    }),
  country: z.string().min(1, "This field is required."),
  province: z.string().min(1, "This field is required."),
  postalCode: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/, {
      message: "Postal code is not valid.",
    }),
  phone: z
    .string()
    .regex(/^\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, {
      message: "Phone number is not valid",
    })
    .optional()
    .or(z.literal("")),
  delivery: z.string().min(1, "This field is required."),
  payment: z.string().min(1, "This field is required."),
  cardNumber: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^(?:\d{4}[-\s]?){3}\d{4}$/, {
      message: "Card number is not valid.",
    }),
  nameOnCard: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^[a-zA-Z' -]+$/, {
      message: "Name on card is not valid.",
    }),
  expirationDate: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Expiration date is not valid.",
    }),
  cvc: z
    .string()
    .trim()
    .min(1, "This field is required.")
    .regex(/^\d{3,4}$/, {
      message: "CVC is not valid.",
    }),
});
