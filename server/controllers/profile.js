const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createProfile = async (req, res) => {
    try {
        // 1. รับข้อมูลจาก request body
        const { firstname, lastname, email } = req.body;

        // 2. ใช้ req.auth() ที่ถูกต้องเพื่อดึง userId
        const { userId } = req.auth();

        // 3. ใช้ upsert พร้อมแก้ไขชื่อฟิลด์ให้ถูกต้องทั้งหมด
        const profile = await prisma.profile.upsert({
            where: {
                clerkId: userId
            },
            update: {
                firstName: firstname, // แก้ไข: map ไปที่ firstName
                lastName: lastname,   // แก้ไข: map ไปที่ lastName
                email: email
            },
            create: {
                clerkId: userId,
                firstName: firstname, // แก้ไข: map ไปที่ firstName
                lastName: lastname,   // แก้ไข: map ไปที่ lastName
                email: email
            }
        });

        // 4. ส่ง response กลับไปเมื่อสำเร็จ
        res.status(200).json({
            result: profile,
            message: "Profile created or updated successfully"
        });

    } catch (error) {
        // 5. จัดการ Error โดยการส่ง JSON response กลับไป
        console.error("Error in createProfile:", error.message);
        res.status(500).json({ error: "Failed to process profile", details: error.message });
    }
};