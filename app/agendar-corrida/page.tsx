"use client";
import ScrollAnimation from "@/components/ScrollAnimation";
import { NUMBER_LINK_WHATSAPP } from "@/constants";
import React, { useState } from "react";

interface FormData {
  nome: string;
  dataHora: string;
  enderecoPartida: string;
  enderecoDestino: string;
  quantidadePets: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    dataHora: "",
    enderecoPartida: "",
    enderecoDestino: "",
    quantidadePets: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section>
      <div className="lg:px-8 px-4 py-4 lg:pb-32 pb-10 lg:py-20 green-two-bg">
        <ScrollAnimation variants={leftVariants}>
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
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
                  />
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
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
                  />
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
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
                  />
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
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
                  />
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
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus-visible:border-teal-500 focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bold-16 p-3 orange-main-bg text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 w-full lg:mt-0 mt-8">
              <div className="rounded-lg green-one-bg h-auto regular-14 p-4">
                <p className="bold-16">
                  ENTRE EM CONTATO CONOSCO PARA SUGESTÕES, DÚVIDAS OU PARCERIAS
                </p>
                <p>
                  <a href="mailto:contato@motoristapet.com.br">
                    contato@motoristapet.com.br
                  </a>
                </p>
                <p>
                  <a href="mailto:marketing@motoristapet.com.br">
                    marketing@motoristapet.com.br
                  </a>
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
