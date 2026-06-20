import React from 'react';
import { getEcoTips } from '../utils/tips';

const EcoTips = ({ data, score }) => {
  if (!data) return null;

  const tipsList = getEcoTips(score);

  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card fade-in-section" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Personalized Eco Tips</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Simple actions to lower your environmental impact.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {tipsList.map(tip => (
            <li 
              key={tip.id}
              tabIndex={0}
              aria-label={tip.text}
              className="hover-animate"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                borderRadius: '8px',
                cursor: 'default',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-color)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{tip.icon}</span>
              <span style={{ fontSize: '1.05rem', color: 'var(--text-main)', fontWeight: '500' }}>{tip.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EcoTips;
