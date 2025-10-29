// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    // 'sticky top-0 z-50' asegura que el navbar se quede arriba y
    // 'z-50' lo pone por encima de la mayoría del contenido, pero
    // dejaremos que el drawer (que tendrá z-[100]) pase por encima.
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      
      {/* Título */}
      <div className="flex-1">
        <a href='inicio' className="btn btn-ghost text-xl">G. M. Carlo Acutis</a>
      </div>

      {/* Menú de Escritorio (Desktop) */}
      {/* Se oculta en pantallas pequeñas ('hidden') y se muestra en 'lg' y superiores ('lg:flex') */}
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center"> {/* 'items-center' para alinear mejor el botón */}
          <li><a href='#quienes-somos'>Quiénes Somos</a></li>
          <li><a href='#carisma'>Carisma</a></li>
          <li><a href='#misiones'>Misiones</a></li>
          <li className="ml-2"> 
            <a href='#contacto' className="btn btn-primary btn-sm">¡Únete!</a>
          </li>
        </ul>
      </div>

      {/* Botón de Hamburguesa (Móvil) */}
      {/* Se muestra en pantallas pequeñas y se oculta en 'lg' ('lg:hidden') */}
      <div className="flex-none lg:hidden">
        {/* Esta 'label' actúa como un botón.
          El 'htmlFor="my-drawer"' le dice que active el input
          con id="my-drawer" (que pondremos en App.jsx).
        */}
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
}

export default Navbar;