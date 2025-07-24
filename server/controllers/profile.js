const express = require('../utils/renderError')


exports.createProfile = (req, res) => {
    const { firstname, lastname } = req.body;
    console.log(req.user);
    try {
        
        res.send(`Profile created for user: ${firstname} ${lastname} `);
    } catch (error) {
        console.log(error.message);
        nextTick(error);
    }
};