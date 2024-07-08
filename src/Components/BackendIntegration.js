const backendIntegration = {
  postData: async (userData) => {
    const url = 'http://localhost:3001/insert';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Response data:', data);
      return data;  // Return the data for further use if needed
    } catch (error) {
      console.error('Error during fetch operation:', error);
      throw error;  // Re-throw the error to allow handling in the calling code
    }
  },

  getData: async () => {
    const url = 'http://localhost:3001/documents';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('getting Response data:', data);
      return data;  // Return the data for further use if needed
    } catch (error) {
      console.error('Error during fetch operation:', error);
      throw error;  // Re-throw the error to allow handling in the calling code
    }
  }
};

export default backendIntegration;
