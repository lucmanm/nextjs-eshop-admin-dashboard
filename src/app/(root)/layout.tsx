import { NextIntlClientProvider, useLocale } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { Metadata } from "next";
import { Cairo as FontCairo } from "next/font/google";
import { cn } from "@/lib/utils";
import "../globals.css";
import { getLangDir } from "rtl-detect";
import { getUserLocale } from "@/services/local";

const fontSans = FontCairo({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "eshop Admin Dashoard",
  description: "online shopping dashboard for selling onlines.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const dir = getLangDir(locale)
  // console.log("userlacal", userlacal);
  // console.log("Direction", direction);
  // console.log("Locale", locale);

  return (
    <html lang={locale} dir={dir}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
