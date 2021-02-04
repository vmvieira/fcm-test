import React from "react";
import { Link } from "react-router-dom";
import logoCurto from "../images/logo_curto.svg";

function About() {
  const aboutItems = [
    {
      svg: (
        <svg
          className="w-24 h-24 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      heading: "STARTUPS, MERCADO DIGITAL E VENTURE CAPITAL",
      text:
        "O FCMLAW tem as soluções inovadoras que o seu modelo de negócios disruptivo precisa.",
      link: "Saiba Mais",
    },
    {
      svg: (
        <svg
          className="w-24 h-24 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      heading: "INCUBADORAS, ACELERADORAS E PROGRAMAS",
      text:
        "Estamos inseridos no ecossistema de inovação, com iniciativas dentro e fora do meio jurídico, capazes de auxiliar nas estruturas dos players inseridos nestas dinâmicas.",
      link: "Cresça Já",
    },
    {
      svg: (
        <svg
          className="w-24 h-24 text-orange-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      heading: "CORPORATE",
      text:
        "Também temos soluções inovadoras para modelos de negócios mais tradicionais, bem como para facilitar a conexão destas empresas com a Nova Economia.",
      link: "Veja nossas áreas de atuação",
    },
  ];

  const renderedItems = aboutItems.map((item, idx) => {
    return (
      <div
        key={idx}
        className="p-3 border-2 rounded-lg border-opacity-50 shadow-md border-gray-200 flex flex-col place-content-center place-items-center text-center lg:transform hover:scale-110 transition-transform duration-500 ease-in-out"
      >
        <div>{item.svg}</div>
        <h1 className="my-2 font-bold tracking-widest text-orange-400">
          {item.heading}
        </h1>
        <p className="mb-4 font-medium">{item.text}</p>
        <Link
          className="inline-block px-6 py-2 font-medium shadow-md text-center text-white transition bg-gradient-to-r from-orange-300 to-red-600 rounded-full shadow hover:shadow-lg hover:bg-orange-600 transform hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          to="/"
        >
          {item.link}
        </Link>
      </div>
    );
  });

  return (
    <section className="h-screen">
      <div className="grid grid-flow-row m-10 place-content-evenly place-items-center text-center lg:grid-flow-col">
        <img className="w-72 h-72" src={logoCurto} alt="svg logo" />
        <h1 className="text-2xl">
          Soluções <em>especializadas</em> para o ecossistema de inovação.
        </h1>
      </div>
      <div className="grid grid-flow-row gap-8 place-content-evenly lg:grid-flow-col">
        {renderedItems}
      </div>
    </section>
  );
}

export default About;
