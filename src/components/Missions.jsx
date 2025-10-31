import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function Missions() {
  const pastMissions = [
    { id: 1, title: "Misión Adultos Mayores I", location: "Casa de Hermanas Compañia de María", img: "/AdultosMayores-Mision.jpg" },
    { id: 2, title: "Misión Urbana I", location: "Las Heras", img: "https://via.placeholder.com/400x225" },
    { id: 3, title: "Misión Eclesial", location: "Parroquia San Miguel Arcángel", img: "/Eclesial1-Mision.jpg" },
    { id: 4, title: "Misión de Verano 2024", location: "Localidad X", img: "https://via.placeholder.com/400x225" },
    { id: 5, title: "Misión de Invierno 2023", location: "Localidad Y", img: "https://via.placeholder.com/400x225" },
  ];

  const autoplayPlugin = Autoplay({
          delay: 3500, // 3 segundos por slide
          stopOnInteraction: false, // Seguir aunque el usuario interactúe
      });
  
      const [emblaRef] = useEmblaCarousel(
          {
              loop: true, // Carrusel infinito
          },
          [autoplayPlugin] // Añadir el plugin
      );

  return (
    <div className="container mx-auto p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Misiones y Actividades</h2>
      
      {/* 1. El Viewport: 
        - 'overflow-hidden' es crucial para que funcione como carrusel.
        - 'ref={emblaRef}' conecta el hook de Embla a este div.
      */}
      <div className="overflow-hidden" ref={emblaRef}>
        
        {/* 2. El Contenedor: Usa 'flex' para alinear los slides horizontalmente */}
        <div className="flex">
          
        
          {pastMissions.map((mission) => (
            <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-3" key={mission.id}>
              
              <div className="card bg-base-100 shadow-xl image-full h-full before:opacity-10">
                <figure><img src={mission.img} alt={mission.title} className="h-full w-full object-cover" /></figure>
                <div className="card-body">
                  <h3 className="card-title">{mission.title}</h3>
                  <p>{mission.location}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Ver Fotos</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Missions;