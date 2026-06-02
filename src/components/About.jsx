import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="about-section" id="sobre">
        <div className="container grid-two-columns">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-images"
            >
                <div className="about-img-container">
                    <img src={`${import.meta.env.BASE_URL}img/clinica_luxo.png`} alt="Clínica" className="about-img-main" />
                </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-info"
            >
                <span className="section-badge">Sobre a Especialista</span>
                <h2 className="section-title">Dedicação Integral à Saúde Ocular</h2>
                <p className="about-text">Sou a <strong>Dra. Maria Eduarda Tavares Brito</strong>, médica oftalmologista especializada em tratamentos modernos e personalizados.</p>
            </motion.div>
        </div>
    </section>
  );
}


