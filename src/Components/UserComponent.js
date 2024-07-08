import React, { useState, useEffect } from 'react';
import backendIntegration from './BackendIntegration'; // Import the utility module

const UserComponent = ({ userData }) => {
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
      return result;
    } catch (err) {
      setError(err.message); // Set error message to state
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  useEffect(() => {
    const performDataOperations = async () => {
      const res = await fetchData();
      res.length > 0 ? await res?.map(async (item)=>{
        if(item.email !== userData.email){
          await storeData();
        }
      }) : await storeData();
      console.log('fetchData function', res);
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
