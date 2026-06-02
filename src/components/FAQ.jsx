import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "A clínica aceita planos de saúde / convênios?",
      a: "Atendemos majoritariamente de forma particular para garantir um tempo estendido de consulta e exames de altíssima precisão. No entanto, fornecemos toda a documentação, relatórios e notas fiscais necessárias para que você solicite o reembolso integral ou parcial junto ao seu convênio médico de forma descomplicada. Nossa equipe oferece suporte completo nesse processo."
    },
    {
      q: "Como funciona o agendamento da cirurgia de catarata?",
      a: "O agendamento ocorre após uma consulta detalhada e a realização de exames pré-operatórios específicos (como biometria e tomografia de coerência óptica). Uma vez indicada a cirurgia, nossa equipe organiza todos os trâmites, desde a escolha da lente intraocular premium ideal para o seu estilo de vida até o agendamento no hospital oftalmológico de referência."
    },
    {
      q: "A cirurgia refrativa a laser dói?",
      a: "Não, o procedimento é totalmente indolor. Antes de iniciar, são aplicadas gotas de colírio anestésico potente nos olhos do paciente. Durante a cirurgia (que dura em média de 10 a 15 minutos para ambos os olhos), o paciente sente apenas uma leve pressão. O pós-operatório imediato pode apresentar um leve desconforto ou sensação de areia nos olhos, controlados facilmente com os colírios recomendados."
    },
    {
      q: "Com que frequência devo ir ao oftalmologista?",
      a: "Para adultos saudáveis, a recomendação geral é uma consulta preventiva anual. Para crianças em fase escolar, pacientes com histórico familiar de glaucoma ou cegueira, diabéticos, hipertensos e pessoas com mais de 40 anos, a frequência pode ser maior, conforme a orientação médica, para evitar o avanço de doenças silenciosas."
    },
    {
      q: "O que devo levar no dia da minha consulta oftalmológica?",
      a: "Pedimos que traga seus óculos de grau atuais (se utilizar), as embalagens de lentes de contato que costuma usar e receitas ou exames anteriores. Caso utilize colírios de uso contínuo, traga o nome ou a embalagem deles. Se sua consulta incluir dilatação da pupila, recomendamos trazer um acompanhante e óculos de sol, pois a visão pode ficar temporariamente embaçada e sensível à luz."
    }
  ];

  return (
    <section className="faq-section" id="faq" style={{ padding: '112px 0', backgroundColor: 'var(--color-card-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
            <span className="section-badge center" style={{ display: 'block', margin: '0 auto', width: 'fit-content' }}>FAQ</span>
            <h2 className="section-title text-center">Dúvidas Frequentes</h2>
            <p className="section-subtitle text-center">Encontre respostas rápidas para as principais dúvidas sobre consultas e procedimentos.</p>
            
            <div className="faq-accordion-container" style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="faq-item" style={{ border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden' }}>
                        <button 
                          className="faq-question" 
                          onClick={() => toggleFaq(index)}
                          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', background: 'rgba(18, 85, 101, 0.02)', border: 'none', cursor: 'pointer', textAlign: 'left', fontWeight: 'bold', color: 'var(--color-primary)', fontSize: '1.05rem' }}
                        >
                            <span>{faq.q}</span>
                            <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="faq-icon" style={{ color: 'var(--color-secondary)' }}><i className="fa-solid fa-plus"></i></motion.span>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              style={{ overflow: 'hidden' }}
                            >
                                <div className="faq-answer" style={{ padding: '0 24px 24px 24px', color: 'var(--color-text-muted)' }}>
                                    <p>{faq.a}</p>
                                </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                    </div>
                  );
                })}
            </div>
            
            <div className="faq-footer-cta text-center" style={{ marginTop: '48px' }}>
                <p style={{ marginBottom: '16px' }}>Tem outra dúvida que não está listada aqui?</p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-medium">
                    <i className="fa-brands fa-whatsapp"></i> Falar Conosco no WhatsApp
                </a>
            </div>
        </div>
    </section>
  );
}


