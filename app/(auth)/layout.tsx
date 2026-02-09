import "@mantine/core/styles.css";

import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { AppMantineProvider } from "@/components/AppMantineProvider";

export const metadata: Metadata = {
  title: "Sign In - Eagle WebUI",
  description: "Sign in to access your Eagle library",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextIntlClientProvider>
          <AppMantineProvider>{children}</AppMantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
