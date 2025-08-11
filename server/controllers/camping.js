const prisma = require('../config/prisma');

exports.listCamping = async (_req, res, next) => {
    try {
        const landmarks = await prisma.landmark.findMany({
            include: {
                profile: true
            }
        });
        
        res.status(200).json({ result: landmarks });
    } catch (error) {
        next(error);
    }
};

exports.readCamping = async (req, res, next) => {
    try {
        const { id } = req.params;
        const landmark = await prisma.landmark.findUnique({
            where: { id: parseInt(id) },
            include: {
                profile: true
            }
        });

        if (!landmark) {
            return res.status(404).json({ error: "Camping spot not found" });
        }

        res.status(200).json(landmark);
    } catch (error) {
        next(error);
    }
};

exports.createCamping = async (req, res, next) => {
    try {
        const { title, description, latitude, longitude, price, category, image } = req.body;
        
        
        const { userId } = req.auth;

        const newLandmark = await prisma.landmark.create({
            data: {
                title,
                description,
                latitude: parseFloat(latitude), 
                longitude: parseFloat(longitude),
                price: parseFloat(price),      
                category,
                profileId: userId,
                public_id: image.public_id,  
                secure_url: image.secure_url 
            }
        });

        res.status(201).json(newLandmark);
    } catch (error) {
        next(error);
    }
};

exports.updateCamping = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId } = req.auth();

        const existingLandmark = await prisma.landmark.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingLandmark) {
            return res.status(404).json({ error: "Camping spot not found" });
        }

        if (existingLandmark.profileId !== userId) {
            return res.status(403).json({ error: "Forbidden: You are not the owner of this spot" });
        }

        const updatedLandmark = await prisma.landmark.update({
            where: { id: parseInt(id) },
            data: req.body
        });

        res.status(200).json(updatedLandmark);
    } catch (error) {
        next(error);
    }
};

exports.deleteCamping = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { userId } = req.auth();

        const existingLandmark = await prisma.landmark.findUnique({
            where: { id: parseInt(id) }
        });

        if (!existingLandmark) {
            return res.status(404).json({ error: "Camping spot not found" });
        }

        if (existingLandmark.profileId !== userId) {
            return res.status(403).json({ error: "Forbidden: You are not the owner of this spot" });
        }

        await prisma.landmark.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: "Camping spot deleted successfully" });
    } catch (error) {
        next(error);
    }
};