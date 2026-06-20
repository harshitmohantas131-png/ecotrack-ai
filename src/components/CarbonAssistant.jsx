import React, { useState } from 'react';

const CarbonAssistant = ({ onAnalyze }) => {
  const [transportation, setTransportation] = useState('Public Transport');
  const [diet, setDiet] = useState('Mixed');
  const [electricity, setElectricity] = useState('Medium');
  const [shopping, setShopping] = useState('Moderate');

  const handleAnalyze = () => {
    onAnalyze({ transportation, diet, electricity, shopping });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 40px' }}>
      <div className="glass-card">
        <h2 style={{ marginBottom: '24px', fontSize: '1.5rem', color: 'var(--text-main)' }}>Your Habits</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Transportation</label>
            <select 
              className="glass-select" 
              value={transportation} 
              onChange={(e) => setTransportation(e.target.value)}
              aria-label="Select transportation mode"
            >
              <option value="Bicycle">Bicycle</option>
              <option value="Public Transport">Public Transport</option>
              <option value="Car">Car</option>
              <option value="Motorcycle">Motorcycle</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Diet</label>
            <select 
              className="glass-select" 
              value={diet} 
              onChange={(e) => setDiet(e.target.value)}
              aria-label="Select diet type"
            >
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Mixed">Mixed</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Electricity Usage</label>
            <select 
              className="glass-select" 
              value={electricity} 
              onChange={(e) => setElectricity(e.target.value)}
              aria-label="Select electricity usage level"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Shopping Habits</label>
            <select 
              className="glass-select" 
              value={shopping} 
              onChange={(e) => setShopping(e.target.value)}
              aria-label="Select shopping habits"
            >
              <option value="Minimal">Minimal</option>
              <option value="Moderate">Moderate</option>
              <option value="Frequent">Frequent</option>
            </select>
          </div>

        </div>

        <button className="glass-btn" onClick={handleAnalyze} aria-label="Analyze Footprint">
          Analyze Footprint
        </button>
      </div>
    </div>
  );
};

export default CarbonAssistant;
