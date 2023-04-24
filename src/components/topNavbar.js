import React from "react";
import "../styles/global.css";
import logo from "../images/Tato-Logo-sinFondo.png";

const TopNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="menu">
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Explora</li>
          <li>Paso a Paso</li>
          <li>Contacto</li>
        </ul>
      </div>
    </div>
  );
}

export default TopNavbar;