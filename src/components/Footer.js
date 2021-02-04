import React from "react";
import { Link } from "react-router-dom";
import navLogoLg from "../images/logo_extenso.svg";
import { IconContext } from "react-icons";
import {
  FaFacebookF,
  FaYoutubeSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  const siteLinks = [
    { name: "Home", route: "/" },
    { name: "Sobre Nós", route: "/" },
    { name: "Equipe", route: "/" },
    { name: "Contato", route: "/" },
  ];

  const initiativesLinks = [
    { name: "Avaliação De Risco Jurídico", route: "/" },
    { name: "Legal Class", route: "/" },
    { name: "LegalHack", route: "/" },
    { name: "Mentoria Gratuita", route: "/" },
    { name: "Parceria Jurídica Junior", route: "/" },
    { name: "YourBase", route: "/" },
    { name: "Canvas Jurídico", route: "/" },
  ];

  const innovationLinks = [{ name: "FCM No Ecossistema", route: "/" }];

  const socials = [
    {
      name: "Facebook",
      route: "https://www.facebook.com/fcmlaw",
      svg: <FaFacebookF />,
    },
    {
      name: "Youtube",
      route: "https://www.youtube.com/c/FCMLAWFariaCend%C3%A3oMaiaAdvogados",
      svg: <FaYoutubeSquare />,
    },
    {
      name: "Instagram",
      route: "https://www.instagram.com/fcmlaw/",
      svg: <FaInstagram />,
    },
    {
      name: "Linkedin",
      route: "https://www.linkedin.com/company/fcmadvogados/",
      svg: <FaLinkedin />,
    },
  ];

  const renderedsiteLinks = siteLinks.map((item, idx) => {
    return (
      <li key={idx} className="p-2">
        <Link
          className="p-4 font-bold transition duration-500 ease-in-out hover:text-orange-600"
          to={item.route}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  const renderedinitiativesLinks = initiativesLinks.map((item, idx) => {
    return (
      <li key={idx} className="p-2">
        <Link
          className="p-4 font-bold transition duration-500 ease-in-out hover:text-orange-600"
          to={item.route}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  const renderedinnovationLinks = innovationLinks.map((item, idx) => {
    return (
      <li key={idx} className="p-4">
        <Link
          className="p-4 font-bold transition duration-500 ease-in-out hover:text-orange-600"
          to={item.route}
        >
          {item.name}
        </Link>
      </li>
    );
  });

  const renderedSocials = socials.map((item, idx) => {
    return (
      <li key={idx} className="p-4 inline">
        <IconContext.Provider value={{ className: "inline text-orange-600" }}>
          {item.svg}
        </IconContext.Provider>

        <Link
          className="p-4 font-bold transition duration-500 ease-in-out hover:text-orange-600"
          to={{ pathname: item.route }}
          target="_blank"
        >
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <footer className="pt-8 bg-black text-white text-center font-bold">
      <div className="grid grid-flow-row lg:grid-flow-col">
        <div>
          <h1 className="text-orange-600">CONTATO</h1>
          <div>
            <h1>Avenida Treze de Maio, 23</h1>
            <h1>Salas 1610-1612, 1619 e 1620</h1>
            <h1>Centro, Rio de Janeiro</h1>
            <h1>CEP: 20.031-902</h1>
          </div>
          <div>
            <h1>Avenida das Nações Unidas, 14.401</h1>
            <h1>Ed. Tarumã, 19º andar, Conjuntos 1904-15</h1>
            <h1>Parque da Cidade, São Paulo</h1>
            <h1>CEP: 04.794-000</h1>
          </div>
          <div>
            <h1>contato@fcmlaw.com.br</h1>
            <h1>+55 21 2263-8905</h1>
            <h1>+55 11 2893-4154</h1>
          </div>
        </div>
        <div className="grid grid-flow-row lg:grid-flow-col">
          <div>
            <h1 className="text-orange-600">MAPA DO SITE</h1>
            <ul>{renderedsiteLinks}</ul>
          </div>
          <div>
            <h1 className="text-orange-600">INICIATIVAS</h1>
            <ul>{renderedinitiativesLinks}</ul>
          </div>
          <div>
            <h1 className="text-orange-600">INOVAÇÃO</h1>
            <ul>{renderedinnovationLinks}</ul>
          </div>
        </div>
      </div>
      <div className="p-16 grid grid-flow-row lg:grid-flow-col">
        <div>
          <ul>{renderedSocials}</ul>
        </div>
        <h1>Copyright FCM Law 2021</h1>
        <div>
          <img className="w-auto h-auto" src={navLogoLg} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
