import React from 'react';
import { motion } from 'framer-motion';

export default function Specialties() {
  const specialties = [
    {
      id: "catarata",
      icon: "fa-solid fa-eye",
      title: "Cirurgia de Catarata Premium",
      desc: "Substituição do cristalino opaco por lentes intraoculares de alta tecnologia, restaurando a nitidez visual e reduzindo a dependência de óculos."
    },
    {
      id: "refrativa",
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Cirurgia Refrativa a Laser",
      desc: "Correção definitiva de Miopia, Astigmatismo e Hipermetropia de forma rápida, segura e altamente precisa através de laser de última geração."
    },
    {
      id: "lentes",
      icon: "fa-solid fa-circle-dot",
      title: "Lentes de Contato Especiais",
      desc: "Adaptação personalizada de lentes de contato rígidas, esclerais e gelatinosas para casos de Ceratocone, alto grau e córneas irregulares."
    },
    {
      id: "glaucoma",
      icon: "fa-solid fa-shield-heart",
      title: "Prevenção e Tratamento do Glaucoma",
      desc: "Monitoramento preventivo de pressão ocular e campo visual, com terapias focadas em preservar o nervo óptico e evitar a perda de visão silenciosa."
    },
    {
      id: "ceratocone",
      icon: "fa-solid fa-compress",
      title: "Tratamento de Ceratocone",
      desc: "Uso de técnicas inovadoras como Crosslinking corneal e implante de Anel de Ferrara para estabilizar a curvatura da córnea e resgatar a visão."
    },
    {
      id: "exames",
      icon: "fa-solid fa-file-medical",
      title: "Exames e Check-up Ocular",
      desc: "Avaliação clínica minuciosa com mapeamento de retina, tonometria e exames de imagem de alta definição para diagnóstico precoce."
    }
  ];

  return (
    <section className="specialties-section" id="especialidades">
        <div className="container text-center">
            <span className="section-badge">Especialidades</span>
            <h2 className="section-title text-white">Soluções Completas para a sua Saúde Ocular</h2>
            <p className="section-subtitle text-muted">Oferecemos tratamentos sob medida, desde consultas preventivas de rotina até procedimentos cirúrgicos altamente avançados.</p>
            
            <div className="specialties-grid">
                {specialties.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{ height: '100%' }}
                  >
                      <div className="specialty-card" id={`specialty-${item.id}`}>
                          <div className="specialty-icon-wrapper">
                              <i className={item.icon}></i>
                          </div>
                          <h3 className="specialty-title">{item.title}</h3>
                          <p className="specialty-desc">{item.desc}</p>
                          <a href={`https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20${item.title}`} target="_blank" rel="noopener noreferrer" className="specialty-link">Saiba Mais <i className="fa-solid fa-arrow-right"></i></a>
                      </div>
                  </motion.div>
                ))}
            </div>
            
            <motion.div 
              className="specialties-cta-block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
                <p style={{ color: "white" }}>Precisa de um diagnóstico preciso para o seu caso?</p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-large pulse-effect" id="specialties-cta-whatsapp">
                    <i className="fa-brands fa-whatsapp"></i> Solicitar Agendamento no WhatsApp
                </a>
            </motion.div>
        </div>
    </section>
  );
}


