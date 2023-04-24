import React, { useState } from "react";
// import CookieCard from "../components/cookieCard";
import CookieProductCard from "../components/cookieProductCard";
import "../styles/cookieCards.css";
import cookie1 from "../images/BEST Chocolate Chip Cookies.png";
import cookie2 from "../images/Double Chocolate Cookies - Liv B_.png";
import cookie3 from "../images/Deliciosas galletas de avena.jpg";
import cookie4 from "../images/Peanut Butter Chocolate Meltaway Cookies.jpeg";
import cookie5 from "../images/Red Velvet Chocolate Chip Cookies - Sally's Baking Addiction.jpeg";
import cookie6 from "../images/White Chocolate Macadamia Nut Cookies - Sally's Baking Addiction.jpg";
import cookie7 from "../images/Cookies and Cream Cookies.jpg";

const cookies = [
  {
    id: 1,
    img: cookie1,
    name: "Galletas de Chispas de Chocolate",
    desc: "Galletas clásicas hechas con ingredientes de alta calidad.",
    weight: "1 lb",
    price: "$10.99 USD (aprox. $40.000 COP)",
  },
  {
    id: 2,
    img: cookie2,
    name: "Galletas Dobles de Chispas de Chocolate",
    desc: "Galletas ricas y fudgy que satisfarán a cualquier amante del chocolate.",
    weight: "1 lb",
    price: "$12.99 USD (aprox. $47.000 COP)",
  },
  {
    id: 3,
    img: cookie3,
    name: "Galletas de Avena y Pasas",
    desc: "Galletas suaves y chewy con un toque de canela.",
    weight: "1 lb",
    price: "$9.99 USD (aprox. $36.000 COP)",
  },
  {
    id: 4,
    img: cookie4,
    name: "Galletas de Mantequilla de Maní",
    desc: "Clásicas galletas hechas con mantequilla de maní natural.",
    weight: "1 lb",
    price: "$11.99 USD (aprox. $43.000 COP)",
  },
  {
    id: 5,
    img: cookie5,
    name: "Galletas Red Velvet",
    desc: "Galletas crujientes con trozos de arándanos secos y chips de chocolate blanco.",
    weight: "1 lb",
    price: "$13.99 USD (aprox. $50.000 COP)",
  },
  {
    id: 6,
    img: cookie6,
    name: "Galletas de Macadamia",
    desc: "Galletas ricas y mantecosas rellenas de nueces de macadamia.",
    weight: "1 lb",
    price: "$14.99 USD (aprox. $54.000 COP)",
  },
  {
    id: 7,
    img: cookie7,
    name: "Galletas Cookies & Cream",
    desc: "Galletas suaves y chewy con trozos de deliciosas galletas Oreo.",
    weight: "1 lb",
    price: "$15.99 USD (aprox. $58.000 COP)",
  },
];

const CookiesGallery = () => {
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 3;

  const handlePrevClick = () => {
    setOffset(Math.max(offset - itemsPerPage, 0));
  };

  const handleNextClick = () => {
    setOffset(Math.min(offset + itemsPerPage, cookies.length - itemsPerPage));
  };

  // const visibleItems = cookies.slice(offset, offset + itemsPerPage);
  const allCookies = [...cookies];

  return (
    <div className="cookie-gallery-container">
      <div className="cookie-gallery-scroll-wrapper">
        {allCookies.map((cookie) => (
          <CookieProductCard key={cookie.id} {...cookie} />
        ))}
      </div>
      <button disabled={offset === 0} onClick={handlePrevClick}>
        Anterior
      </button>
      <button
        disabled={offset >= cookies.length - itemsPerPage}
        onClick={handleNextClick}
      >
        Siguiente
      </button>
    </div>
  );
};

export default CookiesGallery;

// Sin complicaciónes hacerlo a la vieja confiable, con puro HTML
