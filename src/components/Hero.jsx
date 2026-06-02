import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
        <div className="hero-overlay"></div>
        <div className="hero-container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
                <span className="hero-badge"><i className="fa-solid fa-sparkles"></i> Medicina Oftalmológica Integrada</span>
                <h1 className="hero-title">Sua visão merece o cuidado de quem é especialista.</h1>
                <p className="hero-lead">Com tecnologia avançada de diagnóstico e tratamentos cirúrgicos inovadores, proporcionamos um atendimento acolhedor focado na sua saúde ocular.</p>
                
                <div className="hero-ctas">
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-large pulse-effect">
                        <i className="fa-brands fa-whatsapp"></i> Agendar Consulta no WhatsApp
                    </a>
                </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-image-wrapper"
            >
                <div className="hero-image-bg"></div>
                <img src={`${import.meta.env.BASE_URL}img/dra_maria_eduarda.png`} alt="Dra. Maria Eduarda" className="hero-img-main" />
            </motion.div>
        </div>
    </section>
  );
}


