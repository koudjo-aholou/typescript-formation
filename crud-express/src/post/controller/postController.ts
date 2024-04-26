const expressPost = require('express');
const routerPost = expressPost.Router();
const postService = require('../service/postService');

routerPost.get('/posts', async (req, res) => {
    try {
        const posts = await postService.getPostsFromExternalAPI();
        res.json(posts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

routerPost.get('/posts/:id', async (req, res) => {
  try {
      const postId = req.params.id;
      const post = await postService.getPostByIdFromExternalAPI(postId);
      res.json(post);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

routerPost.post('/posts', async (req, res) => {
  try {
      const postData = req.body;
      const createdPost = await postService.createPostToExternalAPI(postData);
      res.json(createdPost);
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

routerPost.patch('/posts/:id', async (req, res) => {
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



routerPost.delete('/posts/:id', async (req, res) => {
  try {
      const postId = req.params.id;
      await postService.deletePostFromExternalAPI(postId);
      res.sendStatus(204); // No content to send
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});
module.exports = routerPost;