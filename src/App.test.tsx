import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import App from './App';

test('renders app', () => {
    render(<App />);
    // Just a smoke test -- check if the app renders without crashing and contains the expected text
    expect(screen.getByText(/CineMatch/i)).toBeInTheDocument();
});