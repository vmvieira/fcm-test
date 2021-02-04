import React from "react";

function Information() {
  return (
    <div className="h-auto bg-gradient-to-r from-brightRed to-red-500 text-white text-center font-bold text-lg grid grid-flow-row place-items-center place-content-evenly lg:h-52 lg:grid-flow-col">
      <div>
        <svg
          className="w-20 h-20 m-auto text-white animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <h1>de 1500 Empreendedores Impactados</h1>
      </div>
      <div>
        <svg
          className="w-20 h-20 m-auto text-white animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <h1>de 120 Pacotes Early Stage</h1>
      </div>
      <div>
        <svg
          className="w-20 h-20 m-auto text-white animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <h1>de 8 Iniciativas Jurídicas e Corporativas</h1>
      </div>
      <div>
        <svg
          className="w-20 h-20 m-auto text-white animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <h1>de 50 Publicações e Materiais Gratuitos</h1>
      </div>
    </div>
  );
}

export default Information;
