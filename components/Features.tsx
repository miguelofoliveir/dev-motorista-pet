import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import Carousel from "./Carousel";

const partnerLogos = [
  { src: "/logos-parceiros/felipe-becari.png", alt: "parceiro Felipe Becari" },
  { src: "/logos-parceiros/moovipet.png", alt: "parceiro Moovipet" },
  { src: "/logos-parceiros/bendog.png", alt: "parceiro Bendog" },
  {
    src: "/logos-parceiros/bercario-das-patinhas.png",
    alt: "parceiro Berçario das Patinhas",
  },
  {
    src: "/logos-parceiros/cachorro-perfeito.png",
    alt: "parceiro Cachorro Perfeito",
  },
  {
    src: "/logos-parceiros/chale-4-patinhas.png",
    alt: "parceiro Chalé 4 patinhas",
  },
  { src: "/logos-parceiros/estancia-pet.png", alt: "parceiro Estância Pet" },
  { src: "/logos-parceiros/fillmore.png", alt: "parceiro Fillmore" },
  {
    src: "/logos-parceiros/flores-gastronomia.png",
    alt: "parceiro Flores Gastronomia",
  },
  {
    src: "/logos-parceiros/natural-pet-store.png",
    alt: "parceiro Natural Pet Store",
  },
  { src: "/logos-parceiros/padaria-pet.png", alt: "parceiro Padaria Pet" },
  { src: "/logos-parceiros/tea-party.png", alt: "parceiro Tea Party" },
  { src: "/logos-parceiros/the-bull.png", alt: "parceiro The Bull" },
  { src: "/logos-parceiros/too-dog.png", alt: "parceiro Too Dog" },
];

const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const growVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.5 },
  },
};

