import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section id="sobre-nos" className="lg:pt-20 green-main-bg">
      <div className="padding-container w-full lg:pb-24 pb-8 lg:px-24 px-4">
        <div className="lg:pt-0 pt-8">
          <h2 className="bold-24 lg:bold-40 cinzel text-white">MAIS QUE UM TRANSPORTE</h2>
          
          <ul className="list-disc pl-5">
            <li className="list-item"><h4 className="bold-16 orange-main-color">SOBRE NÓS</h4></li>
          </ul>
        </div>
        <div className="lg:pt-12">
          <div>
            <div className="lg:flex lg:pt-0 pt-4">
              <div className="lg:w-3/12 lg:pt-0 pt-8 lg:pr-4">
                <p className="regular-14 lg:pt-16 text-justify indent-4">
                  Ao iniciar um trabalho de transporte de pets, sem pretenção
                  alguma, Renato começou a registrar suas viagens mostrando seu
                  dia-a-dia e como era sua relação com os animais de estimação
                  que levava. Pouco a pouco toda essa exposição foi trazendo
                  cada vez mais pessoas que, ao conhecer seu trabalho, se 
                  <strong> sentiram confiantes e seguras</strong> ao deixar seu pet em boas mãos.
                </p>
                <p className="regular-14 pt-4 text-justify indent-4">
                  Passados meses, quando se deu conta, Renato já tinha produzido
                  diversos vídeos no Instagram que trouxeram motoristas,
                  clientes e vários parceiros. Nasceu assim a empresa Motorista
                  de Pet, oferecendo um serviço totalmente humanizado desde seu
                  primeiro contato até a conclusão da viagem.
                </p>
              </div>
              <div className="lg:w-6/12 flex justify-center">
                <Image
                  src="/sobre-nos.png"
                  alt="Motorista e o pet"
                  className="img-motorista rounded-full"
                  width={300}
                  height={29}
                />
              </div>
              <div className="lg:w-3/12 text-justify lg:pl-4">
                <p className="regular-14 pt-16 indent-4">
                  Além do serviço onde levamos o seu pet para onde você precisar
                  com muito cuidado, responsabilidade e amor, acreditamos que o
                  Motorista de Pet <strong>é algo muito maior do que apenas um
                  transporte</strong> pois reflete o amor que todos os envolvidos sentem
                  pelos animais e queremos mostrar isso para o mundo de
                  diferentes formas.
                </p>
                <p className="regular-14 pt-4 indent-4">
                  Nossos motoristas são o reflexo do criador do Motorista de
                  Pet, pois são sempre muito gentis, pontuais, educados,
                  responsáveis e simpáticos.
                </p>
                <p className="regular-14 pt-4 indent-4">
                  E o nosso maior valor é: <strong>cuidamos do seu pet como você cuida!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
