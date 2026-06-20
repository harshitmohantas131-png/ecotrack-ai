import React, { useState } from 'react';

const challengeData = [
  { id: 1, text: "Carry a reusable water bottle", emoji: "💧" },
  { id: 2, text: "Use public transport once this week", emoji: "🚲" },
  { id: 3, text: "Switch off unused appliances", emoji: "🔌" },
  { id: 4, text: "Avoid single-use plastic bags", emoji: "🛍" },
  { id: 5, text: "Plant a tree", emoji: "🌳" },
  { id: 6, text: "Recycle household waste", emoji: "♻" }
];

const EcoChallenges = ({ title = "Weekly Eco Challenges" }) => {
  const [completed, setCompleted] = useState([]);

  const toggleChallenge = (id) => {
    setCompleted((prev) => 
      prev.includes(id) 
        ? prev.filter((challengeId) => challengeId !== id)
        : [...prev, id]
    );
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleChallenge(id);
    }
  };

  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card fade-in-section" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>{title}</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          Small actions can create meaningful environmental impact.
        </p>

        <div style={{ marginBottom: '16px', fontWeight: '600', color: 'var(--accent-color)' }}>
          Completed: {completed.length} / 6
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {challengeData.map((challenge) => {
            const isDone = completed.includes(challenge.id);
            return (
              <div 
                key={challenge.id}
                onClick={() => toggleChallenge(challenge.id)}
                onKeyDown={(e) => handleKeyDown(e, challenge.id)}
                tabIndex={0}
                role="checkbox"
                aria-checked={isDone}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: isDone ? 'rgba(76, 175, 80, 0.3)' : 'rgba(255, 255, 255, 0.6)',
                  border: isDone ? '2px solid var(--accent-color)' : '1px solid var(--glass-border)',
                  boxShadow: isDone ? '0 6px 15px rgba(46, 125, 50, 0.3)' : 'var(--glass-shadow)',
                  transform: isDone ? 'translateY(-4px)' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <input 
                  type="checkbox" 
                  checked={isDone}
                  onChange={() => {}} // handled by parent onClick
                  aria-label={`Complete challenge: ${challenge.text}`}
                  tabIndex={-1}
                  style={{ 
                    cursor: 'pointer',  
                    width: '20px', 
                    height: '20px',
                    accentColor: 'var(--accent-color)'
                  }} 
                />
                <span style={{ fontSize: '1.5rem' }}>{challenge.emoji}</span>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: isDone ? '500' : '400' }}>
                  {challenge.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EcoChallenges;
