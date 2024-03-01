import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <>
      <section
        id="servicos"
        className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat lg:py-24 py-4"
      >
        <h2 className="bold-40 lg:bold-64 cinzel">Serviços</h2>
        <div className="max-container padding-container relative w-full lg:flex justify-end">
          <div className="lg:w-1/2 lg:pr-12 lg:pt-12 pt-6">
            <Image
              src="/cat.jpg"
              alt="dog"
              width={240}
              height={300}
              className="w-full rounded-lg"
            />
          </div>

          <div className="z-20 lg:flex lg:w-1/2 flex-col">
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-10">
              {FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section id="perguntas-frequentes" className="lg:my-16 my-4 flex justify-center lg:p-0 p-4">
        <div className="container green-one-bg rounded-lg lg:p-8 p-4">
          <h2 className="bold-20 lg:bold-32 lg:pt-8 pt-4 pb-4 cinzel green-main-color">PERGUNTAS FREQUENTES</h2>
          <div className="pt-4">
            <b className="cinzel">Pergunta 1</b>
            <p className="regular-16 text-gray-30 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
              blandit odio. Nulla vel cursus lectus, non accumsan dolor.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus pulvinar ligula ac
              blandit fringilla. Ut egestas sem est, vitae dictum nisl cursus
              in. Proin id semper odio. Aliquam eleifend erat in odio
              ullamcorper malesuada. In venenatis sapien lectus, id porttitor
              urna pharetra eu. Integer placerat a justo vitae mattis.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">Pergunta 2</b>
            <p className="regular-16 text-gray-30 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
              blandit odio. Nulla vel cursus lectus, non accumsan dolor.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus pulvinar ligula ac
              blandit fringilla. Ut egestas sem est, vitae dictum nisl cursus
              in. Proin id semper odio. Aliquam eleifend erat in odio
              ullamcorper malesuada. In venenatis sapien lectus, id porttitor
              urna pharetra eu. Integer placerat a justo vitae mattis.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">Pergunta 3</b>
            <p className="regular-16 text-gray-30 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
              blandit odio. Nulla vel cursus lectus, non accumsan dolor.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Phasellus pulvinar ligula ac
              blandit fringilla. Ut egestas sem est, vitae dictum nisl cursus
              in. Proin id semper odio. Aliquam eleifend erat in odio
              ullamcorper malesuada. In venenatis sapien lectus, id porttitor
              urna pharetra eu. Integer placerat a justo vitae mattis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 green-main-bg">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-30 mt-5 capitalize cinzel">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
