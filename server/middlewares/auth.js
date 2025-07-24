const { clerkClient } = require('@clerk/express');

exports.authcheck = async (req, res, next) => {
  try {
    const { userId } = req.auth;
    
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    const user = await clerkClient.users.getUser(userId);
    req.user = user;
    next();
  } catch (err) { 
    console.error("Auth error:", err);
    return res.status(401).json({ error: "Authentication failed" });
  }
};