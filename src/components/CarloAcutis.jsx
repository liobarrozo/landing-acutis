// src/components/CarloAcutis.jsx
import React from 'react';

function CarloAcutis() {
  return (
    <div className="bg-base-200 p-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">El Carisma de Carlo Acutis</h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full lg:w-1/3">
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Carlo Acutis"
              className="object-cover h-full w-full"
            />
            {/* Reemplaza esta imagen por una foto de Carlo */}
          </figure>
          <div className="card-body lg:w-2/3">
            <h3 className="card-title text-2xl">Un Apóstol en Jeans y Zapatillas</h3>
            <p>Carlo Acutis nos enseñó que la santidad no es algo lejano. Es accesible para todos, viviendo una vida ordinaria de manera extraordinaria.</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Amor por la Eucaristía:</strong> La llamaba su "autopista al cielo" y documentó milagros eucarísticos en su famoso sitio web.</li>
              <li><strong>Evangelización Digital:</strong> Usó Internet como una herramienta poderosa para difundir la fe, demostrando que la tecnología puede ser usada para el bien.</li>
              <li><strong>Servicio a los Pobres:</strong> Dedicó su tiempo y ahorros a ayudar a los necesitados de su ciudad, viendo a Jesús en cada uno de ellos.</li>
            </ul>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-outline btn-primary">Conocer más de su vida</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarloAcutis;