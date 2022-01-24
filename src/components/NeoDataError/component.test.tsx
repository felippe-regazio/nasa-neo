import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { waitFor } from '@testing-library/react';
import NeoDataError from '.';

jest.setTimeout(10000);

test('Component must render properly', () => {
  const testText = 'An unexpected error has occurred :(';
  
  render(<NeoDataError />);
  expect(screen.getByText(testText)).toBeInTheDocument();
});