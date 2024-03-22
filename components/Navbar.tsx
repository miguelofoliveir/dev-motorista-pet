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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <nav className="w-full relative z-30">
      <div className="flex lg:regular-16 regular-14 justify-center text-center p-4 cinzel green-one-bg">
        Transporte de Pets em São Paulo, intermunicipal e interestadual
      </div>
      <div className="flex justify-center py-4 border-b">
        <div className="lg:w-4/12 w-10/12 pt-4 px-6">
          <div onClick={toggleMenu} className="relative bg-white">
            <Image
              src="menu.svg"
              alt="menu"
              width={28}
              height={28}
              className="inline-block cursor-pointer lg:hidden"
            />
            {isMenuVisible && (
              <ul
                ref={menuRef}
                className="h-auto lg:hidden cinzel absolute w-72 top-full rounded-lg bg-white z-50"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="regular-16 p-4 w-full text-gray-50 flex cursor-pointer pb-1.5"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="p-4">
                  <Link
                    href="/agendar-corrida"
                    key="agendar-corrida"
                    className="green-main-bg cinzel rounded-lg text-white justify-center px-6 py-3 w-full flex cursor-pointer"
                  >
                    agendar corrida
                  </Link>
                </div>
                <div className="w-full flex justify-center items-center pb-4">
                  <ul className="regular-14 flex items-center gap-4 text-gray-30 cinzel">
                    {SOCIALS.links.map((link) => (
                      <Link className="mt-2" href={link.link} key={link.icon}>
                        <Image
                          src={link.icon}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                    <Link
                      className="mt-2 ml-2"
                      href="https://www.linkedin.com/company/motorista-de-pet"
                      key="linkedin"
                    >
                      <Image
                        src="/linkedin.png"
                        alt="logo linkedin"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </ul>
                </div>
              </ul>
            )}
          </div>
        </div>
        <div className="lg:w-4/12 w-2/12 flex justify-center lg:mr-0 mr-8">
          <Link href="/">
            <Image
              src="/logo-pet-trim.png"
              alt="logo motorista de pet"
              width={104}
              height={59}
            />
          </Link>
        </div>
        <div className="lg:w-4/12 lg:flex hidden justify-end items-center lg:pr-8 pr-4">
          <ul className="regular-14 flex items-center gap-4 text-gray-30 cinzel">
            {SOCIALS.links.map((link) => (
              <Link className="mt-2" href={link.link} key={link.icon}>
                <Image src={link.icon} alt="logo" width={24} height={24} />
              </Link>
            ))}
            <Link
              className="mt-2 ml-2"
              href="https://www.linkedin.com/company/motorista-de-pet"
              key="linkedin"
            >
              <Image
                src="/linkedin.png"
                alt="logo linkedin"
                width={20}
                height={20}
              />
            </Link>
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
