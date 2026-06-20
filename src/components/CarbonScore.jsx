import React from 'react';

const CarbonScore = ({ data, score, title = "Carbon Score" }) => {
  if (!data) return null;

  let category = '';
  let categoryIcon = '';
  let ringColor = '';

  if (score <= 60) {
    category = 'Low Impact';
    categoryIcon = '🌿';
    ringColor = '#16a34a'; // Green
  } else if (score <= 120) {
    category = 'Moderate Impact';
    categoryIcon = '🌎';
    ringColor = '#f97316'; // Orange
  } else {
    category = 'High Impact';
    categoryIcon = '🔥';
    ringColor = '#dc2626'; // Red
  }

  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card fade-in-section" tabIndex="0" style={{ width: '100%', textAlign: 'center', backgroundColor: 'rgba(232, 245, 233, 0.7)', border: `2px solid ${ringColor}40` }}>
        <h2 style={{ marginBottom: '20px', color: 'var(--text-main)' }}>{title}</h2>
        
        <div 
          className="score-ring"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '5rem',
            fontWeight: 'bold',
            color: ringColor,
            boxShadow: `0 0 25px ${ringColor}40`,
            border: `6px solid ${ringColor}`,
            animation: 'pulseRing 2s infinite ease-in-out'
          }}
          aria-label={`Your carbon score is ${score}, which is ${category}`}
        >
          {score}
        </div>
        
        <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
          <span>{categoryIcon}</span> {category}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: '500' }}>
          Keep improving your habits for a greener future.
        </p>
      </div>
      <style>
        {`
          @keyframes pulseRing {
            0% { transform: scale(1); box-shadow: 0 0 15px ${ringColor}40; }
            50% { transform: scale(1.05); box-shadow: 0 0 30px ${ringColor}80; }
            100% { transform: scale(1); box-shadow: 0 0 15px ${ringColor}40; }
          }
        `}
      </style>
    </div>
  );
};

export default CarbonScore;
