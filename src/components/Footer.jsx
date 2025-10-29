// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
      <aside>
        <p>Copyright © 2025 - Todos los derechos reservados</p>
        <p>Grupo Misionero Carlo Acutis</p>
        <p>
          <a href="#" className="link link-hover">Instagram</a> | 
          <a href="#" className="link link-hover"> Facebook</a>
        </p>
      </aside>
    </footer>
  );
}

export default Footer;