import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import CookieConsentModal from "@/components/CookieConsentModal";

export const metadata: Metadata = {
  title: "Motorista de Pet - Transporte de Pets",
  description:
    "Motorista de Pet oferece um serviço de transporte de pets com cuidado, responsabilidade e amor. Conheça nosso trabalho e sinta-se seguro em deixar seu pet em boas mãos.",
  openGraph: {
    type: "website",
    images: "https://motoristadepet.com.br/logo-fundo.png",
    url: "https://motoristadepet.com.br",
    title: "Motorista de Pet - Transporte de Pets",
    description:
      "Motorista de Pet oferece um serviço de transporte de pets com cuidado, responsabilidade e amor. Conheça nosso trabalho e sinta-se seguro em deixar seu pet em boas mãos.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <html lang="en">
      <body>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      
         {/* <!-- Google tag (gtag.js) --> */}
         <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EHYGYYE8XQ"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-EHYGYYE8XQ');
        </script>
       
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <CookieConsentModal />
      </body>
    </html>
    </>
  );
}
