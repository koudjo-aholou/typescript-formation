const express = require('express');
const router = express.Router();
const postService = require('../service/postService');

router.get('/posts', async (req, res) => {
    try {
        const posts = await postService.getPostsFromExternalAPI();
        res.json(posts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/posts/:id', async (req, res) => {
  try {
      const postId = req.params.id;
      const post = await postService.getPostByIdFromExternalAPI(postId);
      res.json(post);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/posts', async (req, res) => {
  try {
      const postData = req.body;
      const createdPost = await postService.createPostToExternalAPI(postData);
      res.json(createdPost);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.patch('/posts/:id', async (req, res) => {
  try {
      const postId = req.params.id;
      const updatedData = req.body;
      const updatedPost = await postService.updatePostToExternalAPI(postId, updatedData);
      res.json(updatedPost);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

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

router.delete('/posts/:id', async (req, res) => {
  try {
      const postId = req.params.id;
      await postService.deletePostFromExternalAPI(postId);
      res.sendStatus(204); // No content to send
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});
module.exports = router;