const express = require('express');
const router = express.Router();
const { listCamping, readCamping ,createCamping, updateCamping, deleteCamping  } = require('../controllers/camping');

const { authcheck } = require('../middlewares/auth');

router.get('/camping', authcheck, listCamping);

router.get('/camping/:id', authcheck, readCamping);

router.post('/camping', authcheck, createCamping);

router.put('/camping/:id', authcheck, updateCamping);

router.delete('/camping/:id', authcheck, deleteCamping);

module.exports = router;