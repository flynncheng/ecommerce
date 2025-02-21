import BaseLayout from "@/components/layout/BaseLayout";
import NotFoundPage from "@/components/NotFoundPage";
import { routing } from "@/lib/i18n/routing";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundPage />
    </BaseLayout>
  );
}
