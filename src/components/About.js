import React from "react";
import { Link } from "react-router-dom";
import bulbSvg from "../images/bulb.svg";
import moneySvg from "../images/cash.svg";
import buildingSvg from "../images/building.svg";
import logoCurto from "../images/logo_curto.svg";

function About() {
  const aboutItems = [
    {
      svg: bulbSvg,
      heading: "STARTUPS, MERCADO DIGITAL E VENTURE CAPITAL",
      text:
        "O FCMLAW tem as soluções inovadoras que o seu modelo de negócios disruptivo precisa.",
      link: "Saiba Mais",
    },
    {
      svg: moneySvg,
      heading: "INCUBADORAS, ACELERADORAS E PROGRAMAS",
      text:
        "Estamos inseridos no ecossistema de inovação, com iniciativas dentro e fora do meio jurídico, capazes de auxiliar nas estruturas dos players inseridos nestas dinâmicas.",
      link: "Cresça Já",
    },
    {
      svg: buildingSvg,
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
        className="p-4 border-2 border-red-500 flex flex-col place-content-center place-items-center text-center"
      >
        <img className="w-24 h-24" src={item.svg} alt="svg logo" />
        <h1 className="my-2">{item.heading}</h1>
        <p className="mb-2">{item.text}</p>
        <Link to="/">{item.link}</Link>
      </div>
    );
  });

  return (
    <section className="h-screen">
      <div className="grid grid-flow-row m-10 place-content-evenly place-items-center text-center lg:grid-flow-col">
        <img className="w-72 h-72" src={logoCurto} />
        <h1>Soluções especializadas para o ecossistema de inovação.</h1>
      </div>
      <div className="grid grid-flow-row gap-8 place-content-evenly lg:grid-flow-col">
        {renderedItems}
      </div>
    </section>
  );
}

export default About;
