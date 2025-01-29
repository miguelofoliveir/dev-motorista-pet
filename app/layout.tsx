import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import CookieConsentModal from "@/components/CookieConsentModal";
import Script from "next/script";

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
    <html lang="en">
      <body>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-EHYGYYE8XQ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHYGYYE8XQ');
          `}
          </Script>

          {/* Google Ads Conversion Tracking */}
          <Script id="google-ads" strategy="afterInteractive">
            {`
            gtag('config', 'AW-16561576472');
          `}
          </Script>

          {/* Google Ads Conversion Event on Button */}
          <Script id="google-conversion-event" strategy="afterInteractive">
            {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-16561576472/tVPNCJfM0JYaEJi0ltk9',
                  'event_callback': callback
              });
              return false;
            }
          `}
          </Script>
          {/* Google Tag Manager - gtag.js */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-EHYGYYE8XQ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EHYGYYE8XQ');
        `}
          </Script>
          {/* Google Tag Manager */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NK8SLFC4');
          `}
          </Script>
        </Head>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK8SLFC4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        <CookieConsentModal />
      </body>
    </html>
  );
}
