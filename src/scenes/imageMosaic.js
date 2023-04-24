import React from "react";
import cookies1 from "../images/Vegan almond cookies - Lazy Cat Kitchen.jpeg";
// import cookies2 from "../images/Inside Out Chocolate Chip Cookies - Sally's Baking Addiction.jpeg";
import cookies3 from "../images/Red Velvet Chocolate Chip Cookies - Sally's Baking Addiction.jpeg";
import cookies4 from "../images/Double Chocolate Cookies - Liv B_.png";
// import cookies5 from "../images/Peanut Butter Chocolate Meltaway Cookies.jpeg";
import cookies6 from "../images/Peanut Butter Chocolate Meltaway Cookies.jpeg";
import "../styles/global.css";

const ImageMosaic = () => {
  return (
    <div className="image-mosaic-container">
      <div className="text-container">
        <p>
          Estas deliciosas galletas de chip de chocolate son la combinación
          perfecta de textura crujiente por fuera y suave por dentro, con un
          sabor a chocolate que se derretirá en tu boca con cada mordisco.
          Hechas con ingredientes de la más alta calidad y de forma artesanal,
          estas galletas son ideales para cualquier momento del día, ya sea para
          acompañar una taza de café o té, o simplemente para disfrutar como un
          bocado dulce entre comidas. Además, sus generosas porciones de chips
          de chocolate harán que cada mordida sea una experiencia verdaderamente
          deliciosa. ¡No te quedes sin probarlas!
        </p>
      </div>
      <div className="image-gallery-container">
        <div className="cookieBox">
          <img className="chip1" src={cookies1} alt="cookies 1" />
          {/* <img className="chip2" src={cookies2} alt="cookies 2" /> */}
          <img className="chip3" src={cookies3} alt="cookies 3" />
        </div>
        <div className="cookieBox">
          <img className="chip4" src={cookies4} alt="cookies 4" />
          {/* <img className="chip5" src={cookies5} alt="cookies 5" /> */}
          <img className="chip6" src={cookies6} alt="cookies 6" />
        </div>
      </div>
    </div>
  );
};

export default ImageMosaic;
