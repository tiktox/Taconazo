import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const menuItems = [
    { 
      name: 'Taco Suadero', 
      price: 'RD$200.00', 
      description: 'Carne de cerdo cocida lentamente con especias tradicionales',
      image: 'https://ik.imagekit.io/lics6cm47/_Ya%20probaste%20nuestras%20nuevas%20tortillas%20KETO%20__100_%20queso,%20sin%20gluten%20_%20preparadas%20al%20instante.jpg?updatedAt=1762187264671',
      ingredients: 'Carne de cerdo, cebolla, cilantro, salsa verde'
    }
  ];

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="section menu" id="menu">
      <h2>Nuestro Menú</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item" onClick={() => openModal(item)}>
            <div className="menu-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-item-content">
              <div className="menu-item-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedItem.image} alt={selectedItem.name} />
            </div>
            <div className="modal-info">
              <h2>{selectedItem.name}</h2>
              <p className="modal-price">{selectedItem.price}</p>
              <p className="modal-description">{selectedItem.description}</p>
              <div className="modal-ingredients">
                <h4>Ingredientes:</h4>
                <p>{selectedItem.ingredients}</p>
              </div>
              <button className="order-button">Ordenar Ahora</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;