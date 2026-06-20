import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "How can I reduce my carbon footprint?",
    answer: "Use public transport, save electricity, and avoid unnecessary purchases."
  },
  {
    id: 2,
    question: "Does eating vegetarian help?",
    answer: "Plant-based diets usually produce lower emissions."
  },
  {
    id: 3,
    question: "Are reusable bags really effective?",
    answer: "Yes, repeated use greatly reduces waste."
  },
  {
    id: 4,
    question: "Does switching off appliances save energy?",
    answer: "Yes, it reduces unnecessary electricity consumption."
  },
  {
    id: 5,
    question: "Can one person make a difference?",
    answer: "Absolutely. Collective small actions create major impact."
  }
];

const FAQ = ({ titleText = "Frequently Asked Questions" }) => {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleOpen(id);
    }
  };

  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card fade-in-section" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>{titleText}</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Quick answers about sustainable living.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                style={{
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  border: isOpen ? '2px solid var(--accent-color)' : '1px solid var(--glass-border)',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s ease, background-color 0.3s ease'
                }}
              >
                <div 
                  tabIndex={0}
                  onClick={() => toggleOpen(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  aria-expanded={isOpen}
                  aria-label={`FAQ: ${item.question}`}
                  style={{
                    padding: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    outline: 'none',
                    fontWeight: '600',
                    color: isOpen ? 'var(--accent-color)' : 'var(--text-main)'
                  }}
                >
                  <span>{item.question}</span>
                  <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s ease' }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                
                <div 
                  style={{
                    maxHeight: isOpen ? '200px' : '0',
                    padding: isOpen ? '0 16px 16px 16px' : '0 16px',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s ease-in-out',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
