import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloComponent from './components/HelloComponent';

describe('HelloComponent', () => {
  it('renders without crashing', () => {
    render(<HelloComponent />);
    const headingElement = screen.getByText(/Hello Component/i);
    expect(headingElement).toBeInTheDocument();
  });
});
