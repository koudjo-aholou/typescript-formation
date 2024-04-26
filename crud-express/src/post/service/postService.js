
async function getPostsFromExternalAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending request:', error);
        throw new Error('Error sending request');
    }
}

async function getPostByIdFromExternalAPI(id) {
  try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error sending request:', error);
      throw new Error('Error sending request');
  }
}

async function createPostToExternalAPI(postData) {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      });
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error sending request:', error);
      throw new Error('Error sending request');
  }
}

async function updatePostToExternalAPI(postId, updatedData) {
  try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: 'PATCH',
          body: JSON.stringify(updatedData),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
      });
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error sending request:', error);
      throw new Error('Error sending request');
  }
}

async function deletePostFromExternalAPI(postId) {
  try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: 'DELETE',
      });
      if (response.ok) {
          return; // No need to return anything, just indicate success
      } else {
          throw new Error('Failed to delete post');
      }
  } catch (error) {
      console.error('Error sending request:', error);
      throw new Error('Error sending request');
  }
}
module.exports = {
  createPostToExternalAPI,
  getPostsFromExternalAPI,
  getPostByIdFromExternalAPI,
  updatePostToExternalAPI,
  deletePostFromExternalAPI
};