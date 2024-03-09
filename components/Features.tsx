import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <>
      <section
        id="servicos"
        className="flex-col green-one-bg flexCenter overflow-hidden bg-center bg-no-repeat lg:py-24 py-4"
      >
        <h2 className="bold-40 lg:bold-64 cinzel">Serviços</h2>
        <div className="padding-container relative w-full lg:flex justify-end lg:px-8 px-4">
          <div className="lg:w-1/3 lg:pr-12 lg:pt-12 pt-6">
            <Image
              src="/cat.jpg"
              alt="dog"
              width={240}
              height={300}
              className="w-80 rounded-lg"
            />
          </div>

          <div className="z-20 lg:flex lg:w-2/3 flex-col">
            <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-10">
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
        </div>
        <div className="lg:flex lg:p-8 p-4 lg:mt-12 mt-4">
          <div className="lg:w-1/2">
            <div className="pt-4">
              <b className="cinzel">1. Como atendemos:</b>
              <p className="regular-16 text-gray-30 pt-2">
                Ao entrar em contato, solicitamos informações para poder cotar o
                valor da sua corrida. Após confirmação de interesse, aguardamos
                o recebimento do comprovante de pagamento para confirmar a
                corrida e localizar um motorista. No dia da corrida serão
                informados os dados do motorista e você receberá atualizações
                desde o início da corrida até sua conclusão. Todo o processo é
                feito via WhatsApp.
              </p>
            </div>
            <div className="pt-4">
              <b className="cinzel">2. Nossa região de atuação:</b>
              <p className="regular-16 text-gray-30 pt-2">
                Atuamos em São Paulo, mas pedimos que priorize o agendamento com
                antecedência, sabemos que certos compromissos são muito
                importantes e o agendamento é a garantia de chegar no horário
                marcado.
              </p>
              <p className="regular-16 text-gray-30 pt-2">
                Atuamos também no ABC, Grande São Paulo, transporte
                Intermunicipal e Interestadual. Sempre com agendamento.
              </p>
            </div>
            <div className="pt-4">
              <b className="cinzel">3. Horário de atendimento:</b>
              <p className="regular-16 text-gray-30 pt-2">
                Segunda a Sexta: 07h30 às 19h30
              </p>
              <p className="regular-16 text-gray-30 pt-2">
                Finais de semana e feriados: 09h30 às 18h30
              </p>
            </div>
            <div className="pt-4">
              <b className="cinzel">4. Segurança:</b>
              <p className="regular-16 text-gray-30 pt-2">
                Seu pet irá contar com cinto de segurança, ar condicionado, capa
                protetora e a tranquilidade de sempre andar em um carro
                devidamente higienizado.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 lg:p-8 p-4">
            <h2 className="bold-40 lg:bold-40 text-center cinzel">AGENDE SUA CORRIDA</h2>
            <div></div>
          </div>
        </div>
      </section>
      <section id="perguntas-frequentes" className="lg:my-16 my-4">
        <div className="rounded-lg lg:p-8 p-4">
          <h2 className="bold-20 lg:bold-32 lg:pt-8 pt-4 pb-4 cinzel green-main-color">
            PERGUNTAS FREQUENTES:
          </h2>
          <div className="pt-4">
            <b className="cinzel">1. Como eu agendo uma corrida?</b>
            <p className="regular-16 text-gray-30 pt-2">
              R: Clicando no botão AGENDAR UMA CORRIDA, respondendo o formulário
              e assim será direcionado para o WhatsApp onde nossa equipe te dará
              toda atenção.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">2. Qual a área de atuação?</b>
            <p className="regular-16 text-gray-30 pt-2">
              R: São Paulo, Grande São Paulo, ABC, Intermunicipal e
              Interestadual
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">
              3. A viagem é paga antes ou após a corrida?
            </b>
            <p className="regular-16 text-gray-30 pt-2">
              O agendamento só será realizado após o pagamento total da corrida,
              garantindo assim a data e hora desejada.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">4. Como eu pago a viagem do meu pet?</b>
            <p className="regular-16 text-gray-30 pt-2">
              R: Pix e Cartão de Crédito.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">
              5. Até quantos pets são transportados por vez?
            </b>
            <p className="regular-16 text-gray-30 pt-2">
              R: Cachorros: pequenos até 4, médios até 3, grandes até 2 e
              gigantes apenas 1. <br />
              Gatos: somente em caixa de transporte, sendo no máximo 4 caixas
              por vez. Importante ressaltar que a caixa é de obrigação do tutor.
              <br />
              Outros tipos de animais favor entrar em contato.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">6. Posso acompanhar meu pet na viagem?</b>
            <p className="regular-16 text-gray-30 pt-2">Sim, com certeza!</p>
          </div>
          <div className="pt-4">
            <b className="cinzel">7. Qual tipo de coleira meu pet deve usar?</b>
            <p className="regular-16 text-gray-30 pt-2">
              Para que seu pet viaje em segurança é fundamental o uso de
              peitoral.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">
              8. Posso alimentar meu pet antes da viagem?
            </b>
            <p className="regular-16 text-gray-30 pt-2">
              Recomendamos que não alimente seu pet 1 hora antes da viagem para
              evitar que ele se sinta mal ou desconfortável durante a viagem.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">9. Vocês possuem planos/pacotes?</b>
            <p className="regular-16 text-gray-30 pt-2">
              Sim, entre em contato com a nossa Central para avaliarmos a sua
              necessidade.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">10. Qual horário de funcionamento?</b>
            <p className="regular-16 text-gray-30 pt-2">
              Segunda a Sexta: 07h30 às 19h30 <br />
              Finais de semana e feriados: 09h30 às 18h30
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">11. Como cancelar uma corrida?</b>
            <p className="regular-16 text-gray-30 pt-2">
              Até duas horas antes não haverá cobrança e o valor será devolvido.
              <br />
              Até uma hora antes haverá cobrança de 40% do valor por conta do
              impacto na agenda do motorista e pelo seu deslocamento já
              iniciado. <br />
              Caso o motorista já esteja no local aguardando o embarque, será
              retido 60% do valor.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">12. Vocês fazem corrida imediata?</b>
            <p className="regular-16 text-gray-30 pt-2">
              Nossa sugestão é que você busque agendar com 24h de antecedência
              para garantir seu compromisso. Como nossos motoristas possuem uma
              agenda diária, eventualmente conseguiremos atender sua solicitação
              imediatamente, mas não garantimos disponibilidade de motoristas.
            </p>
          </div>
          <div className="pt-4">
            <b className="cinzel">
              13. Se meu pet sujar o carro, irei pagar alguma taxa?
            </b>
            <p className="regular-16 text-gray-30 pt-2">
              Em quase todas as situações deste tipo a sujeira fica na própria
              capa de proteção. Caso haja uma intercorrência onde a sujeira
              entre em contato com o carpete e/ou bancos e não seja possível a
              higienização convencional, cobraremos uma taxa simbólica de
              limpeza.
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
      <div className="flex items-center">
        <div className="rounded-full p-4 lg:p-4 mr-4 green-main-bg">
          <Image src={icon} alt="map" width={28} height={28} />
        </div>
        <h2 className="bold-20 lg:bold-30 capitalize cinzel">{title}</h2>
      </div>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
