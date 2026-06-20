import React from 'react';
import { getEcoBadges } from '../utils/badges';

const EcoBadges = ({ data, score }) => {
  if (!data) return null;

  const badges = getEcoBadges(score);

  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '24px', textAlign: 'center' }}>Sustainability Achievements</h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', width: '100%' }}>
          {badges.map(badge => (
            <div 
              key={badge.id}
              tabIndex={0}
              aria-label={`Achievement unlocked: ${badge.text}`}
              className="badge-card hover-animate fade-in-section"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '30px',
                backgroundColor: 'rgba(232, 245, 233, 0.9)',
                borderRadius: '16px',
                border: '2px solid rgba(46, 125, 50, 0.2)',
                boxShadow: '0 4px 15px rgba(46, 125, 50, 0.1)',
                minWidth: '200px',
                outline: 'none',
                cursor: 'default'
              }}
            >
              <span style={{ fontSize: '3.5rem' }}>{badge.icon}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--text-main)', textAlign: 'center' }}>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes floatUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .badge-card:focus-visible {
            box-shadow: 0 0 0 3px var(--accent-color) !important;
          }
        `}
      </style>
    </div>
  );
};

export default EcoBadges;
