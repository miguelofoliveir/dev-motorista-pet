import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import CookieConsentModal from "@/components/CookieConsentModal";

export const metadata: Metadata = {
  title: "Motorista de Pet",
  description: "Transportadora de Pets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>Motorista de Pet</title>
          <meta name="description" content="Transportadora de Pets" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <CookieConsentModal />
      </body>
    </html>
  );
}
