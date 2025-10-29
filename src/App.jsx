// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CarloAcutis from './components/CarloAcutis';
import Missions from './components/Missions';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className='drawer'>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <Navbar />
      
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
    </div>
  );
}

export default App;