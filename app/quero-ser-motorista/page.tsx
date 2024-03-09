import RootLayout from "../layout";
import Image from "next/image";

export default function SejaMotorista() {
  return (
    <section>
      <div className="lg:px-8 px-4 lg:flex flex-col gap-20 py-4 lg:pb-32 pb-10 md:gap-28 lg:py-20 xl:flex-row">
        <div className="lg:pt-0 pt-8 w-1/4">
          <Image
            src="/motorista-pet.jpg"
            alt="Motorista e o pet"
            className="w-full rounded-lg"
            width={300}
            height={29}
          />
        </div>
        <div>
          <h1 className="bold-32 lg:bold-42 cinzel">
            COMO POSSO SER MOTORISTA DE PET?
          </h1>
          <p className="regular-16 text-gray-30 text-justify pt-2">
            É fundamental que você goste MUITO de pets; <br />
            Trabalhamos com transporte humanizado, o pet deverá obrigatoriamente
            ir no banco de trás, com cinto de segurança (para pet), capa de
            proteção para os bancos e ar condicionado; <br />
            O veículo DEVERÁ ser higienizado ao final de cada corrida, retirando os pêlos e
            passando produto específico de limpeza para evitar contaminação à
            outros pets.
          </p>
          <p className="bold-16 text-gray-50 pt-8">PRÉ REQUISITOS</p>
          <p className="regular-16 text-gray-30 pt-2">- Carros a partir de 2011, 4 portas e ar condicionado;</p>
          <p className="regular-16 text-gray-30 pt-2">- Cinto de segurança para cães;</p>
          <p className="regular-16 text-gray-30 pt-2">- Capa protetora de banco;</p>
          <p className="regular-16 text-gray-30 pt-2">- Responsabilidade com horários agendados;</p>
          <p className="regular-16 text-gray-30 pt-2">- Kit Higienização (Aspirador portátil, pano, produto específico).</p>
          <p className="bold-16 text-gray-50 pt-8">REQUISITOS</p>
          <p className="regular-16 text-gray-30 pt-2">* Carteira de habilitação nacional (CNH);</p>
          <p className="regular-16 text-gray-30 pt-2">* Permissão para exercer atividade remunerada na CNH - (EAR);</p>
          <p className="regular-16 text-gray-30 pt-2">* Comprovante de endereço;</p>
          <p className="regular-16 text-gray-30 pt-2">* Documento do veículo;</p>
          <p className="regular-16 text-gray-30 pt-2">* Fotos do veículo: parte externa e interna;</p>
          <p className="regular-16 text-gray-30 pt-2">* Atestado de Antecedentes Criminais.</p>
        </div>
      </div>
    </section>
  );
}
