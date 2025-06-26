const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      console.log("AUTH HEADER:", authHeader);
      
      if(!authHeader) return res.status(401)
        .json({ error: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
};

module.exports = auth;