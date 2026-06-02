import React from 'react';
import { motion } from 'framer-motion';

export default function Clinic() {
  return (
    <section className="technology-section" id="tecnologia">
        <div className="container grid-two-columns align-center">
            <motion.div 
              className="tech-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                <span className="section-badge">Nossa Clínica</span>
                <h2 className="section-title">Infraestrutura Moderna de Alta Tecnologia</h2>
                <p className="tech-lead" style={{ marginBottom: '32px' }}>Projetamos nossa clínica para oferecer uma experiência confortável, acolhedora e segura, dispondo de equipamentos diagnósticos e terapêuticos de última geração mundial.</p>
                
                <ul className="tech-list" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                    <li style={{ display: 'flex', gap: '16px' }}>
                        <span className="tech-list-icon" style={{ color: 'var(--color-primary)' }}><i className="fa-solid fa-circle-check"></i></span>
                        <div>
                            <strong>Diagnóstico Avançado:</strong> Exames digitais integrados para detecção imediata de micro-alterações na retina e córnea.
                        </div>
                    </li>
                    <li style={{ display: 'flex', gap: '16px' }}>
                        <span className="tech-list-icon" style={{ color: 'var(--color-primary)' }}><i className="fa-solid fa-circle-check"></i></span>
                        <div>
                            <strong>Segurança Estéril Absoluta:</strong> Centro de esterilização rigoroso e instalações certificadas conforme as normas da ANVISA.
                        </div>
                    </li>
                    <li style={{ display: 'flex', gap: '16px' }}>
                        <span className="tech-list-icon" style={{ color: 'var(--color-primary)' }}><i className="fa-solid fa-circle-check"></i></span>
                        <div>
                            <strong>Conforto Premium:</strong> Ambientes climatizados, atendimento pontual e um espaço planejado para o seu absoluto relaxamento.
                        </div>
                    </li>
                </ul>
                
                <div className="tech-cta-box">
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-medium">
                        <i className="fa-brands fa-whatsapp"></i> Agendar Visita e Consulta
                    </a>
                </div>
            </motion.div>
            
            <motion.div 
              className="tech-image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
                <div className="tech-img-wrapper" style={{ position: 'relative' }}>
                    <img src="/img/exame_oftalmo.png" alt="Equipamentos tecnológicos oftalmológicos modernos" className="tech-img-main" style={{ width: '100%', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
                </div>
            </motion.div>
        </div>
    </section>
  );
}


