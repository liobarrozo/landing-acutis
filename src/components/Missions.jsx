// src/components/Missions.jsx
import React from 'react';

function Missions() {
  // Datos de ejemplo. Eventualmente, esto vendrá de una base de datos o un CMS.
  const pastMissions = [
    { id: 1, title: "Misión de Verano 2024", location: "Localidad X", img: "https://via.placeholder.com/400x225" },
    { id: 2, title: "Misión de Invierno 2023", location: "Localidad Y", img: "https://via.placeholder.com/400x225" },
    { id: 3, title: "Visita al Asilo Z", location: "Nuestra Ciudad", img: "https://via.placeholder.com/400x225" },
  ];

  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Lo que Hacemos y Misiones</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pastMissions.map((mission) => (
          <div key={mission.id} className="card bg-base-100 shadow-xl image-full">
            <figure><img src={mission.img} alt={mission.title} /></figure>
            <div className="card-body">
              <h3 className="card-title">{mission.title}</h3>
              <p>{mission.location}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Ver Fotos</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Missions;