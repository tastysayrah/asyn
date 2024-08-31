// Function to simulate delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Async function to iterate with delay
const iterateWithAsyncAwait = async (array) => {
  for (const value of array) {
    console.log(value);
    await delay(1000); // 1 second delay
  }
};

// Example usage
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);
