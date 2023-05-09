import "@/app/globals.css";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Archivo } from "next/font/google";
import Header from "@/containers/Header";

import { dir } from "i18next";
import { useTheme } from "@/hooks/useTheme";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
