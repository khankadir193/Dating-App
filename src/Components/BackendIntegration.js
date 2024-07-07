import React, { useEffect } from 'react';

const BackendIntegration = ({ userData }) => {
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch('http://localhost:3001/insert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Response data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    postData();
  }, [userData]);

  return (
    <div>
      <h2>Backend Integration</h2>
      <p>Check the console for the response data.</p>
    </div>
  );
};

export default BackendIntegration;
