const express = require('express');
const router = express.Router();
const { authcheck } = require('../middlewares/auth');
const { createImage } = require('../controllers/cloudinary');



router.post('/images', authcheck, createImage);






module.exports = router