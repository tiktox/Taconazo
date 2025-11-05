import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProximamente = (e) => {
    e.preventDefault();
    alert('Próximamente');
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="https://ik.imagekit.io/lics6cm47/Web%20-%20Site%20(1)-modified.png?updatedAt=1762176151286" alt="Taconazo" />
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#inicio" className="nav-link" onClick={() => setIsOpen(false)}>INICIO</a>
          <a href="#nosotros" className="nav-link" onClick={() => setIsOpen(false)}>NOSOTROS</a>
          <a href="#menu" className="nav-link" onClick={() => setIsOpen(false)}>MENÚ</a>
          <a href="#galeria" className="nav-link" onClick={() => setIsOpen(false)}>GALERÍA</a>
          <a href="#taco-lovers" className="nav-link" onClick={() => setIsOpen(false)}>TACO LOVERS</a>
          <a href="#eventos" className="nav-link" onClick={handleProximamente}>EVENTOS</a>
          <a href="#ordenar" className="nav-link" onClick={handleProximamente}>ORDENAR</a>
          <a href="#reservar" className="nav-link" onClick={handleProximamente}>RESERVAR</a>
          <a href="#contacto" className="nav-link" onClick={() => setIsOpen(false)}>CONTACTO</a>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;