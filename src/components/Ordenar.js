import React from 'react';
import './Ordenar.css';

const Ordenar = () => {
  return (
    <section className="section ordenar" id="ordenar">
      <h2>Ordenar</h2>
      <div className="ordenar-content">
        <div className="ordenar-info">
          <h3>Haz tu pedido</h3>
          <p>Ordena tus tacos favoritos para entrega a domicilio o para recoger en el restaurante.</p>
          <div className="ordenar-options">
            <div className="option">
              <h4>🚚 Entrega a Domicilio</h4>
              <p>Tiempo estimado: 30-45 minutos</p>
              <p>Costo de envío: $25</p>
            </div>
            <div className="option">
              <h4>🏪 Para Recoger</h4>
              <p>Tiempo estimado: 15-20 minutos</p>
              <p>Sin costo adicional</p>
            </div>
          </div>
        </div>
        <div className="ordenar-form">
          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="tel" placeholder="Teléfono" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Detalles del pedido" rows="4" required></textarea>
            <select required>
              <option value="">Selecciona tipo de entrega</option>
              <option value="domicilio">Entrega a domicilio</option>
              <option value="recoger">Para recoger</option>
            </select>
            <button type="submit">Realizar Pedido</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Ordenar;