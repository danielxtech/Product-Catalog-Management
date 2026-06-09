//middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  console.log("=== AUTH DEBUG ===");
  console.log("Header:", req.headers.authorization);
  console.log("Secret:", process.env.JWT_SECRET);

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied"
    });
  }

  const token = authHeader.split(" ")[1];

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("Decoded:", decoded);

    req.user = decoded;

    next();

  } catch (error) {

    console.log("JWT ERROR:", error.message);

    return res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = authMiddleware;