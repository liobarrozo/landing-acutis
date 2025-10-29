import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// 1. Importar el plugin de Autoplay
import Autoplay from 'embla-carousel-autoplay'

export const EmblaAutoplay = () => {
  // 2. Configurar el plugin
  // Puedes pasar opciones aquí, por ejemplo: { delay: 4000 }
  const autoplayPlugin = Autoplay({
    delay: 3000, // 3 segundos por slide
    stopOnInteraction: false, // Que no se detenga si el usuario interactúa
    stopOnMouseEnter: true, // Pausar cuando el mouse está encima
  })

  // 3. Inicializar Embla y pasar el plugin
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true, // Para que el carrusel sea infinito
    },
    [autoplayPlugin] // Añadir el plugin aquí
  )

  return (
    // El 'Viewport': necesita el ref y overflow-hidden
    <div className="overflow-hidden" ref={emblaRef}>
      
      {/* El 'Container': necesita display: flex */}
      <div className="flex">
        
        {/* Los 'Slides': necesitan una base de 100% */}
        {/* Usamos clases de DaisyUI como 'card' y 'bg-primary' */}
        
        <div className="flex-[0_0_100%] min-w-0 p-4">
          <div className="card h-64 bg-primary text-primary-content flex items-center justify-center">
            <h2 className="card-title text-4xl">Slide 1</h2>
          </div>
        </div>

        <div className="flex-[0_0_100%] min-w-0 p-4">
          <div className="card h-64 bg-secondary text-secondary-content flex items-center justify-center">
            <h2 className="card-title text-4xl">Slide 2</h2>
          </div>
        </div>

        <div className="flex-[0_0_100%] min-w-0 p-4">
          <div className="card h-64 bg-accent text-accent-content flex items-center justify-center">
            <h2 className="card-title text-4xl">Slide 3</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmblaAutoplay