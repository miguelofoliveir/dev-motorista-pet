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
});

export default function Contato() {
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    dataHora: "",
    enderecoPartida: "",
    enderecoDestino: "",
    quantidadePets: "",
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

    const mensagem = `Olá! Gostaria de agendar uma corrida:\nNome: ${formData.nome}\nData e Hora: ${dataHoraFormatada}\nEndereço de Partida: ${formData.enderecoPartida}\nEndereço de Destino: ${formData.enderecoDestino}\nQuantidade de Pets: ${formData.quantidadePets}`;
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
    <section>
      <div className="lg:px-8 px-4 py-4 lg:pb-32 pb-10 lg:py-20 green-two-bg">
          <div className="lg:flex pt-4">
            <div className="lg:w-1/2 w-full lg:mr-12 green-main-bg rounded-lg p-8">
              <h2 className="bold-24 lg:bold-40 cinzel">
                AGENDAMENTO DE CORRIDA
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
