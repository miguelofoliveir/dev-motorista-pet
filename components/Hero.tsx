import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container lg:flex flex-col gap-20 py-4 lg:pb-32 pb-10 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 lg:flex lg:flex-1 flex-col xl:w-1/2 lg:pt-8">
        <h1 className="bold-40 lg:bold-88 cinzel">TRANSPORTE DE PET AFETIVO</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          CUIDANDO DO SEU PET COMO VOCÊ CUIDA
        </p>

        <div className="flex mt-6 flex-col w-full gap-3 sm:flex-row cinzel">
          <Button type="button" title="Agendar Corrida" variant="btn_green" />
        </div>
      </div>

      <div className="relative flex flex-1 items-start lg:pt-0 pt-8">
        <Image
          src="/motorista-pet.jpg"
          alt="Motorista e o pet"
          className="w-full rounded-lg"
          width={300}
          height={29}
        />
      </div>
    </section>
  );
};

export default Hero;
