import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Maria das Graças Silva",
      role: "Paciente de Cirurgia de Catarata",
      text: `"Minha cirurgia de catarata com a Dra. Maria Eduarda foi um verdadeiro divisor de águas na minha vida. Ela me explicou todo o processo com muita paciência e o pós-operatório foi excelente. Voltei a enxergar as cores vivas novamente!"`
    },
    {
      id: 2,
      name: "Thiago P. Medeiros",
      role: "Paciente de Cirurgia Refrativa",
      text: `"Fiz a cirurgia refrativa a laser e me livrei dos óculos depois de 15 anos. A clínica é fantástica, extremamente limpa e com aparelhos de ponta. A Dra. Maria Eduarda transmite uma segurança incrível. Recomendo de olhos fechados!"`
    },
    {
      id: 3,
      name: "Fernanda Alencar",
      role: "Paciente de Lentes Especiais",
      text: `"Tenho ceratocone e passei por vários médicos que não acertavam minhas lentes. A Dra. Maria Eduarda fez uma adaptação de lente escleral perfeita. Minha qualidade de vida mudou totalmente. O atendimento dela é excelente!"`
    }
  ];

  return (
    <section className="testimonials-section" id="depoimentos" style={{ padding: '112px 0', backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container text-center">
            <span className="section-badge">Depoimentos</span>
            <h2 className="section-title">O que Dizem Nossos Pacientes</h2>
            <p className="section-subtitle">A maior recompensa pelo nosso trabalho é ver a felicidade e a melhoria da qualidade de vida de quem confia em nós.</p>
            
            <div className="testimonials-slider-container">
                <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '48px', marginBottom: '48px' }}>
                    {testimonials.map((t, index) => (
                      <motion.div 
                        key={t.id}
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        style={{ backgroundColor: 'white', padding: '40px', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)', textAlign: 'left', display: 'flex', flexDirection: 'column' }}
                      >
                          <div className="testimonial-stars" style={{ color: 'var(--color-secondary)', marginBottom: '16px' }}>
                              <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                          </div>
                          <p className="testimonial-text" style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '24px', flexGrow: 1 }}>{t.text}</p>
                          <div className="testimonial-author" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                              <div className="author-avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(18, 85, 101, 0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}><i className="fa-solid fa-user"></i></div>
                              <div className="author-info">
                                  <span className="author-name" style={{ display: 'block', fontWeight: 'bold', color: 'var(--color-text-dark)' }}>{t.name}</span>
                                  <span className="author-role" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{t.role}</span>
                              </div>
                          </div>
                      </motion.div>
                    ))}
                </div>
            </div>
            
            <motion.div 
              className="testimonial-cta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-medium">
                    <i className="fa-brands fa-whatsapp"></i> Faça Como Eles, Agende Sua Consulta!
                </a>
            </motion.div>
        </div>
    </section>
  );
}


