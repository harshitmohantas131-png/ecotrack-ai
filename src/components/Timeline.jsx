import React, { useState } from 'react';

const stages = [
  {
    id: 1,
    title: "1️⃣ Measure",
    shortDesc: "Understand your current habits.",
    explanation: "The first step in any sustainability journey is to accurately measure your current carbon footprint by tracking your habits in transportation, diet, and energy use."
  },
  {
    id: 2,
    title: "2️⃣ Analyze",
    shortDesc: "Calculate your carbon footprint.",
    explanation: "Once you have the data, analyzing it helps you identify the areas where you have the highest environmental impact and where improvements can be made most easily."
  },
  {
    id: 3,
    title: "3️⃣ Reduce",
    shortDesc: "Adopt sustainable practices.",
    explanation: "Implement actionable changes such as switching to public transit, adopting a plant-rich diet, or reducing energy consumption to actively lower your emissions."
  },
  {
    id: 4,
    title: "4️⃣ Sustain",
    shortDesc: "Build long-term eco-friendly habits.",
    explanation: "Consistency is key. Focus on making these sustainable choices a permanent part of your lifestyle to ensure long-lasting positive impact on the planet."
  }
];

const Timeline = () => {
  const [activeStage, setActiveStage] = useState(null);

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveStage(activeStage === id ? null : id);
    }
  };

  const activeStageData = stages.find(s => s.id === activeStage);

  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card fade-in-section" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Sustainability Journey</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Four steps toward a greener lifestyle.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <div 
                key={stage.id}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`Stage: ${stage.title}`}
                onClick={() => setActiveStage(isActive ? null : stage.id)}
                onKeyDown={(e) => handleKeyDown(e, stage.id)}
                className="hover-animate"
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  backgroundColor: isActive ? 'rgba(46, 125, 50, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                  borderLeft: isActive ? '4px solid var(--accent-color)' : '4px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
              >
                <h3 style={{ fontSize: '1.1rem', color: isActive ? 'var(--accent-color)' : 'var(--text-main)', marginBottom: '4px' }}>
                  {stage.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {stage.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

        {activeStageData && (
          <div 
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)',
              animation: 'fadeIn 0.3s ease'
            }}
          >
            <h4 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>{activeStageData.title} Detail</h4>
            <p style={{ color: 'var(--text-main)', lineHeight: '1.6' }}>
              {activeStageData.explanation}
            </p>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          div[tabindex="0"]:focus-visible {
            box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.4);
          }
        `}
      </style>
    </div>
  );
};

export default Timeline;
