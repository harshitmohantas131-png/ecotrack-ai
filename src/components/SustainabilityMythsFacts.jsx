import React from 'react';

const mythsFactsData = [
  {
    id: 1,
    myth: "Individual actions don't matter.",
    fact: "Small daily actions collectively create significant environmental impact."
  },
  {
    id: 2,
    myth: "Electric vehicles have zero emissions.",
    fact: "They reduce emissions but still require energy production."
  },
  {
    id: 3,
    myth: "Vegetarian diets make no difference.",
    fact: "Plant-based diets generally reduce carbon footprints."
  },
  {
    id: 4,
    myth: "Recycling alone solves climate change.",
    fact: "Reducing consumption and reusing products are equally important."
  }
];

const SustainabilityMythsFacts = () => {
  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Sustainability Myths vs Facts</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Learn the truth about common environmental misconceptions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {mythsFactsData.map((item) => (
            <div 
              key={item.id}
              tabIndex="0"
              className="hover-animate"
              style={{
                padding: '20px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                outline: 'none'
              }}
            >
              <div>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 8px', 
                  backgroundColor: 'rgba(220, 38, 38, 0.1)', 
                  color: '#dc2626', 
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginBottom: '8px'
                }}>
                  MYTH
                </span>
                <p style={{ color: 'var(--text-main)', fontWeight: '500', margin: 0 }}>{item.myth}</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(46, 125, 50, 0.2)', paddingTop: '12px' }}>
                <span style={{ 
                  display: 'inline-block', 
                  padding: '4px 8px', 
                  backgroundColor: 'rgba(22, 163, 74, 0.1)', 
                  color: '#16a34a', 
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  marginBottom: '8px'
                }}>
                  FACT
                </span>
                <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>{item.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityMythsFacts;
