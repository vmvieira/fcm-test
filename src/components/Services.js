import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FaLightbulb,
  FaFileSignature,
  FaShoppingCart,
  FaCalculator,
  FaBuilding,
} from "react-icons/fa";
import { ImHammer2 } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { GiHouse } from "react-icons/gi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

function Services() {
  const servicesList = [
    {
      name: "Direito Civil / Empresarial",
      svg: <FaLightbulb />,
      route:
        "https://fcmlaw.com.br/areas-de-atuacao/direito-civil-empresarial/",
    },
    {
      name: "Propriedade Intelectual",
      svg: <ImHammer2 />,
      route:
        "https://fcmlaw.com.br/novosite/Fareas-de-atuacao/propriedade-intelectual/",
    },
    {
      name: "Contratos Comerciais",
      svg: <FaFileSignature />,
      route: "https://fcmlaw.com.br/areas-de-atuacao/contratos-comerciais/",
    },
    {
      name: "Direito do Consumidor",
      svg: <FaShoppingCart />,
      route:
        "https://fcmlaw.com.br/novosite/Fareas-de-atuacao/direito-do-consumidor/",
    },
    {
      name: "Direito Tributário",
      svg: <FaCalculator />,
      route: "https://fcmlaw.com.br/areas-de-atuacao/direito-tributario/",
    },
    {
      name: "Direito do Trabalho",
      svg: <HiUserGroup />,
      route:
        "https://fcmlaw.com.br/novosite/Fareas-de-atuacao/direito-do-trabalho/",
    },
    {
      name: "Administrativo / Regulatório",
      svg: <FaBuilding />,
      route:
        "https://fcmlaw.com.br/novosite/Fareas-de-atuacao/direito-administrativo-regulatorio/",
    },
    {
      name: "Direito Imobiliário",
      svg: <GiHouse />,
      route:
        "https://fcmlaw.com.br/novosite/Fareas-de-atuacao/direito-imobiliario/",
    },
    {
      name: "Direito do Seguro",
      svg: <IoShieldCheckmarkSharp />,
      route:
        "https://fcmlaw.com.br/novosite/Fareas-de-atuacao/direito-do-seguro/",
    },
  ];

  const renderedItems = servicesList.map((item, idx) => {
    return (
      <Link key={idx} to={{ pathname: item.route }} target="_blank">
        <div className="flex px-4 m-4 inline-block shadow-md border-2 rounded-lg bg-white border-white shadow transition hover:shadow-lg transform hover:-translate-y-2 transition-transform duration-500 ease-in-out">
          <IconContext.Provider
            value={{
              className: "text-brightRed block m-auto",
            }}
          >
            {item.svg}
          </IconContext.Provider>
          <h1 className="m-4 lg:text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-600 to-brightRed">
            {item.name}
          </h1>
        </div>
      </Link>
    );
  });

  return (
    <section className="circuitOrange font-nunito h-auto text-white font-bold text-lg grid grid-flow-row place-items-center place-content-evenly lg:h-96 lg:grid-cols-3">
      {renderedItems}
    </section>
  );
}

export default Services;
