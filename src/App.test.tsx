import App from './App'
import { render, screen } from '@testing-library/react'

test('Renders "/" route ("index" page)', () => {
  render(<App />);

  expect(screen.getByText(/Loading, please wait/i)).toBeInTheDocument();
});