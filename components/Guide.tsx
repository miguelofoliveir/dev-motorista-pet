import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section id="sobre-nos" className="lg:pt-12">
      <div className="padding-container w-full lg:pb-24 pb-8 lg:px-8 px-4">
        <div>
          <h2 className="bold-40 lg:bold-64 cinzel">QUEM SOMOS NÓS</h2>
        </div>
        <div className="lg:pt-12">
          <div>
            <div className="lg:flex lg:pt-0 pt-4">
              <div className="lg:pr-8 lg:w-3/12 ">
                <Image
                  src="/motorista-dog.jpg"
                  alt="Motorista e o pet"
                  className="w-80 rounded-lg"
                  width={300}
                  height={29}
                />
              </div>
              <div className="lg:w-4/12 lg:pt-0 pt-8">
                <h2 className="bold-20 lg:bold-32 cinzel">
                  CONFIANÇA, GENTILEZA, PONTUALIDADE, CUIDADO E AMOR PELOS PETS.
                </h2>
                <p className="regular-16 text-gray-30 pt-4 text-justify">
                  Ao iniciar um trabalho de transporte de pets, sem pretenção
                  alguma, Renato começou a registrar suas viagens mostrando seu
                  dia-a-dia e como era sua relação com os animais de estimação
                  que levava. Pouco a pouco toda essa exposição foi trazendo
                  cada vez mais pessoas que, ao conhecer seu trabalho, se
                  sentiram confiantes e seguras ao deixar seu pet em boas mãos.
                </p>
                <p className="regular-16 text-gray-30 pt-4 text-justify">
                  Passados meses, quando se deu conta, Renato já tinha produzido
                  diversos vídeos no Instagram que trouxeram motoristas,
                  clientes e vários parceiros. Nasceu assim a empresa Motorista
                  de Pet, oferecendo um serviço totalmente humanizado desde seu
                  primeiro contato até a conclusão da viagem.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="lg:flex lg: justify-end">
              <div className="lg:w-4/12">
                <p className="regular-16 text-gray-30 pt-8">
                  Além do serviço onde levamos o seu pet para onde você precisar
                  com muito cuidado, responsabilidade e amor, acreditamos que o
                  Motorista de Pet é algo muito maior do que apenas um
                  transporte pois reflete o amor que todos os envolvidos sentem
                  pelos animais e queremos mostrar isso para o mundo de
                  diferentes formas.
                </p>
                <p className="regular-16 text-gray-30 pt-4">
                  Nossos motoristas são o reflexo do criador do Motorista de
                  Pet, pois são sempre muito gentis, pontuais, educados,
                  responsáveis e simpáticos.
                </p>
                <p className="regular-16 text-gray-30 pt-4">
                  E o nosso maior valor é: cuidamos do seu pet como você cuida!
                </p>
              </div>
              <div className="lg:px-4 px-0 lg:pt-0 pt-4 lg:w-3/12">
                <Image
                  src="/pets-dog-cat.jpg"
                  alt="Motorista e o pet"
                  className="w-80 rounded-lg"
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
