// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    // 1. Usamos 'relative' para posicionar la flecha de scroll
    // 2. Usamos la sintaxis de Tailwind para el fondo.
    //    Asume que tu imagen se llama 'hero-fondo.jpg' y está en 'public/'
    <div className="hero min-h-screen relative bg-cover bg-center" style={{ backgroundImage: "url('/carloAcutis.webp')" }}>
      
      {/* Overlay para oscurecer el fondo y que el texto resalte más */}
      <div className="hero-overlay bg-opacity-60"></div>

      {/* Contenido del Hero */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Grupo Misionero Carlo Acutis</h1>
          <p className="mb-5">
            "La Eucaristía es mi autopista al cielo." 
            <br/> 
            Te invitamos a conocer nuestra misión y unirte a nosotros.
          </p>
          
          {/* 3. Doble botón de Llamado a la Acción (CTA) */}
          <div className="flex justify-center gap-4">
            <a href="#contacto" className="btn btn-primary">
              ¡Quiero participar!
            </a>
            <a href="#quienes-somos" className="btn btn-outline btn-ghost text-white">
              Saber más
            </a>
          </div>

        </div>
      </div>

      {/* 4. Indicador de "Scroll Down" (Opcional pero recomendado) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#quienes-somos" aria-label="Ir a la siguiente sección">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8 text-neutral-content animate-bounce"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Hero;