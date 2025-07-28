
exports.createImage = async ( req, res , next) => { 
    try{
        console.log(req.body);
        res.json({ message : "Image uploaded successfully" });

    }catch (error) {
       next(error);
    }
};