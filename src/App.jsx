// src/App.jsx
import React from 'react';
// Ya no importamos Navbar aquí
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CarloAcutis from './components/CarloAcutis';
import Missions from './components/Missions';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import Layout from './components/Layout';

function App() {
  return (
    // 1. Usamos el Layout para envolver todo
    <Layout>
      
      {/* 2. Pasamos el contenido de la página como 'children' */}
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="quienes-somos">
          <AboutUs />
        </section>

        <section id="carisma">
          <CarloAcutis />
        </section>

        <section id="misiones">
          <Missions />
        </section>

        <section id="contacto">
          <ContactForm />
        </section>
      </main>

      <Footer />
      
    </Layout>
  );
}

export default App;