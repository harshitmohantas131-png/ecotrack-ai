import React from 'react';

const LanguageSelector = ({ language, setLanguage }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
        className="glass-select"
        style={{ width: 'auto', padding: '8px 32px 8px 12px' }}
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="od">Odia</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
