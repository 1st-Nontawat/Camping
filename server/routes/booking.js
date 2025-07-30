const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/booking');
const { authcheck } = require('../middlewares/auth');



router.post('/booking', authcheck,  createBooking);






module.exports = router