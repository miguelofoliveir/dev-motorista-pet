import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import CookieConsentModal from "@/components/CookieConsentModal";

export const metadata: Metadata = {
  title: "Motorista de Pet",
  description: "Transporte de Pets",
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
          <title>Motorista de Pet - Transporte de Pets</title>
          <meta
            name="description"
            content="Motorista de Pet oferece um serviço de transporte de pets com cuidado, responsabilidade e amor. Conheça nosso trabalho e sinta-se seguro em deixar seu pet em boas mãos."
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://motoristadepet.com.br/" />
          <meta
            property="og:title"
            content="Motorista de Pet - Transporte de Pets"
          />
          <meta
            property="og:description"
            content="Oferecemos um serviço totalmente humanizado para o transporte do seu pet. Conheça a história de Renato e como o Motorista de Pet se tornou uma referência em cuidado e amor pelos animais."
          />
          <meta
            property="og:image"
            content="https://motoristadepet.com.br/logo-pet-trim.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://motoristadepet.com.br/" />
          <meta
            name="twitter:title"
            content="Motorista de Pet - Transporte de Pets"
          />
          <meta
            name="twitter:description"
            content="Descubra o serviço de transporte de pets que reflete amor e cuidado em cada viagem. Conheça nossa equipe dedicada e apaixonada pelo que faz."
          />
          <meta
            name="twitter:image"
            content="https://motoristadepet.com.br/logo-pet-trim.png"
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
