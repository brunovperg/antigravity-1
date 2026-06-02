import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Specialties from './components/Specialties';
import Clinic from './components/Clinic';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Specialties />
      <Clinic />
      <Testimonials />
      <FAQ />
      <Footer />
      
      <a href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Maria%20Eduarda%20Tavares%20Brito." target="_blank" rel="noopener noreferrer" className="whatsapp-floating-btn" id="sticky-whatsapp" aria-label="Falar no WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
        <span className="floating-tooltip">Agendar Consulta</span>
      </a>
    </>
  );
}

export default App;
