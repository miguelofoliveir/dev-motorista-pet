import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import Carousel from "./Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import Link from "next/link";

const partnerLogos = [
  { src: "/logos-parceiros/felipe-becari.png", alt: "parceiro Felipe Becari" },
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
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
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
            <h2 className="bold-24 lg:bold-40 cinzel orange-main-color lg:leading-normal leading-none">
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
            <Image
              src="/servicos.png"
              alt="cachorro e gato"
              width={240}
              height={300}
              className="w-full"
            />
          </div>

          <div className="lg:flex lg:w-1/3 items-center justify-center">
            <ul className="mt-10 grid md:grid-cols-2 lg:mg-10 lg:gap-0">
              {FEATURES.map((feature) => (
                <FeatureItem key={feature.title} title={feature.title} />
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3 lg:pt-0 pt-14 lg:pb-0 pb-8">
            <div className="flex justify-center">
              <Link
                className="bold-24 cursor-pointer lg:bold-32 py-2 cinzel green-main-bg text-white text-center rounded-2xl lg:w-96 w-72"
                href="./agendar-corrida"
              >
                agendar corrida
              </Link>
            </div>
            <div className="flex justify-center mt-4 pr-8">
              <Image
                src="/celular.png"
                alt="celular"
                width={240}
                height={300}
                className="lg:w-7/12 w-8/12"
              />
            </div>
          </div>
        </div>
        <div className="orange-main-bg lg:px-24 px-6 lg:pt-20 pt-10 lg:pb-20 pb-8">
          <ScrollAnimation variants={leftVariants}>
            <div>
              <h2 className="bold-24 lg:bold-40 cinzel text-black lg:leading-normal leading-none">
                saiba mais como agendar a sua corrida
              </h2>
              <ul className="list-disc pl-5 text-white">
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
                  <summary className="cursor-pointer text-black">
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
                  <summary className="cursor-pointer text-black">
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
                  <summary className="cursor-pointer text-black">
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
                  <summary className="cursor-pointer text-black">
                    <b>4. Como eu pago a viagem do meu pet?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    R: Pix e Cartão de Crédito.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer text-black">
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
                  <summary className="cursor-pointer text-black">
                    <b>6. Qual tipo de coleira meu pet deve usar?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Para que seu pet viaje em segurança é fundamental o uso de
                    peitoral.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer text-black">
                    <b>7. Posso alimentar meu pet antes da viagem?</b>
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
                  <summary className="cursor-pointer text-black">
                    <b>8. Vocês possuem planos/pacotes?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Sim, entre em contato com a nossa Central para avaliarmos a
                    sua necessidade.
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer text-black">
                    <b>9. Qual horário de funcionamento?</b>
                  </summary>
                  <p className="regular-16  pt-2">
                    Segunda a Sexta: 07h30 às 19h30 <br />
                    Finais de semana e feriados: 09h30 às 18h30
                  </p>
                </details>
              </div>
              <div className="pt-4">
                <details>
                  <summary className="cursor-pointer text-black">
                    <b>10. Como cancelar uma corrida?</b>
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
                  <summary className="cursor-pointer text-black">
                    <b>11. Vocês fazem corrida imediata?</b>
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
                  <summary className="cursor-pointer text-black">
                    <b>12. Se meu pet sujar o carro, irei pagar alguma taxa?</b>
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
        className="relative lg:py-16 py-10 lg:px-24 px-6 green-one-bg"
      >
        <ScrollAnimation variants={leftVariants}>
          <div>
            <h2 className="bold-24 lg:bold-40 cinzel orange-main-color">
              nossas parcerias
            </h2>
            <ul className="list-disc pl-5">
              <li className="list-item">
                <h4 className="bold-16 mb-4">apoio</h4>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <Carousel images={partnerLogos} />
      </section>
    </>
  );
};

type FeatureItem = {
  title: string;
};

const FeatureItem = ({ title }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="flex items-center mr-4 mt-6">
        <div className="px-2">
          <Image
            src="/ic-servico.png"
            alt="icone de servicos"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </div>
        <h2 className="bold-14 capitalize cinzel lg:ml-0 ml-2">{title}</h2>
      </div>
    </li>
  );
};

export default Features;
