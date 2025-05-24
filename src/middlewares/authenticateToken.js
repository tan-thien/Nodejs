const jwt = require('jsonwebtoken');

const JWT_SECRET = '14062004';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Token missing' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });

    req.user = user; // Lưu thông tin user vào request
    next();
  });
}

module.exports = authenticateToken;
