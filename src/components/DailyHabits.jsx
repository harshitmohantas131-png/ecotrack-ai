import React, { useState } from 'react';

const habitsList = [
  { id: 1, text: "Carry reusable bottle" },
  { id: 2, text: "Use LED lights" },
  { id: 3, text: "Switch off appliances" },
  { id: 4, text: "Walk instead of drive" },
  { id: 5, text: "Avoid plastic bags" },
  { id: 6, text: "Recycle waste" }
];

const DailyHabits = () => {
  const [completed, setCompleted] = useState([]);

  const toggleHabit = (id) => {
    setCompleted(prev => 
      prev.includes(id) 
        ? prev.filter(h => h !== id) 
        : [...prev, id]
    );
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleHabit(id);
    }
  };

  return (
    <div className="responsive-container" style={{ paddingBottom: '40px' }}>
      <div className="glass-card" style={{ width: '100%' }}>
        <h2 style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Daily Sustainable Habits</h2>
        <div style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '20px' }}>
          Completed {completed.length} / {habitsList.length}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
          {habitsList.map(habit => {
            const isDone = completed.includes(habit.id);
            return (
              <div 
                key={habit.id}
                tabIndex={0}
                role="checkbox"
                aria-checked={isDone}
                aria-label={`Mark habit complete: ${habit.text}`}
                onClick={() => toggleHabit(habit.id)}
                onKeyDown={(e) => handleKeyDown(e, habit.id)}
                className="habit-card hover-animate"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  backgroundColor: isDone ? 'rgba(232, 245, 233, 0.9)' : 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  border: isDone ? '2px solid var(--accent-color)' : '1px solid var(--glass-border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  border: `2px solid ${isDone ? 'var(--accent-color)' : 'var(--text-secondary)'}`,
                  backgroundColor: isDone ? 'var(--accent-color)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.2s'
                }}>
                  {isDone && '✓'}
                </div>
                <span style={{
                  color: isDone ? 'var(--text-secondary)' : 'var(--text-main)',
                  textDecoration: isDone ? 'line-through' : 'none',
                  fontWeight: '500',
                  transition: 'color 0.3s'
                }}>
                  {habit.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {`
          .habit-card:focus-visible {
            box-shadow: 0 0 0 3px var(--accent-color) !important;
          }
        `}
      </style>
    </div>
  );
};

export default DailyHabits;
