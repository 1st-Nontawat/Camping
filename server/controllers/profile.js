const express = require('../utils/renderError')


exports.createProfile = (req, res) => {
    const { username, email } = req.body;
    try {
        res.send(`Profile created for user: ${username} with email: ${email}`);
    } catch (error) {
        console.error('Profile creation error:', error);
        renderError(error, req, res);
    }
}

