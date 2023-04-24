import React from "react";
import bannerImage from "../images/espacio-cookies-vista-superior-invertida.jpg";
// import animatedCookie from "../images/ChocolateChipCookieDall-e.png";
import "../styles/global.css";

const Banner = () => {
  const windowHeight = window.innerHeight;

  return (
    <div className="banner-container" style={{ height: windowHeight }}>
      <img
        src={bannerImage}
        alt="Banner"
        className="banner-image"
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        id="banner-image"
      />
      <div className="banner-overlay" />
      {/* <div className="animatedContainer">
        <img 
          src={animatedCookie}
          alt="ChocolateChipCookie"
          className="animatedCookie"
          id="animatedCookie"
        />
      </div> */}
    </div>
  );
};

export default Banner;
