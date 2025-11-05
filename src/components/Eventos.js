import React from 'react';
import './Eventos.css';

const Eventos = () => {
  const eventos = [
    {
      title: 'Noche de Mariachi',
      date: 'Viernes 15 de Diciembre',
      description: 'Disfruta de música tradicional mexicana mientras saboreas nuestros tacos.'
    },
    {
      title: 'Taco Tuesday',
      date: 'Todos los Martes',
      description: '2x1 en tacos seleccionados. ¡No te lo pierdas!'
    },
    {
      title: 'Festival de Salsas',
      date: 'Sábado 23 de Diciembre',
      description: 'Prueba nuestras salsas especiales y vota por tu favorita.'
    }
  ];

  return (
    <section className="section eventos" id="eventos">
      <h2>Eventos</h2>
      <div className="eventos-grid">
        {eventos.map((evento, index) => (
          <div key={index} className="evento-card">
            <h3>{evento.title}</h3>
            <div className="evento-date">{evento.date}</div>
            <p>{evento.description}</p>
            <button className="evento-btn">Más Información</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Eventos;