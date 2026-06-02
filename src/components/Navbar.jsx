import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('inicio');

  const setNavActive = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="header-container">
            <a href="#inicio" className="logo" id="logo-link">
                <span className="logo-accent"><i className="fa-solid fa-eye-low-vision"></i></span>
                <div className="logo-text">
                    <span className="logo-title" style={{ letterSpacing: 'normal' }}>Dra. Maria Eduarda</span>
                    <span className="logo-subtitle">OFTALMOLOGIA PREMIUM</span>
                </div>
            </a>
            
            <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
                <ul className="nav-list" style={{ gap: '16px', alignItems: 'center' }}>
                    <li><a href="#inicio" className={`nav-link ${activeLink === 'inicio' ? 'active' : ''}`} onClick={() => setNavActive('inicio')}>Início</a></li>
                    <li><a href="#sobre" className={`nav-link ${activeLink === 'sobre' ? 'active' : ''}`} onClick={() => setNavActive('sobre')}>Sobre Mim</a></li>
                    <li><a href="#especialidades" className={`nav-link ${activeLink === 'especialidades' ? 'active' : ''}`} onClick={() => setNavActive('especialidades')}>Especialidades</a></li>
                    <li><a href="#tecnologia" className={`nav-link ${activeLink === 'tecnologia' ? 'active' : ''}`} onClick={() => setNavActive('tecnologia')}>A Clínica</a></li>
                    <li><a href="#depoimentos" className={`nav-link ${activeLink === 'depoimentos' ? 'active' : ''}`} onClick={() => setNavActive('depoimentos')}>Depoimentos</a></li>
                    <li><a href="#faq" className={`nav-link ${activeLink === 'faq' ? 'active' : ''}`} onClick={() => setNavActive('faq')}>FAQ</a></li>
                </ul>
            </nav>

            <div className="header-actions">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-small" id="nav-cta-whatsapp">
                    <i className="fa-brands fa-whatsapp"></i> Agendar Consulta
                </a>
                <div 
                    className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`} 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    </header>
  );
}


