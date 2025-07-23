exports.authcheck = (req, res, next) => {
    try {
        
        console.log('Auth middleware executed for:', req.method, req.path);
        
        
        next();
    } catch (error) {
        console.error('Auth error:', error);
        res.status(401).json({ error: 'Unauthorized access' });
    }
};