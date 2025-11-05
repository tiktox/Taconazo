import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="section contacto" id="contacto">
      <h2>Contacto</h2>
      <div className="contacto-content">
        
        <div className="contacto-form">
          <h3>Envíanos un mensaje</h3>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Asunto" required />
            <textarea placeholder="Mensaje" rows="5" required></textarea>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;