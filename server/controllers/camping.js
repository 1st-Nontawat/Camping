const prisma = require('../config/prisma');

exports.listCamping = async (_req, res) => {
    try {
        const landmarks = await prisma.landmark.findMany({
            include: {
                profile: true
            }
        });
        res.status(200).json(landmarks);
    } catch (error) {
        console.error("Error listing camping spots:", error);
        res.status(500).json({ error: "Failed to retrieve camping spots", details: error.message });
    }
};

exports.readCamping = async (req, res) => {
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
        console.error("Error reading camping spot:", error);
        res.status(500).json({ error: "Failed to retrieve camping spot", details: error.message });
    }
};

exports.createCamping = async (req, res) => {
    try {
        const { title, description, latitude, longitude, price, category } = req.body;
        const { userId } = req.auth();

        const newLandmark = await prisma.landmark.create({
            data: {
                title,
                description,
                latitude,
                longitude,
                price,
                category,
                profileId: userId
            }
        });

        res.status(201).json(newLandmark);
    } catch (error) {
        console.error("Error creating camping spot:", error);
        res.status(500).json({ error: "Failed to create camping spot", details: error.message });
    }
};

exports.updateCamping = async (req, res) => {
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
        console.error("Error updating camping spot:", error);
        res.status(500).json({ error: "Failed to update camping spot", details: error.message });
    }
};

exports.deleteCamping = async (req, res) => {
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
        console.error("Error deleting camping spot:", error);
        res.status(500).json({ error: "Failed to delete camping spot", details: error.message });
    }
};