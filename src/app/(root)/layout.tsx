import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Cairo as FontCairo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLangDir } from "rtl-detect";
import "../globals.css";
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
  // getting locale text direction
  const dir = getLangDir(locale);

  return (
    <html lang={locale} dir={dir}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Toaster />
        <ToastContainer position="top-center" style={{fontSize: 12, fontWeight: "lighter"}}/>
      </body>
    </html>
  );
}
