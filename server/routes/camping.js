const express = require('express');
const router = express.Router();
const { listCamping, readCamping ,createCamping, updateCamping, deleteCamping  } = require('../controllers/camping');

const { authcheck } = require('../middlewares/auth');

router.get('/camping', listCamping);

router.get('/camping/:id',  readCamping);

router.post('/camping', authcheck, createCamping);

router.put('/camping/:id',  updateCamping);

router.delete('/camping/:id',  deleteCamping);

module.exports = router;