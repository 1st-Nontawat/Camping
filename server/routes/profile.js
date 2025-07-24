const express = require('express');
const router = express.Router();
const { createProfile } = require('../controllers/profile');
const { authcheck } = require('../middlewares/auth');



router.post('/profile', authcheck,  createProfile);






module.exports = router