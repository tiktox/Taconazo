import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header" id="inicio">
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="https://ik.imagekit.io/lics6cm47/Buen%C3%ADsimos%20los%20tacos%20del%20@taconazo24%20_%20_Les%20recomiendo%20el%20combo%20de%20los%204%20tacos%20_.mp4?updatedAt=1762174425379" type="video/mp4" />
        </video>
      </div>
      <div className="header-overlay">
        <div className="header-content">
          <h1>TACONAZO</h1>
          <p>x Una vida sin gluten!</p>
          <div className="header-buttons">
            <a href="#reservar" className="cta-button primary">Reservar Mesa</a>
            <a href="#ordenar" className="cta-button secondary">Ordenar Ahora</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;