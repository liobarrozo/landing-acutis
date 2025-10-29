// src/components/Missions.jsx
import React from 'react';

function Missions() {
  const pastMissions = [
    { id: 1, title: "Misión Adultos Mayores I", location: "Casa de Hermanas Compañia de María", img: "https://via.placeholder.com/400x225" },
    { id: 2, title: "Misión Urbana I", location: "Las Heras", img: "https://via.placeholder.com/400x225" },
    { id: 3, title: "Misión Eclesial", location: "Parroquia San Miguel Arcángel", img: "https://via.placeholder.com/400x225" },
  ];

  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Misiones Realizadas</h2>
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