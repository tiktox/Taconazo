import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Menu from './components/Menu';
import Galeria from './components/Galeria';
import TacoLovers from './components/TacoLovers';

import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Inicio />
      <Nosotros />
      <Menu />
      <Galeria />
      <TacoLovers />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;