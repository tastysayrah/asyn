const fetchData = async () => {
    // Simulate fetching data from an API
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data from API'), 2000); // Simulate 2 seconds delay
    });
  };
  
  const awaitCall = async () => {
    try {
      const data = await fetchData();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Example usage
  awaitCall();
  