import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { waitFor } from '@testing-library/react';
import NasaNeoWsProvider from '.';

jest.setTimeout(10000);

test('Component must mount correctly and perform asynchrounously', () => {
  const testText = 'Testing Nasa Neo Ws Provider and Polling';
  
  act(() => {
    render(
      <NasaNeoWsProvider>
        <p>{ testText }</p>
      </NasaNeoWsProvider>
    );
  });
  
  waitFor(() => {
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});