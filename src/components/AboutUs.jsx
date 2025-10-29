// src/components/AboutUs.jsx
import React from 'react';
// 1. Importar los hooks de Embla
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function AboutUs() {
    // 2. Configurar Embla y el plugin de Autoplay
    const autoplayPlugin = Autoplay({
        delay: 3000, // 3 segundos por slide
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
            <h2 className="text-3xl font-bold text-center mb-8">¿Quiénes Somos?</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
                
                {/* --- Bloque del Carrusel (Actualizado con Embla) --- */}
                <div className="flex-1">
                    {/* Viewport: Necesita el ref y 'overflow-hidden'.
                      Mantenemos tus estilos 'rounded-lg' y 'shadow-2xl'.
                    */}
                    <div className="overflow-hidden rounded-lg shadow-2xl" ref={emblaRef}>
                        
                        {/* Container: Necesita 'flex' */}
                        <div className="flex">
                            
                            {/* Slides: Necesitan 'flex-[0_0_100%]' y 'min-w-0'
                              para ocupar el 100% del viewport.
                            */}
                            
                            {/* Slide 1 */}
                            <div className="flex-[0_0_100%] min-w-0">
                                <img 
                                    src="/carloAcutis.webp"
                                    className="w-full" 
                                    alt="Foto del Grupo Misionero" 
                                />
                            </div> 

                            {/* Slide 2 */}
                            <div className="flex-[0_0_100%] min-w-0">
                                <img 
                                    src="/carloAcutis.webp"
                                    className="w-full" 
                                    alt="Grupo en Misión" 
                                />
                            </div> 

                            {/* Slide 3 */}
                            <div className="flex-[0_0_100%] min-w-0">
                                <img 
                                    src="/carloAcutis.webp"
                                    className="w-full" 
                                    alt="Grupo en Servicio" 
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* --- Bloque de Texto (Sin cambios) --- */}
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