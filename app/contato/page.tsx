"use client";
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
    const mensagem = `Olá, aqui estão os dados do formulário de Contato:\nNome: ${formData.nome}\nData e Hora: ${formData.dataHora}\nEndereço de Partida: ${formData.enderecoPartida}\nEndereço de Destino: ${formData.enderecoDestino}\nQuantidade de Pets: ${formData.quantidadePets}`;
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
      <div className="lg:px-8 px-4 gap-20 py-4 lg:pb-32 pb-10 md:gap-28 lg:py-20">
        <h2 className="bold-24 lg:bold-32 cinzel">CONTATO</h2>
        <div className="lg:flex pt-4">
          <div className="w-1/2 lg:pr-12">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
                  className="input"
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
          <div className="w-1/2">
            <div className="rounded-lg green-one-bg h-auto p-4">
              <p className="bold-16">
                ENTRE EM CONTATO CONOSCO PARA SUGESTÕES, DÚVIDAS OU PARCERIAS
              </p>
              <p>contato@motoristapet.com.br</p>
              <p>marketing@motoristapet.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
