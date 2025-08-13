const express = require('express');
const router = express.Router();
const { listStats, listReservations, listAllReservations, listMyCampings} = require('../controllers/admin');
const { authcheck } = require('../middlewares/auth');




router.get('/stats', authcheck,  listStats);
router.get('/reservations', authcheck,  listReservations);
router.get('/all-reservations', authcheck,  listAllReservations); 
router.get('/my-campings', authcheck,  listMyCampings);





module.exports = router