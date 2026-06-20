import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('EcoTrack AI Application', () => {
  test('renders EcoTrack AI heading', () => {
    render(<App />);
    const heading = screen.getByText(/EcoTrack AI/i, { selector: 'h1' });
    expect(heading).toBeInTheDocument();
  });

  test('renders Loading State and Carbon Score section asynchronously', async () => {
    render(<App />);
    const analyzeButton = screen.getByRole('button', { name: /Analyze Footprint/i });
    fireEvent.click(analyzeButton);
    
    // Check if loading state appears
    expect(screen.getByText(/Analyzing your habits/i)).toBeInTheDocument();
    
    // Wait for Carbon Score title to appear after 1.5s
    const carbonScoreTitle = await screen.findByText(/Carbon Score/i, {}, { timeout: 2000 });
    expect(carbonScoreTitle).toBeInTheDocument();
  });

  test('renders Weekly Eco Challenges section', () => {
    render(<App />);
    const challengesTitle = screen.getByText(/Weekly Eco Challenges/i);
    expect(challengesTitle).toBeInTheDocument();
  });

  test('renders Personalized Eco Tips section asynchronously', async () => {
    render(<App />);
    const analyzeButton = screen.getByRole('button', { name: /Analyze Footprint/i });
    fireEvent.click(analyzeButton);
    const tipsTitle = await screen.findByText(/Personalized Eco Tips/i, {}, { timeout: 2000 });
    expect(tipsTitle).toBeInTheDocument();
  });
  
  test('renders Sustainability Achievements section asynchronously', async () => {
    render(<App />);
    const analyzeButton = screen.getByRole('button', { name: /Analyze Footprint/i });
    fireEvent.click(analyzeButton);
    const badgesTitle = await screen.findByText(/Sustainability Achievements/i, {}, { timeout: 2000 });
    expect(badgesTitle).toBeInTheDocument();
  });

  test('renders Monthly Eco Progress section', () => {
    render(<App />);
    const progressTitle = screen.getByText(/Monthly Eco Progress/i);
    expect(progressTitle).toBeInTheDocument();
  });

  test('renders Daily Sustainable Habits section', () => {
    render(<App />);
    const habitsTitle = screen.getByText(/Daily Sustainable Habits/i);
    expect(habitsTitle).toBeInTheDocument();
  });

  test('renders Sustainability Journey section', () => {
    render(<App />);
    const journeyTitle = screen.getByText(/Sustainability Journey/i);
    expect(journeyTitle).toBeInTheDocument();
  });

  test('renders Myths vs Facts section', () => {
    render(<App />);
    const mythsTitle = screen.getByText(/Sustainability Myths vs Facts/i);
    expect(mythsTitle).toBeInTheDocument();
  });
  
  test('renders Lifestyle Impact Comparison section', () => {
    render(<App />);
    const compTitle = screen.getByText(/Lifestyle Impact Comparison/i);
    expect(compTitle).toBeInTheDocument();
  });

  test('renders FAQ section', () => {
    render(<App />);
    const faqTitle = screen.getByText(/Frequently Asked Questions/i);
    expect(faqTitle).toBeInTheDocument();
  });
});
