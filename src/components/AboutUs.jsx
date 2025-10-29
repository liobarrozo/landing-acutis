// src/components/AboutUs.jsx
import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-bold text-center mb-8">¿Quiénes Somos?</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Grupo Misionero" 
            className="rounded-lg shadow-2xl"
          />
          {/* Reemplaza esta imagen por una foto de ustedes */}
        </div>
        <div className="flex-1">
          <p className="text-lg mb-4">
            Somos un grupo de jóvenes laicos inspirados por el testimonio de San Carlo Acutis, un apóstol de la Eucaristía y un evangelizador en el "continente digital".
          </p>
          <p className="text-lg">
            Nuestra misión es llevar el mensaje de Cristo a todas las realidades, utilizando tanto los medios tradicionales como las nuevas tecnologías, viviendo la caridad y el servicio a los más necesitados.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;