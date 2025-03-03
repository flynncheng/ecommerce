import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

const locales = ["ca", "cn"] as const;

export const routing = defineRouting({
  locales: locales,
  defaultLocale: "ca",
});

export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createNavigation(routing);
