const fetchData1 = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data from API 1'), 2000); // Simulate 2 seconds delay
    });
  };
  
  const fetchData2 = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Data from API 2'), 2000); // Simulate 2 seconds delay
    });
  };
  
  const concurrentRequests = async () => {
    try {
      const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
      console.log('Combined results:', result1, result2);
    } catch (error) {
      console.error('Error in concurrent requests:', error);
    }
  };
  
  // Example usage
  concurrentRequests();
  