const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      console.log(authHeader);
      console.log("Token in storage:", localStorage.getItem('token'));
      
      if(!authHeader) return res.status(401)
        .json({ error: 'No token provided' });
    const token = authHeader;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
};

module.exports = auth;