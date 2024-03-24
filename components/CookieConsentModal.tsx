"use client"; 
import React from 'react';
import Cookies from 'js-cookie'; // Importando a biblioteca js-cookie

const CookieConsentModal = () => {
  // Estado para controlar a visibilidade do modal
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Verifica se o cookie 'userAcceptedCookies' existe
    const userAcceptedCookies = Cookies.get('userAcceptedCookies');
    if (!userAcceptedCookies) {
      setIsVisible(true); // Se o cookie não existir, mostra o modal
    }
  }, []);

  const acceptCookies = () => {
    // Configura o cookie para 'true' com expiração de 1 ano
    Cookies.set('userAcceptedCookies', 'true', { expires: 365 });
    setIsVisible(false); // Oculta o modal
  };

  // Se o modal não deve ser visível, retorna null
  if (!isVisible) return null;

  return (
    <div className='fixed bottom-0 w-full bg-white p-4 z-50 text-center lg:flex justify-center items-center'>
      <p className='cinzel lg:text-sm text-xs'>Este site utiliza cookies para garantir que você tenha a melhor experiência. <a href="./termo-cookies">Leia nossa política de cookies.</a></p>
      <button className='green-main-bg text-white cinzel rounded-full bold-14 px-4 py-2 lg:ml-4 lg:mt-0 mt-2' onClick={acceptCookies}>Aceitar</button>
    </div>
  );
};

export default CookieConsentModal;
