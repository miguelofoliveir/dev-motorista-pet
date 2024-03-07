import RootLayout from "../layout";
import Image from "next/image";

export default function SejaMotorista() {
  return (
    <section>
      <div className="lg:px-8 px-4 lg:flex flex-col gap-20 py-4 lg:pb-32 pb-10 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative flex flex-1 items-start lg:pt-0 pt-8">
          <Image
            src="/motorista-pet.jpg"
            alt="Motorista e o pet"
            className="w-full rounded-lg"
            width={300}
            height={29}
          />
        </div>
        <div className="relative z-20 lg:flex lg:flex-1 flex-col xl:w-1/2 lg:pt-8">
          <h1 className="bold-32 lg:bold-42 cinzel">TITULO</h1>
          <p className="regular-16 text-gray-30 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
            blandit odio. Nulla vel cursus lectus, non accumsan dolor.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus pulvinar ligula ac blandit
            fringilla. Ut egestas sem est, vitae dictum nisl cursus in. Proin id
            semper odio. Aliquam eleifend erat in odio ullamcorper malesuada. In
            venenatis sapien lectus, id porttitor urna pharetra eu. Integer
            placerat a justo vitae mattis.
          </p>
        </div>
      </div>
      <div className="lg:px-8 px-4 lg:flex flex-col gap-20 py-4 lg:pb-32 pb-10 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative flex flex-1 items-start lg:pt-0 pt-8">
          <Image
            src="/motorista-pet.jpg"
            alt="Motorista e o pet"
            className="w-full rounded-lg"
            width={300}
            height={29}
          />
        </div>
        <div className="relative z-20 lg:flex lg:flex-1 flex-col xl:w-1/2 lg:pt-8">
          <h1 className="bold-32 lg:bold-42 cinzel">
            POR QUE SER MOTORISTA DE PET?
          </h1>
          <p className="regular-16 text-gray-30 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
            blandit odio. Nulla vel cursus lectus, non accumsan dolor.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Phasellus pulvinar ligula ac blandit
            fringilla. Ut egestas sem est, vitae dictum nisl cursus in. Proin id
            semper odio. Aliquam eleifend erat in odio ullamcorper malesuada. In
            venenatis sapien lectus, id porttitor urna pharetra eu. Integer
            placerat a justo vitae mattis.
          </p>
        </div>
      </div>
    </section>
  );
}
