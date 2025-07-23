exports.createProfile = (req, res) => {
    const { username, email } = req.body;
    try {
        res.send(`Profile created for user: ${username} with email: ${email}`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

