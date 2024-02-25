import { NAV_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="max-container padding-container relative z-30 py-5">
      <div className="flex justify-center pb-4 border-b-2">
        TRANSPORTE DE PET EM SÃO PAULO
      </div>
      <div className="flex justify-center pt-4">
        <div className="w-4/12"></div>
        <div className="w-4/12 flex justify-center">
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
          <ul className="regular-14 flex gap-4 text-gray-30">
            {SOCIALS.links.map((link) => (
              <Link className="mt-2" href={link.link} key={link.icon}>
                <Image src={link.icon} alt="logo" width={24} height={24} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center lg:mt-8">
        <ul className="hidden h-full gap-12 lg:flex">
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
        <div className="lg:flexCenter lg:ml-8 hidden">
          <Button
            type="button"
            title="Agendar Corrida"
            variant="btn_green_light"
          />
        </div>
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
