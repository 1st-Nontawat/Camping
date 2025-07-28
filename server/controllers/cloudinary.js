const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
        api_key: process.env.CLOUDINARY_API_KEY , 
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });


exports.createImage = async ( req, res , next) => { 

    try{
        console.log(req.body);
        const { image } = req.body;
        const result = await cloudinary.uploader.upload(image, {
            public_id: `${Date.now()}`,
            folder: 'Landmark',
            resource_type: 'auto',
        });
        res.json({ result : result});

    }catch (error) {
       next(error);
    }
};