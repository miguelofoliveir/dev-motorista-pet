import {
  FOOTER_ONE_LINKS,
  FOOTER_TWO_LINKS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter pb-8 green-main-bg lg:pt-4 pt-0 lg:px-8 px-4">
      <div className="flex w-full flex-col gap-4">
        <div className="lg:flex pt-4 justify-center md:flex-row">
          <div className="flex justify-center lg:w-1/4">
            <Link href="/" className="mb-10">
              <Image
                src="logo-pet-trim.png"
                alt="logo Motorista de Pet"
                width={104}
                height={59}
              />
            </Link>
          </div>

          <div className="flex justify-center lg:text-left text-center lg:w-1/4 md:flex-1 cinzel">
            {FOOTER_ONE_LINKS.map((columns) => (
              <FooterColumn title="">
                <ul className="regular-16 flex flex-col gap-4 text-black">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>

          <div className="flex justify-center lg:text-left text-center lg:w-1/4 md:flex-1 cinzel">
            {FOOTER_ONE_LINKS.map((columns, index) => (
              <FooterColumn key={`footer-one-column-${index}`} title="">
                <ul className="regular-16 flex flex-col gap-4 text-black">
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
                <ul className="regular-16 flex flex-col gap-4 text-black">
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
        <p className="regular-14 w-full text-center text-black cinzel">
          2024 Motorista de Pet | Todos os direitos reservados CNPJ
          27476875/0001-10
        </p>
      </div>
      <a
        className="fixed lg:bottom-10 bottom-5 lg:right-10 right-5"
        href="/contato"
      >
        <Image
          src="ic-whatsapp.png"
          alt="Botão de contato do WhatsApp"
          width={100}
          height={100}
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
