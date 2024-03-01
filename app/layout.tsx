import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
            rel="stylesheet"
          ></link> */}
        </Head>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
