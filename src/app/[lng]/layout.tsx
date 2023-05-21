"use client"
import "@/app/globals.css";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Archivo } from "next/font/google";
import Header from "@/containers/Header";

import { dir } from "i18next";


const languages: string[] = ["en", "es"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const archivo: NextFont = Archivo({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={archivo.className}>
        <Header lng={lng} />
        <main className="w-full h-full bg-light-white dark:bg-dark-black text-light-blue dark:text-dark-white">{children}</main>
      </body>
    </html>
  );
}
