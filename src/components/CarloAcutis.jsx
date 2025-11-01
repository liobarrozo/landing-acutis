// src/components/CarloAcutis.jsx
import React from 'react';
// 1. Importamos los hooks de Embla
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function CarloAcutis() {
  // 2. Definimos las fotos que irán en el carrusel
  //    (Recuerda ponerlas en la carpeta 'public/')
  const carloPhotos = [
    { id: 1, src: "/CarloAcutis-foto1.jpg", alt: "Foto de Carlo Acutis sonriendo" },
    { id: 2, src: "/CarloAcutis-foto2.jpg", alt: "Foto de Carlo Acutis con la Eucaristía" },
    { id: 3, src: "/CarloAcutis-foto3.png", alt: "Foto de Carlo Acutis en jeans" },
  ];

  // 3. Inicializamos Embla y el plugin de Autoplay
  const autoplayPlugin = Autoplay({
    delay: 4000, // Un poco más lento, 4 segundos
    stopOnInteraction: false,
  });

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, // Infinito
    },
    [autoplayPlugin]
  );

  return (
    // Agregamos el ID aquí para el scroll-smooth
    <div className="bg-base-200 p-12" id="carisma">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">El Carisma de Carlo Acutis</h2>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          
          {/* 4. Reemplazamos el <figure> por el carrusel Embla */}
          {/* Mantenemos las clases 'w-full lg:w-1/3' en el viewport */}
          <div className="w-full lg:w-1/3 overflow-hidden" ref={emblaRef}>
            {/* Usamos h-full para que el carrusel ocupe toda la altura de la card */}
            <div className="flex h-full">
              {carloPhotos.map((photo) => (
                // Cada slide ocupa el 100% del viewport
                <div className="flex-none w-full h-full" key={photo.id}>
                  <img 
                    src={photo.src}
                    alt={photo.alt}
                    // Mantenemos las clases de la imagen original
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Fin del carrusel */}

          <div className="card-body lg:w-2/3">
            <h3 className="card-title text-2xl">El Santo Influencer</h3>
            <p>Carlo Acutis nos enseñó que la santidad no es algo lejano. Es accesible para todos, desde la cotidianidad con nuestros estudios o trabajo.</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Amor por la Eucaristía:</strong> La llamaba su "autopista al cielo". Y creó una página web donde documentó milagros eucarísticos documentó milagros eucarísticos.</li>
              <li><strong>Evangelización Digital:</strong> Usó Internet como una herramienta poderosa para difundir la fe, demostrando que la tecnología puede ser usada para el bien.</li>
              <li><strong>Servicio a los Pobres:</strong> Dedicó su tiempo y ahorros a ayudar a los necesitados de su ciudad, viendo a Jesús en cada uno de ellos.</li>
            </ul>
            <div className="card-actions justify-end mt-4">
              {/*<button className="btn btn-outline btn-primary">Conocer más de su vida</button>*/} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarloAcutis;