import { Injectable } from '@nestjs/common';
import { PostAPI } from './Post';

@Injectable()
export class PostService {
  async getPostsFromExternalAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending request:', error);
        throw new Error('Error sending request');
    }
  }
  
  async getPostByIdFromExternalAPI(id:number) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending request:', error);
        throw new Error('Error sending request');
    }
  }


  async createPostToExternalAPI(postData:PostAPI) {
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

async deletePostFromExternalAPI(postId:number) {
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
  
async updatePostToExternalAPI<T>(postId:number, updatedData:T) {
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

}
