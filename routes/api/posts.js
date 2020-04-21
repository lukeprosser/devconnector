/** @format */

const express = require('express');
const router = express.Router();

// @route   GET ap/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
