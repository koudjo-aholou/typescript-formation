async function getUsersFromExternalAPI() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error sending request:', error);
      throw new Error('Error sending request');
  }
}

module.exports = {
  getUsersFromExternalAPI,
};