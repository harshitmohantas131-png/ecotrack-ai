import React from 'react';

const Footer = () => {
  return (
    <footer className="responsive-container" style={{ marginTop: 'auto', padding: '40px 20px', textAlign: 'center' }}>
      <div className="fade-in-section" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
        <p style={{ marginBottom: '8px', fontWeight: '600', color: 'var(--text-main)', fontSize: '1.2rem' }}>EcoTrack AI 🌿</p>
        <p style={{ marginBottom: '8px' }}>Built with React + Vite</p>
        <p style={{ marginBottom: '8px' }}>Carbon Footprint Awareness Platform</p>
        <p style={{ marginBottom: '8px' }}>Promoting sustainable habits through simple daily actions.</p>
        <p style={{ marginBottom: '16px' }}>Prepared for future AI-powered recommendations.</p>
        <p style={{ opacity: 0.9, fontSize: '1rem', fontWeight: '500', color: 'var(--accent-color)' }}>Made with 💚 for a greener future.</p>
      </div>
    </footer>
  );
};

export default Footer;
