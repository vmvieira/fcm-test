import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const equipe = [
    {
      name: "Eduardo Faria",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Eduardo.png",
      social: "https://www.linkedin.com/in/eduardo-faria-b6a19537/",
    },
    {
      name: "Fábio Cendão",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Fabio.png",
      social: "https://www.linkedin.com/in/fabiocendao/",
    },
    {
      name: "Heitor Maia",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Heitor.png",
      social: "https://www.linkedin.com/in/heitormaia/",
    },
    {
      name: "Paulo Mendes",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Paulo.png",
      social: "https://www.linkedin.com/in/paulo-mendes-91a73741/",
    },
    {
      name: "Nicole Lopes",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2019/04/nicole-lopes-270x270.png",
      social: "https://www.linkedin.com/in/nicole-lopes-402a69140/",
    },
    {
      name: "Victor Prata",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Victor-Prata.png",
      social: "https://www.linkedin.com/in/vrprata/",
    },
    {
      name: "Mateus Berriel",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Mateus.png",
      social: "https://www.linkedin.com/in/mateusberriel/",
    },
    {
      name: "Marcos Lima",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Marcos.png",
      social: "https://www.linkedin.com/in/marcoslimajus/",
    },
    {
      name: "Silas Martins",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Silas.png",
      social: "https://www.linkedin.com/in/silasmartins/",
    },
    {
      name: "Amanda Tristão",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Amanda.png",
      social: "https://www.linkedin.com/in/amandatrist%C3%A3o/",
    },
    {
      name: "Caio Botelho",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Caio.png",
      social: "https://www.linkedin.com/in/caiohbotelhop/",
    },
    {
      name: "Giovanna Meneghetti",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Giovanna.png",
      social: "https://www.linkedin.com/in/giovanna-meneghetti/",
    },
    {
      name: "Giulya Almeida",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Giulya.png",
      social: "https://www.linkedin.com/in/giulyaalmeida/",
    },
    {
      name: "Lillian Coelho",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Lillian.png",
      social: "",
    },
    {
      name: "Rafael Eidi Enjiu",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Rafael.png",
      social: "https://www.linkedin.com/in/rafael-eidi-enjiu-a9a03aa1/",
    },
    {
      name: "Victor Lourenzon",
      foto:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2020/01/Victor.png",
      social: "https://www.linkedin.com/in/victorlourenzon/",
    },
  ];

  const renderedCarousel = equipe.map((item, idx) => {
    return (
      <div className="h-auto w-auto text-center">
        <div className="h-auto w-auto">
          <img className="m-auto h-48 w-48" src={item.foto} alt="" />
        </div>
        <div className="m-auto">
          <div className="font-bold text-lg my-2">{item.name}</div>
          <div>
            <Link
              className="p-2 inline-block"
              to={{ pathname: item.social }}
              target="_blank"
            >
              <IconContext.Provider
                value={{
                  className: "text-orange-600 inline-block",
                }}
              >
                <FaLinkedin />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="font-nunito my-16 p-8 grid grid-flow-row gap-y-12 gap-x-20 lg:p-16 lg:grid-cols-2">
      <div className="flex flex-col place-content-evenly text-center gap-y-8">
        <h1 className="text-3xl lg:text-7xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-300 to-brightRed">
          Time
        </h1>
        <h1 className="text-lg lg:text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-orange-300 to-brightRed">
          Conheça nossa equipe de especialistas em inovação!
        </h1>
        <Link
          className="inline-block mx-auto lg:w-1/2 px-6 py-2 font-bold shadow-md text-center text-white transition bg-gradient-to-r from-orange-300 to-brightRed rounded-full shadow hover:shadow-lg hover:bg-orange-600 transform hover:-translate-y-2 transition-transform duration-500 ease-in-out"
          to="/"
        >
          Trabalhe Conosco
        </Link>
      </div>
      <div className="min-h-0 min-w-0">
        <Slider {...settings}>{renderedCarousel}</Slider>
        <div className="flex justify-evenly"></div>
      </div>
    </section>
  );
}

export default Testimonials;
