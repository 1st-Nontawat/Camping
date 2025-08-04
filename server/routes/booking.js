const express = require('express');
const router = express.Router();
const { createBooking, checkout ,checkOutStatus } = require('../controllers/booking');
const { authcheck } = require('../middlewares/auth');




router.post('/booking', authcheck,  createBooking);

router.post('/checkout', authcheck,  checkout);


router.post("/checkout-status", authcheck, checkOutStatus);





module.exports = router