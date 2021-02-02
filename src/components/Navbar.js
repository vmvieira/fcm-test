import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogoLg from "../images/logo_extenso.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    { name: "Home", route: "/" },
    { name: "Sobre Nós", route: "/sobre" },
    { name: "Equipe", route: "/equipe" },
    { name: "Contato", route: "/contato" },
  ];

  const renderedItems = navItems.map((item, idx) => {
    return (
      <li key={idx} className="p-4 inline">
        <Link className="p-4" to={item.route}>
          {item.name}
        </Link>
      </li>
    );
  });

  const renderedBurguer = navItems.map((item, idx) => {
    return (
      <li key={idx} className="p-4">
        <Link className="p-4" to={item.route}>
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      <nav className="flex justify-between items-center h-20 bg-white text-black relative shadow-sm">
        <Link to="/" className="pl-2 md:pl-12 lg:pl-12">
          <img src={navLogoLg} alt="company logo" className="w-80 h-16" />
        </Link>
        <div
          className="px-4 cursor-pointer md:pr-12 lg:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <ul className="pr-2 lg:block hidden pr-12">{renderedItems}</ul>
      </nav>
      <ul className={toggle ? "text-center items-center" : "hidden"}>
        {renderedBurguer}
      </ul>
    </>
  );
}

export default Navbar;