const Features = () => {
  return (
    <>
      <section id="servicos" className="green-two-bg lg:pt-20 pt-10">
        <ScrollAnimation variants={leftVariants}>
          <div className="lg:px-24 px-6">
            <h2 className="bold-24 lg:bold-40 cinzel orange-main-color">
              levamos seu pet aonde você quiser!
            </h2>

            <ul className="list-disc pl-5">
              <li className="list-item">
                <h4 className="bold-16">serviços</h4>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <div className="padding-container relative w-full lg:flex justify-end lg:px-24 px-4">
          <div className="lg:w-1/3">
            <ScrollAnimation variants={growVariants}>
              <Image
                src="/servicos.png"
                alt="cachorro e gato"
                width={240}
                height={300}
                className="w-full"
              />
            </ScrollAnimation>
          </div>

          <div className="lg:flex lg:w-1/3 items-center justify-center">
            <ul className="mt-10 grid md:grid-cols-2 lg:mg-10 lg:gap-0">
              {FEATURES.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  icon={feature.icon}
                  description={""}
                />
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3 lg:pt-0 pt-4 lg:pb-0 pb-8">
            <ScrollAnimation variants={rightVariants}>
              <div className="bold-24 lg:bold-32 py-2 cinzel green-main-bg text-white text-center rounded-2xl lg:w-96">
                AGENDAR CORRIDA
              </div>
            </ScrollAnimation>
            <ScrollAnimation variants={growVariants}>
              <Image
                src="/celular.png"
                alt="celular"
                width={240}
                height={300}
                className="w-9/12"
              />
            </ScrollAnimation>
          </div>
        </div>

        <div className="orange-main-bg lg:px-24 px-6 lg:pt-20 pt-10 lg:pb-20 pb-8">
          <ScrollAnimation variants={leftVariants}>
            <div>
              <h2 className="bold-24 lg:bold-40 cinzel text-white lg:leading-normal leading-none">
                saiba mais como agendar a sua corrida
              </h2>
              <ul className="list-disc pl-5">
                <li className="list-item">
                  <h4 className="bold-16">perguntas frequêntes</h4>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
          <div className="lg:flex lg:pt-8 pt:pt-6 text-white">
            <div className="lg:w-1/2">
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>1. Como eu agendo uma corrida?</b>
                  </summary>
                  <p className="regular-16 pt-2">
                    R: Clicando no botão AGENDAR UMA CORRIDA, respondendo o
                    formulário e assim será direcionado para o WhatsApp onde
                    nossa equipe te dará toda atenção.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>2. Qual a área de atuação?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    R: São Paulo, Grande São Paulo, ABC, Intermunicipal e
                    Interestadual
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>3. A viagem é paga antes ou após a corrida?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    O agendamento só será realizado após o pagamento total da
                    corrida, garantindo assim a data e hora desejada.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>4. Como eu pago a viagem do meu pet?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    R: Pix e Cartão de Crédito.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>5. Até quantos pets são transportados por vez?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    R: Cachorros: pequenos até 4, médios até 3, grandes até 2 e
                    gigantes apenas 1. <br />
                    Gatos: somente em caixa de transporte, sendo no máximo 4
                    caixas por vez. Importante ressaltar que a caixa é de
                    obrigação do tutor.
                    <br />
                    Outros tipos de animais favor entrar em contato.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>6. Posso acompanhar meu pet na viagem?</b>
                  </summary>
                  <p className="regular-16  pt-2">Sim, com certeza!</p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>7. Qual tipo de coleira meu pet deve usar?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Para que seu pet viaje em segurança é fundamental o uso de
                    peitoral.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>8. Posso alimentar meu pet antes da viagem?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Recomendamos que não alimente seu pet 1 hora antes da viagem
                    para evitar que ele se sinta mal ou desconfortável durante a
                    viagem.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>9. Vocês possuem planos/pacotes?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Sim, entre em contato com a nossa Central para avaliarmos a
                    sua necessidade.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>10. Qual horário de funcionamento?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Segunda a Sexta: 07h30 às 19h30 <br />
                    Finais de semana e feriados: 09h30 às 18h30
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>11. Como cancelar uma corrida?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Até duas horas antes não haverá cobrança e o valor será
                    devolvido.
                    <br />
                    Até uma hora antes haverá cobrança de 40% do valor por conta
                    do impacto na agenda do motorista e pelo seu deslocamento já
                    iniciado. <br />
                    Caso o motorista já esteja no local aguardando o embarque,
                    será retido 60% do valor.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>12. Vocês fazem corrida imediata?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Nossa sugestão é que você busque agendar com 24h de
                    antecedência para garantir seu compromisso. Como nossos
                    motoristas possuem uma agenda diária, eventualmente
                    conseguiremos atender sua solicitação imediatamente, mas não
                    garantimos disponibilidade de motoristas.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer">
                    <b>13. Se meu pet sujar o carro, irei pagar alguma taxa?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Em quase todas as situações deste tipo a sujeira fica na
                    própria capa de proteção. Caso haja uma intercorrência onde
                    a sujeira entre em contato com o carpete e/ou bancos e não
                    seja possível a higienização convencional, cobraremos uma
                    taxa simbólica de limpeza.
                  </p>
                </details>
              </div>
            </div>
            <div className="lg:w-1/2 lg:p-8 p-0">
              <div className="flex justify-center item-center lg:pt-0 pt-8">
                <ScrollAnimation variants={growVariants}>
                  <Image
                    src="/cat.png"
                    alt="dog"
                    width={240}
                    height={300}
                    className="w-96 img-motorista rounded-full"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="perguntas-frequentes"
        className="lg:py-16 py-10 lg:px-24 px-6 green-one-bg"
      >
        <ScrollAnimation variants={leftVariants}>
          <div>
            <h2 className="bold-24 lg:bold-40 cinzel orange-main-color">
              nossas parcerias
            </h2>
            <ul className="list-disc pl-5">
              <li className="list-item">
                <h4 className="bold-16">apoio</h4>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <Carousel images={partnerLogos} />
        {/* <div className="flex flex-wrap lg:pt-8 pt-4">
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/felipe-becari.png"
              alt="parceiro Felipe Becari"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/moovipet.png"
              alt="parceiro Moovipet"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/bendog.png"
              alt="parceiro Bendog"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/bercario-das-patinhas.png"
              alt="parceiro Berçario das Patinhas"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/cachorro-perfeito.png"
              alt="parceiro Cachorro Perfeito"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/chale-4-patinhas.png"
              alt="parceiro Chalé 4 patinhas"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/estancia-pet.png"
              alt="parceiro Estância Pet"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/fillmore.png"
              alt="parceiro Fillmore"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/flores-gastronomia.png"
              alt="parceiro Flores Gastronomia"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/natural-pet-store.png"
              alt="parceiro Natural Pet Store"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/padaria-pet.png"
              alt="parceiro Padaria Pet"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/tea-party.png"
              alt="parceiro Tea Party"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/the-bull.png"
              alt="parceiro The Bull"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
          <div className="my-2 mr-2 lg:w-1/6 w-1/4">
            <Image
              src="/logos-parceiros/too-dog.png"
              alt="parceiro Too Dog"
              width={240}
              height={300}
              className="w-full"
            />
          </div>
        </div> */}
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
      <div className="flex items-center">
        <div className="rounded-full p-4 lg:p-4 mr-4 green-main-bg">
          <ScrollAnimation variants={growVariants}>
            <Image
              src={icon}
              alt="map"
              width={25}
              height={20}
              className="w-6 h-6"
            />
          </ScrollAnimation>
        </div>
        <h2 className="bold-14 capitalize cinzel">{title}</h2>
      </div>
      <p className="regular-16 mt-5  lg:mt-[30px] lg:bg-none">{description}</p>
    </li>
  );
};

export default Features;
