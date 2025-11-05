import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <section className="section nosotros" id="nosotros">
      <h2>Nosotros</h2>
      <div className="nosotros-content">
        <div className="nosotros-text">
          <p>
            Somos un Restaurante dominicano especializado en tacos 
            elaborados con tortillas preparadas al instante. Nuestra pasión es ofrecerte una 
            experiencia culinaria única que combina sabores auténticos 
            con ingredientes de alta calidad.
          </p>
          <p>
            En Taconazo, creemos que la comida es una forma de celebrar 
            la vida y la cultura. Cada taco que servimos está hecho con 
            amor y dedicación, reflejando nuestras raíces mexicanas y 
            dominicanas.
          </p>
          <p>
            Nuestro compromiso es ofrecerte la mejor experiencia culinaria, 
            utilizando solo ingredientes de la más alta calidad y manteniendo 
            vivas las tradiciones de nuestros ancestros.
          </p>
        </div>
        <div className="nosotros-image">
          <img src="https://ik.imagekit.io/lics6cm47/_Ya%20probaste%20nuestras%20nuevas%20tortillas%20KETO%20__100_%20queso,%20sin%20gluten%20_%20preparadas%20al%20instante.jpg?updatedAt=1762187264671" alt="Nuestra historia" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;