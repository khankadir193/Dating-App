import React, { useState, useEffect } from 'react';
import backendIntegration from './BackendIntegration'; // Import the utility function

const UserComponent = ({ userData }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await backendIntegration(userData);
        setData(result); // Set the received data to state
      } catch (err) {
        setError(err.message); // Set error message to state
      } finally {
        setLoading(false); // Set loading state to false
      }
    };

    fetchData();
  }, [userData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h3>Response Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UserComponent;
