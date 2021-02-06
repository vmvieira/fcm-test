import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import logoClassic from "../images/logo_pena_acima.svg";
import logoNew from "../images/logo_vermelho.svg";

function HeroSection() {
  // useLayoutEffect(() => {
  //   document.getElementById("classic").classList.add("pageLoadClassic");
  //   return () =>
  //     document.getElementById("classic").classList.remove("pageLoadClassic");
  // }, []);

  return (
    <section className="relative h-screen">
      <div className="grid grid-flow-row mb-10 h-screen lg:grid-flow-col">
        <h1 className="font-bold text-transparent bg-gradient-to-r bg-clip-text from-brightRed to-black font-nunito pt-8 align-middle text-center lg:absolute lg:text-4xl lg:pt-36 inset-0">
          Soluções <em>especializadas</em> para os clássicos e novos desafios.
        </h1>
        <div id="classic" className="classic to-right table w-full h-full">
          <div className="table-cell font-serif align-middle text-center">
            <img
              className="hidden lg:block lg:h-72 lg:w-72 lg:m-auto"
              src={logoClassic}
            />
            <h1 className="my-8 font-bold tracking-widest">
              Assesoria jurídica de tradição e costumes.
            </h1>
            <Link
              className="inline-block px-6 py-2 font-bold shadow-md text-center text-white transition border-2 border-white bg-black shadow hover:shadow-lg hover:bg-white hover:text-black hover:border-black transform hover:translate-y-2 transition-transform duration-500 ease-in-out"
              to="/"
            >
              Envie uma carta
            </Link>
          </div>
        </div>
        <div
          id="creative"
          className="creative to-left font-nunito table w-full h-full"
        >
          <div className="table-cell place-content-center place-items-center align-middle text-center">
            <img
              className="hidden lg:block lg:h-72 lg:w-72 lg:m-auto"
              src={logoNew}
            />
            <h1 className="my-8 font-bold tracking-widest">
              Assesoria jurídica inovadora com foco na Nova Economia.
            </h1>
            <Link
              className="inline-block px-6 py-2 font-bold shadow-md text-center text-black transition bg-white border-2 border-black rounded-full shadow hover:shadow-lg hover:bg-orange-300 hover:text-white hover:border-orange-400 transform hover:translate-y-2 transition-transform duration-500 ease-in-out"
              to="/"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
