import React, { useState, useEffect } from 'react';
import './LoadingState.css';

const loadingSteps = [
  "🌿 Analyzing your habits...",
  "Calculating carbon score...",
  "Preparing recommendations..."
];

const LoadingState = () => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    // 3 steps over 1.5 seconds means a new step every 500ms
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container glass-card" aria-live="polite" aria-label="Loading results">
      <div className="spinner"></div>
      <p className="loading-text" tabIndex="0">{loadingSteps[stepIndex]}</p>
    </div>
  );
};

export default LoadingState;
