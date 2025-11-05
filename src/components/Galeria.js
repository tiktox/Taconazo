import React from 'react';
import './Galeria.css';

const Galeria = () => {
  const images = [
    'https://ik.imagekit.io/lics6cm47/_Ya%20probaste%20nuestras%20nuevas%20tortillas%20KETO%20__100_%20queso,%20sin%20gluten%20_%20preparadas%20al%20instante.jpg?updatedAt=1762187264671',
    'https://ik.imagekit.io/lics6cm47/Gracias%20Dios%20por%20todo%20lo%20que%20me%20est%C3%A1%20pasando%20con%20@taconazo24.%20Gracias%20@alofoke%20@pr1ncematias%20por%20(2).jpg?updatedAt=1762187586253',
    'https://ik.imagekit.io/lics6cm47/Gracias%20Dios%20por%20todo%20lo%20que%20me%20est%C3%A1%20pasando%20con%20@taconazo24.%20Gracias%20@alofoke%20@pr1ncematias%20por%20(3).jpg?updatedAt=1762187585976',
    'https://ik.imagekit.io/lics6cm47/Gracias%20Dios%20por%20todo%20lo%20que%20me%20est%C3%A1%20pasando%20con%20@taconazo24.%20Gracias%20@alofoke%20@pr1ncematias%20por.jpg?updatedAt=1762187585918',
    'https://ik.imagekit.io/lics6cm47/Gracias%20Dios%20por%20todo%20lo%20que%20me%20est%C3%A1%20pasando%20con%20@taconazo24.%20Gracias%20@alofoke%20@pr1ncematias%20por%20(4).jpg?updatedAt=1762187586039',
    'https://ik.imagekit.io/lics6cm47/No%20hay%20mejor%20plan%20que%20un%20Taconazo%20antes%20de%20llegar%20a%20casa%20_%20tortillas%20calientitas%20y%20carne%20jugosa.jpg?updatedAt=1762187866395'
  ];

  return (
    <section className="section galeria" id="galeria">
      <h2>Galería</h2>
      <div className="galeria-grid">
        {images.map((image, index) => (
          <div key={index} className="galeria-item">
            <img src={image} alt={`Galería ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;