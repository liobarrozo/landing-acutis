// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://via.placeholder.com/1600x900)' }}>
      {/* Reemplaza la URL de arriba con una foto de tu grupo o de Carlo Acutis */}
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Grupo Misionero Carlo Acutis</h1>
          <p className="mb-5">"La Eucaristía es mi autopista al cielo." - Te invitamos a conocer nuestra misión y unirte a nosotros.</p>
          <button className="btn btn-primary">Quiero participar</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;