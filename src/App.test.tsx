import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders button to go home', () => {
  render(<App />);
  const homeButton = screen.getByRole('button', {label:"home-button"})
  expect(homeButton).toBeInTheDocument();
});
