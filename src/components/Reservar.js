import React from 'react';
import './Reservar.css';

const Reservar = () => {
  return (
    <section className="section reservar" id="reservar">
      <h2>Reservar Mesa</h2>
      <div className="reservar-content">
        <div className="reservar-info">
          <h3>Haz tu reservación</h3>
          <p>Reserva tu mesa y disfruta de una experiencia única en Taconazo.</p>
          <div className="horarios">
            <h4>Horarios de Atención</h4>
            <div className="horario-item">
              <span>Lunes - Jueves:</span>
              <span>12:00 PM - 10:00 PM</span>
            </div>
            <div className="horario-item">
              <span>Viernes - Sábado:</span>
              <span>12:00 PM - 11:00 PM</span>
            </div>
            <div className="horario-item">
              <span>Domingo:</span>
              <span>12:00 PM - 9:00 PM</span>
            </div>
          </div>
        </div>
        <div className="reservar-form">
          <form>
            <input type="text" placeholder="Nombre completo" required />
            <input type="tel" placeholder="Teléfono" required />
            <input type="email" placeholder="Email" required />
            <input type="date" required />
            <input type="time" required />
            <select required>
              <option value="">Número de personas</option>
              <option value="1">1 persona</option>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="5">5 personas</option>
              <option value="6+">6+ personas</option>
            </select>
            <textarea placeholder="Comentarios especiales (opcional)" rows="3"></textarea>
            <button type="submit">Reservar Mesa</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservar;