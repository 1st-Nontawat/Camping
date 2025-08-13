const express = require('express');
const router = express.Router();
const {
    listCamping, readCamping ,createCamping, updateCamping, deleteCamping , actionFavorite , listFavorites
} = require('../controllers/camping');

const { authcheck } = require('../middlewares/auth');

router.get('/campings/:id', listCamping);

router.get('/camping/:id',  readCamping);

router.post('/camping', authcheck, createCamping);

router.put('/camping/:id',  updateCamping);

router.delete('/camping/:id',  deleteCamping);


router.get('/favorites', authcheck, listFavorites);

router.post('/favorite', authcheck, actionFavorite);




module.exports = router;