import React from 'react';

const progressData = [
  { id: 1, month: "January", score: 80 },
  { id: 2, month: "February", score: 72 },
  { id: 3, month: "March", score: 60 },
  { id: 4, month: "April", score: 45 }
];

const ProgressTracker = () => {
  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card fade-in-section" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '24px' }}>Monthly Eco Progress</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {progressData.map(item => {
            // max possible score could be 200 based on standard setup, so percentage = (score / 200) * 100
            // but we want the bar to be somewhat visible. Let's just use score as percentage for visual sake or base it on a max of 100.
            const percentage = Math.min(Math.max(item.score, 0), 100);
            return (
              <div key={item.id} tabIndex={0} aria-label={`${item.month} score: ${item.score}`} style={{ outline: 'none' }} className="progress-row">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>{item.month}</span>
                  <span style={{ fontWeight: '600', color: 'var(--accent-color)' }}>{item.score} pts</span>
                </div>
                <div 
                  style={{
                    width: '100%',
                    height: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '6px',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      height: '100%',
                      width: `${percentage}%`,
                      backgroundColor: 'var(--accent-color)',
                      borderRadius: '6px',
                      transition: 'width 1s ease-out'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {`
          .progress-row:focus-visible {
            box-shadow: 0 0 0 3px var(--accent-color);
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default ProgressTracker;
