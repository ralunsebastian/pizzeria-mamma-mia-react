import React from 'react';
import { Link } from 'react-router-dom';
import error404Image from '../assets/img/404.png'; // Ajusta la ruta según sea necesario

function NotFound() {
  return (
    <div className="main-content">
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>¡Oops! Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
      <img 
        src={error404Image} 
        alt="Error 404" 
        style={{ width: '50%', height: 'auto', marginBottom: '20px' }} // Ajusta el tamaño de la imagen según lo necesites
      />
      <br />
      <Link to="/">Volver al inicio</Link>
    </div>
    </div>
  );
}

export default NotFound;
