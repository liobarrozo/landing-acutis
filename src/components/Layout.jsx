// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // Importamos el Navbar

/**
 * Este componente 'Layout' envuelve toda la aplicación.
 * Proporciona la estructura del Drawer (menú lateral) y
 * renderiza el Navbar.
 * * Recibe 'children', que será el contenido principal de la página
 * (el <main> y el <Footer> que le pasaremos desde App.jsx).
 */
function Layout({ children }) {
  return (
    // 1. Contenedor principal del Drawer
    <div className="drawer drawer-end">
      
      {/* 2. Checkbox invisible que controla el estado */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* 3. Contenido de la página (El wrapper) */}
      <div className="drawer-content flex flex-col">
        
        {/* El Navbar AHORA vive aquí, dentro del Layout */}
        <Navbar />
        
        {/* 'children' es el contenido que pasamos desde App.jsx */}
        {children}

      </div> 
      
      {/* 4. Menú lateral (el drawer que se desliza) */}
      <div className="drawer-side z-[100]">
        {/* Fondo oscuro que cierra el menú al hacer clic */}
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        
        {/* Contenido del menú móvil */}
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li className="font-bold text-lg p-4">G. M. Carlo Acutis</li>
          <div className="divider m-0"></div>
          
          {/* Asegúrate de que los 'href' coincidan con los 'id' de tus secciones */}
          <li><a href="#quienes-somos">Quiénes Somos</a></li>
          <li><a href="#carisma">Carisma</a></li>
          <li><a href="#misiones">Misiones</a></li>
          <li className="mt-4">
            <a href="#contacto" className="btn btn-primary w-full">
              ¡Únete!
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;