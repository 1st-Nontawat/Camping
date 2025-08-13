const express = require('express');
const router = express.Router();
const {
    listCamping, readCamping ,createCamping, updateCamping, deleteCamping , actionFavorite , listFavorites, filterCamping
} = require('../controllers/camping');

const { authcheck } = require('../middlewares/auth');

// Camping Routes
router.get('/campings/:id', listCamping);

router.get('/camping/:id',  readCamping);

router.post('/camping', authcheck, createCamping);

router.put('/camping/:id',  updateCamping);

router.delete('/camping/:id',  deleteCamping);


// Favorites
router.get('/favorites', authcheck, listFavorites);

router.post('/favorite', authcheck, actionFavorite);

// Filter
router.get('/filter-camping', filterCamping);

module.exports = router;