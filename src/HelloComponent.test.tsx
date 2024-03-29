import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import HelloComponent from './components/HelloComponent';

const mockAxios = new MockAdapter(axios);

describe('HelloComponent', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it('fetches and displays the message from the server', async () => {
    const mockResponse = { message: 'Hello, World!' };
    mockAxios.onGet('/api/hello').reply(200, mockResponse);

    render(<HelloComponent />);


    expect(screen.getByText('Hello Component')).toBeInTheDocument();


    await waitFor(() => {
      expect(screen.getByText('Response from server: Hello, World!')).toBeInTheDocument();
    });
  });

  it('handles errors gracefully', async () => {
    mockAxios.onGet('/api/hello').reply(500);

    render(<HelloComponent />);


    await waitFor(() => {
      expect(screen.getByText('Error fetching data:')).toBeInTheDocument();
    });
  });
});
