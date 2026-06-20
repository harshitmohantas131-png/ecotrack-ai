import React from 'react';

const ImpactComparison = () => {
  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '24px' }}>Lifestyle Impact Comparison</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          
          <div tabIndex="0" className="hover-animate" style={{
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '12px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <h3 style={{ color: '#dc2626', display: 'flex', alignItems: 'center', gap: '8px' }}>High Carbon Lifestyle 🔥</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Transport:</strong> Frequent car use</li>
              <li><strong>Diet:</strong> Heavy meat consumption</li>
              <li><strong>Electricity:</strong> High usage, rarely off</li>
              <li><strong>Shopping:</strong> Frequent fast fashion</li>
            </ul>
          </div>

          <div tabIndex="0" className="hover-animate" style={{
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '12px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <h3 style={{ color: '#f97316', display: 'flex', alignItems: 'center', gap: '8px' }}>Moderate Lifestyle 🌎</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Transport:</strong> Mixed public & car</li>
              <li><strong>Diet:</strong> Balanced/Mixed</li>
              <li><strong>Electricity:</strong> Average usage</li>
              <li><strong>Shopping:</strong> Occasional purchases</li>
            </ul>
          </div>

          <div tabIndex="0" className="hover-animate" style={{
            padding: '20px',
            backgroundColor: 'rgba(232, 245, 233, 0.9)',
            borderRadius: '12px',
            border: '2px solid var(--accent-color)',
            boxShadow: '0 8px 25px rgba(46, 125, 50, 0.2)',
            transform: 'scale(1.02)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <h3 style={{ color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>Low Carbon Lifestyle 🌿</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-main)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Transport:</strong> Walking & cycling</li>
              <li><strong>Diet:</strong> Plant-based / Vegan</li>
              <li><strong>Electricity:</strong> Highly efficient</li>
              <li><strong>Shopping:</strong> Minimal & sustainable</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImpactComparison;
