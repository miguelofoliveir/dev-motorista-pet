"use client";
import { NUMBER_LINK_WHATSAPP } from "@/constants";
import React, { useState } from "react";
import Image from "next/image";

interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  celular: string;
  cep: string;
  numero: string;
  transportePet: string;
  anoCarro: string;
}

export default function SejaMotorista() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    sobrenome: "",
    email: "",
    celular: "",
    cep: "",
    numero: "",
    transportePet: "",
    anoCarro: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    enviarParaWhatsApp(formData);
  };

  function enviarParaWhatsApp(formData: FormData) {
    const mensagem = `Olá, aqui estão os dados do formulário Quero ser motorista:\nNome: ${formData.nome} ${formData.sobrenome}\nE-mail: ${formData.email}\nCelular: ${formData.celular}\nCEP: ${formData.cep}\nNúmero: ${formData.numero}\nJá trabalha com transporte de pet? ${formData.transportePet}\nAno do carro: ${formData.anoCarro}`;
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
    <section className="lg:px-8 px-4">
      <div className="lg:flex flex-col gap-20 py-4 lg:pb-32 pb-10 md:gap-28 lg:py-20 xl:flex-row">
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
            proteção para os bancos e ar condicionado; <br />O veículo DEVERÁ
            ser higienizado ao final de cada corrida, retirando os pêlos e
            passando produto específico de limpeza para evitar contaminação à
            outros pets.
          </p>
          <p className="bold-16 text-gray-50 pt-8">PRÉ REQUISITOS</p>
          <p className="regular-16 text-gray-30 pt-2">
            - Carros a partir de 2011, 4 portas e ar condicionado;
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            - Cinto de segurança para cães;
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            - Capa protetora de banco;
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            - Responsabilidade com horários agendados;
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            - Kit Higienização (Aspirador portátil, pano, produto específico).
          </p>
          <p className="bold-16 text-gray-50 pt-8">REQUISITOS</p>
          <p className="regular-16 text-gray-30 pt-2">
            * Carteira de habilitação nacional (CNH);
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            * Permissão para exercer atividade remunerada na CNH - (EAR);
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            * Comprovante de endereço;
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            * Documento do veículo;
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            * Fotos do veículo: parte externa e interna;
          </p>
          <p className="regular-16 text-gray-30 pt-2">
            * Atestado de Antecedentes Criminais.
          </p>
        </div>
      </div>
      <div className="lg:flex pt-4">
        <div className="lg:w-1/2 w-full lg:pr-12">
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
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              />
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
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              />
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
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              />
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
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              />
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
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="numero" className="mb-2">
                Número:
              </label>
              <input
                type="text"
                name="numero"
                id="numero"
                placeholder="Número"
                value={formData.numero}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              />
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
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              >
                <option value="">Selecione</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
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
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
              />
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
