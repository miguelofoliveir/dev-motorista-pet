import {
  FOOTER_ONE_LINKS,
  FOOTER_TWO_LINKS,
  NUMBER_LINK_WHATSAPP,
  SOCIALS,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-8">
      <div className="container flex w-full flex-col gap-4">
        <div className="lg:flex items-start justify-center md:flex-row">
          <div className="flex justify-center lg:w-1/4">
            <Link href="/" className="mb-10">
              <Image
                src="logo-pet-trim.png"
                alt="logo Motorista de Pet"
                width={74}
                height={29}
              />
            </Link>
          </div>

          <div className="flex justify-center text-center lg:w-1/4 md:flex-1 cinzel">
            {FOOTER_ONE_LINKS.map((columns) => (
              <FooterColumn title="">
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>

          <div className="flex justify-center text-center lg:w-1/4 lg:mt-0 mt-4 cinzel">
            {FOOTER_TWO_LINKS.map((columns) => (
              <FooterColumn title="">
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>

          <div className="flex justify-center lg:w-1/4 lg:mt-0 mt-6 cinzel">
            <FooterColumn title="NOS SIGA NAS REDES SOCIAIS">
              <ul className="regular-14 flex justify-center gap-4 text-gray-30">
                {SOCIALS.links.map((link) => (
                  <Link className="mt-2" href={link.link} key={link.icon}>
                    <Image src={link.icon} alt="logo" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30 cinzel">
          2024 Motorista de Pet | Todos os direitos reservados
        </p>
      </div>
      <a className="fixed lg:bottom-10 bottom-5 lg:right-10 right-5" href={NUMBER_LINK_WHATSAPP}>
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
