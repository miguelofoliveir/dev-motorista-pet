"use client";
import { NUMBER_LINK_WHATSAPP } from "@/constants";
import React, { ChangeEvent, useState } from "react";
import * as yup from "yup";
import { AnySchema, ValidationError } from "yup";

interface FormData {
  nome: string;
  dataHora: string;
  enderecoPartida: string;
  enderecoDestino: string;
  quantidadePets: string;
  tutores: string;
  nomePet: string;
  racaPet: string;
  temperamentoPet: string;
}

interface FormErrors {
  [key: string]: string;
}

const validationSchema = yup.object().shape({
  nome: yup.string().required("O campo Nome Completo é obrigatório."),
  dataHora: yup.date().required("O campo Data e Hora é obrigatório."),
  enderecoPartida: yup
    .string()
    .required("O campo Endereço de Partida é obrigatório."),
  enderecoDestino: yup
    .string()
    .required("O campo Endereço de Destino é obrigatório."),
  quantidadePets: yup
    .number()
    .required("O campo Quantidade de Pets é obrigatório.")
    .positive("O número deve ser positivo.")
    .integer("O número deve ser inteiro."),
  tutores: yup
    .string()
    .required("O campo Quantos Tutores Acompanham é obrigatório."),
  nomePet: yup.string().required("O campo Nome do Pet é obrigatório."),
  racaPet: yup.string().required("O campo Raça do Pet é obrigatório."),
  temperamentoPet: yup
    .string()
    .required("O campo Temperamento do Pet é obrigatório."),
});

export default function Contato() {
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    dataHora: "",
    enderecoPartida: "",
    enderecoDestino: "",
    quantidadePets: "",
    tutores: "Não",
    nomePet: "",
    racaPet: "",
    temperamentoPet: "",
  });

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
    const dataHoraFormatada = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(formData.dataHora));

    const mensagem = `Olá! Gostaria de agendar uma corrida:
  Nome: ${formData.nome}
  Data e Hora: ${dataHoraFormatada}
  Endereço de Partida: ${formData.enderecoPartida}
  Endereço de Destino: ${formData.enderecoDestino}
  Quantidade de Pets: ${formData.quantidadePets}
  Tutores Acompanham?: ${formData.tutores}
  Nome do Pet: ${formData.nomePet}
  Raça do Pet: ${formData.racaPet}
  Temperamento do Pet: ${formData.temperamentoPet}`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const baseUrl = isMobile
      ? `https://wa.me/5511950644499?text=${encodeURIComponent(mensagem)}`
      : `https://web.whatsapp.com/send?phone=5511950644499&text=${encodeURIComponent(
          mensagem
        )}`;

    window.open(baseUrl, "_blank");
  }

  return (
    <section>
      <div className="lg:px-8 px-4 py-4 lg:pb-32 pb-10 lg:py-20 green-two-bg">
        <div className="lg:flex justify-center pt-4">
          <div className="lg:w-1/2 w-full lg:mr-12 green-main-bg rounded-lg p-8">
            <h2 className="bold-24 lg:bold-40 cinzel">
              agendamento de corrida
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 regular-14">
              <div className="flex flex-col">
                <label htmlFor="dataHora" className="mb-2">
                  Nome Completo:
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
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
                <label htmlFor="dataHora" className="mb-2">
                  Data e Hora:
                </label>
                <input
                  type="datetime-local"
                  name="dataHora"
                  id="dataHora"
                  value={formData.dataHora}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.dataHora
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                />
                {errors.dataHora && (
                  <p className="text-red-500 text-sm mt-1">
                    O campo Data e Hora é obrigatório.
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="enderecoPartida" className="mb-2">
                  Endereço de Partida:
                </label>
                <input
                  type="text"
                  name="enderecoPartida"
                  id="enderecoPartida"
                  value={formData.enderecoPartida}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.enderecoPartida
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                />
                {errors.enderecoPartida && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.enderecoPartida}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="enderecoDestino" className="mb-2">
                  Endereço de Destino:
                </label>
                <input
                  type="text"
                  name="enderecoDestino"
                  id="enderecoDestino"
                  value={formData.enderecoDestino}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.enderecoDestino
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                />
                {errors.enderecoDestino && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.enderecoDestino}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="quantidadePets" className="mb-2">
                  Quantidade de Pets:
                </label>
                <input
                  type="number"
                  name="quantidadePets"
                  id="quantidadePets"
                  value={formData.quantidadePets}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.quantidadePets
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                />
                {errors.quantidadePets && (
                  <p className="text-red-500 text-sm mt-1">
                    O campo Quantidade de Pets é obrigatório.
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="tutores" className="mb-2">
                  Quantos tutores acompanham?
                </label>
                <select
                  name="tutores"
                  id="tutores"
                  value={formData.tutores}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.tutores
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                >
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
                {errors.tutores && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.tutores}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="nomePet" className="mb-2">
                  Nome do Pet:
                </label>
                <input
                  type="text"
                  name="nomePet"
                  id="nomePet"
                  value={formData.nomePet}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.nomePet
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                />
                {errors.nomePet && (
                  <p className="text-red-500 text-sm mt-1">{errors.nomePet}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="racaPet" className="mb-2">
                  Raça do Pet:
                </label>
                <input
                  type="text"
                  name="racaPet"
                  id="racaPet"
                  value={formData.racaPet}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.racaPet
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                />
                {errors.racaPet && (
                  <p className="text-red-500 text-sm mt-1">{errors.racaPet}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="temperamentoPet" className="mb-2">
                  Temperamento do Pet:
                </label>
                <input
                  type="text"
                  name="temperamentoPet"
                  id="temperamentoPet"
                  value={formData.temperamentoPet}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md shadow-sm focus:outline-none ${
                    errors.temperamentoPet
                      ? "border-red-500"
                      : "border-gray-300 focus-visible:border-teal-500"
                  }`}
                />
                {errors.temperamentoPet && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.temperamentoPet}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bold-16 p-3 orange-main-bg text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
