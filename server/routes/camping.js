const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('Camping homepage accessed');
    res.send('Camping homepage');
});


router.post('/camping', (req, res) => {
     const { title, price } = req.body;
    console.log(title);
    console.log(price);
    console.log('Camping post request received');
    res.send('Camping post request received');

});


router.put('/camping/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Camping update request for ID: ${req.params.id}`);
});


router.delete('/camping/:id', (req, res) => {
    console.log(`Camping delete request for ID: ${req.params.id}`);
    res.send(`Camping delete request for ID: ${req.params.id}`);
});

module.exports = router;