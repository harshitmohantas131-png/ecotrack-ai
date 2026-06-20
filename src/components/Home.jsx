import React from 'react';

const Home = ({ subtitle = "Understand, track, and reduce your carbon footprint through simple everyday choices." }) => {
  return (
    <div className="text-center" style={{ padding: '60px 20px 40px' }}>
      <h1 className="glow-text text-gradient" style={{ fontSize: '4rem', marginBottom: '16px', fontWeight: '700' }}>
        EcoTrack AI
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
        {subtitle}
      </p>
    </div>
  );
};

export default Home;
