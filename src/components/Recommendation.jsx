import React from 'react';

const Recommendation = ({ data }) => {
  if (!data) return null;

  const { transportation, electricity } = data;

  let resultTitle = '';
  let resultMessage = '';
  let resultIcon = '';

  if (transportation === 'Bicycle' && electricity === 'Low') {
    resultIcon = '🌿';
    resultTitle = 'Low Carbon Lifestyle';
    resultMessage = 'Excellent! Your habits are environmentally friendly. Keep maintaining these sustainable choices.';
  } else if (transportation === 'Public Transport' && electricity === 'Medium') {
    resultIcon = '🍃';
    resultTitle = 'Moderate Carbon Lifestyle';
    resultMessage = 'Consider reducing electricity consumption and adopting reusable products.';
  } else if ((transportation === 'Car' || transportation === 'Motorcycle') && electricity === 'High') {
    resultIcon = '🔥';
    resultTitle = 'High Carbon Lifestyle';
    resultMessage = 'Your carbon footprint is relatively high. Consider public transportation, energy-efficient appliances, and mindful shopping.';
  } else {
    // Default fallback for other combinations
    resultIcon = '🌱';
    resultTitle = 'Developing Carbon Lifestyle';
    resultMessage = 'You are on the right track! There is always room to improve by choosing sustainable transport and reducing energy use.';
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 40px' }}>
      <div 
        className="glass-card" 
        style={{ 
          textAlign: 'center', 
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderTop: '4px solid var(--accent-cyan)'
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>{resultIcon}</div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-main)' }}>{resultTitle}</h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{resultMessage}</p>
      </div>
    </div>
  );
};

export default Recommendation;
