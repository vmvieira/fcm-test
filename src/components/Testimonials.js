import React from "react";
import Slider from "react-slick";

function Testimonials() {
  const testimonials = [
    {
      text:
        "O Faria, Cendão & Maia Advogados é o escritório parceiro da StartSe há alguns anos, tanto para questões internas quanto para os conteúdos educacionais que envolvam Direito e Tecnologia. O escritório se diferencia por conhecer o ecossistema de startups e conseguir prestar um serviço de forma mais inovadora e aplicado à realidade dos players que fazem parte deste cenário.",
      name: "Pedro Englert",
      title: "CEO da StartSe",
      company: "StartSe",
      img:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2019/07/Sem-t%C3%ADtulo-3.png",
    },
    {
      text:
        "O grande diferencial do FCM é o nível de interesse que possuem em nosso negócio. Além disso, estão sempre atualizados com as tendências digitais e possuem uma forma disruptiva de atuação, eliminando burocracias e formalidades excessivas e presentes em escritórios mais tradicionais.",
      name: "Mauricio Costa",
      title: "Diretor Geral do Bar do Adão",
      company: "Bar do Adão",
      img:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2019/04/bardoadao-1.png",
    },
    {
      text:
        "Em todas as oportunidades de interação, a Top2You se impressiona. Não apenas pela velocidade de respostas, mas também pela profundidade das questões que nos fazem refletir. Possuem uma postura muito profissional.",
      name: "Thiago Correia",
      title: "CEO da Top2You",
      company: "Top2You",
      img:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2019/04/top2you.png",
    },
    {
      text:
        "Sempre que precisei consultar, senti segurança de que podia seguir tomando as melhores decisões para minha empresa. O tratamento é direto, simples e com pessoas que entendem as startups.",
      name: "Victor Piranda",
      title: "Cofundador do Clube Orgânico",
      company: "Clube Orgânico",
      img:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2019/04/clubeorganico-2.png",
    },
    {
      text:
        "Antes do FCM nós utilizávamos um advogado parceiro do nosso contador para nos assessorar. No entanto, ele não era especializado em startups e não conhecia com profundidade todas as dificuldades que enfrentamos no dia-a-dia. O FCM nos ajudou a estruturar todo o arcabouço jurídico necessário para darmos sequência nos negócios sem preocupação, como contratos de sócio, investidores e colaboradores.",
      name: "Felipe Borges",
      title: "Cofundador da Super Revendedores",
      company: "Super Revendedores",
      img:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2019/04/super-revendedores.png",
    },
    {
      text:
        "Foi muito importante poder contar com o FCM quando eu estava iniciando minha jornada empreendedora. Mais importante ainda é contar com uma equipe de jovens advogados que conhecem o mundo das startups e da inovação, bem como estão sempre atentos às novidades e tendências desse ecossistema. Super Recomendo!",
      name: "Ihvi Maria Aidukaitis",
      title: "CEO da Receita Digital",
      company: "Receita Digital",
      img:
        "https://fcmlaw.com.br/novosite/wp-content/uploads/2019/04/receita-digital.png",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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

  const renderedCarousel = testimonials.map((item, idx) => {
    return (
      <div
        key={idx}
        className="p-2 border-2 rounded-lg border-opacity-50 shadow-md border-gray-200 text-center"
      >
        <img className="h-40 w-40 m-auto" src={item.img} alt="company logo" />
        <h1 className="my-2 text-xl font-bold tracking-widest text-brightRed">
          {item.company}
        </h1>
        <p className="mb-4 px-8 tracking-widest font-medium text-justify italic">
          {item.text}
        </p>
        <p className="mb-1 text-xl font-bold tracking-widest text-brightRed">
          {item.name}
        </p>
        <p className="mb-1 text-md text-gray-400">{item.title}</p>
      </div>
    );
  });

  return (
    <section className="font-nunito my-16 p-8 grid grid-flow-row gap-y-12 gap-x-20 lg:p-16 lg:grid-cols-2">
      <div className="lg:hidden flex flex-col place-content-evenly text-center gap-y-8">
        <h1 className="text-3xl font-bold text-transparent bg-gradient-to-l bg-clip-text from-orange-300 to-brightRed">
          Quem Aprova
        </h1>
        <h1 className="text-lg font-bold text-transparent bg-gradient-to-l bg-clip-text from-orange-300 to-brightRed">
          Veja o que dizem nossos clientes!
        </h1>
      </div>
      <div className="min-h-0 min-w-0 ">
        <Slider {...settings}>{renderedCarousel}</Slider>
      </div>
      <div className="hidden  lg:flex lg:flex-col place-content-evenly text-center gap-y-8">
        <h1 className="lg:text-6xl font-bold text-transparent bg-gradient-to-l bg-clip-text from-orange-300 to-brightRed">
          Quem Aprova
        </h1>
        <h1 className="lg:text-3xl font-bold text-transparent bg-gradient-to-l bg-clip-text from-orange-300 to-brightRed">
          Veja o que dizem nossos clientes!
        </h1>
      </div>
    </section>
  );
}

export default Testimonials;
