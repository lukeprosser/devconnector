/** @format */

const express = require('express');
const router = express.Router();

// @route   GET ap/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
