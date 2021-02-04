import React from "react";
import { Link } from "react-router-dom";
import logoCurto from "../images/logo_curto.svg";
import startUps from "../images/startups.jpg";
import moneyShake from "../images/money-shake.jpg";
import lawyer from "../images/law.jpg";

function About() {
  const aboutItems = [
    {
      svg: startUps,
      heading: "STARTUPS, MERCADO DIGITAL E VENTURE CAPITAL",
      text:
        "O FCMLAW tem as soluções inovadoras que o seu modelo de negócios disruptivo precisa.",
      link: "Saiba Mais",
    },
    {
      svg: moneyShake,
      heading: "INCUBADORAS, ACELERADORAS E PROGRAMAS",
      text:
        "Estamos inseridos no ecossistema de inovação, com iniciativas dentro e fora do meio jurídico, capazes de auxiliar nas estruturas dos players inseridos nestas dinâmicas.",
      link: "Cresça Já",
    },
    {
      svg: lawyer,
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
        <img className="h-auto w-auto" src={item.svg} />
        <h1 className="my-2 font-bold tracking-widest text-brightRed">
          {item.heading}
        </h1>
        <p className="mb-4 font-medium">{item.text}</p>
        <Link
          className="inline-block px-6 py-2 font-medium shadow-md text-center text-white transition bg-gradient-to-r from-orange-300 to-brightRed rounded-full shadow hover:shadow-lg hover:bg-orange-600 transform hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          to="/"
        >
          {item.link}
        </Link>
      </div>
    );
  });

  return (
    <section className="h-screen">
      <div className="grid grid-flow-row m-10 font-medium place-content-evenly place-items-center text-center lg:grid-cols-2">
        <img
          className="w-72 h-72 lg:row-span-3"
          src={logoCurto}
          alt="svg logo"
        />
        <h1 className="text-lg">
          Nós <em>entendemos</em> o ecossistema de inovação.
        </h1>
        <h1 className="text-lg my-8">
          Nosso escritório está atualizado e apto a assessorar com todas as
          tendências do mercado.
        </h1>
        <h1 className="text-lg">
          Evitamos a papelada e os erros com o uso da tecnologia mais atual, com
          sistemas e aplicativos na nuvem.
        </h1>
      </div>
      <div className="grid grid-flow-row gap-8 place-content-evenly lg:grid-flow-col">
        {renderedItems}
      </div>
    </section>
  );
}

export default About;
