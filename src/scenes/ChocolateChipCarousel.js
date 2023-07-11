import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CookieCard from "../components/cookieCard";
import CookieProductCard from "../components/cookieProductCard";
// import "../styles/cookieCards.css";
import { cookies } from "../data/cookiesData";
// import cookie1 from "../images/BEST Chocolate Chip Cookies.png";
// import cookie2 from "../images/Double Chocolate Cookies - Liv B_.png";
// import cookie3 from "../images/Deliciosas galletas de avena.jpg";
// import cookie4 from "../images/Peanut Butter Chocolate Meltaway Cookies.jpeg";
// import cookie5 from "../images/Red Velvet Chocolate Chip Cookies - Sally's Baking Addiction.jpeg";
// import cookie6 from "../images/White Chocolate Macadamia Nut Cookies - Sally's Baking Addiction.jpg";
// import cookie7 from "../images/Cookies and Cream Cookies.jpg";

// const cookies = [
//   {
//     id: 1,
//     img: cookie1,
//     name: "Chispas de Chocolate",
//     desc: "Galletas clásicas hechas con ingredientes de alta calidad.",
//     weight: "1 lb",
//     price: "$40.000 COP",
//     ingredients: [
//       {
//         name: "Harina de trigo",
//         quantity: 2,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Azúcar moreno",
//         quantity: 1,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Azúcar blanca",
//         quantity: 1,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Mantequilla",
//         quantity: 1,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Huevos",
//         quantity: 2,
//         unitOfMeasurement: "unidades",
//       },
//       {
//         name: "Esencia de vainilla",
//         quantity: 1,
//         unitOfMeasurement: "Cucharadita",
//       },
//       {
//         name: "Chispas de chocolate",
//         quantity: 1.5,
//         unitOfMeasurement: "tazas",
//       },
//       {
//         name: "Sal",
//         quantity: 0.5,
//         unitOfMeasurement: "cucharadita",
//       },
//       {
//         name: "Bicarbonato de sodio",
//         quantity: 1,
//         unitOfMeasurement: "cucharadita",
//       },
//     ],
//     preparation:
//       "1. Precalienta el horno a 180°C (350°F).\n2. En un tazón grande, mezcla la harina, el bicarbonato de sodio y la sal.\n3. En otro tazón, bate la mantequilla, el azúcar moreno y el azúcar blanca hasta que estén suaves y cremosos.\n4. Agrega los huevos uno a la vez, batiendo bien después de cada adición. Añade la esencia de vainilla y mezcla.\n5. Agrega gradualmente la mezcla de harina a la mezcla de mantequilla, revolviendo hasta que esté bien combinado.\n6. Incorpora las chispas de chocolate y mezcla bien.\n7. Forma pequeñas bolitas de masa y colócalas en una bandeja para hornear, dejando suficiente espacio entre ellas.\n8. Hornea durante 10-12 minutos o hasta que estén doradas en los bordes.\n9. Deja enfriar en la bandeja durante unos minutos, luego transfiere a una rejilla para que se enfríen completamente.\n10. Disfruta de las deliciosas galletas de chispas de chocolate.",
//   },
//   {
//     id: 2,
//     img: cookie2,
//     name: "Doble chocolate con Chispas de Chocolate",
//     desc: "Galletas ricas y fudgy que satisfarán a cualquier amante del chocolate.",
//     weight: "1 lb",
//     price: "$47.000 COP",
//     ingredients: [
//       {
//         name: "Harina de trigo",
//         quantity: 1.5,
//         unitOfMeasurement: "tazas",
//       },
//       {
//         name: "Cacao en polvo sin azúcar",
//         quantity: 0.5,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Azúcar blanca",
//         quantity: 1,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Mantequilla",
//         quantity: 0.5,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Huevos",
//         quantity: 2,
//         unitOfMeasurement: "unidades",
//       },
//       {
//         name: "Esencia de vainilla",
//         quantity: 1,
//         unitOfMeasurement: "cucharadita",
//       },
//       {
//         name: "Chispas de chocolate",
//         quantity: 1.5,
//         unitOfMeasurement: "taza",
//       },
//       {
//         name: "Sal",
//         quantity: 0.25,
//         unitOfMeasurement: "cucharadita",
//       },
//       {
//         name: "Bicarbonato de sodio",
//         quantity: 0.5,
//         unitOfMeasurement: "cucharadita",
//       },
//     ],
//     preparation:
//       "1. Precalienta el horno a 180°C (350°F).\n2. En un tazón, mezcla la harina, el cacao en polvo, el bicarbonato de sodio y la sal.\n3. En otro tazón, bate la mantequilla y el azúcar hasta obtener una mezcla suave y esponjosa.\n4. Agrega los huevos uno a la vez, batiendo bien después de cada adición. Añade la esencia de vainilla y mezcla.\n5. Agrega gradualmente la mezcla de harina a la mezcla de mantequilla, revolviendo hasta que esté bien combinado.\n6. Incorpora las chispas de chocolate y mezcla bien.\n7. Forma pequeñas bolitas de masa y colócalas en una bandeja para hornear, dejando suficiente espacio entre ellas.\n8. Hornea durante 8-10 minutos o hasta que estén ligeramente firmes al tacto.\n9. Deja enfriar en la bandeja durante unos minutos, luego transfiere a una rejilla para que se enfríen completamente.\n10. Disfruta de las deliciosas galletas doble chocolate con chispas de chocolate.",
//   },
//   {
//     id: 3,
//     img: cookie3,
//     name: "Avena y Pasas",
//     desc: "Galletas suaves y chewy con un toque de canela.",
//     weight: "1 lb",
//     price: "$36.000 COP",
//   },
//   {
//     id: 4,
//     img: cookie4,
//     name: "Mantequilla de Maní",
//     desc: "Clásicas galletas hechas con mantequilla de maní natural.",
//     weight: "1 lb",
//     price: "$43.000 COP",
//   },
//   {
//     id: 5,
//     img: cookie5,
//     name: "Red Velvet",
//     desc: "Galletas crujientes con trozos de arándanos secos y chips de chocolate blanco.",
//     weight: "1 lb",
//     price: "$50.000 COP",
//   },
//   {
//     id: 6,
//     img: cookie6,
//     name: "Macadamia",
//     desc: "Galletas ricas y mantecosas rellenas de nueces de macadamia.",
//     weight: "1 lb",
//     price: "$54.000 COP",
//   },
//   {
//     id: 7,
//     img: cookie7,
//     name: "Cookies & Cream",
//     desc: "Galletas suaves y chewy con trozos de deliciosas galletas Oreo.",
//     weight: "1 lb",
//     price: "$58.000 COP",
//   },
// ];

const CookiesGallery = () => {
  const sliderRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState(0);

  useEffect(() => {
    resizeSlider();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeSlider);
    return () => {
      window.removeEventListener("resize", resizeSlider);
    };
  }, []);

  const resizeSlider = () => {
    if (sliderRef.current) {
      const slickTrack = sliderRef.current.innerSlider.list;
      const slickTrackHeight = slickTrack.offsetHeight;
      const slideHeight = slickTrack.querySelector(".slick-slide").offsetHeight;

      if (slickTrackHeight > 0 && slideHeight > 0) {
        const newSliderHeight = Math.max(slickTrackHeight, slideHeight);
        setSliderHeight(newSliderHeight);
      }
    }
  };

  const settings = {
    className: "center",
    infinte: true,
    centerPadding: "60px",
    dots: true,
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: true,
  };

  return (
    <div className="cookie-gallery-container">
      <Slider ref={sliderRef} {...settings} style={{ height: sliderHeight }}>
        {cookies.map((cookie) => (
          <CookieProductCard key={cookie.id} {...cookie} />
        ))}
      </Slider>
    </div>
  );
};

export default CookiesGallery;

// Sin complicaciónes hacerlo a la vieja confiable, con puro HTML
