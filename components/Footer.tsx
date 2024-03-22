import { FOOTER_ONE_LINKS, FOOTER_TWO_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter lg:pt-4 pt-0 green-one-bg">
      <div className="flex w-full flex-col">
        <div className="lg:flex lg:py-4 py-6 justify-center md:flex-row lg:px-8 px-4 green-main-bg">
          <div className="lg:w-1/4">
            <div className="flex justify-center">
              <Link href="/" className="mb-4">
                <Image
                  src="logo-pet-trim.png"
                  alt="logo Motorista de Pet"
                  width={84}
                  height={39}
                />
              </Link>
            </div>
            <div className="flex justify-center mb-4 regular-14">
              <Link href="mailto:contato@motoristapet.com.br">
                contato@motoristapet.com.br
              </Link>
            </div>
            <div className="flex justify-center mb-4 regular-14">
              <Link href="mailto:marketing@motoristapet.com.br">
                marketing@motoristapet.com.br
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:text-left text-center lg:w-1/4 md:flex-1 cinzel">
            {FOOTER_ONE_LINKS.map((columns, index) => (
              <FooterColumn key={`footer-one-column-${index}`} title="">
                <ul className="lg:regular-16 regular-14 flex flex-col gap-4 text-black">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
          <div className="flex justify-center lg:text-left text-center lg:w-1/4 lg:mt-0 mt-4 cinzel">
            {FOOTER_TWO_LINKS.map((columns, index) => (
              <FooterColumn key={`footer-two-column-${index}`} title="">
                <ul className="lg:regular-16 regular-14 flex flex-col gap-4 text-black">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>

        <div />
        <p className="regular-12 py-3 w-full text-center text-black cinzel green-main-bg lg:px-0 px-8">
          2024 Motorista de Pet | Todos os direitos reservados CNPJ
          27476875/0001-10
        </p>
      </div>
      <a
        className="fixed lg:bottom-10 bottom-5 lg:right-10 right-5"
        href="/agendar-corrida"
      >
        <Image
          src="ic-whatsapp.png"
          alt="Botão de contato do WhatsApp"
          width={80}
          height={80}
        />
      </a>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
