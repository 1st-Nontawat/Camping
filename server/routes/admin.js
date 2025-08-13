const express = require('express');
const router = express.Router();
const { listStats} = require('../controllers/admin');
const { authcheck } = require('../middlewares/auth');




router.get('/stats', authcheck,  listStats);






module.exports = router