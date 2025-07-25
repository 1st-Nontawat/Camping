const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProfile = async (req, res, next) => {
    try {
        
        const { firstname, lastname } = req.body;
        const { id } = req.user;
        const email = req.user.emailAddresses[0].emailAddress; 
        const profile = await prisma.profile.create({
            data: {
                firstName: firstname, 
                lastName: lastname,   
                clerkId: id,     
                email: email
            }
        });

        res.json({
            result: profile,
            message: "Profile created successfully"
        });
    } catch (error) {
        console.error("Error creating profile:", error.message);
        next(error);
    }
};