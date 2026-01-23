import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home header content', () => {
  render(<App />);
  const avatarImg = screen.getByAltText(/brayan eduardo rojas freyre/i);
  expect(avatarImg).toBeInTheDocument();
});
