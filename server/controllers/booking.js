const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { calTotal } = require("../utils/booking");
const stripe = require("stripe")(
  "sk_test_51RsLXM4fhzlEb0CvFJA4KHYhK86PXpPEtZm4AIdVKQ3pIFN9Er7DzQ0mMt78VsUaxO1kbAOwut9LfrAPVwQTZKxn006J4DIb3W"
);

exports.createBooking = async (req, res, next) => {
  try {
    const { campingId, checkIn, checkOut } = req.body;
    const { id } = req.user;

    await prisma.booking.deleteMany({
      where: {
        profileId: id,
        paymentStatus: false,
      },
    });

    const camping = await prisma.landmark.findFirst({
      where: {
        id: campingId,
      },
      select: {
        price: true,
      },
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
        total: total,
      },
    });

    res.json({
      message: "Booking created successfully",
      bookingId: booking.id,
    });
  } catch (error) {
    console.error("Booking error:", error);
    next(error);
  }
};

exports.checkout = async (req, res, next) => {
  try {
    const { id } = req.body;
    // Step 1 find booking
    const booking = await prisma.booking.findFirst({
      where: { id: Number(id) },
      include: {
        landmark: {
          select: {
            id: true,
            secure_url: true,
            title: true,
          },
        },
      },
    });
    if (!booking) {
      return renderError(404, "Not found camping jukkru!!!");
    }
    const { total,  landmark } = booking;
    const { title, secure_url } = landmark;

    
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      metadata: { bookingId: booking.id },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "thb",
            product_data: {
              name: title,
              images: [secure_url],
              description: "ขอบใจหลายๆ จ้า ที่จองที่พักของเรา",
            },
            unit_amount: total * 100,
          },
        },
      ],
      mode: "payment",
      return_url: `http://localhost:5173/user/complete/{CHECKOUT_SESSION_ID}`,
    });

    
    res.send({ clientSecret: session.client_secret });
  } catch (error) {
    next(error);
  }
};

exports.checkOutStatus = async (req, res, next) => {
  try {
    
    const { session } = req.body; 
    const checkoutSession = await stripe.checkout.sessions.retrieve(session);

    const bookingId = checkoutSession.metadata?.bookingId;

  
    if (checkoutSession.status !== "complete" || !bookingId) {
      
      return res.status(400).json({ message: "Something Wrong!!!!" });
    }

    const result = await prisma.booking.update({
      where: {
        id: Number(bookingId),
      },
      data: {
        paymentStatus: true,
      },
    });

    res.json({ message: "Payment Complete", status: checkoutSession.status });
  } catch (error) {
    next(error);
  }
};