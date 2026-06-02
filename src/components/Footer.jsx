import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--color-primary-dark)', paddingTop: '80px', color: 'white' }}>
        <div className="footer-top">
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', paddingBottom: '64px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="footer-brand">
                    <a href="#inicio" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '24px' }}>
                        <span className="logo-accent" style={{ color: 'var(--color-secondary)', fontSize: '2rem' }}><i className="fa-solid fa-eye-low-vision"></i></span>
                        <div className="logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
                            <span className="logo-title text-white" style={{ fontFamily: 'var(--font-heading)', fontWeight: 'bold', fontSize: '1.25rem' }}>Dra. Maria Eduarda</span>
                            <span className="logo-subtitle" style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.6)' }}>OFTALMOLOGIA PREMIUM</span>
                        </div>
                    </a>
                    <p className="brand-desc" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px' }}>Medicina oftalmológica avançada, unindo diagnóstico de alta precisão e cirurgias modernas a um atendimento humanizado e individualizado.</p>
                    <div className="social-links" style={{ display: 'flex', gap: '16px' }}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', backgroundColor: 'rgba(255,255,255,0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div className="footer-links">
                    <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '24px', color: 'white' }}>Links Rápidos</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#inicio" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Início</a></li>
                        <li><a href="#sobre" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Sobre Mim</a></li>
                        <li><a href="#especialidades" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Especialidades</a></li>
                        <li><a href="#tecnologia" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>A Clínica</a></li>
                        <li><a href="#depoimentos" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Depoimentos</a></li>
                        <li><a href="#faq" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>FAQ</a></li>
                    </ul>
                </div>
                
                <div className="footer-specialties">
                    <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '24px', color: 'white' }}>Tratamentos principais</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cirurgia de Catarata</a></li>
                        <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cirurgia Refrativa a Laser</a></li>
                        <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Lentes de Contato Especiais</a></li>
                        <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Tratamento de Glaucoma</a></li>
                        <li><a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Estabilização de Ceratocone</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="footer-bottom" style={{ padding: '24px 0', backgroundColor: 'var(--color-primary-dark)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <div className="legal-info">
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '8px' }}>&copy; 2026 Dra. Maria Eduarda Tavares Brito - Clínica de Oftalmologia Premium. Todos os direitos reservados.</p>
                    <p className="medical-registry" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>Dra. Maria Eduarda Tavares Brito | CRM-SP 123456 | RQE 98765. Responsável Técnico: Dra. Maria Eduarda Tavares Brito.</p>
                </div>
                <div className="developer-info">
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>Desenvolvido com <i className="fa-solid fa-heart" style={{ color: 'var(--color-secondary)' }}></i>. Design de Alta Performance.</p>
                </div>
            </div>
        </div>
    </footer>
  );
}
