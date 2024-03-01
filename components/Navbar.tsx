"use client";
import { NAV_LINKS, NUMBER_LINK_WHATSAPP, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null); // Ref para o elemento do menu

  // Função para alternar a visibilidade
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Função para fechar o menu se clicar fora dele
  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    // Adiciona o event listener quando o componente monta
    document.addEventListener("mousedown", handleClickOutside);

    // Função de limpeza para remover o event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Array de dependências vazio significa que isso roda uma vez ao montar

  return (
    <nav className="max-container padding-container relative z-30 py-5">
      <div className="flex justify-center pb-4 border-b-2 cinzel">
        TRANSPORTE DE PET EM SÃO PAULO
      </div>
      <div className="flex justify-center pt-4">
        <div className="w-4/12 pt-4">
          <div onClick={toggleMenu} className="relative bg-white">
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer lg:hidden"
            />
            {isMenuVisible && (
              <ul
                ref={menuRef}
                className="block h-auto gap-14 lg:hidden cinzel absolute bg-white z-50"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="regular-16 p-2 w-52 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="w-4/12 flex justify-center lg:mr-0 mr-8">
          <Link href="/">
            <Image
              src="/logo-pet-trim.png"
              alt="logo motorista de pet"
              width={84}
              height={39}
            />
          </Link>
        </div>
        <div className="w-4/12 flex justify-end items-center">
          <ul className="regular-14 flex gap-4 text-gray-30 cinzel">
            {SOCIALS.links.map((link) => (
              <Link className="mt-2" href={link.link} key={link.icon}>
                <Image src={link.icon} alt="logo" width={24} height={24} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center lg:mt-8">
        <ul className="hidden h-full gap-12 lg:flex cinzel">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter lg:ml-8 hidden cinzel">
          <a href={NUMBER_LINK_WHATSAPP}>
            <Button
              type="button"
              title="Agendar Corrida"
              variant="btn_green_light"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
