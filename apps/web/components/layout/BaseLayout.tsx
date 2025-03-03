import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Josefin_Sans } from "next/font/google";
import { Providers } from "./Providers";

const fontJosefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export default async function BaseLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${fontJosefinSans.className} font-sans antialiased flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
