import React, { useState, useEffect } from 'react';
import backendIntegration from './BackendIntegration'; // Import the utility module

const UserComponent = ({ userData ,  setProfiles}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to insert data
  const storeData = async () => {
    try {
      const result = await backendIntegration.postData(userData);
      setData(result); // Set the received data to state
    } catch (err) {
      setError(err.message); // Set error message to state
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  // Function to fetch data
  const fetchData = async () => {
    try {
      const result = await backendIntegration.getData();
      setData(result); // Set the received data to state
      setProfiles(result);
      return result;
    } catch (err) {
      setError(err.message); // Set error message to state
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  useEffect(() => {
    const performDataOperations = async () => {
      setLoading(true); // Ensure loading state is set before starting async operations

      try {
        const res = await fetchData();

        if (res.length > 0) {
          const emailExists = res.some(item => item.email === userData.email);

          if (!emailExists) {
            await storeData();
          }
        } else {
          await storeData();
        }

        console.log('fetchData function', res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    performDataOperations();
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
