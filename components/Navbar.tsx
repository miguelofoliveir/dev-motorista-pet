"use client";
import { NAV_LINKS, NUMBER_LINK_WHATSAPP, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";

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

  const growVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 2 },
    },
  };

  return (
    <nav className="w-full relative z-30">
      <div className="flex justify-center text-center p-4 cinzel green-one-bg">
        Transporte de Pets em São Paulo, intermunicipal e interestadual
      </div>
      <div className="flex justify-center py-4 border-b">
        <div className="w-4/12 pt-4 px-6">
          <div onClick={toggleMenu} className="relative bg-white">
            <ScrollAnimation variants={growVariants}>
              <Image
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
              />
            </ScrollAnimation>
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
                 <Link
                    href="/agendar-corrida"
                    key="agendar-corrida"
                    className="regular-16 p-2 w-52 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    AGENDAR CORRIDA
                  </Link>
              </ul>
            )}
          </div>
        </div>
        <div className="w-4/12 flex justify-center lg:mr-0 mr-8">
          <Link href="/">
            <ScrollAnimation variants={growVariants}>
              <Image
                src="/logo-pet-trim.png"
                alt="logo motorista de pet"
                width={104}
                height={59}
              />
            </ScrollAnimation>
          </Link>
        </div>
        <div className="w-4/12 flex justify-end items-center lg:pr-8 pr-4">
          <ul className="regular-14 flex gap-4 text-gray-30 cinzel">
            {SOCIALS.links.map((link) => (
              <Link className="mt-2" href={link.link} key={link.icon}>
                <ScrollAnimation variants={growVariants}>
                  <Image src={link.icon} alt="logo" width={24} height={24} />
                </ScrollAnimation>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center lg:mt-8 border-b lg:pb-6 pb-0">
        <ul className="hidden h-full gap-12 lg:flex cinzel">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-20 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter lg:ml-8 hidden cinzel">
          <a href="/agendar-corrida">
            <Button
              type="button"
              title="Agendar Corrida"
              variant="green-main-bg text-white px-6 py-3"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
