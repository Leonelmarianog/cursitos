import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App', () => {
  it('Renders correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByAltText('books')).toBeInTheDocument();
  });
});
