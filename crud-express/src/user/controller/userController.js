const express = require('express');
const router = express.Router();
const postService = require('../service/postService');

router.get('/users', async (req, res) => {
    try {
        const posts = await postService.getPostsFromExternalAPI();
        res.json(posts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = router;