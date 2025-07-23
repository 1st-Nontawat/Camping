const handleError = (error, req, res, next) => {
    console.error('Error occurred:', error);
    res.status(500).json({ message: "Internal Server Error" });
};

module.exports = handleError;
