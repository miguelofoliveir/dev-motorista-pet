"use client";
import { NUMBER_LINK_WHATSAPP } from "@/constants";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import Button from "@/components/Button";
import * as yup from "yup";
import { AnySchema, ValidationError } from "yup";

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  celular: string;
  cep: string;
  endereco:string;
  numero: string;
  transportePet: string;
  anoCarro: string;
}

interface FormErrors {
  [key: string]: string;
}

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
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 1 },
  },
};

const validationSchema = yup.object().shape({
  nome: yup.string().required("O campo nome é obrigatório."),
  sobrenome: yup.string().required("O campo sobrenome é obrigatório."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("O campo e-mail é obrigatório."),
  celular: yup.string().required("O campo celular é obrigatório."),
  cep: yup.string().required("O campo CEP é obrigatório."),
  endereco:yup.string().required("O campo Endereço é obrigatório."),
  numero: yup.string().required("O campo número é obrigatório."),
  transportePet: yup
    .string()
    .required("Informe se já trabalha com transporte de pet."),
  anoCarro: yup.string().required("O ano do carro é obrigatório."),
});

export default function SejaMotorista() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    sobrenome: "",
    email: "",
    celular: "",
    cep: "",
    endereco:"",
    numero: "",
    transportePet: "",
    anoCarro: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      setErrors({});
      enviarParaWhatsApp(formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: FormErrors = {};
        error.inner.forEach((err) => {
          if (err.path) validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prevState: FormData) => ({
      ...prevState,
      [name]: value,
    }));

    try {
      // Usando asserção de tipo para AnySchema
      const fieldSchema: AnySchema = yup.reach(
        validationSchema,
        name
      ) as AnySchema;

      await fieldSchema.validate(value);

      setErrors((prevErrors: FormErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        const validationError = error as any; // Assegurando explicitamente o tipo como `any`.

        setErrors((prevErrors: FormErrors) => ({
          ...prevErrors,
          [validationError.path ? validationError.path : "unknown"]:
            validationError.message,
        }));
      } else {
        // Tratamento para outros tipos de erros, se necessário
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  function enviarParaWhatsApp(formData: FormData) {
    const mensagem = `Olá, aqui estão os dados do formulário de Quero ser Motorista:\nNome: ${formData.nome} ${formData.sobrenome}\nE-mail: ${formData.email}\nCelular: ${formData.celular}\nCEP: ${formData.cep}\nEndereço: ${formData.endereco}\nNúmero: ${formData.numero}\nJá trabalha com transporte de pet? ${formData.transportePet}\nAno do carro: ${formData.anoCarro}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Utiliza a constante NUMBER_LINK_WHATSAPP e ajusta a URL conforme o dispositivo
    let whatsappUrl = `${NUMBER_LINK_WHATSAPP}?text=${encodeURIComponent(
      mensagem
    )}`;
    if (!isMobile) {
      // Assume que o NUMBER_LINK_WHATSAPP já contém o número de telefone correto
      const baseWebUrl = NUMBER_LINK_WHATSAPP.replace(
        "wa.me",
        "web.whatsapp.com/send"
      );
      whatsappUrl = `${baseWebUrl}&text=${encodeURIComponent(mensagem)}`;
    }

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className="green-one-bg">
      <div className="lg:flex py-4 lg:pb-32 pb-10 lg:py-20 lg:px-8 px-4">
        <div className="lg:pt-0 pt-8 lg:block hidden lg:w-1/4">
          <Image
            src="/motorista-pet-redondo.png"
            alt="Motorista e o pet"
            className="w-full rounded-lg"
            width={300}
            height={29}
          />
        </div>
        <div className="lg:px-8 px-0 lg:pt-0 pt-8">
          <h1 className="bold-24 lg:bold-40 cinzel">
            COMO POSSO SER MOTORISTA DE PET?
          </h1>
          <p className="regular-14 lg:pt-4 text-justify pt-4">
            É fundamental que você goste MUITO de pets; <br />
            Trabalhamos com transporte humanizado, o pet deverá obrigatoriamente
            ir no banco de trás, com cinto de segurança (para pet), capa de
            proteção para os bancos e ar condicionado; <br />O veículo DEVERÁ
            ser higienizado ao final de cada corrida, retirando os pêlos e
            passando produto específico de limpeza para evitar contaminação à
            outros pets.
          </p>
          <p className="bold-16 pt-8">PRÉ REQUISITOS</p>
          <p className="regular-14 pt-2">
            - Carros a partir de 2011, 4 portas e ar condicionado;
          </p>
          <p className="regular-14 pt-2">- Cinto de segurança para cães;</p>
          <p className="regular-14 pt-2">- Capa protetora de banco;</p>
          <p className="regular-14 pt-2">
            - Responsabilidade com horários agendados;
          </p>
          <p className="regular-14 pt-2">
            - Kit Higienização (Aspirador portátil, pano, produto específico).
          </p>
          <p className="bold-16 pt-8">REQUISITOS</p>
          <p className="regular-14 pt-2">
            * Carteira de habilitação nacional (CNH);
          </p>
          <p className="regular-14 pt-2">
            * Permissão para exercer atividade remunerada na CNH - (EAR);
          </p>
          <p className="regular-14 pt-2">* Comprovante de endereço;</p>
          <p className="regular-14 pt-2">* Documento do veículo;</p>
          <p className="regular-14 pt-2">
            * Fotos do veículo: parte externa e interna;
          </p>
          <p className="regular-14 pt-2">
            * Atestado de Antecedentes Criminais.
          </p>
          <div className="lg:mt-8 mt-4 cinzel lg:pt-0 pt-4">
            <a href="/quero-ser-motorista#form-quero-ser-motorista">
              <Button
                type="button"
                title="quero ser motorista"
                variant="green-main-bg text-white px-6 py-3"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        id="form-quero-ser-motorista"
        className="lg:flex justify-center py-10 green-two-bg lg:px-8 px-4"
      >
        <div className="lg:w-1/3 w-full lg:pr-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="nome" className="mb-2">
                Nome:
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.nome
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="sobrenome" className="mb-2">
                Sobrenome:
              </label>
              <input
                type="text"
                name="sobrenome"
                id="sobrenome"
                placeholder="Sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.sobrenome
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">{errors.sobrenome}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="celular" className="mb-2">
                Celular:
              </label>
              <input
                type="text"
                name="celular"
                id="celular"
                placeholder="Celular"
                value={formData.celular}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.celular
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.celular && (
                <p className="text-red-500 text-sm mt-1">{errors.celular}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="cep" className="mb-2">
                CEP:
              </label>
              <input
                type="text"
                name="cep"
                id="cep"
                placeholder="CEP"
                value={formData.cep}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.cep
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.cep && (
                <p className="text-red-500 text-sm mt-1">{errors.cep}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="endereco" className="mb-2">
                Endereço:
              </label>
              <input
                type="text"
                name="endereco"
                id="endereco"
                placeholder="Endereço"
                value={formData.endereco}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.endereco
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.endereco && (
                <p className="text-red-500 text-sm mt-1">{errors.endereco}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="numero" className="mb-2">
                Número e Complemento:
              </label>
              <input
                type="text"
                name="numero"
                id="numero"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.numero
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.numero && (
                <p className="text-red-500 text-sm mt-1">{errors.numero}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="transportePet" className="mb-2">
                Já trabalha com transporte de pet?
              </label>
              <select
                name="transportePet"
                id="transportePet"
                value={formData.transportePet}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.transportePet
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              >
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
              {errors.transportePet && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.transportePet}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="anoCarro" className="mb-2">
                Qual o ano do seu carro?
              </label>
              <input
                type="text"
                name="anoCarro"
                id="anoCarro"
                placeholder="Qual o ano do seu carro?"
                value={formData.anoCarro}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                  errors.anoCarro
                    ? "border-red-500"
                    : "border-gray-300 focus-visible:border-teal-500"
                }`}
              />
              {errors.anoCarro && (
                <p className="text-red-500 text-sm mt-1">{errors.anoCarro}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full p-3 green-main-bg text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
