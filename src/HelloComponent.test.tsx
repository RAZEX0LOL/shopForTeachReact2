import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloComponent from './components/HelloComponent';


test('renders hello message', () => {
  render(<HelloComponent />);
  const helloMessage = screen.getByText(/200/i);
  expect(helloMessage).toBeTruthy();
});
