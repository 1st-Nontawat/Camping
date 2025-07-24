const express = require('../utils/renderError')


exports.createProfile = (req, res) => {
    const { firstname, lastname, clerkid } = req.body;
    console.log(req.headers.authorization);
    try {
        
        res.send(`Profile created for user: ${firstname} ${lastname} with clerk ID: ${clerkid}`);
    } catch (error) {
        console.error('Profile creation error:', error);
        renderError(error, req, res);
    }
}

