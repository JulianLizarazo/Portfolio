"use client";
import "@/app/globals.css";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Archivo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Header from "@/containers/Header";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

const archivo: NextFont = Archivo({ subsets: ["latin"], display: "swap" });

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={archivo.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header lng={locale}/>
          <main className="w-full h-full bg-light-white dark:bg-dark-black text-light-blue dark:text-dark-white">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
