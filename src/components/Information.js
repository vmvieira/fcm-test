import React from "react";

function Information() {
  return (
    <section className="circuitOrange font-nunito h-auto text-white text-center font-bold grid grid-flow-row place-items-center place-content-evenly lg:h-72 lg:grid-flow-col">
      <div className="m-2">
        <svg
          className="w-20 h-20 m-auto text-white "
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
        <h1 className="p-2 rounded-full border-2 border-white bg-white lg:text-2xl font-bold text-brightRed">
          de 1500 Empreendedores Impactados
        </h1>
      </div>
      <div className="m-2">
        <svg
          className="w-20 h-20 m-auto text-white "
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
        <h1 className="p-2 rounded-full border-2 border-white bg-white  lg:text-2xl font-bold text-brightRed">
          de 120 Pacotes Early Stage
        </h1>
      </div>
      <div className="m-2">
        <svg
          className="w-20 h-20 m-auto text-white "
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
        <h1 className="p-2 rounded-full border-2 border-white bg-white lg:text-2xl font-bold text-brightRed">
          de 8 Iniciativas Jurídicas e Corporativas
        </h1>
      </div>
      <div className="m-2">
        <svg
          className="w-20 h-20 m-auto text-white "
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
        <h1 className="p-2 rounded-full border-2 border-white bg-white lg:text-2xl font-bold text-brightRed">
          de 50 Publicações e Materiais Gratuitos
        </h1>
      </div>
    </section>
  );
}

export default Information;
