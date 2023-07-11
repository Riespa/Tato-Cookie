import React from "react";
import "../styles/makingCookies.css";

const MakingCookiesIngredients = () => (
  <div className="ingrediente_stepByStep">
    <div className="ingredientes">
      <div className="ingrediente_header">
        <h2 className="ingrediente_titulo">Ingredientes</h2>
        <div className="ingrediente_porciones">
          <button className="porcion_menos">-</button>
          <span className="porcion_cantidad">1</span>
          <button className="porcion_mas">+</button>
        </div>
      </div>
      <div className="ingrediente_lista">
        <h2>Probando</h2>
      </div>
    </div>
    <div className="cookieSteps">
      <div className="card">
        <h2>Paso 1</h2>
        <p>Preparar los ingredientes</p>
      </div>
      <div className="card">
        <h2>Paso 2</h2>
        <p>Mezclar la mantequilla y el azucar</p>
      </div>
      <div className="card">
        <h2>Paso 3</h2>
        <p>Agregar huevo y mezclar</p>
      </div>
      <div className="card">
        <h2>Paso 4</h2>
        <p>Agregar harina, bicarbonato de sodio y sal</p>
      </div>
      <div className="card">
        <h2>Paso 5</h2>
        <p>Agregar chips de chocolate y hornear las galletas</p>
      </div>
    </div>
  </div>
);

export default MakingCookiesIngredients;
