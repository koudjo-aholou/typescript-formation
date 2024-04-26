const express = require('express');
const router = express.Router();
const userService = require('../service/postService');

router.get('/users', async (req, res) => {
    try {
        const users = await userService.getUsersFromExternalAPI();
        res.json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = router;