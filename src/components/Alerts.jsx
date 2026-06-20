import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';

const defaultTips = [
  "Carry reusable bottles instead of single-use plastics.",
  "Switch off appliances when not in use.",
  "Using public transport can significantly reduce emissions.",
  "Small sustainable actions create big impacts."
];

const Alerts = ({ tips = defaultTips }) => {
  const [tip, setTip] = useState('');

  useEffect(() => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setTip(randomTip);
  }, [tips]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', paddingTop: '40px' }}>
      <div 
        className="glass-card" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          padding: '16px 24px',
          backgroundColor: 'rgba(232, 245, 233, 0.7)',
          borderLeft: '4px solid var(--accent-color)',
          boxShadow: '0 4px 15px rgba(46, 125, 50, 0.1)'
        }}
      >
        <Lightbulb size={24} color="var(--accent-color)" />
        <p style={{ margin: 0, fontWeight: '500', color: 'var(--text-main)' }}>
          <strong>Tip:</strong> {tip}
        </p>
      </div>
    </div>
  );
};

export default Alerts;
