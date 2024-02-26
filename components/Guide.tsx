import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section id="sobre-nos" className="lg:pt-12">
      <div className="padding-container max-container w-full lg:pb-24 pb-8">
        <div>
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            SOBRE O MOTORISTA
          </h2>
        </div>
        <div className="lg:pt-12">
          <div>
            <div className="lg:flex lg:pt-0 pt-4">
              <div className="lg:pr-8 lg:w-1/2">
                <Image
                  src="/motorista-dog.jpg"
                  alt="Motorista e o pet"
                  className="w-auto rounded-lg"
                  width={300}
                  height={29}
                />
              </div>
              <div className="lg:w-1/2 lg:pt-0 pt-8">
                <h2 className="bold-20 lg:bold-32">
                  CONFIANÇA, GENTILEZA, PONTUALIDADE, CUIDADO E AMOR PELOS PETS.
                </h2>
                <p className="regular-16 text-gray-30 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ac blandit odio. Nulla vel cursus lectus, non accumsan dolor.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Phasellus pulvinar ligula
                  ac blandit fringilla. Ut egestas sem est, vitae dictum nisl
                  cursus in. Proin id semper odio. Aliquam eleifend erat in odio
                  ullamcorper malesuada. In venenatis sapien lectus, id
                  porttitor urna pharetra eu. Integer placerat a justo vitae
                  mattis.
                </p>
                <p className="regular-16 text-gray-30 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ac blandit odio. Nulla vel cursus lectus, non accumsan dolor.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Phasellus pulvinar ligula
                  ac blandit fringilla. Ut egestas sem est, vitae dictum nisl
                  cursus in. Proin id semper odio. Aliquam eleifend erat in odio
                  ullamcorper malesuada. In venenatis sapien lectus, id
                  porttitor urna pharetra eu. Integer placerat a justo vitae
                  mattis.
                </p>
                <p className="regular-16 text-gray-30 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ac blandit odio. Nulla vel cursus lectus, non accumsan dolor.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Phasellus pulvinar ligula
                  ac blandit fringilla. Ut egestas sem est, vitae dictum nisl
                  cursus in. Proin id semper odio. Aliquam eleifend erat in odio
                  ullamcorper malesuada. In venenatis sapien lectus, id
                  porttitor urna pharetra eu. Integer placerat a justo vitae
                  mattis.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <p className="regular-16 text-gray-30 pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ac blandit odio. Nulla vel cursus lectus, non accumsan dolor.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Phasellus pulvinar ligula
                  ac blandit fringilla. Ut egestas sem est, vitae dictum nisl
                  cursus in. Proin id semper odio. Aliquam eleifend erat in odio
                  ullamcorper malesuada. In venenatis sapien lectus, id
                  porttitor urna pharetra eu. Integer placerat a justo vitae
                  mattis.
                </p>
                <p className="regular-16 text-gray-30 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ac blandit odio. Nulla vel cursus lectus, non accumsan dolor.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Phasellus pulvinar ligula
                  ac blandit fringilla. Ut egestas sem est, vitae dictum nisl
                  cursus in. Proin id semper odio. Aliquam eleifend erat in odio
                  ullamcorper malesuada. In venenatis sapien lectus, id
                  porttitor urna pharetra eu. Integer placerat a justo vitae
                  mattis.
                </p>
                <p className="regular-16 text-gray-30 pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ac blandit odio. Nulla vel cursus lectus, non accumsan dolor.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Phasellus pulvinar ligula
                  ac blandit fringilla. Ut egestas sem est, vitae dictum nisl
                  cursus in. Proin id semper odio. Aliquam eleifend erat in odio
                  ullamcorper malesuada. In venenatis sapien lectus, id
                  porttitor urna pharetra eu. Integer placerat a justo vitae
                  mattis.
                </p>
              </div>
              <div className="lg:px-4 px-0 lg:pt-0 pt-4 lg:w-1/2">
                <Image
                  src="/pets-dog-cat.jpg"
                  alt="Motorista e o pet"
                  className="w-auto rounded-lg"
                  width={300}
                  height={29}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
