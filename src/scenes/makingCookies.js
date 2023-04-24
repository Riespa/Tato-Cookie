import React from 'react';
import '../styles/makingCookies.css';

const MakingCookiesIngredients = () => (
    <div className='card'>
        <h2>Ingredientes</h2>
        <ul>
            <li>1 taza de mantequilla sin sal</li>
            <li>1 taza de azúcar morena</li>
            <li>1 huevo</li>
            <li>2 tazas de harina para todo uso</li>
            <li>1 cucharadita de bicarbonato de sodio</li>
            <li>1/2 cucharadita de sal</li>
            <li>2 tazas de chips de chocolate semidulce</li>
        </ul>
    </div>
);

const StepOne = () => (
    <div className="card">
        <h2>Paso 1</h2>
        <p>Preparar los Ingredientes</p>
    </div>
);

const StepTwo = () => (
    <div className="card">
      <h2>Paso 2</h2>
      <p>Mezclar la mantequilla y el azúcar</p>
    </div>
  );
  
  const StepThree = () => (
    <div className="card">
      <h2>Paso 3</h2>
      <p>Agregar huevo y mezclar</p>
    </div>
  );
  
  const StepFour = () => (
    <div className="card">
      <h2>Paso 4</h2>
      <p>Agregar harina, bicarbonato de sodio y sal</p>
    </div>
  );
  
  const StepFive = () => (
    <div className="card">
      <h2>Paso 5</h2>
      <p>Agregar chips de chocolate y hornear las galletas</p>
    </div>
  );

  const MakingCookies = ()=> (
    <div>
        <MakingCookiesIngredients />
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <StepFive />
    </div>
  );

export default MakingCookies;