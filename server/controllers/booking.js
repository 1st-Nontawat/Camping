exports.createBooking = async (req, res, next) => {
    try {
        console.log(req.body);
        res.json({
            message: "Booking created successfully",
        });

    } catch (error) {
        next(error);
    }
}