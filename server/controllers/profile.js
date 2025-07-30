const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProfile = async (req, res) => {
    try {
        
        const { firstname, lastname, email } = req.body;

        
        const { userId } = req.auth();

        
        const profile = await prisma.profile.upsert({
            where: {
                clerkId: userId
            },
            update: {
                firstName: firstname, 
                lastName: lastname,   
                email: email
            },
            create: {
                clerkId: userId,
                firstName: firstname, 
                lastName: lastname,   
                email: email
            }
        });

        
        res.status(200).json({
            result: profile,
            message: "Profile created or updated successfully"
        });

    } catch (error) {
       
        console.error("Error in createProfile:", error.message);
        res.status(500).json({ error: "Failed to process profile", details: error.message });
    }
};