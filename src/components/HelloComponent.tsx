import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ApiResponse {
  message: string;
}

const HelloComponent: React.FC = () => {
  const [response, setResponse] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<ApiResponse>('/api/hello');
        setResponse(result.data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Component</h1>
      <p>Response from server: {response}</p>
    </div>
  );
};

export default HelloComponent;
