const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { calTotal } = require("../utils/booking");

exports.createBooking = async (req, res, next) => {
    try {
        const { campingId, checkIn, checkOut } = req.body;
        const { id } = req.user;

        await prisma.booking.deleteMany({
            where: {
                profileId: id,
                paymentStatus: false
            }
        });

        const camping = await prisma.landmark.findFirst({
            where: {
                id: campingId
            },
            select : {
                price: true
            }
        });

        if (!camping) {
            return res.status(404).json({ message: "Camping not found" });
        }
        
        const { total, totalNights } = calTotal(checkIn, checkOut, camping.price);

        const booking = await prisma.booking.create({
            data: {
                profileId: id,
                landmarkId: campingId,
                checkIn: checkIn,
                checkOut: checkOut,
                totalNights: totalNights,
                total : total,
            }
        });

        res.json({ message: "Booking created successfully", bookingId: booking.id });

    } catch (error) {
        console.error("Booking error:", error);
        next(error);
    }
};